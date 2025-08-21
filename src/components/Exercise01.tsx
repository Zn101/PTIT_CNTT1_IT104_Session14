import React, {Component} from "react";

interface userName {
    name: string;
}

export default class Exercise01 extends Component<object, userName>{
    constructor(props: object) {
        super(props);
        this.state = {
            name: "Nguyen A"
        }
    }
    render() {
        return (
            <h1>{this.state.name}</h1>
        )
    }
    componentDidMount(): void {
        console.log("Component da mount xong")
    }
}
