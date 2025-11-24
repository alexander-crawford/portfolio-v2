import { BlogPosts } from 'app/components/posts'
import { getBlogPosts } from 'app/blog/utils/server/utils'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  let allBlogs = getBlogPosts()
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts posts={allBlogs}/>
    </section>
  )
}
