/* eslint-disable no-alert */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TextField, MenuItem } from '@mui/material/';
import { Link } from 'react-router-dom';
import { Form, useFormik, FormikProvider } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { defaultTodos } from '../data/all';
import Header from '../components/Header';
import Asynchronous from '../components/Asynchronous';
import './styles/App.css';
import AllList from '../components/AllList';
import AllItem from '../components/AllItem';

export default function Registrar() {
  const [todos, setTodos] = useState(defaultTodos);
  const { t } = useTranslation('global');

  const FormSchema = Yup.object().shape({
    name: Yup.string().required(t('r.nameRequired')).min(2, t('c.nameCharacters')),
    firstName: Yup.string().required(t('r.apRequired')).min(2, t('c.nameCharacters')),
    lastName: Yup.string(),
    dateOfBirth: Yup.string().required(t('register.fechaDeNacimiento')),
    gender: Yup.string().required(t('r.genderRequired')),
    maritalStatus: Yup.string().required(t('r.civilStatus')),
    phoneTypes: Yup.string().required(t('r.phoneTypes')),
    phoneMain1: Yup.string().required(t('register.telefonoPrincipal')),
    phoneMain: Yup.string()
      .when('$EmergencyPhone', (phoneMain, schema) => ((phoneMain === 'United States + 1') === 'Mexico + 52'
        ? schema.required(t('r.phone'))
        : schema.nullable().optional()))
      .required(t('register.telefonoPrincipal')),
    mainMail: Yup.string().email(t('r.email')),
    EmergencyPhone: Yup.string().required(t('r.emergencyPhone')),
    phone: Yup.number()
      .when('$EmergencyPhone', (EmergencyPhone, schema) => ((EmergencyPhone === 'United States + 1') === 'Mexico + 52'
        ? schema.required(t('r.phone'))
        : schema.nullable().optional()))
      .required(t('r.phone')),
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
      phoneMain: '',
      phoneMain1: '',
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
  const phoneMainType = ['None', 'United States + 1', 'Mexico + 52'];

  const searchedAll = todos;

  const completeAll = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.user === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteAll = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.user === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Parte #1</title>
        <meta name="description" content="Patients register" />
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
                    label={t('r.birthday')}
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
                <section>
                  <div>
                    <TextField
                      style={{ width: '230px' }}
                      {...getFieldProps('phoneMain1')}
                      error={Boolean(touched.phoneMain1 && errors.phoneMain1)}
                      helperText={touched.phoneMain1 && errors.phoneMain1}
                      id="phoneMain1"
                      className="registrar-input"
                      select
                      label={t('register.telefonoPrincipal')}
                      variant="outlined"
                    >
                      {phoneMainType.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    {formik.values.phoneMain1 === 'United States + 1' && (
                      <div>
                        <label>{t('register.telefonoPrincipal')}</label>
                        <TextField
                          style={{ width: '230px', position: 'relative', top: '-10px' }}
                          {...getFieldProps('phoneMain')}
                          error={Boolean(touched.phoneMain1 && errors.phoneMain)}
                          helperText={touched.phoneMain1 && errors.phoneMain}
                          id="outlined-basic"
                          placeholder="+ 1"
                          variant="standard"
                          type="number"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    {formik.values.phoneMain1 === 'Mexico + 52' && (
                      <div>
                        <label>{t('register.telefonoPrincipal')}</label>
                        <TextField
                          style={{ width: '230px', position: 'relative', top: '-10px' }}
                          {...getFieldProps('phoneMain')}
                          error={Boolean(touched.phoneMain1 && errors.phoneMain)}
                          helperText={touched.phoneMain1 && errors.phoneMain}
                          id="outlined-basic"
                          placeholder="+ 52"
                          variant="standard"
                          type="number"
                        />
                      </div>
                    )}
                  </div>
                </section>
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
                      label={t('register.telefonoEmeergencia')}
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
                        <label>{t('register.telefonoEmeergencia')}</label>
                        <TextField
                          style={{ width: '230px', position: 'relative', top: '-10px' }}
                          {...getFieldProps('phone')}
                          error={Boolean(touched.EmergencyPhone && errors.phone)}
                          helperText={touched.EmergencyPhone && errors.phone}
                          id="outlined-basic"
                          placeholder="+ 1"
                          variant="standard"
                          type="number"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    {formik.values.EmergencyPhone === 'Mexico + 52' && (
                      <div>
                        <label>{t('register.telefonoPrincipal')}</label>
                        <TextField
                          style={{ width: '230px', position: 'relative', top: '-10px' }}
                          {...getFieldProps('phone')}
                          error={Boolean(touched.EmergencyPhone && errors.phone)}
                          helperText={touched.EmergencyPhone && errors.phone}
                          id="outlined-basic"
                          placeholder="+ 52"
                          variant="standard"
                          type="number"
                        />
                      </div>
                    )}
                  </div>
                </section>
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
                      {
                        id: 'Metlife',
                        label: 'Metlife',
                      },
                      {
                        id: 'Mediexcel',
                        label: 'Mediexcel',
                      },
                      {
                        id: 'Privado',
                        label: 'Privado',
                      },
                      {
                        id: 'Chubb',
                        label: 'Chubb',
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
              <AllList>
                {searchedAll.map((todo) => (
                  <AllItem
                    key={todo.id}
                    user={todo.user}
                    image={todo.image}
                    completed={todo.completed}
                    added={todo.added}
                    onComplete={() => completeAll(todo.user)}
                    onDelete={() => deleteAll(todo.user)}
                  />
                ))}
              </AllList>
            </p>
            <center>
              <Link className="boton-parte2" to="/search-patients">
                Parte #2
              </Link>
            </center>
          </div>
        </div>
      </section>
    </>
  );
}
