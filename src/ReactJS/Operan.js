import React, { Component } from 'react'

export default class Operan extends Component {

    render() {

        const { pakaian, change } = this.props

        return (
            <div>
                <h2>Operan State Yang Menjadi Props : {pakaian}</h2>
                <button onClick={() => change("Kemeja")}>Change</button>
            </div>
        )
    }
}
