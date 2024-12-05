import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
    const {id} = await params;
    return (
        <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
            <h1>params : {id}</h1>
        </div>
    )
}