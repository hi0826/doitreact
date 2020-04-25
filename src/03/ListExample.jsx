import React, { Component } from 'react';

class ListExample extends Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>가격 : {price}원</div>);
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    //return (
    //  <div>
    //    <label>가격 목록</label>
    //    {prices}
    //    {todoList.map((todo, i) => (
    //      <div key={`tl_${i}`}>{todo.taskName}</div>
    //    ))}
    //  </div>
    //);
    return [1, 2, 3].map((num) => (
      <input type="radio" name="option1" key={`${num}`} value={num} label={`${num}개`} />
    ));
  }
}

export default ListExample;
