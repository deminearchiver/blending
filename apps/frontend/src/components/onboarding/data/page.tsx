import { resolveElements, resolveFirst } from "@solid-primitives/refs";
import { Component, JSX, ParentComponent, ResolvedJSXElement, children, createMemo } from "solid-js"

const ONBOARDING_PAGE: unique symbol = Symbol("ONBOARDING_PAGE");
const ONBOARDING_FOOTER: unique symbol = Symbol("ONBOARDING_FOOTER");


export interface OnboardingPageDefinition {
  [ONBOARDING_PAGE]: true;
  content: ResolvedJSXElement[];
  footer?: OnboardingFooterDefinition;
}

export interface OnboardingFooterDefinition {
  [ONBOARDING_FOOTER]: true;
  children: JSX.Element;
}


export const OnboardingPage: ParentComponent = (props): JSX.Element => {
  const resolved = children(() => props.children);

  const footer = createMemo(
    () => resolved.toArray()
      .filter(isOnboardingFooter)[0] as unknown as OnboardingFooterDefinition | undefined,
  );
  const content = createMemo(
    () => resolved.toArray()
      .filter(item => !isOnboardingFooter(item))
  );
  

  console.log(footer());

  const definition: OnboardingPageDefinition = {
    [ONBOARDING_PAGE]: true,
    footer: footer(),
    content: content(),
  };
  return definition as unknown as JSX.Element;
}
export const OnboardingFooter: ParentComponent = (props) => {
  const definition: OnboardingFooterDefinition = {
    [ONBOARDING_FOOTER]: true,
    children: props.children
  }
  return definition as unknown as JSX.Element;
}


export const is = <T,>(value: unknown, token: symbol): value is T => {
  return value != null &&
    typeof value === "object" &&
    token in value &&
    value[token as keyof typeof value] === true;
}
export const isOnboardingPage = (value: unknown): value is OnboardingPageDefinition => is(value, ONBOARDING_PAGE);
export const isOnboardingFooter = (value: unknown): value is OnboardingFooterDefinition => is(value, ONBOARDING_FOOTER);

