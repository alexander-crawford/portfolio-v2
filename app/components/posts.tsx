"use client";
import { useState } from "react";
import Link from 'next/link'
import { formatDate } from 'app/blog/utils/client/utils'
import { TechList } from "app/components/tech";
import { Position } from "app/components/position";
import { TechDropDown } from "app/components/tech-dropdown";
import { 
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiUml,
  SiMysql,
  SiGit,
  SiJavascript,
  SiLinux,
  SiUbuntu,
  SiGnubash,
  SiNextdotjs,
  SiDelphi,
  SiMarkdown,
  SiTypescript,
  SiPython,
  SiBootstrap,
  SiSass
} from '@icons-pack/react-simple-icons';


export function BlogPosts({ posts }) {

  let allBlogs = posts;

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div>
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lrg underline">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 w-fit tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-base">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export type Metadata = {
  title: string;
  started: string;
  ended: string;
  company: string;
  summary: string;
  tech: string[];
  link: string;
  type: string;
};

export type ExperiencePost = {
  metadata: Metadata;
};

type ExperiencePostsProps = {
  posts: ExperiencePost[]
};

export function ExperiencePosts({ posts } : ExperiencePostsProps) {


  const [selectedTech, setSelectedTech] = useState("");

  const filteredExperience =
    selectedTech === ""
      ? posts
      : posts.filter(post =>
          post.metadata.tech.includes(selectedTech)
        );

  const TechIcons: Record<string, React.ElementType> = {
    React: SiReact,
    "Next.js": SiNextdotjs,
    Tailwind: SiTailwindcss ,
    PHP: SiPhp,
    Laravel: SiLaravel,
    UML: SiUml,
    MySQL: SiMysql,
    Git: SiGit,
    JavaScript: SiJavascript,
    Linux: SiLinux,
    Ubuntu: SiUbuntu,
    Bash: SiGnubash,
    Delphi: SiDelphi,
    Markdown: SiMarkdown,
    TypeScript: SiTypescript,
    Python: SiPython,
    Bootstrap: SiBootstrap,
    Sass: SiSass
  };

  return (
    <div>
      <TechDropDown items={Object.keys(TechIcons).sort()} onChange={setSelectedTech} value={selectedTech} />
      {filteredExperience
        .sort((a, b) => {
          const aEnded = a.metadata.ended;
          const bEnded = b.metadata.ended;

          if (aEnded === '' && bEnded !== '') return -1; 
          if (aEnded !== '' && bEnded === '') return 1;  

          if (new Date(aEnded) > new Date(bEnded)) return -1;
          if (new Date(aEnded) < new Date(bEnded)) return 1;

          return 0; 
        })
        .map((post, index) => (
          <div key={index} className="flex flex-col space-y-1 mb-4 gap-2" >
            <p className="text-neutral-600 dark:text-neutral-400 w-fit tabular-nums">
              <span>{formatDate(post.metadata.started, false, true)}</span>
              <span> - </span>
              <span>{formatDate(post.metadata.ended, false, true)}</span>
            </p>
            <Position 
              title={post.metadata.title} 
              company={post.metadata.company} 
              link={post.metadata.link} 
              type={post.metadata.type} />
            <TechList tech={post.metadata.tech} icons={TechIcons} />
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.summary}
            </p>
          </div>
        ))}
    </div>
  )
}
