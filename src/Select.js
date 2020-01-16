import React from 'react';
import PropTypes from 'prop-types';

export default class SelectComponent extends React.Component{

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

   render(){
        return(
            <select
                value = {this.props.value} //valore attuale della select
                onChange = {this.props.onChange} //metodo da chiamare quando viene selezionata
            >
                <option value='decr'>Decresc</option>
                <option value='cresc'>Cresc</option>
            </select>
        )
    }
}
