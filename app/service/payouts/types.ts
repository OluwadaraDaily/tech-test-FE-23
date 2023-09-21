export type PayoutMetaData = {
  limit: number;
  page: number;
  totalCount: number;
}

export type Payout = {
  dateAndTime: string;
  status: string;
  username: string;
  value: string;
}