import { FloatingActionButtonFactory } from "./floating-action-button";
export const FloatingActionButton = {
  Primary: FloatingActionButtonFactory({
    variant: "primary"
  }),
  Secondary: FloatingActionButtonFactory({
    variant: "secondary"
  }),
  Tertiary: FloatingActionButtonFactory({
    variant: "tertiary"
  }),
  Surface: FloatingActionButtonFactory({
    variant: "surface"
  }),
};
