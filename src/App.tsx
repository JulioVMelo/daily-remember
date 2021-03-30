import { Dashboard } from './pages/Dashboard';
import Theme from './styles/Theme';

export function App() {
  return (
    <div className="App">
      <Theme>
        <Dashboard />
      </Theme>
    </div>
  );
}
