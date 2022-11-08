/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../containers/styles/App.css';

export default function Asynchronous({
  onChange,
  error,
  helperText,
  options,
  label,
}) {
  return (
    <Stack spacing={3} sx={{ width: 230 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.label}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            helperText={helperText}
            label={label}
            className="registrar-input"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'Gnp' },
//   { title: 'Axa' },
//   { title: 'Metlife' },
//   { title: 'Mediexcel' },
//   { title: 'Privado' },
//   { title: 'Chubb' },
// ];
