/**
 * @returns n rounded to 2 decimal places
 */
export function round(n: number): number {
    return Math.round(n * 100) / 100;
}

/**
 * @returns percentage found in a line of text as a decimal, null if none found
 */
export function extractPercentage(line: string): number | null {
    const match = line.match(/(\d+(\.\d+)?)%/);
    return match ? round(parseFloat(match[1]) / 100) : null;
}
