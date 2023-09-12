import { Link } from 'wouter'
import { ReactNode } from 'react'

interface IAppLogo {
  icon: ReactNode
  appName: string
}

export function AppLogo({ icon, appName }: IAppLogo): JSX.Element {
  return (
    <Link href="/top-headlines">
      <a className="flex items-center space-x-2 mb-5 text-violet-500">
        {icon}
        <span className="text-3xl text-white font-bold">{appName}</span>
      </a>
    </Link>
  )
}
