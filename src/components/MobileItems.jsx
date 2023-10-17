import React from 'react';
import { Card, CardContent, Button, Grid } from '@mui/material';

const MobileItems = ({ item, handleDelete }) => {
    return (
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <img src={item.img} style={{ height: 150, width: 250 }} />
                    <h3>{item.brand}</h3>
                    <h4>
                        {item.model}-{item.storage}
                    </h4>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Button variant="text" color="error">
                                {item.price}
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="error" sx={{ marginLeft: 10 }}>
                                Delete
                            </Button>
                        </Grid>
                    </Grid>



                </CardContent>
            </Card>
        </Grid>
    );
};

export default MobileItems;