import { ToastContainer } from "react-toastify"
import { Router } from "./Routes/Router"
import { AuthProvider } from "./Context/AuthProvider"
import { ThemeProvider } from "./Context/ThemeProvider"

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

      <ThemeProvider>
        <AuthProvider>
          <Router/>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
