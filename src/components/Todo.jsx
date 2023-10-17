import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Todo = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [clr, setClr] = useState("");


    console.log("--------", data);
    const handleAdd = () => {
        setData([...data, text]);
        setText("");
    };

    const handleDelete = (item) => {
        console.log("item", item);
        const result = data.filter((elem) => elem !== item);
        setData(result);
    };

    useEffect(() => {

        if (data.length === 1) {
            setClr('red')
        }
        else if (data.length >= 3 && data.length < 5) {
            setClr('green')
        }
        else if (data.length >= 5 && data.length < 7) {
            setClr('orange')
        }
        else if (data.length >= 7 && data.length < 10) {
            setClr('blue')
        }
        else if (data.length == 10) {
            setClr('yellow')
        }
        else setClr('aqua')
    }, [data])
    return (<Card>
        <CardContent>

            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Card sx={{ bgcolor: clr }}>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>



                <Grid item xs={6}>
                    <TextField
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        label="Add Name"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={handleAdd} variant="contained" fullWidth>
                        Add
                    </Button>
                </Grid>

                {data.map((item) => (
                    <Grid item xs={3} sx={{ textAlign: "center" }}>
                        <h1> {item} </h1>
                        <Button onClick={() => handleDelete(item)} variant="contained">
                            Delete
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </CardContent >
    </Card >
    );
};