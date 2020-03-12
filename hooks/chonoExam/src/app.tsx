import * as React from "react";
import {Component} from "react";
import MyComponent from "./MyComponent";
class App extends Component{
    state = {
        counter: 1,
    };
    constructor(props) {
        //컴포넌트가 새로 만들어질때 마다 이 함수가 호출
        super(props);
    }

    componentDidMount(): void {
        console.log("componentDidMount!!");
    }

    render() {
        return (
            <div>
                <MyComponent counter={this.state.counter}/>
            </div>
        );
  }

}

export default App;
