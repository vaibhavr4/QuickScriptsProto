import React, {Component} from 'react'
import OptionListItem from "./OptionListItem";
import AppService from "../services/AppService";
import {BrowserRouter as Router} from "react-router-dom";

export default class OptionList extends Component {

    constructor(props) {
        super(props);
        this.AppService = AppService.instance;
        this.state = {
            scripts:[],
            option:{title:''},
            optionsList: [
                {title: '1 - Wiki iGrapher', id: 123},
                {title: '2 - Jsonify', id: 234},
                {title: '3 - Grepper', id: 345},
                {title: '4 - Script4', id: 456},
                {title: '5 - Script5', id: 567},
                {title: '6 - Script6', id: 678},]
        };
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createOption = this.createOption.bind(this)
    }

    componentDidMount() {
        this.AppService.findAllScripts().then(scripts=>{
            console.log("Api: ",scripts)
            this.setState({scripts:scripts})
        })
    }

    titleChanged(event) {
        console.log(event.target.value)
        this.setState({option:{title:event.target.value}})
    }
    //
    // createOption() {
    //     console.log("button",this.state.option)
    //     let newOption = this.state.option
    //     let updatedOptionsList = this.state.optionsList.concat(newOption)
    //     this.setState({optionsList: updatedOptionsList})
    // }

    renderListOfScripts() {
        return this.state.scripts.map(script=>{
            return <OptionListItem title={script.title} key={script.id}/>
        })
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                        <input className="form-control"
                               onChange={this.titleChanged}
                               value={this.state.option.title}
                               placeholder="title"/>
                        <br/>
                    <ul className="list-group">
                        {this.renderListOfScripts()}
                    </ul>
                </div>
            </Router>

        );
    }
}