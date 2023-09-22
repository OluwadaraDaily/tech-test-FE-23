export const formatCurrency = (amount: string) => {
  return amount.replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const debounce = (func: (value: string) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (value: string) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(value);
    }, delay);
  };
};