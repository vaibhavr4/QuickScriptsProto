import React, {Component} from 'react'

export default class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0'
        }
    }

    changeValue = (newValue) => {
        this.setState({ value: newValue });
    }

    render() {
        return(
            <NumberInput value={this.state.value} onChange={this.changeValue} />
        )
    }
}
