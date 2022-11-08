/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
import { TextField, MenuItem } from '@mui/material/';
import { Link } from 'react-router-dom';
import { Form, useFormik, FormikProvider } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Header from '../components/Header';
import Asynchronous from '../components/Asynchronous';
import './styles/App.css';

export default function Registrar() {
  const { t } = useTranslation('global');

  const FormSchema = Yup.object().shape({
    name: Yup.string().required(t('r.nameRequired')).min(5, t('c.nameCharacters')),
    firstName: Yup.string()
      .required(t('r.apRequired'))
      .min(5, 'c.nameCharacters'),
    lastName: Yup.string()
      .required(t('r.amRequired'))
      .min(5, 'c.nameCharacters'),
    dateOfBirth: Yup.string().required(t('register.fechaDeNacimiento')),
    gender: Yup.string().required(t('r.genderRequired')),
    maritalStatus: Yup.string().required(t('r.civilStatus')),
    phoneTypes: Yup.string().required(t('r.phoneTypes')),
    mainMail: Yup.string().required(t('r.mainEmail')),
    EmergencyPhone: Yup.string().required(t('r.emergencyPhone')),
    phone: Yup.number().when('$EmergencyPhone', (EmergencyPhone, schema) => (EmergencyPhone === 'United States + 1' === 'Mexico + 52'
      ? schema.required(t('r.phone'))
      : schema.nullable().optional())).required(t('r.phone')),
    emergencyContact: Yup.string().required(t('r.emergencyContact')),
    sgm: Yup.array().required(t('r.sgm')),
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
    setFieldValue,
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
  const EmergencyPhoneType = ['None', 'United States + 1', 'Mexico + 52'];

  return (
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
                  className="registrar-input"
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
                  className="registrar-input"
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
                  className="registrar-input"
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
                  className="registrar-input"
                />
              </div>
              <div>
                <TextField
                  style={{ width: '230px' }}
                  {...getFieldProps('gender')}
                  error={Boolean(touched.gender && errors.gender)}
                  helperText={touched.gender && errors.gender}
                  id="gender"
                  className="registrar-input"
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
                  className="registrar-input"
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
                  className="registrar-input"
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
                  className="registrar-input"
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
                    className="registrar-input"
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
                      <label>{t('register.telefonoPrincipal')}</label>
                      <TextField
                        style={{ width: '230px' }}
                        {...getFieldProps('phone')}
                        error={Boolean(touched.EmergencyPhone && errors.phone)}
                        helperText={touched.EmergencyPhone && errors.phone}
                        id="outlined-basic"
                        placeholder="+ 1"
                        variant="outlined"
                        type="number"
                        className="registrar-input"
                      />
                    </div>
                  )}
                </div>
                <div>
                  {formik.values.EmergencyPhone === 'Mexico + 52' && (
                    <div>
                      <label>{t('register.telefonoPrincipal')}</label>
                      <TextField
                        style={{ width: '230px' }}
                        {...getFieldProps('phone')}
                        error={Boolean(touched.EmergencyPhone && errors.phone)}
                        helperText={touched.EmergencyPhone && errors.phone}
                        id="outlined-basic"
                        placeholder="+ 52"
                        variant="outlined"
                        type="number"
                        className="registrar-input"
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
                  label={t('register.emergencyContact')}
                  variant="outlined"
                  type="email"
                  className="registrar-input"
                />
              </div>
              <div>
                <Asynchronous
                  label={t('r.sgm')}
                  {...getFieldProps('sgm')}
                  error={Boolean(touched.sgm && errors.sgm)}
                  helperText={touched.sgm && errors.sgm}
                  onChange={(v, r) => setFieldValue('sgm', r)}
                  options={[
                    {
                      id: 'Gnp',
                      label: 'Gnp',
                    },
                    {
                      id: 'Axa',
                      label: 'Axa',
                    },
                  ]}
                />
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
          <center>
            <Link className="boton-parte2" to="/search-patients">Parte #2</Link>
          </center>
        </div>
      </div>
    </section>
  );
}
