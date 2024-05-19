import { SocialIcon } from 'react-social-icons'
import styles from './SocialLinks.module.css'

function SocialLinks() {
    return (
        <div className={styles.flex}>
            <h2>JOIN US!</h2>
            <div className={styles.icons}>
                <SocialIcon url="https://www.instagram.com/uowd_tech_club/" />
                <SocialIcon url="https://chat.whatsapp.com/EIKeuIKUuEaDBSOpwDWEq4" />
                <SocialIcon url="https://www.linkedin.com/company/uowd-tech-club/?originalSubdomain=ae" />
            </div>
        </div>
    )
}

export default SocialLinks