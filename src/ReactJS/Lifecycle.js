import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle';

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pakaian: 'Kaos Polos',
            data: [],
            showSublifecycle: false,     
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log("Run : ", json);
                this.setState({
                    data: json
                })
            })
    }

    changeShirt(value){
        this.setState({
            pakaian: value
        })
    }

    render() {
        console.log("Data : ", this.state.data);
        return (
            <div>
                <h1>Lifecycle</h1>
                <h2>{this.state.pakaian}</h2>

                {this.state.showSublifecycle && <Sublifecycle changeShirt={(value) => this.changeShirt(value)} />}

                <button onClick={() => this.setState({showSublifecycle: !this.state.showSublifecycle})}>Change</button>
            </div>
        )
    }
}
