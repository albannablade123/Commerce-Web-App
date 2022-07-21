import React from 'react'
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

  return (
    <Card>
        <CardMedia image={item?.image?.url} alt={item.name} className={classes.media}/>
        <CardContent className={classes.cardContent}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h4'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions classes={classes.CardActions}>
            <div className={classes.buttons}>
                <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='button' className={classes.emptyButton} size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                <Button variant="contained" className={classes.checkoutButton} to="/checkout" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </div>
        </CardActions>
    </Card>
  )
}

export default CartItem