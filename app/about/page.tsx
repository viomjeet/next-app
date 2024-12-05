import React from 'react'

export default function About({ searchParams }: { searchParams: any }) {
    return (
        <div>
            <code>{JSON.stringify(searchParams)}</code>
        </div>
    )
}