import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../Context/DarkModeContext';



const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !darkMode);
  };
  return (
    <header className='header bg-blue-200 rounded-lg mt-4 dark:bg-blue-900 justify-center'>
      <NavLink to='/' 
      className={({ isActive }) => isActive  ? 'shadow-black w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md': 'w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'}
      >
        <p className="blue-gradient_text">ZL</p>
      </NavLink>
      <nav className='flex text-lg gap-3 font-medium font-poppins items-center'>
        <NavLink to='/about' className={({ isActive }) => isActive  ? 'font-bold dark:text-white': 'text-black dark:text-white'}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive  ? 'font-bold dark:text-white': 'text-black dark:text-white'}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive  ? 'font-bold dark:text-white': 'text-black dark:text-white'}>
          Contact
        </NavLink>

      <button 
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition duration-200 ease-in-out hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </nav>

    </header>
  )
}

export default Navbar