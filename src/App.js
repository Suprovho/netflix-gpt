
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="text-3xl font-bold text-green-800">
      <Provider store={appStore}>
      <Body />
      </Provider>
    </div>
  );
}

export default App;
