import TodoList from "./TodoList";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
          <main className="grid align-top place-items-center py-24 px-6 sm:py-32 lg:px-8  ">
            <div className="text-center ">
          
              <h1 className="drop-shadow-md font-sans mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl mb-5">Maps Todo</h1>
                <TodoList/>
          
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to={`/normalmap`}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go to map
                </Link>
          
              </div>
            </div>
          </main>
      </div>
    </>
  )
}