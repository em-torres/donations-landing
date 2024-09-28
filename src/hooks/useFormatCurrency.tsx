import { useFormatter } from "next-intl";

export const useFormatCurrency = (
  style: 'currency' | 'decimal' | 'percent' | 'unit' = 'currency',
  currency: string = 'USD',
  maximumFractionDigits: number = 0,
  minimumFractionDigits: number = 0
) => {
  const format = useFormatter();

  const formatCurrency = (value: number) => {
    return format.number(value, {
      style: style,
      currency: currency,
      maximumFractionDigits: maximumFractionDigits,
      minimumFractionDigits: minimumFractionDigits});
  };

  return { formatCurrency };
};
