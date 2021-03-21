import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextFieldRow from './TextFieldRow';
import IDUtils from '../util/id-util';
import { makeStyles } from '@material-ui/core';


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

function Car(props) {
    const classes = useStyle();
    const [data, setData] = useState([
        { id: 0, licensePlate: '', carBrands: '', carModels: '', carRemarks: '' }
    ]);

    const handleChange = (Id, event) => {
        const index = data.findIndex(e => e.id === Id);
        const newData = [...data];
        newData[index][event.target.name] = event.target.value;
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields:", data)
    }

    const handleAddFields = () => {
        setData([...data, { id: IDUtils.uniqueId(), licensePlate: '', carBrands: '', carModels: '', carRemarks: '' }])
    }

    const handleRemoveFields = (id) => {
        const newData = data.filter(e => e.id !== id);
        setData(newData);
    }

    return (
        <Container>
            <div className='car-form-wrap'>
                <h1 style={{ color: 'black', fontFamily: 'sans-serif' }}>🚘 Car Management System</h1>
                <form className={classes.root}>
                    {data.map((carInfo, index) => (
                        <TextFieldRow
                            key={carInfo.id}
                            carInfo={carInfo}
                            handleRemoveFields={handleRemoveFields}
                            handleAddFields={handleAddFields}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    ))}
                </form>
            </div>
        </Container>
    )
}

export default Car;
