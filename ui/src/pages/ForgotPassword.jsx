import React, { useState } from 'react'

import Screen from '../components/Screen'
import Logo from '../components/Logo'
import ForgotPAsswordFormCard from '../components/ForgotPAsswordFormCard'
import CreateUserEmailInput from '../components/CreateUserEmailInput'
import ForgotPasswordSubmitButton from '../components/ForgotPasswordSubmitButton'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])

  return (
    <Screen>
      <Logo/>
      <ForgotPAsswordFormCard>
        <CreateUserEmailInput errors={errors} email={email} handleChange={(e) => setEmail(e.target.value)}/>
        <ForgotPasswordSubmitButton/>
      </ForgotPAsswordFormCard>
    </Screen>
    
  )
}

export default ForgotPassword