import React, {Component} from 'react'
import NumericInput from 'react-numeric-input';

export default class IGrapherInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:{
                period:'',
                interval:''
            }
        }
        this.periodChanged = this.periodChanged.bind(this)
        this.intervalChanged = this.intervalChanged.bind(this)
    }

    periodChanged(event) {
        this.setState({time:{period:event.target.value}})
    }

    intervalChanged(event) {
        this.setState({time:{interval:event.target.value}})
    }

    render() {
        return(
            // <div>
            //     <NumericInput min={0} max={100} onChange={this.intervalChanged}/>
            // </div>
            <div className="input-group">
                <NumericInput min={0} max={100} value={0}  style={{
                    wrap: {
                        background: '#E2E2E2',
                        boxShadow: '0 0 1px 1px #fff inset, 1px 1px 5px -1px #000',
                        padding: '2px 2.26ex 2px 2px',
                        borderRadius: '6px 3px 3px 6px',
                        fontSize: 32
                    },
                    input: {
                        borderRadius: '4px 2px 2px 4px',
                        color: '#988869',
                        padding: '0.1ex 1ex',
                        border: '1px solid #ccc',
                        marginRight: 4,
                        display: 'block',
                        fontWeight: 100,
                    },
                    'input:focus' : {
                        border: '1px inset #69C',
                        outline: 'none'
                    },
                    arrowUp: {
                        borderBottomColor: 'rgba(66, 54, 0, 0.63)'
                    },
                    arrowDown: {
                        borderTopColor: 'rgba(66, 54, 0, 0.63)'
                    }
                }}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary dropdown-toggle" id="dropdownMenuButton" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item">Days</a>
                            <a className="dropdown-item">Months</a>
                            <a className="dropdown-item">Year</a>
                            <div role="separator" className="dropdown-divider"/>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
            </div>
        )
    }
}