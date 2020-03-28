import React,{Component} from "react"
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component{
    private divBox = React.createRef<ScrollBox>();
    render() {
        return(
            //<ValidationSample />
            <div>
                <ScrollBox ref={this.divBox}/>
                <button onClick={() => this.divBox.current.scrollToBottom()}>
                    맨 밑으로
                </button>
            </div>

        )
    }
}

export default App;
