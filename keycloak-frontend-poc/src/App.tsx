import { Route, Routes } from 'react-router-dom'

import { RolesEnum } from 'src/types'

import { AdminPage, DashboardPage, HomePage, NoMatchPage } from 'src/pages'

import { ProtectedRoute } from 'src/components/atoms'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<HomePage />} />
      <Route path="/logout" element={<HomePage />} />
      <Route path="user" element={<ProtectedRoute requiredRole={RolesEnum.User} />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="admin" element={<ProtectedRoute requiredRole={RolesEnum.Admin} />}>
        <Route index element={<AdminPage />} />
      </Route>
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  )
}

export default App
