import { FlexibleDiv, FlexibleSpan } from "../../components/box";
import Table from "../../components/table";
import { H1Text, H3Text, PaleTableText } from "../../components/typography";
import { PayoutsAPI } from "../../service/payouts/api";
import { PayoutsWrapper } from "./index.style"
import {
  useQuery,
  QueryKey,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  QueryFunction,
} from '@tanstack/react-query'
import React, { useEffect, useState } from 'react';
import { Payout, PayoutMetaData } from "../../service/payouts/types";
import { Column } from "../../types/table";
import { ColumnDef, CellContext } from '@tanstack/react-table'
import Status from "../../components/status";
import format from 'date-fns/format'

interface PayoutResponse {
  data: Payout[];
  metadata: PayoutMetaData;
}

function PayoutsScreen() {
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
      header: 'Value'
    },
  ]

  const query = "Larry"

  const { data: payouts, isLoading, refetch } = useQuery<PayoutResponse>({
    queryKey: ['payouts'],
    queryFn: PayoutsAPI.fetchPayouts
  })

  const { data: payoutsSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery<PayoutResponse>({
    queryKey: ['search-payouts', query],
    queryFn: () => PayoutsAPI.searchPayouts(query)
  })

  useEffect(() => {
    console.log('Payouts ->', payouts)
    console.log('Payouts Search ->', payoutsSearch)
  }, [payouts, payoutsSearch])

  return (
    <PayoutsWrapper>
      <H1Text className="title">Payouts</H1Text>
      <FlexibleDiv className="table-div">
        <FlexibleDiv className="table-title-div">
          <FlexibleDiv className="title-tag"></FlexibleDiv>
          <H3Text>Payout History</H3Text>
        </FlexibleDiv>
        <FlexibleDiv>

        </FlexibleDiv>
        <FlexibleDiv className="table">
          {(!!payouts && payouts.data.length > 0 && !isLoading) &&
            <Table columns={columns} rows={payouts.data}/>
          }
          {isLoading && <div>Loading...</div>}
          {payoutsSearch?.data?.length === 0 && <div>No results found.</div>}
        </FlexibleDiv>
      </FlexibleDiv>
    </PayoutsWrapper>
  )
};

export default PayoutsScreen;