import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  //
  const [list,setList] = React.useState([...items])
  const setItems = (key, done) => {
    const newitems = [...items]
    for(let item of newitems){
      if(item.key === key)
        item.done = done
    }
    putItems(newitems)
  }
  const pushItem = (item) => {
    const newitems = [...items,item]
    putItems(newitems)
  }
  const removeItem = (item)=> {
    const newitems =items.splice(items.indexOf(item),1)
    putItems(newitems)
  }
  const showTab = (position) => {
    if(position === 1)
      setList(items)
    if(position === 2)
      setList(items.filter(item => item.done == true))
    if(position === 3)
      setList(items.filter(item => item.done == false))
  }
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addTodo={pushItem}></Input>
      <Filter func={showTab}/>
      {list.map(item => 
        <TodoItem key={item.key} item={item} change = {setItems} remove={removeItem}/>
      )}
      <div className="panel-block">
        {list.length} items
      </div>
    </div>
  );
}

export default Todo;
