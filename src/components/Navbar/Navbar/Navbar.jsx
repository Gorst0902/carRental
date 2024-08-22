import React from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

const NavLinks = [
    {
        id: '1',
        name: 'HOME',
        link: '/#'
    },
    {
        id: '2',
        name: 'CARS',
        link: '/#cars'
    },
    {
        id: '3',
        name: 'ABOUT',
        link: '/#about'
    },
    {
        id: '4',
        name: 'BOOKING',
        link: '/#booking'
    }
]

const Navbar = ({theme, setTheme}) => {
    return (
        <nav className='shadow-sm bg-white dark:bg-black dark:text-white duration-300'>

            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className='text-xl font-bold font-serif'>Car Rental</h1>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {
                                NavLinks.map((link) => (
                                    <li className='py-4' key={link.id}>
                                        <a
                                            className='py-2 hover:border-b-2 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-500 text-lg font-medium'
                                            href={link.link}>{link.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        {
                            theme == "dark" ? (
                                <BiSolidSun className='text-2xl' onClick={() => setTheme("light")} />
                            ) : (
                                <BiSolidMoon className='text-2xl' onClick={() => setTheme("dark")}/>
                            )
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar