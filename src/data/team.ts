import type { TopicKey } from '../consts';

export interface Member {
  name: string;
  role: string;
  topics: TopicKey[];
}

// Placeholders — replace with the real team.
export const team: Member[] = [
  {
    name: 'Team member 1',
    role: 'Role (e.g. UX researcher)',
    topics: ['ux'],
  },
  {
    name: 'Team member 2',
    role: 'Role (e.g. Designer)',
    topics: ['design'],
  },
  {
    name: 'Team member 3',
    role: 'Role (e.g. Developer)',
    topics: ['dev'],
  },
];
