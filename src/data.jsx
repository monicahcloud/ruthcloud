import { nanoid } from 'nanoid';
import { MdHealthAndSafety } from 'react-icons/md'
import { GiHealthPotion } from 'react-icons/gi'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#services', text: 'products' },
  { id: nanoid(), href: '#videos', text: ' videos' },
  { id: nanoid(), href: '#contact', text: 'contact' },
]

export const services = [
  {
    id: nanoid(),
    title: 'ASEA',
    icon: <GiHealthPotion className="h-16 w-16 text-sky-500" />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem eum. Mollitia, saepe sint hic, quaerat aut omnis voluptates amet, nam dolores molestiae consequatur expedita iure quas error deleniti odit.',
  },

]

export const products = [
  {
    id: nanoid(),
    img: 'https://www.aseaglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fessential-bundles-slide-1.216079fe.jpg&w=750&q=75',
    url: 'https://1800807234.myasealive.com/',
    title: 'ASEA',
    text: 'ASEA is a wellness company driven by the power of human potential. Headquartered in Utah and serving a global community, ASEA is a trailblazer in cellular health. As the first to introduce groundbreaking redox signaling molecules, ASEA helps your cells function in harmony, as they were designed to. With each product and every opportunity, ASEA is committed to empowering individuals and enhancing lives.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/11655091/pexels-photo-11655091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://google.com/',

    title: 'CPR/First Aid Training',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
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
    url: 'https://www.youtube.com/watch?v=TnxDE4zqR-k',
    title: 'Learn More About ASEA',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    url: 'https://www.youtube.com/watch?v=0gDrFrPGEbY&t=365s',
    title: 'The Ultimate Guide to ASEA Redox: Answering Your Common Questions',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]
