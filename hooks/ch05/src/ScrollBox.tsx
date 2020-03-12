import React, {Component, createRef} from 'react';

class ScrollBox extends Component {
    private divBox = React.createRef<HTMLDivElement>();
    scrollToBottom = () => {
        const scrollHeight: number = this.divBox.current.scrollHeight;
        const clientHeight = this.divBox.current.clientHeight;
        this.divBox.current.scrollTop = scrollHeight - clientHeight;
    };

    render() {
        const style:React.CSSProperties = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };
        const innerStyle:React.CSSProperties = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        };
        return (
            <div
                style={style}
                ref={this.divBox}
            >
                <div style={innerStyle} />
            </div>
        );
    }
}
export default ScrollBox;
