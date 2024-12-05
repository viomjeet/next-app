import React from 'react'

export default function page({ params }: { params: any }) {
    return (
        <div>
            <code>{JSON.stringify(params)}</code>

        </div>
    )
}