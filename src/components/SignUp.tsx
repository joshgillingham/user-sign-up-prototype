import * as React from "react";
import { observer } from "mobx-react";

import { useStores } from "@app/hooks/stores";
import UserForm from "@app/components/SignUp/UserForm";
import Confirmation from "@app/components/SignUp/Confirmation";

const SignUp: React.FunctionComponent = observer(() => {
  const {
    stores: { userSignedUp },
  } = useStores();

  return (
    <React.Fragment>
      {userSignedUp === false && <UserForm />}
      {userSignedUp === true && <Confirmation />}
    </React.Fragment>
  );
});

export default SignUp;
