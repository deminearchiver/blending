export const wait = async (timeout: number) => {
  return new Promise<void>(
    (resolve) => setTimeout(resolve, timeout)
  );
}

export const capitalize = (value: string) => {
  return value.toUpperCase().charAt(0) + value.slice(1);
}

export const merge = (strings: TemplateStringsArray, ...values: unknown[]) => {
  return strings.reduce(
    (previous, current, i) => 
      `${previous}${current}${values[i] !== undefined ? values[i] : ""}`,
    "",
  );
}
