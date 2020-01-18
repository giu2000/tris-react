import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = (props) => {
    const {value, onChange} = props;
    return(
        <select
            value = {value} //valore attuale della select
            onChange = {onChange} //metodo da chiamare quando viene selezionata
            >
            <option value='decr'>Decresc</option>
            <option value='cresc'>Cresc</option>
        </select>
    )
}

SelectComponent.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SelectComponent;
