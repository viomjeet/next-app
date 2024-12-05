import React from 'react'

function MainLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
        <h1>MainLayout</h1>
        <hr />
        <main>{children}</main>
    </div>
  )
}

export default MainLayout