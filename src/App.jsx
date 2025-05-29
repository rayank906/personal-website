import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import { Home } from './pages/Home';
import { Toaster } from '@/components/ui/toaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
