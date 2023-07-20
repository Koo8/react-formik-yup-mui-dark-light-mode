# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Install 
-  npm create vite@latest => follow the prompts (react, javascript)
- npm install formik (react form library)
-  npm install yup (validation)
-  npm install @mui/material @emotion/react @emotion/styled as well as mui icons

## Content 
- this app use React + Formik (Yup) + MUI for a stylish form with backend interaction.
-  - Formik doc is very clear. onSubmit + initialValues + validationSchema will be surfice for <Formik> comp. Inside <Form> -> label + <Field> + <ErrorMessage> plus 'submit button'. For repetitive input/textfield/checkbox, use hook 'useField' to create seperate component.
- Formik's useField() is used for creating a costomized component <FormTextField> that use <TextField> from MUI for beautiful styling and {...field} {...props} from formik for carrying out formik functions.
- Dark and Light themes can be toggled, using creatTheme() and toggleModeMethod. use Context to carry toggle method, use ThemeProvider to carry theme