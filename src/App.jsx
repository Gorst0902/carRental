import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar/Navbar';

const App = () => {
  //Dark mode feature
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App