import { TColor, TTheme } from "./types";

export const handleColorProp = (theme: TTheme, color: TColor) => {
  const highlight1 = theme.color.highlight1;
  const highlight2 = theme.color.highlight2;
  switch (color) {
    case "1":
      return highlight1;
    case "2":
      return highlight2;
  }
};
