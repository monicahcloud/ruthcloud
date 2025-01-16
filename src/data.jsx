import { nanoid } from 'nanoid';
import { MdHealthAndSafety } from 'react-icons/md'
import { GiHealthPotion } from 'react-icons/gi'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#services', text: 'services' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const services = [
  {
    id: nanoid(),
    title: 'ASEA',
    icon: <GiHealthPotion className="h-16 w-16 text-sky-500" />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem eum. Mollitia, saepe sint hic, quaerat aut omnis voluptates amet, nam dolores molestiae consequatur expedita iure quas error deleniti odit.',
  },
  {
    id: nanoid(),
    title: 'CPR/First Aid',
    icon: <MdHealthAndSafety className="h-16 w-16 text-red-700" />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem eum. Mollitia, saepe sint hic, quaerat aut omnis voluptates amet, nam dolores molestiae consequatur expedita iure quas error deleniti odit.',
  },
  // {
  //   id: nanoid(),
  //   title: 'other',
  //   icon: <FaReact className="h-16 w-16 text-emerald-500" />,
  //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem eum. Mollitia, saepe sint hic, quaerat aut omnis voluptates amet, nam dolores molestiae consequatur expedita iure quas error deleniti odit.',
  // },
]

export const products = [
  {
    id: nanoid(),
    img: 'https://www.thebardscoffee.com/wp-content/uploads/2019/11/aseazd-2.png',
    url: 'https://1800807234.myasealive.com/',

    title: 'ASEA',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  // {
  //   id: nanoid(),
  //   img: 'https://images.pexels.com/photos/11655091/pexels-photo-11655091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   url: 'https://google.com/',

  //   title: 'CPR/First Aid Training',
  //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  // },
  // {
  //   id: nanoid(),
  //   img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://react-projects.netlify.app/',
  //   github: 'https://github.com/john-smilga',
  //   title: 'third project',
  //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  // },
]

export const videos = [
  {
    id: nanoid(),
    url: 'https://www.youtube.com/watch?v=tdbbrK25pQc&t=121s',
    title: 'ASEA: Genesis / Founders Video',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },

  {
    id: nanoid(),
    url: 'https://www.youtube.com/watch?v=8TLen6kPNJg&t=500s',
    title: ' The ASEA REDOX Breakthrough',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },

  {
    id: nanoid(),
    url: 'https://www.youtube.com/watch?v=QndF3n0STFI',
    title: 'The science behind Cell Performance | ASEA',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    url: 'https://www.youtube.com/watch?v=QndF3n0STFI',
    title: 'The science behind Cell Performance | ASEA',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    url: 'https://www.youtube.com/watch?v=0gDrFrPGEbY&t=365s',
    title: 'The Ultimate Guide to ASEA Redox: Answering Your Commone Questions',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]
