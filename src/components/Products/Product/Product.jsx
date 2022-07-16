import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";
const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image='data:image/jpeg;base64,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'
        title={product.name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html:product.description }} variant="body2" color="textSecondary"/>
        <CardActions disableSpacing className={classes.CardActions}>
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
