/**
 * @returns percentage found in a line of text as a decimal, null if none found
 */
export function extractPercentage(line: string): number | null {
    const match = line.match(/(\d+(\.\d+)?)%/);
    return match ? parseFloat(match[1]) / 100 : null;
}
