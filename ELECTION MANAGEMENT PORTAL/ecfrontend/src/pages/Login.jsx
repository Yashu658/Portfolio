import React from 'react'
import AdminLogin from "./AdminLogin"
import CandidateLogin from './CandidateLogin'
import VoterLogin from './VoterLogin'
const Login = () => {
  return (
    <>
    <AdminLogin/>
    <CandidateLogin/>
    <VoterLogin/>
    </>
  )
}

export default Login