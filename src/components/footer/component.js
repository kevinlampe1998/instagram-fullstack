'use client';

import styles from './component.module.css';
import { House, Search, SquarePlus } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <Image
                    src='/svg/icons8-home.svg'
                    height={25}
                    width={25}
                    alt='instagram reels icon'
                />
            </section>
            <section>
                <Search size={25}/>
            </section>
            <section>
                <SquarePlus size={25}/>
            </section>
            <section>
                <Image
                    src='/svg/icons8-instagram-reels.svg'
                    height={30}
                    width={30}
                    alt='instagram reels icon'
                />
            </section>
            <section>
                <Image
                    src='/svg/icons8-user.svg'
                    height={33}
                    width={33}
                    alt='instagram reels icon'
                />
            </section>
        </footer>
    );
};

export default Footer;