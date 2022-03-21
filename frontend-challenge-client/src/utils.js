export const formatAmount = (amount = 0) => {
    const amountArray = [...amount.toString()];
    amountArray.splice(-2, 0, ".");
    return "$" + new Intl.NumberFormat().format(amountArray.join(""));
  };