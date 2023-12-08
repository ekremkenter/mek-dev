import InstagramIcon from '@/components/instagram-icon';
import GithubIcon from '@/components/github-icon';
import LinkedinIcon from '@/components/linkedin-icon';
import Avatar from '@/components/avatar';
import TwitterIcon from '@/components/twitter-icon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start p-8 lg:p-24">
      <Avatar />
      <h1 className="text-4xl font-bold mt-8">
        Software craftsman, instructor, and father of two.
      </h1>
      <p className="mt-4 text-justify">
        I am Ekrem, a software engineer and entrepreneur based in Istanbul. As a
        seasoned technology leader, I bring over 15 years of expertise in
        full-stack web and mobile development, chatbot creation, and serverless
        architecture with a specialized focus on AI and ML.
      </p>
      <p className="mt-4 text-justify">
        I am deeply passionate about the application of cutting-edge
        technologies and industry best practices to craft innovative and
        scalable solutions. My commitment lies in addressing real-world
        challenges and creating tangible value for customers and stakeholders.
        As a software development consultant, I am dedicated to leveraging my
        diverse skill set and experience to guide businesses in achieving their
        technological objectives, fostering growth, and staying ahead in
        today&apos;s dynamic digital landscape.
      </p>
      <p className="mt-4 text-base">
        Need help with your next project?{' '}
        <a
          href="https://calendar.app.google/ovxBQvBqU3swrf337"
          className="font-bold italic"
          target="_blank"
        >
          Let&apos;s talk.
        </a>
      </p>

      <div className="mt-6 flex gap-6">
        <a
          className="group -m-1 p-1"
          aria-label="Follow on Twitter"
          href="https://twitter.com/ekremkenter"
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
          className="group -m-1 p-1"
          aria-label="Follow on Instagram"
          href="https://instagram.com/ekremkenter"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          className="group -m-1 p-1"
          aria-label="Follow on GitHub"
          href="https://github.com/ekremkenter"
          target="_blank"
        >
          <GithubIcon />
        </a>
        <a
          className="group -m-1 p-1"
          aria-label="Follow on LinkedIn"
          href="https://linkedin.com/in/ekremkenter"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
      </div>
    </main>
  );
}
