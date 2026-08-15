import { ToastContainer } from "react-toastify"
import { Router } from "./Routes/Router"

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

        <Router/>
    </>
  )
}

export default App
