import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles';
   
const Cart = ({ cart }) => {
    const classes = useStyles();

    
    const isEmpty = cart?.line_items?.length == 0;
    const EmptyCart = () => (
        <Typography variant='subtitle1'> Your shopping cart is empty, start adding Products!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cart?.line_items?.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <div>{item.name}</div>
                        </Grid>
                    ))
                };
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart?.subtotal?.formatted_with_symbol}
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" colored="secondary">Empty Cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" colored="primary">Checkout </Button>
                    </div>
                </Typography>

            </div>
        </>
    )
  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3">My cart</Typography>
        { isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart