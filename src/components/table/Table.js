import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';



function createData(name, email, role, designation, status) {
  return { name, email, role, designation, status };
}

const rows = [
  createData('Akshay Karande', 'akshay123@gmail.com', 'Fronted developer', 'Engineer', 'Passive'),
  createData('Kaynat shaikh', 'kaynat123@gmail.com', 'Fronted developer', 'Engineer', 'Active'),

];

export default function UserTable() {
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);

  };

  

  

  return (
    <TableContainer component={Paper} style={{ margin: 20 }} >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ display: 'flex', alignItems: 'center'}}>
              <FormControl>
                <RadioGroup
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Name" control={<Radio   color="default"/>} sx={{ width: 24, height: 24, mr: 2 }} />
              

                
                </RadioGroup>
              </FormControl>
              Name
            </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 24, height: 24, mr: 2 }}>H</Avatar>

                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
