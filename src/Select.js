import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = (props) => {
    const {value, onChange} = props;
    return(
        <select
            value = {value} 
            onChange = {onChange} 
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

