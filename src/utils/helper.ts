export function parseBlame(blame: string) {
    const match = blame.match(/\((.+?)\s+(\d{4}-\d{2}-\d{2})/);

    if (!match) { return "Unknown author"; }

    return `Author: ${match[1]}, Date: ${match[2]}`;
}
