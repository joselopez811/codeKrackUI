import React from 'react';
import Code from './Code';
import Question from './Question';
import Button from './Button';
import '../App.css';
import IsCorrect from './IsCorrect';
import Incorrect from './Incorrect';
import Header from './Header';
import Score from './Score';
import Loading from './Loading';

    class Quiz extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            loading: true,
            quiz: null,
            correct: false,
            incorrect: false,
            quizDone: false,
            score: 0,
            counter: 0,            
            seconds: 30
        };
        this.closeModal = this.closeModal.bind(this);
        this._correct = this._correct.bind(this);
        this._incorrect = this._incorrect.bind(this);
        this.tick = this.tick.bind(this);
        this.restart = this.restart.bind(this);
    }
    closeModal() {
        this.setState({ 
            correct: false,
            incorrect: false,
            seconds: 30,
            counter: this.state.counter + 1 
            });
        this.timer = setInterval(this.tick, 1000);        
    }
    _correct() {
        clearInterval(this.timer);
        this.setState({
            correct: true,
            score: (this.state.score + 1)
        });
        if(this.state.counter >= 4) {
            this.setState({
                quizDone: true
            });
        }
    }
    _incorrect() {
        this.setState({
            incorrect: true,
        });
        if(this.state.counter >= 4) {
            this.setState({
                quizDone: true
            });
        }
    }
    
    tick(){
        if (this.state.seconds > 0) {
            this.setState({seconds: this.state.seconds - 1})
        } else {
            clearInterval(this.timer);
            this._incorrect();
        }
    }

    async componentDidMount() {
        const url = "/get";
        const response = await fetch(url, );
        const data = await response.json();
        this.setState({quiz: data, loading: false});
        this.timer = setInterval(this.tick, 1000);
    }

    restart() {
        window.location.reload();
    }

    render() { 

    return (
        
        <div className='body'>
            <Header/>
            
           { this.state.loading || !this.state.quiz[this.state.counter] ? (

                <div>
                    {this.state.quizDone ? (
                    <div className="popup"><Score action={this.restart.bind(this)} score={this.state.score}/></div>
                    ) : null}
                    
                    <Loading/>
                </div>
               
               
                ) : ( 
                <div className="container">
                    
                    {this.state.quizDone ? (<div className="popup"><Score action={this.restart.bind(this)} score={this.state.score}/></div>) : null}
                        {this.state.correct ? (<div className='popup'><IsCorrect action={this.closeModal.bind(this)}/></div>) : null}
                        {this.state.incorrect ? (<div className='popup'><Incorrect action={this.closeModal.bind(this)}/></div>) : null}
                        
                        <div className="toprow">
                        
                            <div className="timer-div"><h4 className="timerr">{this.state.seconds}</h4></div>
                            <div className="Column questionasnwer">
                            <h3>Question{"\t\t\t\t" + (this.state.counter + 1) + "/5"}</h3>
                            <div><Question question={this.state.quiz[this.state.counter].question} /></div>
                            <div className="answers"> 
                                <Button 
                                    button={this.state.quiz[this.state.counter].answers[0].answer} 
                                    onClick={this.state.quiz[this.state.counter].answers[0].id 
                                        === this.state.quiz[this.state.counter].answers[0].answerId 
                                    ? (this._correct.bind(this)) : ((this._incorrect).bind(this))   }/>   

                                <Button button={this.state.quiz[this.state.counter].answers[1].answer}
                                        onClick={  this.state.quiz[this.state.counter].answers[1].id === this.state.quiz[this.state.counter].answers[1].answerId 
                                            ? (this._correct).bind(this) : (this._incorrect).bind(this)   }/>

                                <Button button={this.state.quiz[this.state.counter].answers[2].answer}
                                        onClick={  this.state.quiz[this.state.counter].answers[2].id === this.state.quiz[this.state.counter].answers[2].answerId 
                                            ? (this._correct).bind(this) : (this._incorrect).bind(this)   }/>

                                <Button button={this.state.quiz[this.state.counter].answers[3].answer}
                                        onClick={  this.state.quiz[this.state.counter].answers[3].id === this.state.quiz[this.state.counter].answers[3].answerId 
                                            ? (this._correct).bind(this) : (this._incorrect).bind(this)   }/>

                                <Button button={this.state.quiz[this.state.counter].answers[4].answer}
                                        onClick={  this.state.quiz[this.state.counter].answers[4].id === this.state.quiz[this.state.counter].answers[4].answerid 
                                            ? (this._correct).bind(this) : (this._incorrect).bind(this)   }/>
                            </div>
                            <div className='score-keep'>
                            <h4>Score: {this.state.score} </h4>
                            </div>
                        </div>
                                                
                            <div className="Column">
                                <h3>Code</h3>
                                <Code code={this.state.quiz[this.state.counter].code.code}/>
                            </div> 
                        </div>                   
                    </div>
                )
                
        }
        </div>   
                
    );
    }
}   
        
    export default Quiz;