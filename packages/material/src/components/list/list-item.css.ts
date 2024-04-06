import { style } from "@vanilla-extract/css";

export const listItemStyle = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minHeight: 56,
  padding: "8px 16px",
  gap: "16px",
});

export const listItemContentStyle = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});
