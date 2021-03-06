import { createTheme, ITheme, Customizations, mergeStyles } from "@fluentui/react";

export const makeTheme = (): ITheme => {
  const theme = createTheme({
    palette: {
      themePrimary: "#0078d4",
      themeLighterAlt: "#eff6fc",
      themeLighter: "#deecf9",
      themeLight: "#c7e0f4",
      themeTertiary: "#71afe5",
      themeSecondary: "#2b88d8",
      themeDarkAlt: "#106ebe",
      themeDark: "#005a9e",
      themeDarker: "#004578",
      neutralLighterAlt: "#0b0b0b",
      neutralLighter: "#151515",
      neutralLight: "#252525",
      neutralQuaternaryAlt: "#2f2f2f",
      neutralQuaternary: "#373737",
      neutralTertiaryAlt: "#595959",
      neutralTertiary: "#c8c8c8",
      neutralSecondary: "#d0d0d0",
      neutralPrimaryAlt: "#dadada",
      neutralPrimary: "#ffffff",
      neutralDark: "#f4f4f4",
      black: "#f8f8f8",
      white: "#000000",
    },
  });

  Customizations.applySettings({ theme });

  // Define global styles
  mergeStyles({
    selectors: {
      ":global(body), :global(html)": {
        margin: 0,
        padding: 0,
      },
    },
  });

  return theme;
};
