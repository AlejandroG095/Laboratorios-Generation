export function rubricPerfect(score) {
    if (score == 11) return "Perfect";
    if (score >= 9) return "Excellent";
    if (score >= 5) return "Pass";
    return "Fail";
}