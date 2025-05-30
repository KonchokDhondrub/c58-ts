## Реализация StoreContext вместо локального состояния

### 1. Создать контекст `StoreContext`

- Создать файл `StoreContext.tsx`.
- Экспортировать `StoreContext` и хук `useStoreContext`.
- В контексте должны быть:
  - `products: IProducts[]`
  - `loader: boolean`
  - `getProducts(limit: number, skip?: number): Promise<void>`

---

### 2. Создать провайдера `StoreProvider`

- Внутри `StoreProvider` использовать `useState` для `products` и `loader`.
- Реализовать функцию `getProducts()` для загрузки продуктов с API.
- Вернуть `<StoreContext.Provider value={{ products, loader, getProducts }}>`.

---

### 3. Использоватье контекст в компоненте `Store`

- Удалить `useState` для `products` и `loader`.
- Импортировать `useStoreContext`.
- Получить данные:
  ```tsx
  const { products, loader, getProducts } = useStoreContext();
  ```
