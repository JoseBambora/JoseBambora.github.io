import { useState } from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import AboutMe from './pages/AboutMe';

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
      return <p>1</p>
    default:
      return <p>2</p>
  }

}

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className="md:flex bg-zinc-100 text-zinc-700 dark:text-white dark:bg-zinc-700">
      <SideBar setPage={setPage} page={page} />
      <main className='md:w-4/5'>
        <Page page={page} />
      </main>
    </div>
  );
}

export default App;
