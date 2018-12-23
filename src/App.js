import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';


const Bob = ({ text , slow, data }) => {  
  if(slow === true ) {
    const newdata = data.toLowerCase();
    return (
        <div>is slow {newdata}</div>
    ) 
  } else {
    return (
      <div>is not</div>
    )
  }
}
class App extends Component {
  state = {
    title: "Hello there. How are you?",
    body: "There was a dog and it was brown.",
    postsCount: 18,
    data: 'InformationGateraSDADSAB'
  }
  upVote = () => {
    this.setState({
      postsCount: this.state.postsCount + 1,
    })
  }
  downVote = () => {
    this.setState({
      postsCount: this.state.postsCount -1,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Display 
             {...this.state}
             upVote={this.upVote}
             downVote={this.downVote}
             style={{
               paddingBottom: 40,
               height:'100%'
             }}
          />
        
          {Bob({text: "hiiii", slow: true, data: this.state.data})}
        </header>
      </div>
    );
  }
}

export default App;
