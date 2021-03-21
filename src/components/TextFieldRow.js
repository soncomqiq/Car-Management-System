import React from 'react'
import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
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

function TextFieldRow(props) {
    const classes = useStyle();
    const {
        carInfo,
        handleRemoveFields,
        handleAddFields,
        handleChange,
        handleSubmit,
    } = props;

    return (
        <div key={carInfo.id}>
            <TextField
                variant="outlined"
                name='licensePlate'
                label='License Plates'
                value={carInfo.licensePlate}
                onChange={event => handleChange(carInfo.id, event)}
            />
            <TextField
                variant="outlined"
                name='carBrands'
                label='Brands'
                value={carInfo.carBrands}
                onChange={event => handleChange(carInfo.id, event)}

            />
            <TextField
                variant="outlined"
                name='carModels'
                label='Models'
                value={carInfo.carModels}
                onChange={event => handleChange(carInfo.id, event)}

            />
            <TextField
                id='remark-box'
                variant="outlined"
                name='carRemarks'
                label='Remarks'
                width='100ch'
                value={carInfo.carRemarks}
                onChange={event => handleChange(carInfo.id, event)}

            />
            <IconButton
                onClick={() => handleRemoveFields(carInfo.id)}>
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
    )
}

export default TextFieldRow
