import React, { useState, useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function Car() {
    const classes = useStyle();
    const [inputFields, setInputField] = useState([
        {licensePlate: '', carBrands: '', carModels: '', carRemarks: ''},
    ]);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInputField(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: inputFields
        });
        setInputField('')
    };

    return (
        <Container>
            <div>
                <h1>Car Management System</h1>
                    <form className={classes.root} onSubmit={handleSubmit}>
                            {inputFields.map((inputField, index) =>(
                        <div key={index}>
                        <TextField 
                            variant="outlined"
                            name='licensePlate'
                            label='License Plate'
                            value={inputField.licensePlate}
                            onChange={handleChange}
                        />
                        <TextField 
                            variant="outlined"
                            name='carBrands'
                            label='Brands'
                            value={inputField.carBrands}
                            onChange={handleChange}
                        />
                        <TextField 
                            variant="outlined"
                            name='carModels'
                            label='Models'
                            value={inputField.carModels}
                            onChange={handleChange}
                        />
                        <TextField 
                            id='remark-box'
                            variant="outlined"
                            name='carRemarks'
                            label='Remarks'
                            width='100ch'
                            value={inputField.carRemarks}
                            onChange={handleChange}
                        />
                        <div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                        </div>
                        </div>
                    ))}
                </form>   
            </div>
        </Container>
    )
}

export default Car;
