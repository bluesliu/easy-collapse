import React, {Component} from "react";
import Collapse from "../src";
import "./custom-style.css";

export default class App extends Component {
    render() {
        return (
            <div>
                <Collapse className="custom-style">
                    <Collapse.Panel title={"Panel 1"}>
                        content
                    </Collapse.Panel>
                    <Collapse.Panel title={"Panel 2"}>
                        content
                    </Collapse.Panel>
                </Collapse>
            </div>
        )
    }
}

