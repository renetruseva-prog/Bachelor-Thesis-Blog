import type { TopicKey } from '../consts';

export interface Member {
  name: string;
  role: string;
  topics: TopicKey[];
  responsibilities: string[];
}

export interface Contact {
  name: string;
  role: string;
  organisation: string;
}

// Placeholders — replace with the real team.
export const team: Member[] = [
  {
    name: 'Team member 1',
    role: 'Role (e.g. UX researcher)',
    topics: ['ux'],
    responsibilities: ['Responsibility', 'Responsibility'],
  },
  {
    name: 'Team member 2',
    role: 'Role (e.g. Designer)',
    topics: ['design'],
    responsibilities: ['Responsibility', 'Responsibility'],
  },
  {
    name: 'Team member 3',
    role: 'Role (e.g. Developer)',
    topics: ['dev'],
    responsibilities: ['Responsibility', 'Responsibility'],
  },
];

// Client, coaches and experts you meet with.
export const contacts: Contact[] = [
  { name: 'Contact name', role: 'Client contact', organisation: 'Client' },
  { name: 'Contact name', role: 'Coach / supervisor', organisation: 'Howest' },
];
