import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { IconButton, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        }
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function Car() {
    const classes = useStyle();
    const [inputFields, setInputFields] = useState([
        {licensePlate: '', carBrands: '', carModels: '', carRemarks: ''}
    ]);

    const handleChange = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields:", inputFields)
    }

    const handleAddFields = () => {
        setInputFields([...inputFields,  {licensePlate: '', carBrands: '', carModels: '', carRemarks: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    return (
        <Container>
            <div className='car-form-wrap'>
                <h1 style={{ color: 'white' }}>Car Management System</h1>
                    <form className={classes.root} onSubmit={handleSubmit}>
                            {inputFields.map((inputField, index) =>(
                        <div key={index}>
                        <TextField 
                            variant="outlined"
                            name='licensePlate'
                            label='License Plate'
                            value={inputField.licensePlate}
                            onChange={event => handleChange(index, event)}
                        />
                        <TextField 
                            variant="outlined"
                            name='carBrands'
                            label='Brands'
                            value={inputField.carBrands}
                            onChange={event => handleChange(index, event)}

                        />
                        <TextField 
                            variant="outlined"
                            name='carModels'
                            label='Models'
                            value={inputField.carModels}
                            onChange={event => handleChange(index, event)}

                        />
                        <TextField 
                            id='remark-box'
                            variant="outlined"
                            name='carRemarks'
                            label='Remarks'
                            width='100ch'
                            value={inputField.carRemarks}
                            onChange={event => handleChange(index, event)}

                        />
                        <IconButton 
                            onClick={() => handleRemoveFields(index)}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton 
                            onClick={() => handleAddFields()}>
                            <AddIcon />
                        </IconButton>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                        </div>
                    ))}
                </form>   
            </div>
        </Container>
    )
}

export default Car;
