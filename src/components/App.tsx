import * as React from "react";
import { Fabric } from "@fluentui/react";

import { makeTheme } from "@app/components/App.theme";
import { getClasses } from "@app/components/App.classes";
import SingUp from "@app/components/SignUp";

const App: React.FunctionComponent = () => {
  const { app } = getClasses();
  const theme = makeTheme();

  return (
    <Fabric theme={theme} applyTheme applyThemeToBody className={app}>
      <SingUp />
    </Fabric>
  );
};

export default App;
