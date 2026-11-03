import type { TopicKey } from '../consts';

export interface TimeEntry {
  /** ISO date, e.g. '2026-11-03' */
  date: string;
  hours: number;
  topic: TopicKey;
  task: string;
}

// Log your hours here — one line per task. Several entries on the same day are summed.
// The rows below are placeholders: replace or delete them.
export const timelog: TimeEntry[] = [
  { date: '2026-11-03', hours: 2, topic: 'planning', task: 'Placeholder — set up planning' },
  { date: '2026-11-03', hours: 1.5, topic: 'dev', task: 'Placeholder — set up process blog' },
  { date: '2026-11-04', hours: 3, topic: 'ux', task: 'Placeholder — desk research' },
];
