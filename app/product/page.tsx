
import React from 'react'
export default async function About({ searchParams }: { searchParams: { q: string } }) {
    const { q } = await searchParams;
    return (
        <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
            <h1>productid :{q}</h1>
            
        </div>
    )
}