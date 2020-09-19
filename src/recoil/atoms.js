// Recoil Atoms (state)

import { atom } from 'recoil';

// *************************************
// ******** counter app atoms **********
const count = atom({
  key: 'count',
  default: 0
});

// *************************************
// ******* todo list app atoms *********
const todoListState= atom({
  key: 'todoListState',
  default: [],
});




export {
  count,
  todoListState,
}