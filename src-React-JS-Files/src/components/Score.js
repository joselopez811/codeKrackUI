import React from 'react';
import { Link } from "react-router-dom";

class IsCorrect extends React.Component {

    render() {
      return (
        <div>
          <div className='popup-content score'>
            <h2>Final Score: {this.props.score}/5</h2>
            <p>{this.props.message}</p>
            <Link to="/" >
                <button onClick={this.props.action}>
                    Next Quiz
                </button>
            </Link>
          </div>        
        </div>
      );
        
    }
  }

export default IsCorrect;