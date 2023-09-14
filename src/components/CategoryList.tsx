import { Category, ICategory } from './Category'

export interface ICategoriesList {
  categories: ICategory[]
}

// Component that displays a list of categories
export function CategoryList({ categories }: ICategoriesList): JSX.Element {
  return (
    <div className="flex flex-col">
      {categories.map((category) => (
        <Category key={category.id} id={category.id} name={category.name} />
      ))}
    </div>
  )
}
