type Translation = {
  locale: string;
  translations: Record<string, string>;
}

declare module '*.arb' {
  const translation: Translation;
  export default translation;
}
