export type Action =
  | {
      type: "counter/plus";
      payload: number;
    }
  | {
      type: "counter/minus";
      payload: number;
    }
  | {
      type: "counter/reset";
    };

// Действие Action - это объект в котором два поля: type и payload
// type - тип действия (имя нашего типа действия)
// payload - данные действия(информация необходимая для выполнения  операции)
