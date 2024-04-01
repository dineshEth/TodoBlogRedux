import { AddTodo, Toastify, Todos } from "./component";
import { useSelector } from "react-redux";
import todo from "./features/todo";


function App() {
  const todos =  useSelector(state => state.todos);

  return (
    <div className="w-full m-0 flex flex-row justify-center p-0 min-h-screen bg-[#041a2f]">
      <div className="w-[1080px] px-4 flex flex-col items-center justify-start mx-auto">
        <h1 className="text-[48px]  text-orange-600">Todo</h1>
        <AddTodo />
        {todos.length <=0 ? (
          <p className="my-10 text-5xl sm:text-8xl text-gray-300">Add your Todos</p>
        ) : (
            <Todos />
        )}
      </div>
    </div>
  )
}

export default App
