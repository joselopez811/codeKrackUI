import React from 'react';
import Button from './Button';
import Question from './Question';
import Code from './Code';

class Loading extends React.Component {
  

    render() {
      return (
        <div>
            <div className="container">
                <div className="counter"><span>90</span></div>
                <div className="toprow">
                    <div className="Column questionasnwer">
                        <h3>Question</h3>
                        <div><Question question={"Loading"}/></div>
                        <div className="answers"> 
                            <Button button={"Loading"} /> 
                            <Button button={"Loading"} /> 
                            <Button button={"Loading"} /> 
                            <Button button={"Loading"} /> 
                            <Button button={"Loading"} />        
                        </div>
                    </div>                        
                    <div className="Column">
                        <h3>Code</h3>
                        <Code code={'Loading...'}/>
                    </div> 
                </div>                   
            </div>         
        </div>
      );
        
    }
  }

export default Loading;