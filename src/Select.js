import React from 'react';

export default class SelectComponent extends React.Component{
   render(){
        return(
            <select
                value = {this.props.value} //valore attuale della select
                onChange = {this.props.onChange} //metodo da chiamare quando viene seleziona
            >
                <option value='decr'>Decresc</option>
                <option value='cresc'>Cresc</option>
            </select>
        )
    }
}
