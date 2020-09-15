import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import PropTypes from 'prop-types';


function AddressLabel ({addressLabel}) {
    const { name, address, address1 } = addressLabel;
    return (
        <>
        <div className = 'lab'>
            <div className = 'name'>
                {name}
            </div>
            <div className = 'address'>
                {address}
            <div className = 'address 1'>
                {address1}
            </div>
            </div>
        </div>
        </>
    )
};


AddressLabel.propTypes = {
    lab: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    })
}


const testLabel = {
    name: 'John Doe',
    address: 'IJburglaan 356',
    address1: 'Amsterdam, NL'

};

ReactDOM.render(
    <AddressLabel addressLabel = {testLabel} />,
    document.querySelector('#root')
)
