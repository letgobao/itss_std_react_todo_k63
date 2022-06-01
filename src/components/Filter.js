import React, { useState } from 'react';
/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {func} ) {
  const [tab,setTab] = React.useState([true, false, false]);
  const handleShowAll = () => {
    setTab([true,false,false])
    func(1)
  }
  const handleShowDone = () => {
    setTab([false,true,false])
    func(2)
  }
  const handleShowNotDone = () => {
    setTab([false,false,true])
    func(3)
  }
  return (
    <div className="panel-tabs">
      <a className={tab[0] ? "is-active" : ""} onClick={handleShowAll}>すべて</a>
      <a className={tab[1] ? "is-active" : ""} onClick={handleShowDone}>未完了</a>
      <a className={tab[2] ? "is-active" : ""} onClick={handleShowNotDone}>完了済み</a>
    </div>
  );
}

export default Filter