export function rubricExcellent(score) {
    if (score >= 9) return "Excellent";
    if (score >= 5) return "Pass";
    return "Fail";
}