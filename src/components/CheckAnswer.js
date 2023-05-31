import React from 'react';

    class CheckAnswer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                answer: super(props)
            };
           
        }
        
         componentDidMount() {
            fetch(`/isCorrect/${this.answer}`)
              .then(response => response.json())
              .then(result => this.setState({obj: result, isLoading: false}));
            //   .catch(() => this.props.history.push('/'));
            
          }

        render() {
            // const {obj, isLoading} = this.state;
            if(this.state.isLoading) {
                return <p>Loading...</p>;
            }

            return (
                <div className='checkanswer'> 
                
                   <p>hello</p>
                                                    
                </div>
            );
        }
    }

	export default CheckAnswer;