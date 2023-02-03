import { style } from "@vanilla-extract/css";
import { vars } from "../vars.css";

export const list = style({
  margin: 0,
  padding: 0,
  listStyle: "none",
});

export const article = style({
  padding: "1rem",
  border: "6px solid",
  borderBottom: `1px solid ${vars.colors.divider}`,
  borderColor: "#7FFFD4",
});

export const title = style({
  fontSize: "1.5rem",
  display: "inline-block",
});

export const text = style(
  {
    color: "black",
    alignContent: "center",
    textAlign: "center",
    fontSize: "2rem",
    backgroundColor: "orange",
  }
);

export const url = style({
  color: vars.colors.text.dimmed,
});
