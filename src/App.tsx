import { Apps } from './components/Apps'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { projects } from './data/profile'
import './App.css'

export default function App() {
  return (
    <div id="top" className="page">
      <Hero projects={projects} />
      <main>
        <Apps projects={projects} />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </div>
  )
}
