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
// The rows below are placeholders: replace or delete them.
export const timelog: TimeEntry[] = [
  { date: '2026-11-03', hours: 2, member: 'renet', topic: 'planning', task: 'Placeholder — set up planning' },
  { date: '2026-11-03', hours: 1.5, member: 'member2', topic: 'dev', task: 'Placeholder — set up process blog' },
  { date: '2026-11-04', hours: 3, member: 'member3', topic: 'ux', task: 'Placeholder — desk research' },
];
