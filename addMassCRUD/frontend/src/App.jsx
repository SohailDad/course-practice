import AddItems from "./components/addItems"
import Table from "./components/Table"

function App() {

  return (
    <>
      <div className="container p-4 text-center text-white bg-primary ">
        <h1>  Welcome to Add Mass CRUD Application </h1>
      </div>
      <div>
        {/* Add Items button */}
        <AddItems/>
        {/* Table */}
        <Table/>
      </div>
    </>
  )
}

export default App
