import Avatar from "@/components/avatar";
import InstagramIcon from "@/components/icons/instagram-icon";
import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import TwitterIcon from "@/components/icons/twitter-icon";
import MediumIcon from "@/components/icons/medium-icon";
import config from "@/util/config";

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <Avatar />
      <h1 className="text-4xl font-bold mt-8">Mustafa Ekrem KENTER</h1>
      <h2 className="text-2xl font-semibold italic mt-2">
        Software craftsman, and father of two.
      </h2>
      <p className="mt-4">
        I&apos;m Ekrem, a passionate software engineer and entrepreneur based in
        Istanbul, Turkiye. With over 15 years of experience in full-stack web
        and mobile development, chatbot creation, and serverless architecture, I
        thrive on embracing the latest technologies and industry best practices.
      </p>
      <p className="mt-4">
        Family is at the core of my inspiration, and I am grateful for the
        unwavering support of my amazing wife. I channel this support into my
        work, crafting innovative solutions that address real-world challenges
        and deliver meaningful value to customers and stakeholders.
      </p>
      <p className="mt-4">
        My mission is to guide businesses in achieving their technological
        objectives, fostering growth, and staying ahead in today&apos;s dynamic
        digital landscape. Currently working for{" "}
        <a
          href="https://www.linkedin.com/company/turkishtechnology"
          target="_blank"
        >
          Turkish Technology
        </a>
        , a subsidiary of Turkish Airlines, as{" "}
        <span className="font-semibold">Digital Lab Team Lead.</span>
      </p>
      <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start">
        <a href={config.talkUrl} target="_blank">
          Let&apos;s Talk <span aria-hidden="true">→</span>
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
      </div>
    </div>
  );
}
