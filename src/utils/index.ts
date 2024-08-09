
export const formatMoney = (amount: number, currency = 'USD') => {
  const formattedAmount = new Intl.NumberFormat(
    "en-US",
    { style: 'currency', currency: currency }
  ).format(amount);
  return formattedAmount
}

export const truncateDescription = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};