import React from 'react';

function Question (props) {
    const question = props.question;
        return (
            <div className='question'> 
                <p>
                    {question}  
                </p>                                                             
            </div>
        );   
}
export default Question;