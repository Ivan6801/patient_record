/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
import { TextField, MenuItem } from '@mui/material/';
import { Form, useFormik, FormikProvider } from 'formik';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import MuiPhoneNumber from 'material-ui-phone-number';
import * as Yup from 'yup';
import Header from '../components/Header';
import Asynchronous from '../components/Asynchronous';
import './styles/App.css';

export default function Registrar() {
  const { t } = useTranslation('global');

  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Nombre requerido').min(5, 'Se requieren cinco caracteres'),
    firstName: Yup.string()
      .required('Apellido paterno requerido')
      .min(5, 'Se requieren cinco caracteres'),
    lastName: Yup.string()
      .required('Apellido materno requerido')
      .min(5, 'Se requieren cinco caracteres'),
    dateOfBirth: Yup.string().required(t('register.fechaDeNacimiento')),
    gender: Yup.string().required('Género requerido'),
    maritalStatus: Yup.string().required('Estado civil requerido'),
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

  const genderTypes = [`${t('gender.m')}`, `${t('gender.f')}`];
  const maritalStatusType = [
    `${t('state.s')}`,
    `${t('state.c')}`,
    `${t('state.d')}`,
    `${t('state.spj')}`,
    `${t('state.v')}`,
    `${t('state.co')}`,
  ];
  const phoneType = [`${t('phone.tf')}`, `${t('phone.tm')}`];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Parte #1</title>
        <meta name="description" content="Registrar Paciente" />
      </Helmet>
      <section className="container">
        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <nav>
              <Header />
            </nav>
            <h3>{t('register.registrar')}</h3>
            <FormikProvider value={formik}>
              <Form noValidate className="form-border" autoComplete="off">
                <div>
                  <TextField
                    style={{ width: '230px' }}
                    {...getFieldProps('name')}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    id="outlined-basic"
                    label={t('register.nombre')}
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
                    label={t('register.apellidoPaterno')}
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
                    label={t('register.apellidoMaterno')}
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
                    label={t('register.genero')}
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
                    label={t('register.estadoCivil')}
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
                    {...getFieldProps('phoneTypes')}
                    error={Boolean(touched.phoneTypes && errors.phoneTypes)}
                    helperText={touched.phoneTypes && errors.phoneTypes}
                    id="phoneTypes"
                    className="input"
                    select
                    label={t('register.tipoTelefono')}
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
                    label={t('register.correoPrincipal')}
                    variant="outlined"
                    type="email"
                  />
                </div>
                <div>
                  <MuiPhoneNumber
                    {...getFieldProps('EmergencyPhone')}
                    error={Boolean(touched.EmergencyPhone && errors.EmergencyPhone)}
                    helperText={touched.EmergencyPhone && errors.EmergencyPhone}
                    className="MuiPhoneNumber"
                    defaultCountry="us"
                    label={t('register.telefonoEmeergencia')}
                  />
                </div>
                <div>
                  <TextField
                    style={{ width: '230px' }}
                    {...getFieldProps('emergencyContact')}
                    error={Boolean(touched.emergencyContact && errors.emergencyContact)}
                    helperText={touched.emergencyContact && errors.emergencyContact}
                    id="outlined-basic"
                    label={t('register.emergencyContact')}
                    variant="outlined"
                    type="email"
                  />
                </div>
                <div>
                  <Asynchronous />
                </div>
                <div className="block">
                  <button id="contact-form-form-button" type="button" onClick={prevHandleSubmit}>
                    {t('saved.guardar')}
                  </button>
                </div>
              </Form>
            </FormikProvider>
          </div>
          <div className="contact-info fadeInDown">
            <h4 className="contect-title">{t('footer.posibles')}</h4>
            <p className="contect-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam
              necessitatibus repellendus?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
