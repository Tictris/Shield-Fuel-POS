import React from 'react'
import FormCard from '../components/FormCard'
import PasswordInput from '../components/PasswordInput'
import EmailInput from '../components/EmailInput'
import LoginButton from '../components/LoginButton'
import ForgotPasswordLink from '../components/ForgotPasswordLink'

import Screen from '../components/Screen'
import Logo from '../components/Logo'
import LoginContextProvider from '../context/LoginContext'

const Login = () => {
  return (
    <LoginContextProvider>
      <Screen>
        <Logo/>
        <FormCard>
          <EmailInput/>
          <PasswordInput/>
          <ForgotPasswordLink/>
          <LoginButton/>
          <span className='italic text-sm pb-3'>Don't have an account? Contact Shield Team.</span>
        </FormCard>
      </Screen>
    </LoginContextProvider>
  )
}

export default Login