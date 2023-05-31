import React from 'react';

    function QuestionCount(props) {
        return (
            <div className="questionCount">
                Question <span>{props.counter}</span>
                of <span>{props.total}</span>
            </div>
        );
    }

    // QuestionCount.propTypes = {
    //     counter: React.proptypes.number.isRequired,
    //     total: React.proptypes.number.isRequired
    // };

    export default QuestionCount;