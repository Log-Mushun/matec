import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';

export default function Body({ links, selectedLink, setSelectedLink }) {

    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}>
                    {char}
                </motion.span>
            )
        })
        return chars;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

            <div className={styles.body}>
                {
                    links.map((link, index) => {
                        const { title, href } = link;
                        return <Link key={`l_${index}`} href={href}>
                            <motion.p whileHover={{ scale: 1.2 }}>
                                {getChars(title)}
                            </motion.p>
                        </Link>
                    })
                }
            </div>
        </div>

    )
}
