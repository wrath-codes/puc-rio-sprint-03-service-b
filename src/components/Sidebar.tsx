import { DocumentTextIcon, PuzzlePieceIcon } from '@heroicons/react/20/solid'

import { AppLogo } from './AppLogo'
import { SidebarLink } from './SidebarLink'

export function Sidebar(): JSX.Element {
  return (
    <aside className="w-72 bg-zinc-700 py-6 p-6 h-screen sticky top-0">
      <AppLogo
        icon={<DocumentTextIcon className="w-8 h-8" />}
        appName="MyNews"
      />
      <SidebarLink
        icon={<PuzzlePieceIcon className="w-8 h-8" />}
        href="/top-headlines"
        title="Top Headlines"
      />
    </aside>
  )
}
