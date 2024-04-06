import { ParentComponent } from "solid-js";
import { useOnboarding } from "../context";

export const OnboardingFooter: ParentComponent = (props) => {
  const onboarding = useOnboarding()!;

  return (
    <footer>
      {props.children}
    </footer>
  )
}
