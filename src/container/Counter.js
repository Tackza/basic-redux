import React from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterControlPanel from "../component/counter/CounterControlPanel";
import { connect } from "react-redux";


function Counter(props) {

    return (
        <div>
            <CounterDisplay counter={props.ctr} />
            <CounterControlPanel
                text="Increase"
                change={props.increase}
            />
            <CounterControlPanel
                text="Decrease"
                change={props.decrease}
            />
            <CounterControlPanel
                text="Plus"
                change={props.plus}
            />
            <CounterControlPanel
                text="Minus"
                change={props.minus}
            />
            <CounterControlPanel
                text="Clear"
                change={props.clear}
            />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => { // คือการส่ง action
    return {
        increase: () => dispatch({ type: 'INCREASE' }), //วิ่งไป reducer
        decrease: () => dispatch({ type: 'DECREASE' }), //วิ่งไป reducer
        plus: () => dispatch({ type: 'PLUS', value: 100 }), //วิ่งไป reducer
        minus: () => dispatch({ type: 'MINUS', value: 100 }),
        clear: () => dispatch({ type: 'CLEAR' }) //วิ่งไป reducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);