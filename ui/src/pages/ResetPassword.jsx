import React, { useState } from 'react'

import Screen from '../components/Screen'
import Logo from '../components/Logo'
import ForgotPAsswordFormCard from '../components/ForgotPAsswordFormCard'
import CreateUserPasswordInput from '../components/CreateUserPasswordInput'
import ConfirmPasswordInput from '../components/ConfirmPasswordInput'
import ResetPasswordButton from '../components/ResetPasswordButton'

const ResetPassword = () => {

  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')
  const [errors, setErrors] = useState([])

  return (
    <Screen>
      <Logo/>
      <ForgotPAsswordFormCard>
        <CreateUserPasswordInput errors={errors} password={password} handleChange={(e) => setPassword(e.target.value)}/>
        <ConfirmPasswordInput errors={errors} password_confirmation={password_confirmation} handleChange={(e) => setPassword_confirmation(e.target.value)}/>
        <ResetPasswordButton/>
      </ForgotPAsswordFormCard>
    </Screen>
  )
}

export default ResetPassword