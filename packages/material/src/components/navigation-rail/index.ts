import {
  NavigationRail as Rail,
  NavigationRailDestination
} from "./navigation-rail";

type Compound = typeof Rail & {
  Destination: typeof NavigationRailDestination;
}

const rail = Rail as Compound;
rail.Destination = NavigationRailDestination;

export const NavigationRail = rail;
