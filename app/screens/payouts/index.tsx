import { FlexibleDiv, FlexibleSpan } from "../../components/box";
import Table from "../../components/table";
import { H1Text, H3Text } from "../../components/typography";
import { payoutsAPI } from "../../service/payouts/api";
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

interface PayoutResponse {
  data: Payout[];
  metadata: PayoutMetaData;
}

const PayoutsScreen = () => {
  const newColumns: Column[] = [
    {
      key: 'username',
      label: 'Username'
    },
    {
      key: 'value',
      label: 'Value'
    },
    {
      key: 'status',
      label: 'Status'
    },
    {
      key: 'dateAndTime',
      label: 'Date & Time'
    },
  ]

  const query = "Larry"

  const { data: payouts, isLoading, refetch } = useQuery<PayoutResponse>({
    queryKey: ['payouts'],
    queryFn: payoutsAPI.fetchPayouts
  })

  const { data: payoutsSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery<PayoutResponse>({
    queryKey: ['search-payouts', query],
    queryFn: () => payoutsAPI.searchPayouts(query)
  })



  useEffect(() => {
    console.log('Payouts ->', payouts)
    console.log('Payouts Search ->', payoutsSearch)
  }, [payouts])

  return (
    <PayoutsWrapper>
      <H1Text className="title">Payouts</H1Text>
      <FlexibleDiv className="table-div">
        <FlexibleDiv className="table-title-div">
          <FlexibleSpan className="title-tag"></FlexibleSpan>
          <H3Text>Payout History</H3Text>
        </FlexibleDiv>
        <FlexibleDiv>

        </FlexibleDiv>
        <FlexibleDiv className="table">
          <Table columns={newColumns} rows={payouts?.data}/>
        </FlexibleDiv>
      </FlexibleDiv>
    </PayoutsWrapper>
  )
};

export default PayoutsScreen;