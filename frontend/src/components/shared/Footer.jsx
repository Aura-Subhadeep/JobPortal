import React from 'react';

const Footer = () => {
  const navigation = {
    platform: [
      { name: 'Platform', href: '/platform' },
      { name: 'Plans & Pricing', href: '/pricing' },
      { name: 'Personal AI Manager', href: '/ai-manager' },
      { name: 'AI Business Writer', href: '/business-writer' },
    ],
    company: [
      { name: 'Company', href: '/company' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
    ],
    resources: [
      { name: 'Resources', href: '/resources' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Papers', href: '/papers' },
      { name: 'Press Conferences', href: '/press' },
    ],
  };

  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto pt-6">
      {/* Main footer content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline section */}
          <div className="col-span-1">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">Jobstera</span>
            </a>
          </div>
            <p className="mt-4 text-lg font-medium">
            Supporting Job seekers<br />
            Every Step of the Way
            </p>
            <p className="mt-2 text-gray-600">Jobstera, 2024.</p>
          </div>

          {/* Navigation sections */}
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {/* Platform links */}
            <div>
              <ul className="space-y-4">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Bottom bar */}
      <div className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 Jobstera Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/terms" className="hover:underline">Terms of Service</a>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <a href="/cookies" className="hover:underline">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;