import React from "react";
import { Stack, TextField, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

/**
 * Redux
 */
import { useDispatch, useSelector } from "react-redux";

import * as yup from "yup";
import { updateContact } from "../../../store/slices/ContactSlice";

const validationSchema = yup.object({
  contName: yup.string("Digita tu nombre").required("El nombre es requerido"),
  contEmail: yup
    .string("Digita tu correo electrónico")
    .email("Digita un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  contPhone: yup
    .string("Digita tu número telefónico")
    .required("El número telefónico es requerido"),
  contPosition: yup
    .string("Digita tu posición ")
    .required("Tu posición es requerida"),
});

const UpdateUser = () => {
  /**
   * Redux
   */
  const currentContact = useSelector((state) => state.ContactSlice.contact);

  // Allow to send the elements of store
  const dispatch = useDispatch();

  //Get acces_token of the user that start section
  const ACCESS_TOKEN =
    "Bearer " + useSelector((state) => state.userLogin).responseUserLogin.token;

  let navigate = useNavigate();

  const formik = useFormik({
    //Contact to edit
    initialValues: currentContact,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values));
      dispatch(updateContact(ACCESS_TOKEN, values.contId, values));
      navigate("/company/users");
    },
  });

  const update = () => {};
  return (
    <div>
      <Typography variant="h5" gutterBottom color="#072079" mt={3} ml={5}>
        Editar contacto
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box ml={5} mr={5}>
          <Stack direction="row" spacing={3} mt={5}>
            <TextField
              sx={{ width: "50%" }}
              name="contName"
              label="Nombre"
              variant="outlined"
              value={formik.values.contName}
              onChange={formik.handleChange}
              error={formik.touched.contName && Boolean(formik.errors.contName)}
              helperText={formik.touched.contName && formik.errors.contName}
            />
            <TextField
              sx={{ width: "50%" }}
              name="contEmail"
              label="Correo electrónico"
              variant="outlined"
              type="email"
              value={formik.values.contEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.contEmail && Boolean(formik.errors.contEmail)
              }
              helperText={formik.touched.contEmail && formik.errors.contEmail}
            />
          </Stack>
          <Stack direction="row" spacing={3} mt={3} mb={3}>
            <TextField
              sx={{ width: "50%" }}
              name="contPhone"
              label="Teléfono"
              variant="outlined"
              value={formik.values.contPhone}
              onChange={formik.handleChange}
              error={
                formik.touched.contPhone && Boolean(formik.errors.contPhone)
              }
              helperText={formik.touched.contPhone && formik.errors.contPhone}
            />
            <TextField
              sx={{ width: "50%" }}
              name="contPosition"
              label="Posición"
              variant="outlined"
              value={formik.values.contPosition}
              onChange={formik.handleChange}
              error={
                formik.touched.contPosition &&
                Boolean(formik.errors.contPosition)
              }
              helperText={
                formik.touched.contPosition && formik.errors.contPosition
              }
            />
          </Stack>
          <Button color="primary" variant="contained" mt={3} type="submit">
            Guardar
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UpdateUser;