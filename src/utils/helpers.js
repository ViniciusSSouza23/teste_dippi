function calculatePercent(value, percent) {
  let _percent = (value * percent) / 100;
  const finalValue = value - _percent;
  return finalValue.toFixed(2);
}

export const calculateTax = (option, value) => {
  switch (option) {
    case "debit":
      return calculatePercent(value, 3);
    case "credit":
      return calculatePercent(value, 3.7);
    case "credit_6x":
      return calculatePercent(value, 4.28);
    case "credit_12x":
      return calculatePercent(value, 4.79);
  }
};

export const calculateTaxTenDays = (percent, value) => {
  return calculatePercent(value, percent);
};
