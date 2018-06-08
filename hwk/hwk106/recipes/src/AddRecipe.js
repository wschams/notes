import React, { Component } from 'react';

export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", instructions: "" };
    }

    handleClick = () => {
        this.props.addRecipe(this.state);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        /*let stateChange = {}
        stateChange[name] = value;
        this.setState(stateChange);*/
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        //alert('A name was submitted: ' + this.state.value);
        console.log("You submitted", this.state.name, this.state.instructions);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </label>
                <label>
                    Instructions:
                    <input type="text" name="instructions" value={this.state.instructions} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" onClick={this.handleClick} />
            </form>
        );
    }
}