import React, { Component, Fragment } from 'react';
import SnackList from './SnackList';
import SnackForm from './SnackForm';

class SnackContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            snacks: [
                { name: "Capn Crunch", img_src: "https://pics.drugstore.com/prodimg/576126/900.jpg"},
                { name: "Hot Cheetos", img_src: "https://images-na.ssl-images-amazon.com/images/I/91iX-arSDcL._SY355_.jpg"},
                { name: "Bad Flatiron Coffee", img_src: "https://s3-media4.fl.yelpcdn.com/bphoto/PfZa-cW59Lua8rrmNKYEOA/o.jpg"},
                { name: "Seaweed Snax", img_src: "http://www.seasnax.com/assets/images/ss-go-class_3d_2100x3000.jpg"}
            ]
        }
    }

    addSnack = (name, img_src) => {
        let newSnack = {}
        newSnack.name = name
        newSnack.img_src = img_src
        // let updatedSnacks = Object.assign([], this.state.snacks, {[this.state.snacks.length]: newSnack})
        // this.setState({
            // snacks: updatedSnacks
        // })
        this.setState({
            snacks: [...this.state.snacks, newSnack]
        })
    }
    
    render() {
        return(
            <Fragment>
                <SnackForm addSnack={this.addSnack} />
                <SnackList snacks={this.state.snacks} />
            </Fragment>
        )
    }
}

export default SnackContainer;