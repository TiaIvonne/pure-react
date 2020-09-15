import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import PropTypes from 'prop-types';


function AddressLabel ({addressLabel}) {
    const { name, address1, address2 } = addressLabel;
    return (
        <>
        <div className = 'lab'>
            <div className = 'name'>
                {name}
            </div>
            <div className = 'addressLine1'>
                {address1}
            <div className = 'addressLine2 1'>
                {address2}
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

function Envelope({fromPerson, toPerson}){
    return(
        <div className = 'envelope'>
            <AddressLabel className='from-label'addressLabel={fromPerson}/>
            <AddressLabel className = 'to-label'addressLabel={toPerson} />
            <Stamp />
        </div>
    )

};

Envelope.propTypes = {
    fromPerson: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string
    })

}

function Stamp() {
    return (
        <div className="stamp">
            <span className="text">Stamp</span>
        </div>
    );
}




const fromPerson = {
    name: 'John Doe',
    address1: 'IJburglaan 356',
    address2: 'Amsterdam, NL'

};
const toPerson = {
    name: 'Jane Doe',
    address1: 'La la land',
    address2: 'siempre viva 3'
}

ReactDOM.render(
    <Envelope fromPerson = {fromPerson} toPerson = {toPerson}/>,
    document.querySelector('#root')
)
