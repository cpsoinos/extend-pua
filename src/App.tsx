import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import CongressSocialHandles from 'pages/CongressSocialHandles/CongressSocialHandles'

const App = () => {
  return (
    <div className="relative font-futuraPTMedium">
      <div className="absolute">
        <div className="fixed h-full w-full">
          <div className="handles-bg absolute bg-fixed bg-cover bg-top w-full h-full bg-no-repeat"></div>
        </div>
      </div>
      <div className="relative container mx-auto py-4 px-2">
        <Header />
        <CongressSocialHandles />
        <Footer />
      </div>
    </div>
  )
}

export default App
