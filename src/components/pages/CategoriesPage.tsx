import { CategoryList } from '../CategoryList'
import { PageTitle } from '../PageTitle'
import { categories } from '../../data/categories'
interface CategoriesPageProps {
  title: string
}

// CategoriesPage is the page that displays all the categories
export function CategoriesPage({ title }: CategoriesPageProps): JSX.Element {
  return (
    <>
      <PageTitle title={title} />
      <CategoryList categories={categories} />
    </>
  )
}
