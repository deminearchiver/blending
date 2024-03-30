import { JSX, JSXElement, ParentComponent } from "solid-js";
import { navigationRailChildrenStyle, navigationIndicatorStyle, navigationRailDestinationStyle, navigationRailStyle, navigationRailLeadingStyle } from "./navigation-rail.css";
import { Icon } from "../icon";
import { Splash } from "../splash";
import { IconButton } from "../icon-button";
import { MaybeAccessor } from "@solid-primitives/utils";

export interface NavigationRailProps {
  leading?: JSX.Element;
}

export const NavigationRail: ParentComponent<NavigationRailProps> = (props) => {
  return (
    <nav
      class={navigationRailStyle}>
      <div
        class={navigationRailLeadingStyle}>
        <IconButton>
          <Icon name="menu" />
        </IconButton>
        {props.leading}
      </div>
      <div
        class={navigationRailChildrenStyle}>
        {props.children}
      </div>
    </nav>
  )
}

interface NavigationRailDestinationProps {
  icon: JSX.Element;
  label: JSX.Element;
}

export const NavigationRailDestination: ParentComponent<NavigationRailDestinationProps> = (props) => {
  let ref!: HTMLElement;

  return (
    <div
      ref={ref as HTMLDivElement}
      class={navigationRailDestinationStyle}>
      <NavigationIndicator
        for={ref}>
        {props.icon}
      </NavigationIndicator>
      {props.label}
    </div>
  );
}

export interface NavigationIndicatorProps {
  for: MaybeAccessor<HTMLElement>;
}
export const NavigationIndicator: ParentComponent<NavigationIndicatorProps> = (props) => {
  return (
    <div
      class={navigationIndicatorStyle}>
      <Splash
        for={props.for} />
      {props.children}
    </div>
  );
}
