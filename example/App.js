import React, {Component} from "react";
import Collapse from "../src";

export default class App extends Component {
    render() {
        return (
            <div>
                <Collapse>
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

