import React  from 'react';

    function Code (props) {
        const code = props.code;
            return (
                <div className='code'>
                  <figure>                
                    <pre className='prettyprint linenums'>
                        <code>
                        {code}
                        </code>
                    </pre>
                  </figure>                   
                </div>
            );
    }
    export default Code;
    