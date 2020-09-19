// todo list app component

import React from 'react';
import {useRecoilValue} from 'recoil';
import { todoListState } from '../../recoil/atoms';

const TodoList = () => {
  const todoList= useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
          <TodoItem key= {todoItem.id} item= {todoItem} />
        ))}
    </>
  )
}

export {TodoList}