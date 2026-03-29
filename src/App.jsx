import './App.css';
import Navber from './Component/Navber/Navber';
import ModernCard from "./Component/Card/ModernCard";
import ElectronicCard from "./Component/Card/ElectronicCard"; 
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch}/>,
      <ModernCard search={search} />,
      <ElectronicCard search={search} />
    </>
  )
}

export default App
