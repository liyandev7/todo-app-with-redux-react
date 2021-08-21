import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_TYPE } from '../../store/action/type';

function FilterStatus() {
  const filters=['all','completed','uncompleted'];
  const status=useSelector((state)=>state.filters.status);
  const dispatch=useDispatch();

  const changeStatusFilter=(event)=>{
    let text=event.target.innerText;
    dispatch({
      type:ACTION_TYPE.CHANGE_FILTER_STATUS,
      payload:{
        status:text
      }
    })

  }
  const listFilter=filters.map((filter)=>{
    let classNameActive=filter === status ? 'selected':''
   return  <li>
      <button onClick={changeStatusFilter} className={classNameActive}>{filter}</button>
    </li>
  });

  
    return (
        <div className="filters statusFilters">
        <h5>Filter by Status</h5>
        <ul>
          {listFilter}
        </ul>
      </div>
    )
}

export default FilterStatus
