


function App() {
  return (
    <div className="">
      <header className="flex h-12 items-center justify-between bg-blue-500 hover:bg-blue-600 text-white p-2 ">
        <h1>header</h1>
        <div className="flex space-x-2">
          <p>options</p>
          <p>options</p>
          <p>options</p>
          <p>options</p>
        </div>
      </header>

      <div className="mx-auto flex w-max">
        <form action="" className="border mt-20 shadow-lg  p-5">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-max text-white px-2 py-1 rounded">
            <h1 className="flex w-max">Login</h1>
          </div>

          <div className="grid my-5 gap-">
            <div className="border ">
              <input type="text" placeholder="username" className="w-full p-2" />
            </div>

            <div className="border ">
              <input type="text" placeholder="password" className="w-full p-2" />
            </div>
          </div>


          <button className="border bg-blue-500 hover:bg-white hover:border hover:border-blue-500  hover:text-blue-500 px-5 py-2 text-white rounded-full">Submit</button>

        </form>

      </div>
      <footer className=" space-x-2 absolute bottom-0 bg-gray-700 w-full text-white flex justify-around">
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </footer>

    </div>
  );
}

export default App;
