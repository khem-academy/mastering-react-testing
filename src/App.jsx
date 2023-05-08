function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="m-auto">
        <div>
          <img src="./assets/img/logo.png" alt="Mastering React Testing" className="mx-auto w-60 md:w-80 md:h-80 md:mx-auto md:my-auto" />
          <h1 className="font-extrabold p-3 text-3xl sm:text-6xl text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Mastering React Testing</h1>
          <p className="text-center text-sm text-gray-600 italic">Level up your React skills with comprehensive testing techniques - The ultimate guide to mastering React testing!</p>
          <div className="flex justify-center mt-5 space-x-5">
            <a href="https://github.com/khem-academy/mastering-react-testing" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <img src="./assets/img/github.svg" alt="GitHub" className="w-6 h-6" />
                <span>GitHub Repository</span>
              </div>
            </a>
            <a href="https://khemsok97.gumroad.com/l/kyhpsj" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors duration-300 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <img src="./assets/img/gumroad.png" alt="Gumroad" className="w-6 h-6" />
                <span>Purchase on Gumroad</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0">
        <p className="text-sm text-gray-600 text-center">Made with 💕 by Khem Sok</p>
      </div>
    </div>
  )
}

export default App
