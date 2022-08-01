import React from "react";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthPage, ProfilePage } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useStore } from "./store";
import { Guards } from "./shared/enums";

function App() {
  const store = useStore();
  return (
    <Layout>
      <Routes>
        <Route path='*' element={<Navigate to='/profile' replace />} />
        <Route path='login' element={<AuthPage />} />
        <Route
          path='profile'
          element={
            <ProtectedRoute guard={store.guards[Guards.Auth]} navigate='login'>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
