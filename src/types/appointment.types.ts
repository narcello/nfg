export type AppointmentBaseType = {
  start: number;
  end: number;
  title: string;
};

export type AppointmentAddonsType = {
  gridRowStart: number;
  gridRowEnd: number;
  gridColumnStart: number;
  gridColumnEnd: number;
};

export type AppointmentCompleteType = AppointmentBaseType &
  AppointmentAddonsType;
