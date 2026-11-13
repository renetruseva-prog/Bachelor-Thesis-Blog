import type { MemberKey, TopicKey } from '../consts';

export interface TimeEntry {
  /** ISO date, e.g. '2026-11-03' */
  date: string;
  hours: number;
  /** Who did the work — a key from TEAM in src/consts.ts */
  member: MemberKey;
  topic: TopicKey;
  task: string;
}

// Log your hours here — one line per task. Several entries on the same day are summed.
// Split a day into several entries (with the right topic and task) for more detail on the time page.
// Days that still count as hours and days worked, but are left out of the "average per day"
// (the shorter autumn break days, which would pull the average down).
export const excludedFromAverage = ['2026-11-04', '2026-11-05', '2026-11-06', '2026-11-07', '2026-11-08'];

export const timelog: TimeEntry[] = [
  { date: '2026-10-28', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-28', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-28', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-29', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-29', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-29', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-30', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-30', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-10-30', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  // 2026-10-31: free day
  { date: '2026-11-01', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-01', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-01', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-02', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-02', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-02', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-03', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-03', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-03', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-04', hours: 3, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-04', hours: 3, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-04', hours: 3, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-05', hours: 3, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-05', hours: 3, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-05', hours: 3, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-06', hours: 3, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-06', hours: 3, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-06', hours: 3, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-07', hours: 3, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-07', hours: 3, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-07', hours: 3, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-08', hours: 3, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-08', hours: 3, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-08', hours: 3, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-09', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-09', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-09', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-10', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-10', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-10', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-11', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-11', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-11', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-12', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-12', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-12', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-13', hours: 8, member: 'renet', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-13', hours: 8, member: 'member2', topic: 'process', task: 'Thesis work' },
  { date: '2026-11-13', hours: 8, member: 'member3', topic: 'process', task: 'Thesis work' },
];
