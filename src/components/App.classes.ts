import { mergeStyleSets } from "@fluentui/react";

interface IClasses {
  app: string;
}

export const getClasses = (): IClasses =>
  mergeStyleSets({
    app: {
      width: 500,
      margin: "4em auto",
    },
  });
