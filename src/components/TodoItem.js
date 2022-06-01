/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item,change}) {
  const changeStatus = (e)=> {
    change(item.key,e.target.checked)
  }
  return (
    <label className="panel-block" >
      <input type="checkbox" defaultChecked={item.done} onChange={e=>changeStatus(e)}/>
            <span style={{color:item.done?'#888888':'#000000'}}>{item.text}</span>
    </label>
  );
}

export default TodoItem;