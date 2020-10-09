import React, {Component} from 'react'
import Form from "@rjsf/core";

export default class SchemaToForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            schema: {
                title: "Form Gen",
                type: "object",
                required: ["title"],
                properties: {
                    title: {type: "string", title: "Title", default: "A new task"},
                    done: {type: "boolean", title: "Done?", default: false}
                }
            }
        }
    }

    log(event){
        console.log("SchemaToForm Props: ", this.props.schema)
        console.log("SchemaToForm: ",event)
    }

    render() {
        return(
            <div className="container-fluid">
                <Form schema={this.props.schema}
                      onChange={this.log.bind(this)}
                      onSubmit={this.log.bind(this)}
                      onError={this.log.bind(this)}/>
                {/*<button type="button" className="btn btn-primary">Process</button>*/}
                {/*<button type="button" className="btn btn-success">Load Example</button>*/}
                {/*<button type="button" className="btn btn-danger">Reset</button>*/}
            </div>

        )
    }
}