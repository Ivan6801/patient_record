/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

export default function Asynchronous() {
  const { t } = useTranslation('global');

  return (
    <Stack spacing={3} sx={{ width: 230 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={t('register.sgm')}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Gnp' },
  { title: 'Axa' },
  { title: 'Metlife' },
  { title: 'Mediexcel' },
  { title: 'Privado' },
  { title: 'Chubb' },
];
