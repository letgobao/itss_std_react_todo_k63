import React, { useState } from 'react';
import {getKey} from "../lib/util";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {addTodo} ) {
  const addNew = (text) => {
    let newItem = {key: getKey(), text : text, done : false }
    addTodo(newItem)
  }
  return (
    <div className="panel-block">
      <input onKeyPress={e=>{
      if(e.key === 'Enter')
        addNew(e.target.value)}} className="input is-info" type="text" placeholder="New Todo Item"/>
    </div>
  );
}

export default Input;
