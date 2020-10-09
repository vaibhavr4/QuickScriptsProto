import React from 'react'

export default class InputCardItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                {/*<img className="card-img-top"*/}
                {/*     src="https://picsum.photos/300/200"/>*/}
                <div className="card-body">
                    {this.props.contentForm}
                    {/*<h5 className="card-body">Card Body</h5>*/}
                </div>
            </div>
        )
    }
}