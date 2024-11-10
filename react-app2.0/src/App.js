import { useState } from 'react';
import './App.css';
import SideBar from './components/Sidebar';

function Page({ page }) {
  switch (page) {
    case 0:
      return <p>0</p>
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
      <div className='md:w-4/5 h-screen'>
        <Page page={page} />
      </div>
    </div>
  );
}

export default App;
