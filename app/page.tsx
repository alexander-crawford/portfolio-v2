import { BlogPosts } from 'app/components/posts'
import { FcAcceptDatabase, FcUp, FcDown } from "react-icons/fc";
import { NorwayIcon } from 'app/components/norway' 

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Alexander Crawford
      </h1>
      <p className="mb-4 flex items-center gap-1">
        I am a software developer based in Bergen, Norway. <NorwayIcon className="w-10 h-10"/>
      </p>
      <p className="mb-4 flex items-center gap-1">
        I predominately work on full stack web applications. <FcAcceptDatabase className="w-10 h-10"/>
      </p>
      <p className="mb-4 flex items-center gap-1">
        The experience page details my previous projects. <FcUp className="w-10 h-10"/>
      </p>
      <p className="mb-4 flex items-center gap-1">
        The blog page lists all blog posts with the latest posts found below. <FcDown className="w-10 h-10"/>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
