import React  from 'react';

    function Code (props) {
        const code = props.code;
            return (
                <div className='code'>
                                       
                    <pre >
                        {code}
                    </pre>                   
                </div>
            );
    }
    export default Code;
    