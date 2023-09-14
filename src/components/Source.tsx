export interface ISource {
  id: string
  name: string
}

// Component that displays a source
export function Source({ id, name }: ISource): JSX.Element {
  return (
    <div className="text-start ml-5 my-1 p-2 rounded-md hover:bg-violet-500/20 ">
      <div className="">
        <a
          className="text-violet-500 font-bold text-xl"
          href={`/sources/${id}/${name}`}
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
    </div>
  )
}
