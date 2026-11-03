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
];
