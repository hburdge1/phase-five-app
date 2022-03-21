import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup({ proficiencies }) {
  const [profState, setState] = React.useState({proficiencies});

  const handleChange = (event) => {
    setState({
      ...profState,
      [event.target.name]: event.target.checked,
    });
  };
  const error = [proficiencies].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
            { proficiencies.map((p)=>
          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} name={p} />
            }
            label={p}
          />
            )}
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
}