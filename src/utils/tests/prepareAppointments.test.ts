import {mockAppointments} from '../../mock';
import {
  AppointmentBaseType,
  AppointmentCompleteType,
} from '../../types/appointment.types';
import {
  prepareAppointments,
  appointmentsWithGridParams,
  sortByAscendingOrder,
  setAppointmentColumnParams,
  handleWithCurrentAndNextAppointments,
  handleWithCurrentAndPreviousAppointments,
  nextAppointmentStartsBeforeCurrentEnds,
  previousAppointmentEndsWhenCurrentStarts,
} from '../prepareAppointments';

describe('Test prepareAppointents.ts functions', () => {
  type InitialState = {
    mock: Array<AppointmentBaseType>;
    currentAppointment: AppointmentCompleteType;
    previousAppointmentWithConflict: AppointmentCompleteType;
    previousAppointmentWithConflictSecondOption: AppointmentCompleteType;
    previousAppointmentWithoutConflict: AppointmentCompleteType;
    nextAppointmentWithConflict: AppointmentCompleteType;
    nextAppointmentWithoutConflict: AppointmentCompleteType;
  };
  const initialState: InitialState = {
    mock: [...mockAppointments],
    currentAppointment: {
      start: 180,
      end: 240,
      title: 'Current appointment',
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    previousAppointmentWithConflict: {
      start: 150,
      end: 180,
      title: 'Previous appointment with conflict',
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    previousAppointmentWithConflictSecondOption: {
      start: 150,
      end: 180,
      title: 'Previous appointment with conflict',
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 2,
      gridColumnEnd: 3,
    },
    previousAppointmentWithoutConflict: {
      start: 120,
      end: 150,
      title: 'Previous appointment without conflict',
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    nextAppointmentWithConflict: {
      start: 210,
      end: 270,
      title: 'Next appointment with conflict',
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    nextAppointmentWithoutConflict: {
      start: 270,
      end: 330,
      title: 'Next appointment without conflict',
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
  };
  let mock = [...initialState.mock];
  let currentAppointment = {...initialState.currentAppointment};
  let previousAppointmentWithConflict = {
    ...initialState.previousAppointmentWithConflict,
  };
  let previousAppointmentWithConflictSecondOption = {
    ...initialState.previousAppointmentWithConflictSecondOption,
  };
  let previousAppointmentWithoutConflict = {
    ...initialState.previousAppointmentWithoutConflict,
  };
  let nextAppointmentWithConflict = {
    ...initialState.nextAppointmentWithConflict,
  };
  let nextAppointmentWithoutConflict = {
    ...initialState.nextAppointmentWithoutConflict,
  };
  beforeEach(() => {
    mock = [...initialState.mock];
    currentAppointment = {...initialState.currentAppointment};
    previousAppointmentWithConflict = {
      ...initialState.previousAppointmentWithConflict,
    };
    previousAppointmentWithoutConflict = {
      ...initialState.previousAppointmentWithoutConflict,
    };
    nextAppointmentWithConflict = {...initialState.nextAppointmentWithConflict};
    nextAppointmentWithoutConflict = {
      ...initialState.nextAppointmentWithoutConflict,
    };
  });
  test('Init appointments with appointmentsWithGridParams', () => {
    const expectedResult = [
      {
        end: 360,
        gridColumnEnd: 3,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 300,
        title: 'Gym',
      },
      {
        end: 390,
        gridColumnEnd: 3,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 330,
        title: 'Call Diego',
      },
      {
        end: 240,
        gridColumnEnd: 3,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 180,
        title: 'Don’t forget the pills',
      },
      {
        end: 420,
        gridColumnEnd: 3,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 390,
        title: 'Meeting with Alejandro',
      },
      {
        end: 240,
        gridColumnEnd: 3,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 180,
        title: 'Lunch with Margarida',
      },
      {
        end: 150,
        gridColumnEnd: 3,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 30,
        title: 'Meeting with the CTO',
      },

      {start: 600, end: 630, title: 'Play soccer'},
      {start: 540, end: 600, title: 'Meeting with Marcello'},
    ];
    expect(appointmentsWithGridParams(mock)).toMatchObject(expectedResult);
  });

  test('Sort appointments with sortByAscendingOrder', () => {
    const expectedResult = [
      {
        end: 150,
        start: 30,
        title: 'Meeting with the CTO',
      },
      {
        end: 240,
        start: 180,
        title: 'Lunch with Margarida',
      },
      {
        end: 240,
        start: 180,
        title: 'Don’t forget the pills',
      },
      {
        end: 360,
        start: 300,
        title: 'Gym',
      },
      {
        end: 390,
        start: 330,
        title: 'Call Diego',
      },
      {
        end: 420,
        start: 390,
        title: 'Meeting with Alejandro',
      },
      {
        start: 540,
        end: 600,
        title: 'Meeting with Marcello',
      },
      {
        start: 600,
        end: 630,
        title: 'Play soccer',
      },
    ];
    expect(sortByAscendingOrder(mock)).toMatchObject(expectedResult);
  });

  test('Set position in grid with setAppointmentColumnParams', () => {
    const expectedResult = [
      {
        end: 240,
        gridColumnEnd: 2,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 180,
        title: 'Current appointment',
      },
      {
        end: 270,
        gridColumnEnd: 3,
        gridColumnStart: 2,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 210,
        title: 'Next appointment with conflict',
      },
    ];
    expect(
      setAppointmentColumnParams([
        currentAppointment,
        nextAppointmentWithConflict,
      ]),
    ).toMatchObject(expectedResult);
  });

  test('Current and next conflict appointments handled by handleWithCurrentAndNextAppointments', () => {
    handleWithCurrentAndNextAppointments(
      currentAppointment,
      nextAppointmentWithConflict,
    );
    expect(currentAppointment.gridColumnStart).toBe(1);
    expect(currentAppointment.gridColumnEnd).toBe(2);
    expect(nextAppointmentWithConflict.gridColumnStart).toBe(2);
    expect(nextAppointmentWithConflict.gridColumnEnd).toBe(3);
  });

  test('Current and next NON conflict appointments handled by handleWithCurrentAndNextAppointments', () => {
    handleWithCurrentAndNextAppointments(
      currentAppointment,
      nextAppointmentWithoutConflict,
    );
    expect(currentAppointment.gridColumnStart).toBe(1);
    expect(currentAppointment.gridColumnEnd).toBe(3);
    expect(nextAppointmentWithoutConflict.gridColumnStart).toBe(1);
    expect(nextAppointmentWithoutConflict.gridColumnEnd).toBe(3);
  });

  test('Current and previous conflict appointments handled by handleWithCurrentAndPreviousAppointments', () => {
    handleWithCurrentAndPreviousAppointments(
      currentAppointment,
      previousAppointmentWithConflict,
    );
    expect(currentAppointment.gridColumnStart).toBe(2);
    expect(currentAppointment.gridColumnEnd).toBe(3);
    expect(previousAppointmentWithConflict.gridColumnStart).toBe(1);
    expect(previousAppointmentWithConflict.gridColumnEnd).toBe(2);
  });

  test('Current and previous conflict appointments handled by handleWithCurrentAndPreviousAppointments 2', () => {
    handleWithCurrentAndPreviousAppointments(
      currentAppointment,
      previousAppointmentWithConflictSecondOption,
    );
    expect(currentAppointment.gridColumnStart).toBe(1);
    expect(currentAppointment.gridColumnEnd).toBe(2);
    expect(previousAppointmentWithConflictSecondOption.gridColumnStart).toBe(2);
    expect(previousAppointmentWithConflictSecondOption.gridColumnEnd).toBe(3);
  });

  test('Current and previous NON conflict appointments handled by handleWithCurrentAndPreviousAppointments', () => {
    handleWithCurrentAndPreviousAppointments(
      currentAppointment,
      previousAppointmentWithoutConflict,
    );
    expect(currentAppointment.gridColumnStart).toBe(1);
    expect(currentAppointment.gridColumnEnd).toBe(3);
    expect(previousAppointmentWithoutConflict.gridColumnStart).toBe(1);
    expect(previousAppointmentWithoutConflict.gridColumnEnd).toBe(3);
  });

  test('Check nextAppointmentStartsBeforeCurrentEnds with conflicting next appointment', () => {
    expect(
      nextAppointmentStartsBeforeCurrentEnds(
        nextAppointmentWithConflict,
        currentAppointment,
      ),
    ).toBeTruthy();
  });

  test('Check nextAppointmentStartsBeforeCurrentEnds with NON conflicting next appointment', () => {
    expect(
      nextAppointmentStartsBeforeCurrentEnds(
        nextAppointmentWithoutConflict,
        currentAppointment,
      ),
    ).toBeFalsy();
  });

  test('Check previousAppointmentEndsWhenCurrentStarts with conflicting previous appointment', () => {
    expect(
      previousAppointmentEndsWhenCurrentStarts(
        previousAppointmentWithConflict,
        currentAppointment,
      ),
    ).toBeTruthy();
  });

  test('Check previousAppointmentEndsWhenCurrentStarts with NON conflicting previous appointment', () => {
    expect(
      previousAppointmentEndsWhenCurrentStarts(
        previousAppointmentWithoutConflict,
        currentAppointment,
      ),
    ).toBeFalsy();
  });

  test('Check the main function that call others and prepare appointments', () => {
    const expectedResult = [
      {
        end: 150,
        gridColumnEnd: 3,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 30,
        title: 'Meeting with the CTO',
      },
      {
        end: 240,
        gridColumnEnd: 2,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 180,
        title: 'Lunch with Margarida',
      },
      {
        end: 240,
        gridColumnEnd: 3,
        gridColumnStart: 2,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 180,
        title: 'Don’t forget the pills',
      },
      {
        end: 360,
        gridColumnEnd: 2,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 300,
        title: 'Gym',
      },
      {
        end: 390,
        gridColumnEnd: 3,
        gridColumnStart: 2,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 330,
        title: 'Call Diego',
      },
      {
        end: 420,
        gridColumnEnd: 2,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 390,
        title: 'Meeting with Alejandro',
      },
      {
        end: 600,
        gridColumnEnd: 2,
        gridColumnStart: 1,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 540,
        title: 'Meeting with Marcello',
      },
      {
        end: 630,
        gridColumnEnd: 3,
        gridColumnStart: 2,
        gridRowEnd: 2,
        gridRowStart: 1,
        start: 600,
        title: 'Play soccer',
      },
    ];
    expect(prepareAppointments(mock)).toMatchObject(expectedResult);
  });
});
