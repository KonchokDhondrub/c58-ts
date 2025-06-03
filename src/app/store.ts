import { type Action, combineReducers, configureStore, createStore, type ThunkAction } from "@reduxjs/toolkit";

import productSlice from "../features/product/productSlice";
import authSlice from "../features/auth/authSlice";

import counterReducer from "../features/counter/counterReducer";

// * в store хранятся данные из всего react приложения
// они изменяются с помощью функции reducer, в которую передается action

export const store = configureStore({
  reducer: {
    // подключаем функции reducer для обработки данных из файлов slice
    product: productSlice.reducer,
    user: authSlice.reducer,
  },
});

export const storeCounter = createStore(
  combineReducers({
    counterReducer,
    // здесь имена других фич и ссылка на редюсеры
  })
);

export type AppDispatch = typeof store.dispatch;

// store.getState
//Это метод Redux-хранилища (store), который возвращает текущее
//  состояние всего приложения (глобальное состояние).

// typeof store.getState
//Получаем тип функции getState (а не результат её вызова).

//ReturnType<typeof store.getState>
// Используем TypeScript-утилиту ReturnType,
//  чтобы извлечь тип возвращаемого значения

// export type RootState
// экспорт   глобального состояния Redux-приложения.

export type RootState = ReturnType<typeof store.getState>;
export type RootStateCounter = ReturnType<typeof storeCounter.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
