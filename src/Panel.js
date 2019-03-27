import React, {Component} from "react";
import PropTypes from  "prop-types";

import "./easy-collapse.css";
import TitleBar from "./TitleBar";
import Content from "./Content";

class Panel extends Component{

    static propTypes = {
        title : PropTypes.string,
        showArrow : PropTypes.bool,
        isOpen : PropTypes.bool,
        height : PropTypes.number
    };

    static defaultProps = {
        title : "",
        showArrow : true,
        isOpen : true,
        height : 100
    };

    constructor(props){
        super(props);

        this.state = {
            isOpen : this.props.isOpen
        };

        this.onClickTitle = this.onClickTitle.bind(this);
    }

    render() {
        const {title, showArrow, height} = this.props;
        const {isOpen} = this.state;
        return (
            <div className="easy-collapse-panel">
                <TitleBar title={title} showArrow={showArrow} isOpen={isOpen} onClick={this.onClickTitle}/>
                <Content isOpen={isOpen} height={height}>{this.props.children}</Content>
            </div>
        )
    }

    onClickTitle() {
        this.setState({...this.state, isOpen:!this.state.isOpen});
    }
}

export default Panel;