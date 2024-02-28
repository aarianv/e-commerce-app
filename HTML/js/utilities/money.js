export function moneyRounder(pricePence) {
    return (Math.round(pricePence) / 100).toFixed(2);
}