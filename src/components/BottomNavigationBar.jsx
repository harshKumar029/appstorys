import React from 'react';

import home from '../assets/icons/home.svg';
import heart from '../assets/icons/heart.svg';
import cart from '../assets/icons/Cart.svg';
import user from '../assets/icons/user.svg';

const BottomNavigationBar = () => {
    const navItems = [
        { name: 'Dashboard', icon: home },
        { name: 'Saved', icon: heart },
        { name: 'Cart', icon: cart },
        { name: 'Profile', icon: user },
    ];

    return (
        <div className="fixed z-[1000] bottom-0 left-0 w-full rounded-t-3xl bg-[#fefefe] shadow-2xl shadow-black sm:hidden flex justify-around items-center py-5">
            {navItems.map((item) => (
                <div key={item.name} className="flex flex-col items-center">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <span className="text-sm text-gray-600 mt-1">{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default BottomNavigationBar;
