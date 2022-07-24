import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';

import { commerce } from '../../../lib/commerce'

const AddressForm = ({ checkoutToken, next }) => {
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
        setShippingCountry(Object.keys()[0])
  };

  const fetchShippingOption = async(checkoutTokenId, country, region) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});
  }

  const countries = Object.entries(shippingCountries).map(([code,name]) => ({ id : code, label: name}));

  useEffect(() => {
    fetchShippingCountries(checkoutToken.Id);
  }, [])
  

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry }))}>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First Name'/>
            <FormInput required name='lastName' label='Last Name'/>
            <FormInput required name='address1' label='Address1'/>
            <FormInput required name='city' label='City'/>
            <FormInput name= 'zip' label='Zip Code'/>
            <FormInput required name='email' label='Email'/>
            <Grid item xs={12} sm={6}>
              <InputLabel>
              Shipping Country
              </InputLabel>

              <Select value={shippingCountry} fullWidth onChange={(event) => setShippingCountry(event.target.value)}>
                {countries.map((country) => (<MenuItem key={country.id} value={country.id}>
                  {country.label}
                </MenuItem>))}
              </Select>
              </Grid>
        
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
               <Button component={Link} to="/cart" variant="outlined">Back To Cart</Button>
               <Button type="submit" color="primary" variant="Contained">Next</Button>
          </div>
        </form>
      </FormProvider>
    
    </>
  )
}

export default AddressForm