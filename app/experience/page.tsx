import { ExperiencePosts } from 'app/components/posts'
import { getExperiencePosts } from 'app/blog/utils/server/utils'

// This needs to get the posts from disc and pass them to the componenet 
export const metadata = {
  title: 'Experience',
  description: 'Work experience and projects',
}

export default function Page() {
  let allExperience = getExperiencePosts()
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Experience</h1>
      <ExperiencePosts posts={allExperience}/>
    </section>
  )
}
