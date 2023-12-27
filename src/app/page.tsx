import Avatar from "@/components/avatar";
import InstagramIcon from "@/components/icons/instagram-icon";
import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import TwitterIcon from "@/components/icons/twitter-icon";
import MediumIcon from "@/components/icons/medium-icon";
import UpworkIcon from "@/components/icons/upwork-icon";
import config from "@/util/config";

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <Avatar />
      <h1 className="text-4xl font-bold mt-8">Mustafa Ekrem KENTER</h1>
      <h2 className="text-2xl font-semibold italic mt-2">
        Software craftsman, consultant, and father of two.
      </h2>
      <p className="mt-4">
        I&apos;m Ekrem, a passionate software engineer and entrepreneur based in
        Istanbul, Turkiye. With over 15 years of experience in full-stack web
        and mobile development, chatbot creation, and serverless architecture, I
        thrive on embracing the latest technologies and industry best practices.
        Family is at the core of my inspiration, and I am grateful for the
        unwavering support of my amazing wife.
      </p>
      <p className="mt-4">
        As a dedicated software development consultant, I channel this support
        into my work, crafting innovative solutions that address real-world
        challenges and deliver meaningful value to customers and stakeholders.
        My mission is to guide businesses in achieving their technological
        objectives, fostering growth, and staying ahead in today&apos;s dynamic
        digital landscape.
      </p>
      <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start">
        <a
          href={config.talkUrl}
          className="font-semibold hover:transform hover:scale-105 transition duration-150 ease-in-out"
          target="_blank"
        >
          Need help with your project? Let&apos;s Talk{" "}
          <span aria-hidden="true">→</span>
        </a>
      </div>
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
        <a
          className="group -m-1 p-1"
          aria-label="Follow on Medium"
          href="https://medium.com/@ekremkenter"
          target="_blank"
        >
          <MediumIcon />
        </a>
        <a
          className="group -m-1 p-1"
          aria-label="Hire on Upwork"
          href="https://www.upwork.com/freelancers/~012acf61dac0452080"
          target="_blank"
        >
          <UpworkIcon />
        </a>
      </div>
    </div>
  );
}
