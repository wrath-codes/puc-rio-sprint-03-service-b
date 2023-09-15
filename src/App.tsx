import { CategoriesPage } from './components/pages/CategoriesPage'
import { NewsPage } from './components/pages/NewsPage'
import { Route } from 'wouter'
import { SavedArticlesPage } from './components/pages/SavedArticlesPage'
import { SearchPage } from './components/pages/SearchPage'
import { Sidebar } from './components/Sidebar'
import { SourcesPage } from './components/pages/SourcesPage'

// App is the main component that renders the whole app
export default function App() {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="min-h-screen w-full px-2">
            {/* Route for / */}
            <Route path="/">
              <NewsPage
                givenUrl="/top-headlines?country=us"
                title="Top Headlines"
              />
            </Route>

            {/* Route for /top-headlines */}
            <Route path="/top-headlines">
              <NewsPage
                givenUrl="/top-headlines?country=us"
                title="Top Headlines"
              />
            </Route>

            {/* Route for /sources */}
            <Route path="/sources">
              <SourcesPage
                givenUrl="/top-headlines/sources?country=us"
                title="Sources"
              />
            </Route>

            {/* Route for /sources/:id/:name */}
            <Route path={`/sources/:id/:name`}>
              {(params) => (
                <NewsPage
                  givenUrl={`/top-headlines?sources=${params.id}`}
                  title={`News from ${params.name.replace(/%20/g, ' ')}`}
                />
              )}
            </Route>

            {/* Route for /search */}
            <Route path="/search">
              <SearchPage />
            </Route>

            {/* Route for /categories */}
            <Route path="/categories">
              <CategoriesPage title="Categories" />
            </Route>
            {/* Route for /categories/:id/:name */}
            <Route path="/categories/:id/:name">
              {(params) => (
                <NewsPage
                  givenUrl={`/top-headlines?country=us&category=${params.id}`}
                  title={`${params.name} News`}
                />
              )}
            </Route>

            {/* Route for /saved */}
            <Route path="/saved">
              <SavedArticlesPage />
            </Route>
          </main>
        </div>
      </div>
    </div>
  )
}
