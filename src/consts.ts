// Global site settings — edit these first.
export const SITE = {
  title: 'Bachelor Thesis Blog',
  author: 'Renet Ruseva',
  description:
    'Process blog for my Bachelor thesis at DEVINE: research, design, development, feedback, planning and time tracking.',
  client: 'Client name',
  school: 'Howest — DEVINE',
};

// Topics used to filter posts. The key is what you write in a post's `topics` frontmatter.
// `color` is the accent, `tint` the soft background. Add or rename topics here.
export const TOPICS = {
  ux: {
    label: 'UX research',
    description: 'User research, interviews, testing, personas and insights.',
    color: '#9C84D4',
    tint: '#F0EAFA',
  },
  design: {
    label: 'Design',
    description: 'Visual design, moodboards, wireframes, prototypes and iterations.',
    color: '#E08AA2',
    tint: '#FBE9EE',
  },
  dev: {
    label: 'Development',
    description: 'Technical research, prototypes, code decisions and builds.',
    color: '#5FA8CF',
    tint: '#E6F3F9',
  },
  process: {
    label: 'Process',
    description: 'How the result evolves: progress updates and reflections.',
    color: '#7FA874',
    tint: '#E8F1E3',
  },
  feedback: {
    label: 'Feedback',
    description: 'Reports of meetings with the client, coaches and expert talks.',
    color: '#D3B23E',
    tint: '#FBF4D6',
  },
  planning: {
    label: 'Planning',
    description: 'Project planning, sprints, milestones and adjustments.',
    color: '#E39A6B',
    tint: '#FDEDE2',
  },
  team: {
    label: 'Team',
    description: 'Team roles, collaboration and who does what.',
    color: '#94AE4F',
    tint: '#F1F6E2',
  },
  ai: {
    label: 'AI guidance',
    description: 'How AI was used — critical and transparent: prompts, output, what was kept or rejected and why.',
    color: '#4FB59A',
    tint: '#E3F5EF',
  },
} as const;

export type TopicKey = keyof typeof TOPICS;
export const TOPIC_KEYS = Object.keys(TOPICS) as [TopicKey, ...TopicKey[]];
