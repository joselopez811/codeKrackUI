import React from 'react';
import Button from './Button';
// import logo from './logo.svg';

    class Answers extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true,
                obj: [],
                answers: [],
                correct: false
            };
            // this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit (e) {
            console.log("this is e " + e.target.value.id);
            e.preventDefault();
            console.log("this is e " + e.target.value);

            this.setState({answer: e.target.answer});
            console.log("this is this.answer " + this.answer);
            fetch(`/isCorrect/${this.answer}`)
            .then(response => response.json())
            .then(result => this.setState({correct: result, isLoading: false}));
          }

         componentDidMount() {
            fetch(`/getAnswers`)
              .then(response => response.json())
              .then(result => this.setState({answers: result, isLoading: false}));
            //   .catch(() => this.props.history.push('/'));
           console.log("compDIDMOUNT " + this.response  )
          } 
          handleClick = () => {
            console.log('this is:', this);
          }
        render() {
            if(this.isLoading) {
                console.log("loading");
                return <p>Loading...</p>;
            }
            return (
                <div className='answers'> 
               
                <div className="container">
                <div className="row mt-5">
                <div className="col-sm-12">

                    <Button answers={this.answers} />

                </div>
                </div>
                </div>
                                            
                </div>
                
            );
        }
    }
    export default Answers;