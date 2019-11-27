import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { incrementAsync } from '../../store/actions/count.action';

const Counter = ({ counter, incrementAsync }) => {
    const onClick = () => {
        incrementAsync();
    };

    return (
        <div>
            <div>{counter}</div>
            <button onClick={onClick}>increment</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementAsync: bindActionCreators(incrementAsync, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
