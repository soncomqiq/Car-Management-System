import React, { Component } from 'react';

class CarForm extends Component{
     constructor(props) {
        super(props);
        this.state = {
            licensePlate: '',
            carBrands: '',
            carModels: '',
            carRemarks: '' 
            };
        }
    
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        // handleSubmit = (e) => {
        //     this.setState({
                
        //     })
        // }
    
        render() {
            return (
                <form>
                    <div className='car-plate-center'>
                        <label className='inner-cms-center'>
                            License Plate
                        <input type='text' value={this.state.licensePlate} onChange={this.handleChange} name='licensePlate' />
                        </label>
                    </div>
                    <div className='car-brands-center'> 
                        <label className='inner-cms-center'>
                            Brands
                        <input type='text' value={this.state.carBrands} onChange={this.handleChange} name='carBrands'/>    
                        </label>
                    </div>
                    <div className='car-models-center'> 
                        <label className='inner-cms-center'>
                            Models
                        <input type='text' value={this.state.carModels} onChange={this.handleChange} name='carModels'/>
                        </label>
                    </div>
                    <div className='car-remarks-center'>
                        <label className='inner-cms-center'>
                            Remark
                        <input type='text' value={this.state.carRemarks} onChange={this.handleChange} name='carRemarks'/>
                        </label>
                    </div>
                    <div className='cms-button'>
                        <button type='button' className='cms-save-button'>Save</button>
                    </div>
                </form>
            )
        }
    }

export default CarForm;