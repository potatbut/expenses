import { Routes, Navigate, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AppRouter = () => {
  const [authUser, setAuthUser] = useState('')

  useEffect(()=> {
    const listen = onAuthStateChanged(auth, (user)=> {
      if(user) {
        setAuthUser(user)
      }else (
        setAuthUser(null)
      )
    }, [])
  })
  const user = authUser
  return user ? (
    <Routes>

      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  )
    :
    (
      <Routes>

        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
}

export default AppRouter