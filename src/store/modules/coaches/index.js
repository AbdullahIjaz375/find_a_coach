import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
        {
          id: 'c3',
          firstName: 'Anna',
          lastName: 'Smith',
          areas: ['frontend', 'design'],
          description:
            'Hi, I am Anna. I specialize in frontend development and design. Let me help you create beautiful and functional user interfaces.',
          hourlyRate: 25,
        },
        {
          id: 'c4',
          firstName: 'John',
          lastName: 'Doe',
          areas: ['backend', 'database'],
          description:
            'Hello, I am John. I have expertise in backend development and database management. Let me assist you in building robust server-side applications.',
          hourlyRate: 35,
        },
        {
          id: 'c5',
          firstName: 'Emily',
          lastName: 'Brown',
          areas: ['frontend', 'mobile'],
          description:
            'Hey there, I am Emily. I specialize in frontend development and mobile app design. Let me guide you through building responsive and engaging web and mobile applications.',
          hourlyRate: 28,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
