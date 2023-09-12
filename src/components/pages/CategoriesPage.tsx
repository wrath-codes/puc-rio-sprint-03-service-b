import { CategoryList } from '../CategoryList'
import { PageTitle } from '../PageTitle'
import { categories } from '../../data/categories'
interface CategoriesPageProps {
  title: string
}

export function CategoriesPage({ title }: CategoriesPageProps): JSX.Element {
  return (
    <>
      <PageTitle title={title} />
      <CategoryList categories={categories} />
    </>
  )
}
