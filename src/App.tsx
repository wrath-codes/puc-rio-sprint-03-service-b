import { NewsPage } from './components/pages/NewsPage'
import { Route } from 'wouter'
import { Sidebar } from './components/Sidebar'
import { SourcesPage } from './components/pages/SorcesPage'
export default function App() {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="min-h-screen w-full px-2">
            <Route path="/top-headlines">
              <NewsPage
                givenUrl="/top-headlines?country=us"
                title="Top Headlines"
              />
            </Route>
            <Route path="/sources">
              <SourcesPage
                givenUrl="/top-headlines/sources?country=us"
                title="Sources"
              />
            </Route>
            <Route path={`/sources/:id/:name`}>
              {(params) => (
                <NewsPage
                  givenUrl={`/top-headlines?sources=${params.id}`}
                  title={`News from ${params.name.replace(/%20/g, ' ')}`}
                />
              )}
            </Route>
            <Route path="search/:query">
              {(params) => (
                <NewsPage
                  givenUrl={`/everything?q=${params.query}`}
                  title={`Search results for ${params.query}`}
                />
              )}
            </Route>
          </main>
        </div>
      </div>
    </div>
  )
}
