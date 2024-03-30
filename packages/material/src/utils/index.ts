export const component = <T, U>(
  component: T,
  properties: U,
): T & U => {
  return Object.assign(
    component as any,
    properties,
  );
}
