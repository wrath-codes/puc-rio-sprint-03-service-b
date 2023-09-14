export interface ICategory {
  id: string
  name: string
}

// Component that displays a category
export function Category({ id, name }: ICategory): JSX.Element {
  return (
    <div className="text-start ml-5 my-1 p-2 rounded-md hover:bg-violet-500/20 ">
      <div className="">
        <a
          className="text-violet-500 font-bold text-xl"
          href={`/categories/${id}/${name}`}
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
    </div>
  )
}
