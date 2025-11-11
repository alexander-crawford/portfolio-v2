import { ExperiencePosts } from 'app/components/posts'

export const metadata = {
  title: 'Experience',
  description: 'Work experience and projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Experience</h1>
      <ExperiencePosts />
    </section>
  )
}
