export function costCalculator(transactionAmount) {
    var cost = transactionAmount * 1.01 + 3;
    return cost;
}

console.log(costCalculator(process.argv[3]));