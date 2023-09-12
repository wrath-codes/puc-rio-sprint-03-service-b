export function PageTitle({ title }: { title: string }): JSX.Element {
  return (
    <h1 className="text-5xl font-semibold text-violet-500 mb-5 pb-5 pl-2 pt-3 border-b border-b-violet-500 sticky top-0 bg-zinc-900">
      {title}
    </h1>
  )
}
