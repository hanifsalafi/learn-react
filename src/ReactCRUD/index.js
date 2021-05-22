import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import TableComponent from './TableComponent'
import FormComponent from './FormComponent'

export default class Crud extends Component {

    constructor(props){
        super(props)

        this.state = {
            listPakaian : [],
            name : "",
            price : 0,
            description : "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        if(this.state.id === "") {
            this.setState({
                listPakaian: [
                    ...this.state.listPakaian,
                    {
                        id: this.state.listPakaian.length+1,
                        name: this.state.name,
                        price: this.state.price,
                        description: this.state.description
                    }
                ]
            })
        } else {
            const pakaianNotSelected = this.state.listPakaian
                .filter((pakaian) => pakaian.id !== this.state.id)
                .map((filterPakaian) => {
                    return filterPakaian
            })

            this.setState({
                listPakaian: [
                    ...pakaianNotSelected,
                    {
                        id: this.state.listPakaian.length+1,
                        name: this.state.name,
                        price: this.state.price,
                        description: this.state.description
                    }
                ]
            })
        }

        this.setState({
            name: "",
            price: 0,
            description: ""
        })
    }

    editData = (id) => {
        const pakaianSelected = this.state.listPakaian
         .filter((pakaian) => pakaian.id === id)
         .map((filterPakaian) => {
             return filterPakaian
        })

        this.setState({
            id: pakaianSelected[0].id,
            name: pakaianSelected[0].name,
            price: pakaianSelected[0].price,
            description: pakaianSelected[0].description
        })
    }

    deleteData = (id) => {
        const newPakaian = this.state.listPakaian
            .filter((pakaian) => pakaian.id !== id)
            .map((filterPakaian) => {
                return filterPakaian
        })

        this.setState({
            listPakaian: newPakaian
        })
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <FormComponent {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    <TableComponent listPakaian={this.state.listPakaian} editData={this.editData} deleteData={this.deleteData}/>
                </div>  
            </div>
        )
    }
}
