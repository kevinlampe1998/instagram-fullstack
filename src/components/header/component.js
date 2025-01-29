'use client'

import Image from "next/image";
import styles from './component.module.css';
import { Heart, Send } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>

            {

                pathname === '/' ?

                <div className={styles.default}>
                    <Image
                        className={styles.instagramLogo}
                        src='/pictures/instagram-logo.png'
                        width={120}
                        height={40}
                        alt="instagram logo"
                    />
                    <section className={styles.heartSendSection}>
                        <Heart size={25} color="#fff"/>
                        <Send size={25} color="#fff"/>
                    </section>
                </div>

                :

                <div className={styles.noHeader}></div>
            }

        </header>
    );
};

export default Header;