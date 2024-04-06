import { ContextProviderProps, createContextProvider } from "@solid-primitives/context";
import { children, createMemo, createSignal, createContext, ParentComponent, useContext, For, Accessor, runWithOwner, Owner, getOwner, createEffect, on, Show, Index } from "solid-js";
import { OnboardingPageDefinition, is, isOnboardingPage } from "./data/page";
import { createComponent } from "solid-js/web";
import { Route } from "@solidjs/router";
import { Motion, Presence } from "solid-motionone";
import { Transition, TransitionGroup } from "solid-transition-group";
import { darkTheme } from "@blending/material/theme/global/dark";
import { Offset, ThreePointCubic } from "@blending/common/animation";

export interface OnboardingProviderProps extends ContextProviderProps {
  
}

export interface OnboardingContextProps {
  page: Accessor<number>;
  previous: Accessor<number>;
  back: () => void;
  next: () => void;
}
const OnboardingContext = createContext<OnboardingContextProps>();


export const OnboardingProvider: ParentComponent<OnboardingProviderProps> = (props) => {
  const [page, setPage] = createSignal(0);
  const [previous, setPrevious] = createSignal(0);

  createEffect<number>(
    (prev) => {
      setPrevious(prev);
      return page();
    },
    page(),
  );

  return (
    <OnboardingContext.Provider 
      value={{
        page,
        previous,
        back: () => {
          setPage(prev => prev - 1);
        },
        next: () => {
          setPage(prev => prev + 1);
        },
    }}>
      <OnboardingProcessor children={props.children} />
    </OnboardingContext.Provider>
  )
}

export const useOnboarding = () => useContext(OnboardingContext);

export const OnboardingProcessor: ParentComponent = (props) => {
  const { page, back, next, previous } = useOnboarding()!;

  const resolved = children(() => props.children);
  const pages = createMemo(
    () => resolved.toArray()
      .filter(value => isOnboardingPage(value)) as unknown as OnboardingPageDefinition[]
  );
  const current = () => pages()[page()];
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        height: "100dvh",
      }}>
      {page()} - {previous()}
      <main style={{
        position: "relative",
        height: "100%",
        "flex-grow": 1,
      }}>
        <For each={pages()}>{
          (item, index) => (
            <Presence exitBeforeEnter initial={false}>
              <Show when={index() === page()}>
                <Motion.div
                  transition={{
                    duration: 0.6,
                    easing: (t) => new ThreePointCubic(
                      new Offset(0.05, 0),
                      new Offset(0.133333, 0.06),
                      new Offset(0.166666, 0.4),
                      new Offset(0.208333, 0.82),
                      new Offset(0.25, 1),
                    ).transform(t),
                    // easing: [.2, 0, 0, 1],
                  }}
                  initial={{
                    opacity: 0,
                    transform: "translateX(32px)",
                  }}
                  animate={{
                    opacity: [0, 0, 1],
                    transform: "translateX(0px)",
                    offset: [0.5, 1]
                  }}
                  exit={{
                    opacity: [1, 0, 0],
                    transform: "translateX(-32px)",
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}>
                  {item.content}
                </Motion.div>
              </Show>
            </Presence>
          )
        }</For>
      </main>
      <footer>
        {current().footer?.children}
      </footer>
    </div>
  );
}

// export const [
//   OnboardingProvider,
//   useOnboarding
// ] = createContextProvider(
//   (props: OnboardingProviderProps) => {
//     const resolved = children(() => props.children);
//     const pages = createMemo(
//       () => resolved.toArray().filter(value => isOnboardingPage(value))
//     );
//     console.log(pages());

//     const [page, setPage] = createSignal(0);
//     return {
//       page,
//       back: () => {
//         setPage(previous => previous - 1);
//       },
//       next: () => {
//         setPage(previous => previous + 1);
//       },
//     };
//   }
// );
