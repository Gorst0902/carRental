import React from 'react'

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

const Navbar = () => {
    return (
        <nav className='shadow-sm'>

            <div className="container mx-auto">
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar