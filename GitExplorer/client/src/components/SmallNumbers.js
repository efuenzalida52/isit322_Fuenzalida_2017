import React, {Component} from 'react';
import '../css/App.css';
import { Button } from 'react-bootstrap';

class SmallNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nine: props.numbers.nine,
            eight: props.numbers.eight,
            seven: props.numbers.seven,
            six: props.numbers.six,
            five: props.numbers.five,
            four: props.numbers.four,
            three: props.numbers.three,
            two: props.numbers.two,
            one: props.numbers.one,

        };

    }

    getNine = () => {
        this.setState({nine: '9'});
    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    getSeven = () => {
        this.setState({seven: '7'});
    };
    getSix = () => {
        this.setState({six: '6'});
    };
    getFive = () => {
        this.setState({five: '5'});
    };
    getFour = () => {
        this.setState({four: '4'});
    };
    getThree = () => {
        this.setState({three: '3'});
    };
    getTwo = () => {
        this.setState({two: '2'});
    };
    getOne = () => {
        this.setState({one: '1'});
    };


    render() {
        return (
            <div className='App'>
                <p>
                    state.nine: {this.state.nine}
                </p>
                <p>
                    state.eight: {this.state.eight}
                </p>
                <p>
                    state.seven: {this.state.seven}
                </p>
                <p>
                    state.six: {this.state.six}
                </p>
                <p>
                    state.five: {this.state.five}
                </p>
                <p>
                    state.four: {this.state.four}
                </p>
                <p>
                    state.three: {this.state.three}
                </p>
                <p>
                    state.two: {this.state.two}
                </p>
                <p>
                    state.one: {this.state.one}
                </p>

                <Button bsStyle='primary' id='getNine' onClick={this.getNine}>Click Me for nine</Button>
                <Button bsStyle='primary' id='getEight' onClick={this.getEight}>Click Me for eight</Button>
                <Button bsStyle='primary' id='getSeven' onClick={this.getSeven}>Click Me for seven</Button>
                <Button bsStyle='primary' id='getSix' onClick={this.getSix}>Click Me for six</Button>
                <Button bsStyle='primary' id='getFive' onClick={this.getFive}>Click Me for five</Button>
                <Button bsStyle='primary' id='getFour' onClick={this.getFour}>Click Me for four</Button>
                <Button bsStyle='primary' id='getThree' onClick={this.getThree}>Click Me for three</Button>
                <Button bsStyle='primary' id='getTwo' onClick={this.getTwo}>Click Me for two</Button>
                <Button bsStyle='primary' id='getOne' onClick={this.getOne}>Click Me for one</Button>
            </div>
        );
    }

}

export default SmallNumbers;
