export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const calculateLoan = (
  principal: number,
  interestRate: number,
  durationMonths: number
) => {
  const monthlyInterestRate = interestRate / 100;
  const totalInterest = principal * monthlyInterestRate * durationMonths;
  const totalPayable = principal + totalInterest;
  const monthlyPayment = totalPayable / durationMonths;

  return {
    amount: principal,
    duration: durationMonths,
    interestRate: interestRate,
    totalPayable: totalPayable,
    monthlyPayment: monthlyPayment
  };
};

export const storeInUrl = (key: string, value: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState({}, '', url.toString());
};

export const getFromUrl = (key: string): string | null => {
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};