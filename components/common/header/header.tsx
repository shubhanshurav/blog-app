import Link from 'next/link';
import React from 'react';
import ResponsivePageContainer from '../responsivePageContainer/responsivePageContainer';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
    return (
      <ResponsivePageContainer>
        <header className="flex justify-between items-center p-4 shadow-md">
          <div className="logo text-xl font-bold">
            <Link href="/">MyLogo</Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </ResponsivePageContainer>
    );
};

export default Header;