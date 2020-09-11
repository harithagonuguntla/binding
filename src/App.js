import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: 'React'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <br />
        <button onClick={() => this.changeName('Awesome React :(')}>Change state using Anon Function</button>
        <button onClick={this.changeName.bind(this, 'Awesome React :)')}>Change state using bind Function</button>
        <br /> <br />
        <input type="text" value={this.state.name} onChange = {this.changeNameFromInput}/>
        <br /> <br />
        <div>{this.state.name}</div>
      </div>
    )
  }
}

export default App;
