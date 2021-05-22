import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            pakaian : 'Kaos Polos'
        }
    }

    change = (kind) => {
        this.setState({
            pakaian : kind
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pakaian}</h2>
                <button onClick={() => this.change("Kemeja")}>Change</button>
                <Operan pakaian={this.state.pakaian} change={this.change}/>
            </div>
        )
    }
}
