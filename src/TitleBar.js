import React, {Component} from "react";
import PropTypes from "prop-types";
import arrow from "./arrow.svg";
import getClassName from "./getClassName";

class TitleBar extends Component{

    static propTypes = {
        title : PropTypes.string,
        showArrow : PropTypes.bool,
        isOpen : PropTypes.bool,
        onClick : PropTypes.func,
        className : PropTypes.string
    };

    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    render() {
        const {title, className} = this.props;
        return (
            <div className={getClassName(className, "titleBar")} onClick={this.onClickHandler}>
                {this.renderArrow()}
                <p className={getClassName(className, "title")}>{title}</p>
            </div>
        )
    }

    renderArrow() {
        const {isOpen, showArrow, className} = this.props;
        if (!showArrow) return null;

        // return (
        //     <img
        //         className={isOpen ? getClassName(className, "arrow-open") : getClassName(className, "arrow-close")}
        //         src={arrow} alt="arrow"/>
        // )

        return (
            <i
                className={isOpen ? getClassName(className, "arrow-open") : getClassName(className, "arrow-close")}
                aria-label="图标：arrow" tabIndex="-1">
                <svg x="0px" y="0px" width="12px" height="6px" viewBox="0 0 12 6">
                    <path fill="#DDDDDD" stroke="none" d="
                        M 12 0.35
                        Q 11.9 0.15 11.8 0.1 11.6 0 11.45 0
                        L 0.55 0
                        Q 0.3 0 0.15 0.15 0 0.3 0 0.5 0 0.7 0.15 0.85
                        L 5.6 5.85
                        Q 5.75 6 5.95 6 6.2 6 6.35 5.85
                        L 11.85 0.85
                        Q 11.95 0.75 12 0.6 12.05 0.45 12 0.35
                        M 5.95 4.8
                        L 1.85 1 10.2 1 5.95 4.8 Z"/>

                    <path fill="#C5C5C5" stroke="none" d="
                        M 1.85 1
                        L 5.95 4.8 10.2 1 1.85 1 Z"/>
                </svg>
            </i>
        )
    }

    onClickHandler() {
        if(this.props.onClick){
            this.props.onClick.call(this);
        }
    }
}

export default TitleBar;