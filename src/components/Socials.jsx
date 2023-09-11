import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faAngellist, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Socials = (flex) => {
    const socials =
        [
            {icon: faTwitter, url: "https://twitter.com/ChichiTheStar"},
        {icon: faMedium, url: "https://medium.com/@naledi22khosi"},
        {icon: faGithub, url: "https://github.com/Naledi-Dikgale"},
        {icon: faLinkedin, url: "https://www.linkedin.com/in/naledi-dikgale/"},
        {icon: faAngellist, url: "https://wellfound.com/u/naledi-dikgale"},
        {icon:  faEnvelope, url: "mailto:naledi22khosi@gmail.com"}]

  return (
    <div className={`flex gap-5 ` + flex.flex}>
        {
            socials.map((element, index) => {
                return <a href={element.url} key={index} className='hover:text-secondary  text-dimBlue' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={element.icon} className='md:w-8 md:h-8 max-sm:w-6 max-sm:h-6 hover:-translate-y-1 transition-transform' />
                    </a>

            })
        }
    </div>
  )
}

export default Socials
