import { Component, JSX, ParentComponent, ParentProps, Show, createSignal } from "solid-js";
import { OnboardingProvider, useOnboarding } from "./context";
import { Route } from "@solidjs/router";
import { Button } from "@blending/material/components/button";

import { OnboardingPage, OnboardingFooter } from "./data/page";
import { TransitionGroup } from "solid-transition-group";

// const compound = <T extends (props: any) => JSX.Element, C extends Record<string, Component>>(
//   component: T,
//   children: C,
// ): T & C => {
//   return Object.assign(
//     component,
//     children
//   );
// }

export const Onboarding: ParentComponent = (props) => {
  return (
    <OnboardingProvider>
      {props.children}
    </OnboardingProvider>
  );
};


export const Test: Component = (props) => {
  return (
    <Onboarding>
      <OnboardingPage>
        <h1 style={{
          "font-size": "32px",
        }}>Welcome!</h1>
        <Footer />
      </OnboardingPage>
      <OnboardingPage>
        <span>Test 2</span>

        <Footer />
      </OnboardingPage>
      <OnboardingPage>
        <span>Test 3</span>

        <Footer />
      </OnboardingPage>
      <OnboardingPage>
        <span>Test 4</span>

        <Footer />
      </OnboardingPage>
    </Onboarding>
  );
}

const Footer: Component = (props) => {
  const onboarding = useOnboarding()!;
  return (
    <OnboardingFooter>
      <TransitionGroup>
        <Show when={onboarding.page() > 0}>
          <Button.Outlined onClick={() => onboarding.back()}>
            Back
          </Button.Outlined>
        </Show>
        <Button.Tonal onClick={() => onboarding.next()}>
          Next
        </Button.Tonal>
      </TransitionGroup>
    </OnboardingFooter>
  )
}
