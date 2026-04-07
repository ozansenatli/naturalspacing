export function cleanText(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!?;:])/g, "$1")
    .replace(/([.,!?;:])([^\s])/g, "$1 $2")
    .trim();
}