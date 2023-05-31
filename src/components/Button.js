import React from 'react';

class Button extends React.Component {
    
    render() {
        return (
            <div className='button' > 
                <button onClick={this.props.onClick}>
                    {this.props.button}
                    
                </button>
                
            </div>
        );
    }
}
export default Button;
