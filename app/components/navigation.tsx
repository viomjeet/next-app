'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
export const Navigation = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams()
    const isQuery = searchParams.get('q')
    const isUrlProd = `${pathName}?q=${isQuery}`;
    const [nav, setNav] = useState([
        { id: 1, name: 'Home', href: '/', isActive: false },
        { id: 2, name: 'SearchParams', href: '/product?q=dummytext', isActive: isUrlProd ? true : false },
        { id: 3, name: 'Params/[id]', href: '/product/dummytext', isActive: false }
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
    return (
        <div className="bg-white">
            <header>
                <code>{JSON.stringify(nav[1])}</code>
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="hidden lg:flex lg:gap-x-12">
                        {nav.map((item) => (
                            <Link key={item.name} onClick={() => handleNavToggle(item)} href={item.href}
                                className={`${item.isActive ? "text-red-400" : ""} cursor-pointer text-sm/6 font-semibold text-gray-900`}>
                                {item.name}<br />
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>
        </div>
    )
}