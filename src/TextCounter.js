import React, {Component} from 'react';

class TextCounter extends Component{
    static defaultProps = {
        limit: 15
    }
    constructor(props){
        super(props);
        this.state={
            totalChars:0,
            text: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const element = event.target;
        let text= element.value;
        if(text.length <= this.props.limit){
            this.setState({
                totalChars: text.length,
                text: text
            });
        }
    }


    render(){
        const {state, props} = this;
        return (
        <div className="row">
            <h1>Meu Contador</h1>
            <textarea rows={5} onChange={this.handleChange} value={state.text} />
            <div className="row"><strong>Total:</strong>{state.totalChars}/{props.limit}</div>
        </div>
        )
    }
}
export default TextCounter;