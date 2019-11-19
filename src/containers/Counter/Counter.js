import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract}  />
                <hr />
                <button onClick={() =>this.props.onStoreResults(this.props.ctr)}>Store results</button>
                <ul>
                    {this.props.storeResults.map(strResult =>(
                        <li key={strResult.id} onClick={() =>this.props.onDeleteResults(strResult.id)} >{strResult.value}</li>    
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: () => dispatch({type:actionTypes.ADD, value: 5}),
        onSubstract: () => dispatch({type: actionTypes.SUBSTRACT, value: 5}),
        onStoreResults: (result) =>dispatch({type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResults: (id) =>dispatch({type: actionTypes.DELETE_RESULT , resultId: id  })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);