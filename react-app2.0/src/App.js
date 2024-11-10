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
    <div className="flex bg-zinc-100 text-zinc-700 dark:text-white dark:bg-zinc-700">
      <div className="w-1/4 h-screen">
        <SideBar setPage={setPage} />
      </div>
      <div className='w-3/4'>
        <Page page={page} />
      </div>
    </div>
  );
}

export default App;
