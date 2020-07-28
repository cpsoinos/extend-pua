import React from 'react'
import Button from 'components/Button/Button'

const Footer = () => {
  return (
    <footer className="flex flex-wrap text-white font-luloBold mt-8">
      <div className="w-full max-w-1/2 sm:max-w-1/3">
        <Button href="https://www.crisistextline.org/" className="bg-red-flag p-1 text-xxs rounded-md hover:bg-blue-deep-sky">
          In a crisis?
        </Button>
      </div>
      <div className="w-full max-w-1/2 sm:max-w-1/3 text-center text-xxs">
        © 2020 ExtendPUA.org
      </div>
      <div className="w-full sm:max-w-1/3 text-center mt-4 sm:mt-0 sm:text-right">
        <Button href="https://www.extendpua.org/donate" className="block text-blue-deep-sky underline text-xxs hover:text-white">Donate</Button>

        <div className="space-x-4 mt-4 mb-2">
          <Button className="inline-block" href="https://www.facebook.com/extendpua">
            <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.jpg" width="26" height="26" alt="Extend PUA on Facebook" />
          </Button>

          <Button className="inline-block" href="https://www.twitter.com/extendpua">
            <img src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01/9c4b521dd2404cd5a05ed6115f3a0dc8.jpg" width="26" height="26" alt="Extend PUA on Twitter" />
          </Button>

          <Button className="inline-block" href="https://www.instagram.com/extendpua">
            <img src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01/8d6893330740455c96d218258a458aa4.jpg" width="26" height="26" alt="Extend PUA on Instagram" />
          </Button>
        </div>

        <Button href="https://www.extendpua.org/contact-us" className="bg-red-flag p-1 text-xxs rounded-md hover:bg-blue-deep-sky">
          Contact us
        </Button>
      </div>
      <div className="text-center">
        <p className="text-xxs font-sans mt-6">
          ExtendPUA.org is not a source of legal advice or counsel. All information contained on ExtendPUA.org is an educational tool and volunteer run organization. Where specific facts are referenced, every effort has been made to verify the accuracy and truthfulness of the information presented. Occasionally our information will become out of date because of the rapidly evolving nature of the movement. If you spot something out of place, please contact us at <Button href="mailto:Info@ExtendPUA.org">Info@ExtendPUA.org</Button>
        </p>
        <p className="text-xxs font-sans mt-2">
          Senate social handles list courtesy JOE BEUMER{' '}
          <Button className="underline" href="http://www.instagram.com/beanartshero">
            <>
              <span>@BE</span><span className="text-red-flag">AN</span>ARTS<span className="text-red-flag">HERO</span>
            </>
          </Button>
        </p>
        <p className="text-xxs font-sans mt-2">
          Designed and built with <span role="img" aria-label="heart emoji">♥️</span> by <Button className="underline" href="https://github.com/cpsoinos">Corey Psoinos</Button> in Brooklyn, NY
        </p>
      </div>
    </footer>
  )
}

export default Footer
