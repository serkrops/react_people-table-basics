import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';
import { PeoplePage } from './components/PeoplePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="people">
          <Route path=":selectedPerson?" element={<PeoplePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
);