import React,{Component} from "react";

interface Props {
    counter : number
}

class MyComponent extends Component<Props>{
    constructor(props) {
        super(props);
    }
    state = {
        counter: 1
    };

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render() {
        return(
            <div>
                props: {this.props.counter}
                state: {this.state.counter}
                <button onClick={this.handleClick}>클릭</button>
            </div>
        )
    }

}

export default MyComponent;