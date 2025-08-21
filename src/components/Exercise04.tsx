import React, {Component} from "react";

interface userName {
    name: string;
    isBold: boolean;
}

export default class Exercise04 extends Component<object, userName>{
    constructor(props: object) {
        super(props);
        this.state = {
            name: "Slogan: Hoc code de di lam",
            isBold: false
        }
    }
    changeState = () => {
        this.setState({
            name:"Slogan: Hoc code se thanh cong. Co len",
            isBold: true,
        })
    }
    render() {
        return (
            <div>
                <p style={{fontWeight: this.state.isBold ? "bold" : "normal"}}>{this.state.name}</p>
            <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
    componentDidMount(): void {
        console.log("Component da mount xong")
    }
    shouldComponentUpdate(nextProps: object, nextState: Readonly<userName>): boolean {
        return false;
    }
    componentDidUpdate(prevProps: object, prevState: Readonly<userName>, snapshot?: any): void {
        if (prevState.name !== this.state.name) {
            console.log("State da thay doi");
        }
    }
}
