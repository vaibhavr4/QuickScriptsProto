import React, {Component} from 'react'
import OptionList from "./OptionList";

const OptionsPane = ()=> {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarText">
                    <OptionList/>
                </div>
            </nav>
        )
}

export default OptionsPane
