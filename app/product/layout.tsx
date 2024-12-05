import React from 'react'

export default function ProtectedLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className='bg-red-200'>

            {children}

            <div className='mx-auto max-w-1xl px-6 lg:max-w-8xl lg:px-8'>
                <h2>
                    Featured component Layout
                </h2>
            </div>
        </div>
    )
}