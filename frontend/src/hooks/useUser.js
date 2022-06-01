import { useCallback, useContext, useState } from 'react'
import Context from '../context/UserContext'
import axios from 'axios'

export default function useUser() {
  const { jwt, setJWT } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(
    (email, password ) => {
      setState({ loading: true, error: false })
      axios.post("https://localhost:44341/api/cuentas/login",{
          email: email,
          password:password
      }).then(response => {
          console.log(response.data)
          window.sessionStorage.setItem('jwt', response.data.token)
          setJWT(response.data.token)
          setState({ loading: false, error: false })
        })
        .catch(err => {
          window.sessionStorage.removeItem('jwt')
          setState({ loading: false, error: true })
          console.error(err)
        })
    },
    [setJWT]
  )

  const register = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false })
      axios.post("https://localhost:44341/api/cuentas/registrar",{
          email: email,
          password:password
      })
        .then(jwt => {
          window.sessionStorage.setItem('jwt', jwt)
          setState({ loading: false, error: false })
          setJWT(jwt)
        })
        .catch(err => {
          window.sessionStorage.removeItem('jwt')
          setState({ loading: false, error: true })
          console.error(err)
        })
    },
    [setJWT]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    register,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
  }
}
