import {
  FaPython, FaReact, FaGithub, FaCss3
} from 'react-icons/fa'
import {
  SiCplusplus, SiJavascript, SiHtml5, SiTailwindcss, SiDjango, SiFirebase, SiPostgresql
} from 'react-icons/si'
import { AiOutlineDatabase, AiOutlineApi, AiOutlineRobot } from 'react-icons/ai'

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    desc: 'Programming languages used to build software solutions.',
    skills: [
      { name: 'Python',       icon: FaPython },
      { name: 'C++',          icon: SiCplusplus },
      { name: 'JavaScript',   icon: SiJavascript },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    desc: 'Building responsive and interactive user interfaces.',
    skills: [
      { name: 'React.js',     icon: FaReact },
      { name: 'HTML5',        icon: SiHtml5 },
      { name: 'CSS3',         icon: FaCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    desc: 'Backend architectures, databases, and APIs.',
    skills: [
      { name: 'Django',       icon: SiDjango },
      { name: 'Django REST',  icon: AiOutlineDatabase },
      { name: 'REST API Design', icon: AiOutlineApi },
      { name: 'SQL',          icon: AiOutlineDatabase },
      { name: 'PostgreSQL',   icon: SiPostgresql },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Other',
    desc: 'Development, deployment, and AI-assisted workflows.',
    skills: [
      { name: 'Git & GitHub', icon: FaGithub },
      { name: 'Firebase',     icon: SiFirebase },
      { name: 'AI-Assisted Dev', icon: AiOutlineRobot },
    ],
  },
]

