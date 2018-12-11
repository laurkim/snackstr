import React, { Component, Fragment } from 'react'; 
import { Button, Input } from 'semantic-ui-react';
import "../App.css";

class SnackForm extends Component {
    state = {
        name: '', 
        img_src: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addSnack(this.state.name, this.state.img_src)
        this.setState({
            name: '',
            img_src: ''
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Add a Snack</h2>
                <form onSubmit={this.handleSubmit} id="snack-form">
                    <Input focus placeholder="Snack Name?" type="text" value={this.state.name} name="name" onChange={this.handleChange} style={{margin: "10px 0px"}} />
                    <br />
                    <Input focus placeholder="Snack Pic?" type="text" value={this.state.img_src} name="img_src" onChange={this.handleChange} style={{margin: "10px 0px"}} />
                    <br />
                    <Button inverted color="red" style={{margin: "15px 0px"}}>Add Snack</Button>
                </form>
            </Fragment>
        )
    }
}

export default SnackForm;