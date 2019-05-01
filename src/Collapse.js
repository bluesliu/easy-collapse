import React, {Component} from "react";
import PropTypes from "prop-types";

import Panel from "./Panel";
import getClassName from "./getClassName";

export default class Collapse extends Component {

    static propTypes = {
        className : PropTypes.string,
        unmountOnClose : PropTypes.bool,
    };

    static defaultProps = {
        className : "easy-collapse",
        unmountOnClose : true
    };

    render() {
        const {className} = this.props;
        return (
            <div className={getClassName(className)}>
                {this.renderPanels()}
            </div>
        )
    }

    renderPanels() {
        const {className, unmountOnClose} = this.props;
        return React.Children.map(this.props.children, (element, index) => {
            if (!element) {
                return null;
            }

            const { type:elementType } = element;
            if (elementType !== Panel ) {
                console.warn("警告: Collapse 的子组件类型必须是 Collapse.Panel");
                return null;
            }

            const {key} = element;
            console.log("key:",key)
            const oldProps = element.props;
            const newProps = {
                id : key===undefined?index:key,
                key : key===undefined?index:key,
                className : className,
                unmountOnClose : unmountOnClose
            };
            const mergeProps = Object.assign({}, oldProps, newProps);

            return element;
        });

        // const list = [];
        // for (let i = 0; i < children.length; i++) {
        //     const element = children[i];
        //     const {key} = element;
        //     console.log("key:",key)
        //     const oldProps = element.props;
        //     const newProps = {
        //         key : key===undefined?i:key,
        //         className : className,
        //         unmountOnClose : unmountOnClose
        //     };
        //     const mergeProps = Object.assign({}, oldProps, newProps);
        //     list.push(React.cloneElement(element, mergeProps));
        // }

        // return list;
    }
}