import Header from './layouts/header/Header'
import HomePage from './pages/HomePage'
function App() {


  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1640px]">
        <Header />
        <HomePage />
      </div>
    </div>
  )
}

export default App
