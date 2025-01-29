'use client';

import styles from './page.module.css';
import Image from '@/models/Image';

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.whiteBorder}>
                <Image
                    height={50}
                    width={100}
                    alt='instagram logo'
                    src='/pictures/instagram-logo.png'
                />
                <div>
                    <p>Sign up to see photos and videos</p>
                    <p>from your friends.</p>
                </div>
            </div>
            <h1>Register</h1>
 

        </div>
    );
};

export default Register;