import  React, {Component} from 'react';

class LatencyDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket: null,
            message: "",
            currentLatency: 0
        };
    }

    componentDidMount(){
        const ws = new WebSocket(this.props.url);

        ws.onopen = () => {
            console.log('Connection Established');
        }

        ws.onmessage = event => {
            let lt = new Date()
            this.setState({
                message: event.data,
                latency: lt - event.data
            })
        }

        this.setState({
            socket: ws
        })
    }

    render(){

        return (
            <div>
                <p>{this.state.latency}</p>
            </div>
        )
    }
}

export default LatencyDisplay;