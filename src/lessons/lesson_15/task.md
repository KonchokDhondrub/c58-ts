### Задание

Добавьте в приложение на React следующий функционал:

1. **Компонент `Store.tsx`:**

   - Загружает данные товаров из API `https://dummyjson.com/products`.
   - Отображает их в виде карточек, используя отдельный компонент `StoreCard.tsx` прокидывая данные через props.
   - Реализуйте форму с использованием библиотеки `Formik` и `Yup` для указания параметра `limit` в запросе (`https://dummyjson.com/products?limit=2`). Передавайте кол-во товаров в форме, сделайте проверку. Максимальное значение для кол-ва товаров - 30шт.

2. **Компонент `StorePage.tsx`:**

   - Данные о конкретном товаре должны подгружаться через динамический роутинг (`https://dummyjson.com/products/1`).

3. **Роутинг:**

   - Добавьте ссылку на компонент `Store.tsx` в header, используя `react-router-dom`.

4. **Стилизация:**
   - Для стилизации компонентов `Store.tsx`, `StoreCard.tsx`, `StorePage.tsx` используйте CSS модули.

Удачи! ⚡️

{
    "id": 1,
    "title": "",
    "category": "",
    "price": 9.99,
    "discountPercentage": 10.48,
    "rating": 2.56,
    "stock": 99,
    "tags": [
        "beauty",
        "mascara"
    ],
    "brand": "Essence",
    "sku": "BEA-ESS-ESS-001",
    "weight": 4,
    "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
    },
    "warrantyInformation": "1 week warranty",
    "shippingInformation": "Ships in 3-5 business days",
    "availabilityStatus": "In Stock",
    "reviews": [
        {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
            "rating": 4,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lucas Gordon",
            "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
    ],
    "returnPolicy": "No return policy",
    "minimumOrderQuantity": 48,
    "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
}
