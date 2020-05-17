import React, { PureComponent } from 'react';
import { history } from 'wmkit';
import { connect } from 'react-redux';
import { increment, decrement, asyncIncrement } from './store/actions';

class Test extends PureComponent {
  increment = () => {
    const { num, incrementDataDispatch } = this.props;
    incrementDataDispatch(num + 1);
  }

  decrement = () => {
    const { num, decrementDataDispatch } = this.props;
    decrementDataDispatch(num - 1);
  }

  asyncIncrement = () => {
    const { num, asyncIncrementDataDispatch } = this.props;
    asyncIncrementDataDispatch(num + 1);
  }

  render() {
    const { num } = this.props;
    return (
      <div>
        <button onClick={() => { history.push('/'); }}>测试</button>
        <p>
          click
          {num}
          times
        </p>
        <select ref={(ele) => { this.numSelect = ele; }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
        <button onClick={() => this.asyncIncrement()}>increment async</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
      </div>
    );
  }
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  num: state.test.num,
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => ({
  incrementDataDispatch(num) {
    dispatch(increment(num));
  },
  asyncIncrementDataDispatch(num) {
    dispatch(asyncIncrement(num));
  },
  decrementDataDispatch(num) {
    dispatch(decrement(num));
  },

});

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Test);
