import * as React from "react";
import { observer } from "mobx-react";
import { PrimaryButton, Text, Stack } from "@fluentui/react";

import { Form, Input } from "@app/components/Form";
import { signUpSchema } from "@app/schemas";
import { useStores } from "@app/hooks/stores";

const UserForm: React.FunctionComponent = observer(() => {
  const {
    stores: { postUserSignUp, userSignUp = {} },
  } = useStores();

  return (
    <Form
      name="user-sign-up"
      validationSchema={signUpSchema}
      initialValues={userSignUp}
      onSubmit={postUserSignUp}
    >
      {(submitting): React.ReactNode => {
        let buttonText = "Sign Up";
        if (submitting) buttonText = "Submitting";

        return (
          <React.Fragment>
            <Text variant="large" block>
              Sign up for this super awesome service!
            </Text>
            <Input
              name="username"
              type="text"
              label="Username"
              placeholder="john.doe@gmail.com"
              required
            />
            <Input name="password" type="password" label="Password" required />
            <Input name="confirmPassword" type="password" label="Confirm Password" required />
            <Stack horizontal horizontalAlign="end">
              <PrimaryButton type="submit" disabled={submitting}>
                {buttonText}
              </PrimaryButton>
            </Stack>
          </React.Fragment>
        );
      }}
    </Form>
  );
});

export default UserForm;
