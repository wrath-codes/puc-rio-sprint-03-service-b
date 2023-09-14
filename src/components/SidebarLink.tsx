/* eslint-disable prettier/prettier */
import { Link, useLocation } from 'wouter'

import { ReactNode } from 'react'

interface ISidebarLink {
  icon: ReactNode
  href: string
  title: string
}


// Component that displays a link in the sidebar
export function SidebarLink({ icon, href, title }: ISidebarLink): JSX.Element {
  const [location] = useLocation()
  return (
    <li
      className={`flex items-center justify-start w-full rounded-md h-12 px-1 py-2 font-semibold text-lg ${location === href
        ? 'bg-transparent text-violet-400'
        : 'text-zinc-300 hover:bg-zinc-800 hover:text-violet-400'
        }`}
    >
      <Link href={href}>
        <a className="flex items-center justify-start w-full h-full">
          <span className="mr-4">{icon}</span>
          {title}
        </a>
      </Link>
    </li>
  )
}
