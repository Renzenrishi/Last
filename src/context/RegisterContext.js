import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegistered: false,
  showSubmitError: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})

export default RegisterContext
