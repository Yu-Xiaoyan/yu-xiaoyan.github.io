import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Snippet } from "@nextui-org/snippet";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  LocationIcon,
  ScholarIcon,
  EmailIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { profileData } from "@/data/profile.tsx";
import { News } from "@/components/news";
import { Papers } from "@/components/papers";
import { Demos } from "@/components/demos";
import { ResearchInterests } from "@/components/research_interests";
// import { Education } from "@/components/education";
// import { Honor } from "@/components/honor";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="absolute w-full left-1/4 top-1/5 animate-gradient-float">
        <svg
          className="animate-gradient-blur"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animate-gradient-stroke"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440Z"
            fillOpacity="0"
            stroke="url(#gradient)"
            strokeOpacity={1.0}
            strokeWidth={100}
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#91EAE4">
                <animate
                  attributeName="stop-color"
                  dur="8s"
                  repeatCount="indefinite"
                  values="#91EAE4;#7F7FD5;#86A8E7;#91EAE4"
                />
              </stop>
              <stop offset="50%" stopColor="#86A8E7">
                <animate
                  attributeName="stop-color"
                  dur="8s"
                  repeatCount="indefinite"
                  values="#86A8E7;#91EAE4;#7F7FD5;#86A8E7"
                />
              </stop>
              <stop offset="100%" stopColor="#7F7FD5">
                <animate
                  attributeName="stop-color"
                  dur="8s"
                  repeatCount="indefinite"
                  values="#7F7FD5;#86A8E7;#91EAE4;#7F7FD5"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section className="max-w-[800px] flex flex-col items-center justify-center mx-auto gap-4 py-5 md:py-5">
      <Card className="w-full shadow-none bg-transparent border-none">
        {/* 1. items-start 让图片和文字顶部对齐，不要居中 */}
        <div className="flex flex-col md:flex-row gap-12 items-start py-4">
          
          {/* 左侧照片 */}
          <div className="flex-shrink-0">
            <Image
              isZoomed
              className="object-cover rounded-2xl shadow-sm"
              src={profileData.photo}
              width={240} // 图片可以再稍微大一点点
            />
          </div>

          {/* 右侧文字区：把名字塞进来 */}
          <div className="flex flex-col flex-grow text-left">
            {/* 名字现在是文字区的一部分了 */}
            <h1 className="text-4xl font-bold mb-4">
              {profileData.name} <span className="text-2xl font-normal ml-2">({profileData.name_zh})</span>
            </h1>
            
            <div className="text-default-700 text-[1.1rem] leading-relaxed mb-6">
              {profileData.description}
            </div>

            {/* 链接行：简洁一点 */}
            {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-default-500 text-sm italic">
              <Link href={siteConfig.links.scholar} isExternal color="primary" className="flex items-center gap-1">
                <ScholarIcon className="w-4 h-4" /> Google Scholar
              </Link>
              <span>/</span>
              <Link href={siteConfig.links.github} isExternal color="primary" className="flex items-center gap-1">
                <GithubIcon className="w-4 h-4" /> GitHub
              </Link>
              <span>/</span>
              <div className="flex items-center gap-1">
                <EmailIcon className="w-4 h-4" /> {profileData.email}
              </div>
            </div> */}

            {/* <div className="mt-2 text-default-400 text-xs flex items-center">
              <LocationIcon className="mr-1 h-3" /> {profileData.institute.join(", ")}, {profileData.location}
            </div> */}
          </div>
        </div>
      </Card>

        <div className="flex gap-3 flex-row hidden sm:flex">
          <Snippet
            className="rounded-full px-3 py-1"
            color="primary"
            radius="lg"
            size="sm"
            symbol={<EmailIcon className="inline pr-1" />}
            variant="light"
          >
            {profileData.email}
          </Snippet>
          <Button
            isExternal
            showAnchorIcon
            as={Link}
            // color="primary"
            href={siteConfig.links.scholar}
            radius="full"
            variant="light"
          >
            <ScholarIcon />{" "}
            <span className="hidden sm:inline">Google Scholar</span>
          </Button>
          <Button
            isExternal
            showAnchorIcon
            as={Link}
            href={siteConfig.links.github}
            radius="full"
            variant="light"
          >
            <GithubIcon /> <span className="hidden sm:inline">GitHub</span>
          </Button>
        </div>

        {/* 新增：Research Interests 模块 */}
        {/* <div className="w-full flex flex-wrap justify-start items-center">
          <ResearchInterests />
        </div> */}

        <div className="w-full flex flex-wrap justify-start items-center">
          <News />
        </div>

        <div className="w-full flex flex-wrap justify-start items-center">
          <div className="text-lg font-bold">Selected Publications</div>
          <Papers />
        </div>
        
        {/* <div className="w-full flex flex-wrap justify-start items-center">
          <div className="text-lg font-bold">Demo Systems</div>
          <Demos />
        </div> */}
                
        {/* <div className="w-full flex flex-wrap justify-start items-center">
          <div className="text-lg font-bold">Education Experiences </div>
          <Education />
        </div> */}

        {/* <div className="w-full flex flex-wrap justify-start items-center">
          <Honor />
        </div> */}

        <div className="w-full flex flex-wrap justify-start items-center">
          <div className="text-lg font-bold mr-5">Services </div>
          <div>Reviewer for ICML, ICLR, KDD, MM, TKDE, IJCV, etc</div>
        </div>

      </section>
    </DefaultLayout>
  );
}
