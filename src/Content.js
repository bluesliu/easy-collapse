import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import getClassName from "./getClassName";

import Transition from "easy-transition";
const status = Transition.Status;

class Content extends Component{
    static propTypes = {
        height : PropTypes.number,
        className : PropTypes.string,
        timeout: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.contentHeight = -1;
    }

    componentDidMount() {
        this.contentHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    }

    render() {
        const {className, children} = this.props;
        return (
            <div
                className={getClassName(className, "content")}
                style={this.getStyle()}
            >
                {children}
            </div>
        )
    }

    getStyle() {
        const style = {};
        const {transitionStatus, timeout} = this.props;
        let {height} = this.props;
        if(height===undefined){
            height = this.contentHeight;
        }

        switch (transitionStatus) {
            case status.enter:
                style.height = 0;
                break;

            case status.entering:
                style.height = height;
                style.transitionProperty = 'all';
                style.transition = `${timeout/1000}s`;
                break;

            case status.entered:
                style.height = height;
                break;

            case status.exit:
                style.height = height;
                break;

            case status.exiting:
                style.height = 0;
                style.transitionProperty = 'all';
                style.transition = `${timeout/1000}s`;
                break;

            case status.exited:
                style.height = 0;
                break;
        }

        return style;
    }

}

export default Content;