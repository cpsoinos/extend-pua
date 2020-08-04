import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import SenatorSocialHandles from 'pages/SenatorSocialHandles/SenatorSocialHandles'

const App = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <div className="fixed bg-background-black h-full w-full">
          <div className="bg-image-masks absolute bg-fixed bg-cover bg-top w-full h-full opacity-10 bg-no-repeat"></div>
        </div>
      </div>
      <div className="relative container mx-auto py-4 px-2">
        <Header />
          <SenatorSocialHandles />
        <Footer />
      </div>
    </div>
  )
}

export default App;
