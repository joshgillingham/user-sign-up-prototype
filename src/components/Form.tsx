import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { MessageBar, MessageBarType } from "@fluentui/react";

import Input from "@app/components/Form/Input";

/**
 * NOTE: Normally this type of core component would come from a shared internal lib
 */

interface IStatus {
  type: MessageBarType;
  message: string;
}

interface IForm {
  children: (submitting: boolean) => React.ReactNode;
  initialValues: any;
  name: string;
  onSubmit: (values: any) => Promise<void>;
  validationSchema: any;
}

const Form: React.FC<IForm> = ({ children, initialValues, name, onSubmit, validationSchema }) => {
  const [hideStatus, setHideStatus] = React.useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setStatus }): Promise<void> => {
        try {
          await onSubmit(values);
        } catch (ex) {
          const status: IStatus = { type: MessageBarType.error, message: ex };
          setStatus(status);
        }
      }}
      validationSchema={validationSchema}
    >
      {({
        isSubmitting,
        status: { type = MessageBarType.error, message } = {},
        handleSubmit,
      }): React.ReactNode => (
        <React.Fragment>
          {/* form submit errors */}
          {hideStatus === false && message != null && (
            <MessageBar messageBarType={type} onDismiss={(): void => setHideStatus(true)}>
              {message}
            </MessageBar>
          )}

          <FormikForm id={name} name={name} onSubmit={handleSubmit}>
            {children(isSubmitting)}
          </FormikForm>
        </React.Fragment>
      )}
    </Formik>
  );
};

export { Form, Input };
