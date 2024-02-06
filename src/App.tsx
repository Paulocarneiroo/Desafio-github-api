import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
