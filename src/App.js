import React, {Component} from 'react';
import Circle from "./Components/Circle/Circle";

class App extends Component {
    state = {
        numbers: []
    };
    generateNum = () => {

        let array = [];
        for (let i = 0; i < 5;) {
            const number = Math.floor(Math.random() * (36 - 5)+5);
            if (array.includes(number)) {
                continue;
            } else {
                array.push(number);
                i++
            }

        }
        let stateArray = [...this.state.numbers];
        stateArray = array;
        this.setState({
            numbers: stateArray.sort((a,b) => a-b)
        })

    };

    render() {
        return (
            <div className="App">
                {this.state.numbers.map((num,id)=>{
                    return <Circle key={id} number={num} />
                })}
                <button onClick={this.generateNum}>
                    generate
                </button>
            </div>
        )
    }
}

export default App;
