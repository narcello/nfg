export type CommitmentType = {
  start: number;
  end: number;
  title: string;
};

export const mockCommitments: Array<CommitmentType> = [
  {start: 300, end: 360, title: 'Gym'},
  {start: 330, end: 390, title: 'Call Diego'},
  {start: 180, end: 240, title: 'Don’t forget the pills'},
  {start: 390, end: 420, title: 'Meeting with Alejandro'},
  {start: 180, end: 240, title: 'Lunch with Margarida'},
  {start: 30, end: 150, title: 'Meeting with the CTO'},
];
