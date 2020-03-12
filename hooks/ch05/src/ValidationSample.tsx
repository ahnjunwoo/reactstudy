import React, { Component } from 'react';
import './validationSample.css';

interface State {
    password: string;
    clicked: boolean;
    validated: boolean;
}



class ValidationSample extends Component {
    private stepInput: React.RefObject<HTMLInputElement>;
    state: State = {
        password: '',
        clicked: false,
        validated: false,
    };
    constructor(props) {
        super(props);
        this.stepInput = React.createRef();
    }
    handleChange = e => {
        this.setState({
            password: e.target.value
        });
    };
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.stepInput.current.focus();
    };
    render() {
        return (
            <div>
                <input
                    ref={this.stepInput}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={
                        this.state.clicked
                            ? this.state.validated
                            ? 'success'
                            : 'failure'
                            : ''
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}
export default ValidationSample;
