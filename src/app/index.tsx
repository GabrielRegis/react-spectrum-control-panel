import { inline } from 'app/utils/StylesUtils';
import { Provider } from 'mobx-react';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'typeface-roboto';
import { Navbar } from './Components/Navbar/Navbar';
import { FlowsConfiguration } from './Containers/FlowsConfiguration/FlowsConfiguration';
import { HomeScreen } from './Containers/HomeScreen/HomeScreen';
import { SimulationConfiguration } from './Containers/SimulationConfiguration/SimulationConfiguration';
import TopologyConfiguration from './Containers/TopologyConfiguration/TopologyConfiguration';
import './main.css';
import rootStore from './Store/RootStore';
import styles from './Theme/AppStyles';

class AppClass extends React.Component {
  render() {
    return (<Provider  {...rootStore}>
      <Router >
        <div style={inline([styles.fullContainer])}>
          <Navbar />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/simulation-configuration" component={SimulationConfiguration} />
          <Route path="/flow-configuration" component={FlowsConfiguration} />
          <Route path="/topology-configuration" component={TopologyConfiguration} />
        </div>
      </Router>
    </Provider>)
  }
}


export const App = hot(module)(AppClass);
