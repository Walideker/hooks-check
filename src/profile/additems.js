import React, { Component } from "react";

class AddItems extends Component {
    state = {
        name: '',
        rate: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })


    }
    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.AddItem(this.state)
        console.log(this.state);
    }



    render() {
        return (
            <div>
                <center>
                <form onSubmit={this.handleSubmit} >
                    <input name="name" type="name" placeholder="name" id="name" onChange={this.handleChange} />
                    <input type="number" name="rate" placeholder="movie rate" id="rate" onChange={this.handleChange} />
                    <button type="submit">Add</button>

                </form>
                </center>
            </div>
        );
    }
}

export default AddItems;