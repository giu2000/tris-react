import React from 'react';
import PropTypes from 'prop-types';

export default class SelectComponent extends React.Component{

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

   render(){
       const {value, onChange} = this.props;
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
}


