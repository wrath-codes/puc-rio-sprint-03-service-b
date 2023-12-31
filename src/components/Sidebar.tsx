import {
  BoltIcon,
  DocumentTextIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  SwatchIcon,
  TrophyIcon,
} from '@heroicons/react/20/solid'

import { AppLogo } from './AppLogo'
import { SidebarLink } from './SidebarLink'

// Component that displays the sidebar
export function Sidebar(): JSX.Element {
  return (
    <aside className="w-72 bg-zinc-700 py-6 p-6 h-screen sticky top-0">
      <AppLogo
        icon={<DocumentTextIcon className="w-8 h-8" />}
        appName="MyNews"
      />
      <SidebarLink
        icon={<TrophyIcon className="w-7 h-7" />}
        href="/top-headlines"
        title="Top Headlines"
      />

      <SidebarLink
        icon={<BoltIcon className="w-7 h-7" />}
        href="/sources"
        title="Sources"
      />

      <SidebarLink
        icon={<SwatchIcon className="w-7 h-7" />}
        href="/categories"
        title="Categories"
      />

      <SidebarLink
        icon={<MagnifyingGlassIcon className="w-7 h-7" />}
        href="/search"
        title="Search"
      />
      <div className="border-b my-5 border-violet-500"></div>
      <SidebarLink
        icon={<LinkIcon className="w-7 h-7" />}
        href="/saved"
        title="Saved Articles"
      />
    </aside>
  )
}
