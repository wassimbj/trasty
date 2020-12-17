/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable radix */

export default function getEstimatedReward(productUnitPrice, quantity) {
  // eslint-disable-next-line no-nested-ternary
  const rewardPercentage = productUnitPrice <= 30 ? 0.06
    : productUnitPrice > 30 && productUnitPrice <= 100 ? 0.08
      : 0.11;

  return parseFloat((parseFloat(productUnitPrice) * parseInt(quantity)) * rewardPercentage).toFixed(2);
}
