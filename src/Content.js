import React, {Component} from "react";
import PropTypes from "prop-types";
import getClassName from "./getClassName";

class Content extends Component{
    static propTypes = {
        isOpen : PropTypes.bool,
        height : PropTypes.number,
        className : PropTypes.string
    };

    render() {
        const {className} = this.props;
        return (
            <div
                className={getClassName(className, "content")}
                style={this.getStyle()}
            >
                {this.props.children}
            </div>
        )
    }

    getStyle(){
        const {isOpen, height} = this.props;
        const style = {
            transition: "0.3s",
            transitionProperty: "all"
        };
        if(isOpen){
            style.height = height+'px';
        }
        else{
            style.height = 0;
        }
        return style;
    }
}

export default Content;