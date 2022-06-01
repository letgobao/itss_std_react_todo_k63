/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item,change,remove}) {
  const changeStatus = (e)=> {
    change(item.key,e.target.checked)
  }
  const removeTodo = () => {
    console.log(item)
    remove(item)
  }
  return (
    <label className="panel-block" style={{display:'flex',justifyContent:'space-between'}} >
      <div>
        <input type="checkbox" defaultChecked={item.done} onChange={e=>changeStatus(e)}/>
      <span style={{color:item.done?'#888888':'#000000'}}>{item.text}</span>
      </div>      
      <a style={{fontSize: '1em'}}onClick={removeTodo}>削除する</a>
    </label>
  );
}

export default TodoItem;