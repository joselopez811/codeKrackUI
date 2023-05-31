import React from 'react';

class IsCorrect extends React.Component {
    render() {
      return (
        <div>
          <div className='popup-content'>
            <h2>Correct</h2>
            <button onClick={this.props.action}>Next Question</button>
          </div>         
        </div>
      );        
    }
  }

export default IsCorrect;