import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
function Shop() {
  const dispatch = useDispatch();
  const {WithdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch)
  console.log(actionCreators);
  console.log(WithdrawMoney,depositMoney);
  return (
    <div>
        <h1>Withdraw/Deposit Money</h1>
      <button className='btn btn-primary mx-2' onClick={()=>{WithdrawMoney(100)}}>-</button>
      Update Balance
      <button className='btn btn-primary mx-2'   onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  );
}

export default Shop;
