# User Sign up prototype
A simple user sign up form prototype using FabricUI core components.

## Functionality
- Persistent form state with form validation provided by Formik and Yup
  - Password and and password confirmation
- Confirmation after sign up aided by Mobx for store management
- Some style
- Tooling provided by Just__ https://microsoft.github.io/just/scripts/
- Simulated API interaction with console messages showing steps

## Does not include
- Support for older browsers like IE
- Vendor prefixes
- Localization: Normally all language strings would go into a language file, but for simplicity these were kept inline.
- Error boundaries. Error boundaries would be great at least at the app level, but should also wrap components that may introduce another failure state such as failure to load a bundle that was split from the main bundle.