// todo list app component

import React from 'react';

// Recoil
import {useRecoilValue} from 'recoil';
import { todoListState } from '../../recoil/atoms';

// components
import {TodoItemCreator} from './TodoItemCreator';
import {TodoItem} from './TodoItem';

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