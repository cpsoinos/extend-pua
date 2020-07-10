import React from 'react'
import SenatorSocialHandles from './components/SenatorSocialHandles/SenatorSocialHandles'

const App = () => {
  const styles = {
    backgroundImage: "url(https://static.wixstatic.com/media/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.jpg/v1/fill/w_1920,h_1280,al_t,q_85,usm_0.66_1.00_0.01/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.webp)"
  }

  return (
    <div className="relative font-luloBold">
      <div className="absolute">
        <div className="fixed bg-blue-deep-sky h-full w-full">
          <div className="absolute bg-fixed bg-cover bg-top w-full h-full opacity-10 bg-no-repeat" style={styles}></div>
        </div>
      </div>
      <div className="relative">
        <SenatorSocialHandles />
      </div>
      {/* <header className="App-header"></header> */}
    </div>
  )
}

export default App;


// position: absolute; top: 0px; width: 100%; opacity: 0.11; background-size: cover; background-position: center top; background-repeat: no-repeat; height: 100%; background-image: url("https://static.wixstatic.com/media/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.jpg/v1/fill/w_1920,h_1280,al_t,q_85,usm_0.66_1.00_0.01/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.webp");
