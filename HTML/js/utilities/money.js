export function formatMoney(pricePence) {
    return (Math.round(pricePence) / 100).toFixed(2);
}