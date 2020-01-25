import React, { Component } from 'react';
import PropTypes from 'prop-types';
const fetch = require("node-fetch");

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [

            ]
        }
        
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/players')
            .then(res => {return res.json()})
            .then(json => this.setState({data: json}))
            .catch(error => console.log(error));
    }

    displayData(){
        return this.state.data.map(obj =>(
            <div className="Player">
                <h1> {obj.name} </h1>
                <p> {obj.name} id: {obj.id} from {obj.country} with a total of {obj.searches} seaches </p>
            </div>
        ));
    }

    render() {
        return (
            <div>
                {this.displayData()}
            </div>
        );
    }
}

Player.propTypes = {

};

export default Player;