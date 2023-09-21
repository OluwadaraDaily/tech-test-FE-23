import { APIClient } from "../../utils/api-client";

const fetchPayouts = async () => {
  const response = await APIClient('payouts');
  return response;
}

const searchPayouts = async (query: string) => {
  const response = await APIClient(`search/query=${query}`);
  return response;
}


export const payoutsAPI = {
  fetchPayouts,
  searchPayouts
}