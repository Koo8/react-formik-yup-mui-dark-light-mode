import { useField } from "formik";
import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";

// use formik's useField() hook to create modular component of <input> but using MUI <TextField>
const FormTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // const theme = useTheme();
  return (
    <TextField
      fullWidth
      label={label}
      variant="filled"
      type="text"
      {...field}
      {...props}
      error={!!meta.touched && meta.error}
      helperText={!!meta.touched && meta.error}
      sx={{
        gridColumn:
          field.name === "firstName" || field.name === "lastName"
            ? "span 2"
            : "span 4",
        
      }}
    />
  );
};

export default FormTextField;
