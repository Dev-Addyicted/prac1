import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Grid, TextField } from '@mui/material';
import ProductItem from './ProductItem';

const Product = () => {
    const [data, setData] = useState([]);
    const [copyData, setCopyData] = useState([]);
    const [cat, setCat] = useState([]);
    const [sendCat, setSendCat] = useState([]);
    const [txt, setTxt] = useState("")

    const getApi = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        const result1 = await axios.get("https://fakestoreapi.com/products/categories");
        setData(result.data);
        setCopyData(result.data)
        setCat(result1.data);

    }
    useEffect(() => {
        getApi()
    }, []);

    useEffect(() => {
        const filt = copyData.filter((item) => item.category === sendCat);
        setData(filt);
    }, [sendCat])

    useEffect(() => {
        const filt = copyData.filter((item) => item.category.toUpperCase().includes(txt.toUpperCase()));
        setData(filt)
    }, [txt])



    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <TextField onChange={(e) => setTxt(e.target.value)} variant='outlined' label='Search Here...' fullWidth />
            </Grid>
            {
                cat.map((item) => (
                    <Grid item xs={3}>
                        <Button onClick={() => setSendCat(item)} variant='outlined' color='secondary' fullWidth sx={{ marginTop: 2 }}>{item}</Button>
                    </Grid>
                ))
            }
            {
                data.map((item) => (

                    <ProductItem item={item} />


                ))
            }

        </Grid>
    );
};

export default Product;