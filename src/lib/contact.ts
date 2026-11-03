export const contactEmail = "aloewi@dovecoteinstitute.org";

export function createEmailDraft(subject: string, lines: Array<string | undefined>) {
  const body = lines.filter((line): line is string => Boolean(line)).join("\n");
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
