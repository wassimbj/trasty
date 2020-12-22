/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable radix */

export default function getEstimatedReward(productUnitPrice, quantity) {
  // eslint-disable-next-line no-nested-ternary
  const rewardPercentage = productUnitPrice <= 50 ? 0.04
    : productUnitPrice > 50 && productUnitPrice <= 500 ? 0.08
      : 0.1;

  return parseFloat((parseFloat(productUnitPrice) * parseInt(quantity)) * rewardPercentage).toFixed(2);
}
