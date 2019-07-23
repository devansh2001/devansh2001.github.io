import React, {Component} from 'react'
import { FaThumbsDown } from 'react-icons/fa';

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            elements: [],
            header: this.props.heading
        }
        console.log(props.data[0])
        for (let i = 0; i < props.data.length; i++) {
            this.state.elements.push(<li>{props.data[i]}</li>)
        }
    }
    
    render() {
        return (
            <div className='box'>
                <h2>{this.state.header}</h2>
                <ul>{this.state.elements}</ul>
            </div>
        )
    }
}

export default Box;