import { AddTodo, Todos } from "./component"


function App() {

  return (
    <div className="w-full m-0 flex flex-row justify-center p-0 min-h-screen bg-[#041a2f]">
      <div className="w-[1080px] px-4 flex flex-col items-center justify-start mx-auto">
        <h1 className="text-[48px]  text-orange-600">Todo</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
