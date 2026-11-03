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
    start: '2026-10-27',
    end: '2026-10-28',
    status: 'done',
    topics: ['planning'],
    tasks: [
      { label: 'Read briefing materials', done: true },
      { label: 'Discuss briefing', done: true },
      { label: 'Research information relativant to the briefing', done: true },
    ],
  },
  {
    title: 'Research & Create initial concept',
    start: '2026-10-29',
    end: '2026-10-31',
    status: 'done',
    topics: ['ux'],
    tasks: [
      { label: 'Research pain points', done: true },
      { label: 'Create target personas', done: true },
      { label: 'Create first pitch deck', done: true },
    ],
  },
  {
    title: 'Work on concept & feedback & design',
    start: '2026-11-01',
    end: '2026-11-09',
    status: 'todo',
    topics: ['ux', 'design', 'feedback'],
    tasks: [
      { label: 'Meet with client', done: true },
      { label: 'Receive feedback from client', done: false },
      { label: 'Brainstorm more in-depth concept solutions', done: true },
      { label: 'Create minimal content list', done: true },
      { label: 'Create features list and MoScow', done: true },
      { label: 'Finalize concept and send to client for feedback', done: false },
      { label: 'Make sketches for finalized concept', done: false },
    ],
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
