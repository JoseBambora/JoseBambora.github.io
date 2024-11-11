import { useState } from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import Career from './pages/Career';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

/*


      <Card title={'Olá'} label={'Boas'} extra={"2020-2020"}>
        <div>Olá TDUO BEM?</div>
        <div>Olá TDUO BEM?</div>
        <div>Olá TDUO BEM?</div>
      </Card>
      <Card title={'Olá'} label={'Boas'}>
        <div>Olá TDUO BEM?</div>
        <div>Olá TDUO BEM?</div>
        <div>Olá TDUO BEM?</div>
      </Card>
      <Card title={'Olá'}>
        <div>Olá TDUO BEM?</div>
        <div>Olá TDUO BEM?</div>
        <div>Olá TDUO BEM?</div>
      </Card>
*/
function Page({ page }) {
  switch (page) {
    case 0:
      return <AboutMe />
    case 1:
      return <Career />
    case 2:
      return <Education />
    case 3:
      return <Skills />
    default:
      return <Projects />
  }

}

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className="md:flex bg-zinc-100 text-zinc-700 dark:text-white dark:bg-zinc-700">
      <SideBar setPage={setPage} page={page} />
      <main className='md:w-4/5 min-h-screen'>
        <Page page={page} />
      </main>
    </div>
  );
}

export default App;
