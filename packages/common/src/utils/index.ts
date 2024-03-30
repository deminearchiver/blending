export const wait = async (timeout: number) => {
  return new Promise<void>(
    (resolve) => setTimeout(resolve, timeout)
  );
}

export const capitalize = (value: string) => {
  return value.toUpperCase().charAt(0) + value.slice(1);
}
