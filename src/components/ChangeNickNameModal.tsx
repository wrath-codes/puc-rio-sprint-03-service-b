import { Fragment, useState } from 'react'

import { PencilIcon } from '@heroicons/react/24/solid'
import { useArticleStore } from '../feature/article/articleStore'

// interface for the EditNickNameModal component
interface IEditNickNameModal {
  id: number
}

// EditNickNameModal is a modal that allows the user to edit the nickname of a saved article
export function EditNickNameModal({ id }: IEditNickNameModal) {
  const { updateNickname, getAll, articles, article } = useArticleStore()
  const [open, setOpen] = useState(false)
  const [newNickname, setNewNickname] = useState(article?.nickname)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(event.target.value)
  }

  const onSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
    updateNickname(id, newNickname!)
    getAll()
    setOpen(false)
    console.log(articles)
  }

  return (
    <Fragment>
      <button
        onClick={handleOpenModal}
        className="text-zinc-50 bg-violet-500 hover:bg-violet-700 items-center rounded-md p-2 mr-5"
      >
        <PencilIcon className="w-5 h-5" />
      </button>

      {open && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                    <div className="h-6 w-6 text-yellow-600">
                      <PencilIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Edit Recipe
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Edit your recipe here.
                      </p>

                      <div className="mt-2">
                        <input
                          type="text"
                          name="title"
                          defaultValue={article!.nickname}
                          className="w-full border-2 placeholder-gray-400 focus:border-yellow-300 focus:bg-yellow-300/25 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-yellow-300 p-2 rounded-md"
                          placeholder="Title"
                          value={newNickname}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-300 text-base font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onSubmit}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}
