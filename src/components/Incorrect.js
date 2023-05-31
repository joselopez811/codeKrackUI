import React from 'react';

class Incorrect extends React.Component {
    render() {
      return (
        <div>
          <div className='popup-content incorrect'>
            <h1>Incorrect</h1>
            <h2>Learn Java at GCU!</h2>
            <p><a href="https://www.gcu.edu/degree-programs/java-programming-certificate">Sign Up</a></p>
            <button onClick={this.props.action}>Next Question</button>
          </div>         
        </div>
      );
        
    }
  }

export default Incorrect;