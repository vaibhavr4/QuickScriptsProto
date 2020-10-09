import React from 'react';
import HelloWorld from "../hello";
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom'
import {NavItem} from "react-bootstrap";
import {Sidenav, Toggle, Icon, Nav} from 'rsuite';
import { LinkContainer } from 'react-router-bootstrap'

export default class OptionListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinkContainer to={`/scripts/${this.props.scriptId}`}>
                <Nav.Item icon={<Icon icon="dashboard" />}>
                    {this.props.scriptName}
                </Nav.Item>
            </LinkContainer>
        );
    }
}