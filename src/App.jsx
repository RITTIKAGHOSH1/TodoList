import Todo from "./components/Todo"

const App = () => {

  
  return (
    <div className="bg-stone-800 grid py-4  min-h-screen">
     <h1 className="font-sans hover:font-serif text-4xl text-center h-fit w-auto pb-1 bg-red-200 text-red-950	mx-auto px-5 rounded-lg mt-14">Start your Day</h1>
    <Todo/>
    </div>
  )
}

export default App