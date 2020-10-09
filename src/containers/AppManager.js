import React, {Component} from 'react'
import InputCardDeck from "../InputComponents/InputCardDeck";
import OptionsPane from "../OptionComponents/OptionsPane";
import SideNavPane from "../OptionComponents/SideNavPane";
import {BrowserRouter as Router, Route} from 'react-router-dom'
const AppManager = () => {
        return (
            <Router>
                <div className="container-fluid">
                    <h1> App Manager</h1>
                    <br/>
                    <div className= "row">
                        <div className="col-2">
                            <Route path="/"
                                   component={SideNavPane}>
                            </Route>
                        </div>
                        <div className="col-10">
                            <Route path="/scripts/:scriptId"
                                   component={InputCardDeck}>
                            </Route>
                        </div>
                    </div>
                </div>
            </Router>
        )
}

export default AppManager