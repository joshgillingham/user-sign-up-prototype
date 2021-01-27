import * as React from "react";
import { observer } from "mobx-react";
import { Text, Stack } from "@fluentui/react";

import { useStores } from "@app/hooks/stores";

const Confirmation: React.FunctionComponent = observer(() => {
  const {
    stores: { userSignUp },
  } = useStores();

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Stack.Item align="center">
        <Text variant="large" block>
          Thanks for signing up!
        </Text>
      </Stack.Item>
      <Stack.Item align="center">
        <Text block>Check your email to confirm your account at: {userSignUp.username}</Text>
      </Stack.Item>
    </Stack>
  );
});

export default Confirmation;
