import { FlexibleDiv } from "../../components/box";
import Table from "../../components/table";
import { H1Text, H3Text, PaleTableText } from "../../components/typography";
import { PayoutsAPI } from "../../service/payouts/api";
import { PayoutsWrapper } from "./index.style"
import {
  useQuery
} from '@tanstack/react-query'
import React, { useEffect, useState } from 'react';
import { Payout, PayoutMetaData } from "../../service/payouts/types";
import { ColumnDef } from '@tanstack/react-table'
import Status from "../../components/status";
import format from 'date-fns/format'
import SearchInput from "../../components/search";
import { formatCurrency } from "../../utils/helpers";

interface PayoutResponse {
  data: Payout[];
  metadata: PayoutMetaData;
}

const PayoutsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const columns: ColumnDef<Payout>[] = [
    {
      accessorKey: 'dateAndTime',
      header: 'Date & Time',
      cell: (info: any) => <PaleTableText>{format(new Date(info.getValue()), 'ccc, LLL d, kk:mm')}</PaleTableText>
    },
    {
      accessorKey: 'username',
      header: 'Username',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: (info: any) => <Status status={info.getValue().toString()} /> 
    },
    {
      accessorKey: 'value',
      header: 'Value',
      cell: (info: any) => formatCurrency(info.getValue())
    },
  ]

  const { data: payouts, isLoading, refetch, isError } = useQuery<PayoutResponse>({
    queryKey: ['payouts'],
    queryFn: PayoutsAPI.fetchPayouts
  })

  const { data: payoutsSearch, isLoading: isLoadingSearch, refetch: refetchSearch, isError: isErrorSearch } = useQuery<Payout[]>({
    queryKey: ['search-payouts', searchQuery],
    queryFn: () => PayoutsAPI.searchPayouts(searchQuery)
  })

  const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    setSearchQuery(searchValue)
  }

  useEffect(() => {
    refetch();
    refetchSearch();
  }, [searchQuery])

  let rows: Payout[] | undefined;
  if (searchQuery.length > 0 && !isLoadingSearch && !isErrorSearch) {
    rows = payoutsSearch;
  } else if (!isLoading && !isError) {
    rows = payouts?.data;
  }

  return (
    <PayoutsWrapper>
      <H1Text className="title">Payouts</H1Text>
      <FlexibleDiv className="table-div">
        <FlexibleDiv className="title-and-search">
          <FlexibleDiv className="table-title-div">
            <FlexibleDiv className="title-tag"></FlexibleDiv>
            <H3Text>Payout History</H3Text>
          </FlexibleDiv>
          <FlexibleDiv>
            <SearchInput handleOnChange={handleSearchOnChange}/>
          </FlexibleDiv>
        </FlexibleDiv>
        <FlexibleDiv>

        </FlexibleDiv>
        <FlexibleDiv className="table">
        {(isError || isErrorSearch) ? (
          <div className="table-message">Error fetching data.</div>
        ) : (isLoading || isLoadingSearch) ? (
          <div className="table-message">Loading...</div>
        ) : rows && rows.length > 0 ? (
          <Table columns={columns} rows={rows} />
        ) : (
          <div className="table-message">No results found.</div>
        )}
        </FlexibleDiv>
      </FlexibleDiv>
    </PayoutsWrapper>
  )
};

export default PayoutsScreen;