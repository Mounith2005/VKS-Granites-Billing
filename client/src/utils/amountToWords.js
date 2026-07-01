import { toWords } from "number-to-words";

export const amountToWords = (amount) => {
  const value = Math.round(Number(amount));

  if (value === 0) {
    return "Rupees Zero Only";
  }

  return (
    "Rupees:  " +
    toWords(value)
      .replace(/\b\w/g, (c) => c.toUpperCase()) +
    " Only"
  );
};