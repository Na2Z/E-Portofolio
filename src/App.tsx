/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profil from './pages/Profil';
import Analisis from './pages/Analisis';
import Penilaian from './pages/Penilaian';
import Dokumentasi from './pages/Dokumentasi';
import RoleModel from './pages/RoleModel';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profil />} />
          <Route path="/analisis" element={<Analisis />} />
          <Route path="/instrumen-penilaian" element={<Penilaian />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
          <Route path="/role-model" element={<RoleModel />} />
        </Routes>
      </Layout>
    </Router>
  );
}
