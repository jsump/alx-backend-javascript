function calculateNumber(a, b) {
    const roundedA = a < 0? Math.round(a +0.5) : Math.round(a);
    const roundedB = b < 0? Math.round(b +0.5) : Math.round(b);
    return roundedA + roundedB;
}
module.exports = calculateNumber;