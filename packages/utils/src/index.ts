export function mergeTemplateStrings(strings: TemplateStringsArray, ...values: unknown[]) {
  return strings.reduce(
    (previous, current, i) =>
      `${previous}${current}${values[i] !== undefined ? values[i] : ""}`,
    "",
  );
}
