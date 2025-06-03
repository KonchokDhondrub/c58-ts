import type { Action } from "./types/Action";

import type ICounterState from "./types/CounterState";

const initialState: ICounterState = {
  value: 0,
};

export default function counterReducer(state: ICounterState = initialState, action: Action): ICounterState {
  switch (action.type) {
    case "counter/plus":
      return { ...state, value: state.value + action.payload };
    case "counter/minus":
      return { ...state, value: state.value - action.payload };
    case "counter/reset":
      return { ...state, value: 0 };
    default:
      return state;
  }
}

// switch-case конструкция: Внутри функции counterReducer используется оператор switch,
// чтобы определить, какое действие следует предпринять в зависимости от типа action.type.
// case 'counter/minus': Если тип действия равен 'counter/minus',
// то выполняется вычитание значения action.payload из текущего state.value.
// case 'counter/plus': Если тип действия равен 'counter/plus',
// то выполняется сложение значения action.payload к текущему state.value.
// default: Если тип действия не совпадает ни с одним из указанных case,
// возвращается текущее состояние state без изменений.
// Возвращаемое значение: В зависимости от типа действия,
// функция counterReducer возвращает новое состояние с обновлённым значением value
// или текущее состояние, если тип действия не определён.
