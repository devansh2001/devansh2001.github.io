import React, {Component} from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            elements: []
        }
        for (var element in this.state.data) {
            this.state.elements.push(<li>{element}</li>)
        }
    }
    
    render() {
        return (
            <div className='box'>
                <h1>Now</h1>
                <ul>{this.state.elements}</ul>
            </div>
        )
    }
}

export default Box;