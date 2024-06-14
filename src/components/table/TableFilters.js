import React, { useState } from 'react'
import Input from '@mui/material/OutlinedInput';
import './TableFilters.css'
import { Grid } from '@mui/material';
import MultiSelect from '../multi-select';

const TableFilters = () => {
  const [roles, setRoles] = useState([]);

  return (
    
    <Grid container alignItems="center" justifyContent="space-between" p={4}>
      <Input placeholder="Search" className='search' />
      

      <Grid width={500} flexDirection="row" alignItems="center">
        <span className='filterLabel'>Filter:</span>
        
        <MultiSelect options={['KaynatS', 'AkshayK']} placeholder={'by Role'} value={roles} onChange={setRoles} inputStyle={{ width: 86 , marginRight:22}} />

        <MultiSelect options={['KaynatS', 'AkshayK']} placeholder={'by Designation'} value={roles} onChange={setRoles} inputStyle={{ width: 186 ,marginRight:22}} />

        <MultiSelect options={['KaynatS', 'AkshayK']} placeholder={'by Status'} value={roles} onChange={setRoles} inputStyle={{ width: 96 }} />
      </Grid>
      
    </Grid>

  )
}

export default TableFilters
