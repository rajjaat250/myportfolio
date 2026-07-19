import {
  FaPython, FaReact, FaDocker, FaAws, FaGithub, FaLinux
} from 'react-icons/fa'
import {
  SiCplusplus, SiJavascript, SiHtml5, SiTailwindcss, SiDjango, SiFirebase, SiSupabase, SiPostman, SiVercel
} from 'react-icons/si'
import { BsTerminal } from 'react-icons/bs'
import { AiOutlineCode, AiOutlineDatabase } from 'react-icons/ai'
import { BiNetworkChart } from 'react-icons/bi'

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    desc: 'Programming languages used to build software solutions.',
    skills: [
      { name: 'Python',       icon: FaPython },
      { name: 'C/C++',        icon: SiCplusplus },
      { name: 'JavaScript',   icon: SiJavascript },
      { name: 'HTML/CSS',     icon: SiHtml5 },
      { name: 'Bash',         icon: BsTerminal },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    desc: 'Backend architectures and frontend libraries.',
    skills: [
      { name: 'Django',      icon: SiDjango },
      { name: 'Django REST', icon: AiOutlineDatabase },
      { name: 'React.js',    icon: FaReact },
      { name: 'Tailwind CSS',icon: SiTailwindcss },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    desc: 'Development, deployment, and cloud infrastructure.',
    skills: [
      { name: 'Git & GitHub', icon: FaGithub },
      { name: 'Firebase',     icon: SiFirebase },
      { name: 'AWS (S3)',     icon: FaAws },
      { name: 'Supabase',     icon: SiSupabase },
      { name: 'Docker',       icon: FaDocker },
      { name: 'Linux',        icon: FaLinux },
      { name: 'Postman',      icon: SiPostman },
      { name: 'Vercel',       icon: SiVercel },
    ],
  },
  {
    id: 'coursework',
    label: 'Coursework',
    desc: 'Academic foundations in computer science.',
    skills: [
      { name: 'Operating Systems',   icon: AiOutlineCode },
      { name: 'Computer Networks',   icon: BiNetworkChart },
      { name: 'DBMS',                icon: AiOutlineDatabase },
      { name: 'OOP',                 icon: AiOutlineCode },
    ],
  },
]
