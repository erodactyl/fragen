function splitOneLine(text: string): [string, string] {
  if (text.length <= 80) return [text, ""];
  let cursor = 80;
  for (let i = cursor; i > 0; i--) {
    if (text.charAt(i) === " ") {
      cursor = i + 1;
      break;
    }
  }
  return [text.substring(0, cursor), text.substring(cursor)];
}

function splitIntoLines(text: string): string {
  let acc: string[] = [];
  let curr = text;
  for (;;) {
    const [line, rest] = splitOneLine(curr);
    acc.push(line);
    if (rest.length === 0) {
      break;
    }
    curr = rest;
  }
  return acc.join("\n");
}

export function prettifyAnswer(text: string): string {
  return text
    .split("\n")
    .map((line) => splitIntoLines(line))
    .join("\n");
}
