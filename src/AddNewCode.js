import React from 'react';
import Header from './components/Header';

class AddNewCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form: {  
                language: 'java',                 
                question: '',
                code: '',
                answer: 1,  
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: '',
                answer5: '',
            }  
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleChange(evt) {

        evt.persist();
        let store = this.state;
        store.form[evt.target.name] = evt.target.value;
        this.setState(store);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        debugger;
        fetch('/addQuestion', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(this.state.form) 
          })
          .then(res => res.json()
          )
          .catch(err => console.log(err));
          // this.state.form
          console.log(JSON.stringify(this.state.form));
      }
      

    render() {
      return (
        <div className='body'>
            <Header />
            <div className="container">
                <div className="toprow">
                    <div className="Column questionasnwer">
                        <h3 className='get-krackin'>Get Krackin</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label>Answer</label>
                            <select id='language' name='language' onChange={evt => this.handleChange(evt)}>
                              <option value={"java"} name='java' id='java'>Java</option>
                                <option value={"c"} name='c' id='c'>C#</option>
                                <option value={"kotlin"} name='kotlin' id='kotlin'>Kotlin</option>
                                <option value={"javascript"} name='javascript' id='javascript'>JavaScript</option>
                            </select>
                            <label>
                            Question:
                            <input type="text" name='question' id='question' value={this.state.question} onChange={evt => this.handleChange(evt)} />
                            </label>

                            <div className="answers">
                           
                            <label>
                            Option 1:
                            <input type="text" name='answer1' id='answer1' value={this.state.answer1} onChange={evt => this.handleChange(evt)} />
                            </label>
                            <label>
                            Option 2:
                            <input type="text" name='answer2' id='answer2' value={this.state.answer2} onChange={evt => this.handleChange(evt)} />
                            </label>
                            <label>
                            Option 3:
                            <input type="text" name='answer3' id='answer3' value={this.state.answer3} onChange={evt => this.handleChange(evt)} />
                            </label>
                            <label>
                            Option 4:
                            <input type="text" name='answer4' id='answer4' value={this.state.answer4} onChange={evt => this.handleChange(evt)} />
                            </label>
                            <label>
                            Option 5:
                            <input type="text" name='answer5' id='answer5' value={this.state.answer5} onChange={evt => this.handleChange(evt)} />
                            </label>
                            </div>
                            <label>Answer</label>
                            <select id='answer' name='answer' onChange={evt => this.handleChange(evt)}> 
                                <option value={1} id='answer' name='answer'>Option 1</option>
                                <option value={2} id='answer' name='answer'>Option 2</option>
                                <option value={3} id='answer' name='answer'>Option 3</option>
                                <option value={4} id='answer' name='answer'>Option 4</option>
                                <option value={5} id='answer' name='answer'>Option 5</option>
                            </select>
                            <input type="submit" value="Submit" />
                        </form>
                       </div> 
                       <div className='Column'>
                         
                            <label>
                            <h3>Code Snippet</h3>
                            
                            <textarea className='code' type="text" name='code' id='code' cols="80" rows="16" value={this.state.code} onChange={evt => this.handleChange(evt)}>
                             
                            </textarea>
                            </label>
                            </div>       
                </div>
                                   
            </div> 

        </div>
      );
        
    }
  }

export default AddNewCode;