import { mergeStyleSets } from "@fluentui/react";

interface IClasses {
  textField: string;
}

export const getClasses = (): IClasses =>
  mergeStyleSets({
    textField: {
      margin: "1em 0",
      selectors: {
        input: {
          "::placeholder": {
            opacity: 0.6,
          },
        },
      },
    },
  });
