import React, {Component} from "react";
import PropTypes from  "prop-types";
import Transition from "easy-transition";

import "./easy-collapse.css";
import TitleBar from "./TitleBar";
import Content from "./Content";
import getClassName from "./getClassName";

class Panel extends Component{

    static propTypes = {
        title : PropTypes.string,
        showArrow : PropTypes.bool,
        isOpen : PropTypes.bool,
        height : PropTypes.number,
        className : PropTypes.string,
        unmountOnClose : PropTypes.bool
    };

    static defaultProps = {
        title : "",
        showArrow : true,
        isOpen : true
    };

    constructor(props){
        super(props);

        this.state = {
            isOpen : this.props.isOpen
        };

        this.firstRender = true;

        this.onClickTitle = this.onClickTitle.bind(this);
    }

    componentDidMount() {
        this.firstRender = false;
    }

    render() {
        const {title, showArrow, height, className, unmountOnClose, children, id} = this.props;
        const {isOpen} = this.state;
        const {firstRender} = this;
        console.log(id)
        return (
            <div className={getClassName(className, "panel")} key={"abcd"}>
                <TitleBar className={className} title={title} showArrow={showArrow} isOpen={isOpen} onClick={this.onClickTitle}/>
                <Transition in={isOpen} appear={!firstRender} timeout={300} unmountOnExit={unmountOnClose}>
                    <Content className={className} height={height} timeout={300}>{children}</Content>
                </Transition>
            </div>
        )
    }

    onClickTitle() {
        this.setState({...this.state, isOpen:!this.state.isOpen});
    }
}

export default Panel;