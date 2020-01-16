import React from 'react';
import PropTypes from 'prop-types';

export default class SelectComponent extends React.Component{

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

   render(){
<<<<<<< HEAD
       const {value, onChange} = this.props;
        return(
            <select
                value = {value} //valore attuale della select
                onChange = {onChange} //metodo da chiamare quando viene selezionata
=======
        return(
            <select
                value = {this.props.value} //valore attuale della select
                onChange = {this.props.onChange} //metodo da chiamare quando viene selezionata
>>>>>>> add PropType and minor fix status
            >
                <option value='decr'>Decresc</option>
                <option value='cresc'>Cresc</option>
            </select>
        )
    }
}
<<<<<<< HEAD


=======
>>>>>>> add PropType and minor fix status
