import { FaCode, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

const socialData = [
  {
    name: 'Web Site',
    icon: FaCode,
    style: 'text-red-500 hover:text-red-400',
    url: 'https://alperyalcin.com.tr'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    style: 'text-purple-500 hover:text-purple-400',
    url: 'https://www.instagram.com/alperryalcinn/'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    style: 'text-blue-600 hover:text-blue-500',
    url: 'https://linkedin.com/in/ozanalperyalcin'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    style: 'text-black hover:text-black/60',
    url: 'https://github.com/ozanalperyalcin'
  }
]

function Social() {
  return (
    <div className='flex items-center justify-end gap-1.5 lg:gap-2.5'>
      {socialData.map((social, i) => (
        <a href={social.url} target='_blank' key={i} className='bg-zinc-50 p-1 hover:scale-105 rounded-full' >
          <social.icon className={`${social.style} transition-all duration-300`}  size={20} />
        </a>
      ))}
    </div>
  )
}

export default Social