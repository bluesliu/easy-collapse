import React, {Component} from "react";
import PropTypes from "prop-types";
import arrow from "./arrow.svg";

class TitleBar extends Component{

    static propTypes = {
        title : PropTypes.string,
        showArrow : PropTypes.bool,
        isOpen : PropTypes.bool,
        onClick : PropTypes.func
    };

    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    render() {
        const {title} = this.props;
        return (
            <div className="easy-collapse-titleBar" onClick={this.onClickHandler}>
                {this.renderArrow()}
                <p className="title">{title}</p>
            </div>
        )
    }

    renderArrow() {
        const {isOpen, showArrow} = this.props;
        if (!showArrow) return null;

        return (
            <img
                className={isOpen ? "arrow-open" : "arrow-close"}
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