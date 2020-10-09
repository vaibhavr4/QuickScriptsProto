import React, {Component} from 'react'
import InputCardItem from "./InputCardItem";
import IGrapherInput from "../WikiGrapherComponent/IGrapherInput";
import {Button} from "react-bootstrap";
import SchemaToForm from "../FormComponents/SchemaToForm";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import HelloWorld from "../hello";
import AppService from "../services/AppService";
import OptionListItem from "../OptionComponents/OptionListItem";
import OutputCardItem from "./OutputCardItem";

export default class InputCardDeck extends Component {
    constructor(props) {
        super(props);
        this.AppService = AppService.instance;
        this.selectScript = this.selectScript.bind(this)
        this.state = {
            scriptId:'',
            scripts: {},
            script:{
                id: 1,
                title: '1 - Wiki iGrapher',
                input:''
            }
        }
    }

    componentDidMount() {
        this.selectScript(this.props.match.params.scriptId);
        this.getScriptById(this.props.match.params.scriptId);
    }

    selectScript(scriptId) {
        this.setState({scriptId: scriptId});
    }

    componentWillReceiveProps(newProps) {
        this.selectScript(newProps.match.params.scriptId);
        this.getScriptById(newProps.match.params.scriptId);
    }

    getScriptById(scriptId) {
       this.AppService.findScriptById(scriptId).then((script) =>{
           console.log("Fetched Script: ",script)
           this.setState({scripts:script})
       })
    }

    renderListOfScripts() {
        // return this.state.scripts.map(script=>{
            return (
                // <div>
                //     <Router>
                //         <Route path={`/${script.title}`} render={(props)=>(
                            <InputCardItem contentForm={<SchemaToForm schema={this.state.scripts} key={this.state.scripts.id}/>}/>
                //         )}/>
                //     </Router>
                // </div>)
        // })
        // console.log("Penetrate: ", )
        // return this.state.optionsList
        //     .map(option => {
        //         return <OptionListItem title={option.title} key={option.id}/>
        //     });
            )
    }

    // componentDidMount() {
    //     this.AppService.findAllScripts().then(scripts=>{
    //         console.log("Card Deck: ",scripts)
    //         this.setState({scripts:scripts})
    //     })
    // }
    
    render() {
        return (
            <div className="card-deck">
                {this.renderListOfScripts()}
                <OutputCardItem contentForm={<SchemaToForm/>}/>
                {/*<div className="card-deck">*/}
                {/*    /!*<InputCardItem title={<SchemaToForm/>}/>*!/*/}
                {/*    /!*<InputCardItem title={<SchemaToForm/>}/>*!/*/}
                {/*    <Router>*/}
                {/*        <Route path='/Wiki iGrapher' render={(props)=>(*/}
                {/*            <InputCardItem {...props} contentForm={<SchemaToForm scriptName="Wiki iGrapher"/>}/>*/}
                {/*        )}/>*/}
                {/*    </Router>*/}
                {/*    /!*<InputCardItem title={<SchemaToForm/>}/>*!/*/}
                {/*    /!*<InputCardItem title='Output' text='Output'/>*!/*/}
                {/*</div>*/}
                {/*<IGrapherInput/>*/}
                {/*<Button value="Input"/>*/}
                {/*<button type="button" className="btn btn-primary">Process</button>*/}
                {/*<button type="button" className="btn btn-success">Load Example</button>*/}
                {/*<button type="button" className="btn btn-danger">Reset</button>*/}
            </div>
        );
    }
}