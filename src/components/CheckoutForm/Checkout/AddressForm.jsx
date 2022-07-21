import React, { useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';

import { commerce } from '../../lib/commerce'

const AddressForm = () => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState('');
  const methods = useForm();

  const fetchShippingCountries = async(checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First Name'/>
            <FormInput required name='lastName' label='Last Name'/>
            <FormInput required name='address' label='Address1'/>
            <FormInput required name='city' label='City'/>
            <FormInput name= 'zip code' label='Zip Code'/>
            <FormInput required name='email' label='Email'/>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>
              Shipping Subdivision
              </InputLabel>
              
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}></MenuItem>
              </Select>

            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>
              Shipping Country
              </InputLabel>

              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}></MenuItem>
              </Select>

            </Grid> */}

            {/* <Grid item xs={12} sm={6}>
              <InputLabel>
              Shipping Country
              </InputLabel>

              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}></MenuItem>
              </Select>
                  </Grid>
               */}

        
          </Grid>
        </form>
      </FormProvider>
    
    </>
  )
}

export default AddressForm