export const formatCurrency = (amount: string) => {
  return amount.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}