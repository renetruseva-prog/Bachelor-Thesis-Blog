import type { TopicKey } from '../consts';

export interface Member {
  name: string;
  role: string;
  topics: TopicKey[];
}

export const team: Member[] = [
  {
    name: 'Renet Ruseva',
    role: 'Team worker, Resource investigator, Monitor/Evaluator',
    topics: ['ux', 'dev'],
  },
  {
    name: 'Ulrika Garisone',
    role: 'Completer/Finisher, Implementer, Plant',
    topics: ['ux', 'design'],
  },
  {
    name: 'Liviu Balan',
    role: 'Team worker, Resource investigator, Plant',
    topics: ['ux', 'design'],
  },
];
