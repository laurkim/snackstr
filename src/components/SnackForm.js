import React, { Component } from 'react'; 
import { Button } from 'semantic-ui-react';

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
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Snack Name?" style={{margin: "50px"}}/>
                <input type="text" value={this.state.img_src} name="img_src" onChange={this.handleChange} placeholder="Snack Image?" style={{ margin: "50px" }} />
                <Button inverted color="blue">Add Snack</Button>
            </form>
        )
    }
}

export default SnackForm;