import { Box, Button, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import FormTextField from "./FormTextField";


const Form = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [userInfo, setUserInfo] = useState(null);

  const handleFormSubmit = (values) => {
    console.log(values);
    setUserInfo({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      contact: values.contact,
      address1: values.address1,
      address2: values.address2,
    });
  };

  return (
    <Box m="20px">

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <FormTextField name="firstName" label="First Name" />
              <FormTextField name="lastName" label="Last Name" />
              <FormTextField name="email" label="Email" />
              <FormTextField name="contact" label="Phone Number" />
              <FormTextField name="address1" label="Address" />
              <FormTextField name="address2" label="Another Address" />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      {userInfo && (
        <Box width='100%' backgroundColor={theme.palette.mode.primary} p="20px" borderRadius='5px' mt='20px' border=' solid 1px' >
          <Typography color={theme.palette.mode.secondary}>
            Thank you for creating the user: {userInfo.firstName}{" "}
            {userInfo.lastName}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string(),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
