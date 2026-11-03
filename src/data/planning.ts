import type { TopicKey } from '../consts';

export type Status = 'todo' | 'doing' | 'done';

export interface Phase {
  title: string;
  /** ISO dates, or leave empty while unknown */
  start: string;
  end: string;
  status: Status;
  topics: TopicKey[];
  tasks: { label: string; done: boolean }[];
}

// Link to your detailed planning tool (Notion, Jira, Trello, GitHub Projects…). Leave '' to hide.
export const planningToolUrl = '';

// Placeholder phases — adjust titles, dates and tasks to your real planning.
export const phases: Phase[] = [
  {
    title: 'Kick-off & briefing',
    start: '',
    end: '',
    status: 'doing',
    topics: ['planning', 'feedback'],
    tasks: [
      { label: 'Placeholder task', done: false },
      { label: 'Placeholder task', done: false },
    ],
  },
  {
    title: 'Research',
    start: '',
    end: '',
    status: 'todo',
    topics: ['ux', 'dev'],
    tasks: [{ label: 'Placeholder task', done: false }],
  },
  {
    title: 'Concept & design',
    start: '',
    end: '',
    status: 'todo',
    topics: ['design', 'ux'],
    tasks: [{ label: 'Placeholder task', done: false }],
  },
  {
    title: 'Development',
    start: '',
    end: '',
    status: 'todo',
    topics: ['dev'],
    tasks: [{ label: 'Placeholder task', done: false }],
  },
  {
    title: 'Testing & iteration',
    start: '',
    end: '',
    status: 'todo',
    topics: ['ux', 'design', 'dev'],
    tasks: [{ label: 'Placeholder task', done: false }],
  },
  {
    title: 'Finalisation & presentation',
    start: '',
    end: '',
    status: 'todo',
    topics: ['process'],
    tasks: [{ label: 'Placeholder task', done: false }],
  },
];
