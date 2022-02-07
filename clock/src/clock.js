import react from "react";

class Clock extends react.Component {
    constructor(props) {
        super(props);
        
        this.state = {time: new Date().toLocaleString()};
        this.tick = this.tick.bind(this);
    }
    
    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState( 
            {time: new Date().toLocaleString()}
        );
    }

    render() {
        return <h1> {this.state.time} </h1>
    }
}

export default Clock;