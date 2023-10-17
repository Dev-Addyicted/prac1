import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Grid, TextField } from '@mui/material';
import MobileItems from './MobileItems';

const MobileList = () => {
    const [data, setData] = useState([])
    const [dataCopy, setDataCopy] = useState([])
    const [txt, setTxt] = useState([])

    const getMobile = async () => {
        const result = await axios.get("http://localhost:4040/mobile")
        setData(result.data);
        setDataCopy(result.data);
    };
    useEffect(() => {
        getMobile();
    }, [])
    useEffect(() => {
        const filt = dataCopy.filter((item) =>

            item.brand.toUpperCase().includes(txt.toUpperCase()))
        setData(filt)
    }, [txt])

    const handleDelete = (item) => {
        console.log("deleteitem", item);
        const filt = dataCopy.filter((item, ind) => item !== ind)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <TextField onChange={(e) => setTxt(e.target.value)} variant='outlined' label="Search Here..." fullWidth />
            </Grid>
            <Grid item xs={4}>
                <Button variant='contained' fullWidth sx={{ height: 55 }}>SUBMIT</Button>

            </Grid>
            {
                data.map((item) =>
                    <MobileItems item={item} handleDelete={item} />
                )
            }
        </Grid>
    );
};

export default MobileList;