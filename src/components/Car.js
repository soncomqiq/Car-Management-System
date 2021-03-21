import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/core/Save';

const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    }
}));

function Car() {
    const classes = useStyle();
    const [inputFields, setInputField] = useState([
        {licensePlate: '', carBrands: '', carModels: '', carRemarks: ''},
    ]);

    

    return (
        <Container>
            <div>
                <h1>Car Management System</h1>
                    <form className={classes.root}>
                            {inputFields.map((inputField, index) =>(
                        <div key={index}>
                        <TextField 
                            variant="outlined"
                            name='licensePlate'
                            label='License Plate'
                            value={inputField.licensePlate}
                        />
                        <TextField 
                            variant="outlined"
                            name='carBrands'
                            label='Brands'
                            value={inputField.carBrands}
                        />
                        <TextField 
                            variant="outlined"
                            name='carModels'
                            label='Models'
                            value={inputField.carModels}
                        />
                        <TextField 
                            id='remark-box'
                            variant="outlined"
                            name='carRemarks'
                            label='Remarks'
                            width='100ch'
                            value={inputField.carRemarks}
                        />
                        <IconButton></IconButton>
                        </div>
                    ))}
                </form>   
            </div>
        </Container>
    )
}

export default Car
