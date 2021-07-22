import React from 'react'
import FooterInfo from './FooterInfo'
import FooterNotice from './FooterNotice'
import SocialContact from './SocialContact'

const Footer = () => {
  return (
    <>
      <FooterNotice />
      <footer className="Footer">
        <div className="content">
          <FooterInfo />
          <SocialContact />
        </div>
      </footer>
    </>
  )
}

export default Footer
