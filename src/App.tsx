import { NewsPage } from './NewsPage'
import { Route } from 'wouter'
import { Sidebar } from './components/Sidebar'
export default function App() {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="min-h-screen pl-2">
            <Route path="/top-headlines">
              <NewsPage givenUrl="/top-headlines?country=br" />
            </Route>
          </main>
        </div>
      </div>
    </div>
  )
}
