import React, {Component} from "react";
import Panel from "./Panel";

export default class Collapse extends Component {
    render() {
        return (
            <div className="easy-collapse">
                {this.renderPanels()}
            </div>
        )
    }

    renderPanels() {
        return React.Children.map(this.props.children, (element, index) => {
            if (!element) {
                return null;
            }

            const { type:elementType } = element;
            if (elementType !== Panel ) {
                console.warn("警告: Collapse 的子组件类型必须是 Collapse.Panel");
                return null;
            }
            return element;
        });
    }
}