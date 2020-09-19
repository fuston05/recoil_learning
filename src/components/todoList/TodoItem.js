// TodoItem component

import React from 'react'
import {useRecoilState} from 'recoil';

import { todoListState } from '../../recoil/atoms';

const TodoItem = ({item}) => {
  const [todoList, setTodoList]= useRecoilState(todoListState);
  const index= todoList.findIndex((listItem) => listItem === item);

  const editItemText= () => {
    
  }

  return (
    <div>

    </div>
  )
}


export { TodoItem }