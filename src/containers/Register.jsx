/* eslint-disable no-alert */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextField, MenuItem } from '@mui/material/';
import { Form, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import './styles/App.css';

export default function Registrar() {
  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Nombre requerido').min(5, 'Se requieren cinco caracteres'),
    firstName: Yup.string()
      .required('Apellido paterno requerido')
      .min(5, 'Se requieren cinco caracteres'),
    lastName: Yup.string()
      .required('Apellido materno requerido')
      .min(5, 'Se requieren cinco caracteres'),
    dateOfBirth: Yup.string().required('Fecha de nacimiento requerido'),
    gender: Yup.string().required('Género requerido'),
    maritalStatus: Yup.string().required('Estado civil requerido'),
    mainPhone: Yup.string().required('Teléfono principal requerido'),
    phoneTypes: Yup.string().required('Tipo teléfono requerido'),
    mainMail: Yup.string().required('Correo principal requerido'),
    EmergencyPhone: Yup.string().required('Teléfono principal requerido'),
    phone: Yup.string().when('$EmergencyPhone', (EmergencyPhone, schema) => (EmergencyPhone === 'United States + 1' === 'Mexico + 52'
      ? schema.required('Numero requerido')
      : schema.nullable().optional())).required('Numero requerido'),
    emergencyContact: Yup.string().required('Contacto de emergencia requerido'),
    sgm: Yup.string().required('Seguro de gastos médicos requerido'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      mainPhone: '',
      phoneTypes: '',
      mainMail: '',
      EmergencyPhone: '',
      phone: '',
      emergencyContact: '',
      sgm: '',
    },
    validationSchema: FormSchema,
    onSubmit: (formValue) => {
      alert(JSON.stringify(formValue, null, 2));
    },
  });

  const {
    errors,
    // values,
    touched,
    handleSubmit: prevHandleSubmit,
    getFieldProps,
    // setFieldValue,
  } = formik;

  const genderTypes = ['Masculino', 'Femenino'];
  const maritalStatusType = [
    'Soltero',
    'Casado',
    'Divorciado',
    'Separación en proceso judicial',
    'Viudo',
    'Concubinato',
  ];
  const phoneType = ['Teléfono fijo', 'Teléfono móvil'];
  const EmergencyPhoneType = ['None', 'United States + 1', 'Mexico + 52'];
  const sgmType = ['Gnp', 'Axa', 'Metlife', 'Mediexcel', 'Privado', 'Chubb'];

  return (
    <section className="container">
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Registrar Paciente</h3>
          <FormikProvider value={formik}>
            <Form noValidate autoComplete="off">
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('name')}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  id="outlined-basic"
                  label="Apellido Paterno"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  id="outlined-basic"
                  label="Apellido Materno"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('dateOfBirth')}
                  error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                  helperText={touched.dateOfBirth && errors.dateOfBirth}
                  id="outlined-basic"
                  variant="outlined"
                  type="date"
                />
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('gender')}
                  error={Boolean(touched.gender && errors.gender)}
                  helperText={touched.gender && errors.gender}
                  id="gender"
                  className="input"
                  select
                  label="Género"
                  variant="outlined"
                >
                  {genderTypes.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('maritalStatus')}
                  error={Boolean(touched.maritalStatus && errors.maritalStatus)}
                  helperText={touched.maritalStatus && errors.maritalStatus}
                  id="maritalStatus"
                  className="input"
                  select
                  label="Estado civil"
                  variant="outlined"
                >
                  {maritalStatusType.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('mainPhone')}
                  error={Boolean(touched.mainPhone && errors.mainPhone)}
                  helperText={touched.mainPhone && errors.mainPhone}
                  id="outlined-basic"
                  label="Teléfono principal"
                  variant="outlined"
                  type="tel"
                />
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('phoneTypes')}
                  error={Boolean(touched.phoneTypes && errors.phoneTypes)}
                  helperText={touched.phoneTypes && errors.phoneTypes}
                  id="phoneTypes"
                  className="input"
                  select
                  label="Tipo teléfono"
                  variant="outlined"
                >
                  {phoneType.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('mainMail')}
                  error={Boolean(touched.mainMail && errors.mainMail)}
                  helperText={touched.mainMail && errors.mainMail}
                  id="outlined-basic"
                  label="Correo Principal"
                  variant="outlined"
                  type="email"
                />
              </div>
              <section>
                <div>
                  <TextField
                    style={{ width: '230px' }}
                    {...getFieldProps('EmergencyPhone')}
                    error={Boolean(touched.EmergencyPhone && errors.EmergencyPhone)}
                    helperText={touched.EmergencyPhone && errors.EmergencyPhone}
                    id="EmergencyPhone"
                    className="input"
                    select
                    label="Teléfono emergencia"
                    variant="outlined"
                  >
                    {EmergencyPhoneType.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  {formik.values.EmergencyPhone === 'United States + 1' && (
                    <div>
                      <TextField
                        style={{ width: '230px' }}
                        {...getFieldProps('phone')}
                        error={Boolean(touched.EmergencyPhone && errors.phone)}
                        helperText={touched.EmergencyPhone && errors.phone}
                        id="outlined-basic"
                        placeholder="+ 1"
                        variant="outlined"
                        type="tel"
                      />
                    </div>
                  )}
                </div>
                <div>
                  {formik.values.EmergencyPhone === 'Mexico + 52' && (
                    <div>
                      <TextField
                        style={{ width: '230px' }}
                        {...getFieldProps('phone')}
                        error={Boolean(touched.EmergencyPhone && errors.phone)}
                        helperText={touched.EmergencyPhone && errors.phone}
                        id="outlined-basic"
                        placeholder="+ 52"
                        variant="outlined"
                        type="tel"
                      />
                    </div>
                  )}
                </div>

              </section>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('emergencyContact')}
                  error={Boolean(touched.emergencyContact && errors.emergencyContact)}
                  helperText={touched.emergencyContact && errors.emergencyContact}
                  id="outlined-basic"
                  label="Contacto de emergencia"
                  variant="outlined"
                  type="email"
                />
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('sgm')}
                  error={Boolean(touched.sgm && errors.sgm)}
                  helperText={touched.sgm && errors.sgm}
                  id="sgm"
                  className="input"
                  select
                  label="Seguro de gastos médicos"
                  variant="outlined"
                >
                  {sgmType.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="block">
                <button type="button" onClick={prevHandleSubmit}>
                  Guardar
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
        <div className="contact-info">
          <h4>Posibles coincidencias</h4>
          <p className="contect-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam
            necessitatibus repellendus?
          </p>
        </div>
      </div>
    </section>
  );
}
