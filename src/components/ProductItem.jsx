import { Button, Grid } from '@mui/material';
import React from 'react';

const ProductItem = ({ item }) => {
    return (
        <Grid item xs={3}>
            <img src={item.image} width={150} alt="" />
            <h3>{item.title.substr(0, 20)}</h3>
            <Button variant='contained' color='error'>Rs.{item.price}</Button>

        </Grid>

    );
};

export default ProductItem;