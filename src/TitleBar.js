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

        return (
            <img
                className={isOpen ? getClassName(className, "arrow-open") : getClassName(className, "arrow-close")}
                src={arrow} alt="arrow"/>
        )
    }

    onClickHandler() {
        if(this.props.onClick){
            this.props.onClick.call(this);
        }
    }
}

export default TitleBar;