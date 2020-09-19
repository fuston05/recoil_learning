// Recoil Selectors

import { selector } from 'recoil';
import {count} from './atoms';

const isEvenCount = selector({
  key: 'evenCount',
  get: ({ get }) => {
    const state = get(count);
    return state % 2 === 0;
  }
});

export {
  isEvenCount,
}