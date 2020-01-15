import React from 'react'

class SelectComponent extends React.Component{
    constructor(props){
        super(props);
    }
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
export default SelectComponent;