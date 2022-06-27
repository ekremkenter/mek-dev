import React from 'react';
import Image from 'next/image';
import { IconContext } from 'react-icons/lib';
import { FaChartBar, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Home.module.scss';

export const Home: React.FC = () => (
  <div className={styles.continer}>
    <main className={styles.main}>
      <div className={styles.avatar}>
        <Image
          src="/profile.jpg"
          alt="Mustafa Ekrem KENTER"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, I am Ekrem</h1>
      <h2>An experienced software craftsman</h2>

      <div className={styles.socialIcons}>
        <IconContext.Provider value={{ className: styles.social }}>
          <a
            href="https://linkedin.com/in/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://twitter.com/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://profile.codersrank.io/user/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaChartBar />
          </a>
        </IconContext.Provider>
      </div>
      <div className={styles.awsCert}>
        <Image
          src="/aws_saa.png"
          alt="AWS Certified Solutions Architect - Associate (SAA)"
          height="50%"
          width="50%"
        />
      </div>
    </main>
  </div>
);
