'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'



export const Navigation = () => {
    const [nav, setNav] = useState([
        { id: 1, name: 'Home', href: '/', isActive: true },
        { id: 2, name: 'Product', href: '/product?q=dummytext', isActive: false },
        { id: 3, name: 'product/[id]', href: '/product/dummytext', isActive: false }
    ]);

    const handleNavToggle = (item: any) => {
        nav.map((o: any) => {
            o.isActive = false;
            if (o.id === item.id) {
                o.isActive = true
            }
        })
        setNav([...nav]);
    }

    const pathName = usePathname();
    return (
        <div className="bg-white">
            <header>
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="hidden lg:flex lg:gap-x-12">
                        {nav.map((item) => (
                            <Link key={item.name} onClick={() => handleNavToggle(item)} href={item.href} className={`${item.isActive ? "text-red-400" : ""} cursor-pointer text-sm/6 font-semibold text-gray-900`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>
        </div>
    )
}