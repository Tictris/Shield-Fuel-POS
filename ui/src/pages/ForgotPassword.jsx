import React from 'react'
import  { Link } from 'react-router-dom'

import FormCard from '../components/FormCard'
import PasswordInput from '../components/PasswordInput'
import EmailInput from '../components/EmailInput'
import ForgotPasswordLink from '../components/ForgotPasswordLink'

import ScreenLayout from '../components/ScreenLayout'
import SystemLogo from '../components/SystemLogo'
import ForgotPasswordButton from '../components/ForgotPasswordButton'


const ForgotPassword = () => {
  return (
    <ScreenLayout>
      <SystemLogo/>
        <div className="w-96 h-96">
          <FormCard>
            <EmailInput/>
            <ForgotPasswordButton/>
          </FormCard>
       </div>
    </ScreenLayout>
  )
}

export default ForgotPassword