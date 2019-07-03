import { inline } from 'app/utils/StylesUtils';
import { Provider } from 'mobx-react';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'typeface-roboto';
import { Navbar } from './Components/Navbar/Navbar';
import { ClassesConfigurationScreen } from './Containers/ClassesConfigurationScreen/ClassesConfigurationScreen';
import { GeneralConfigurationsScreen } from './Containers/GeneralConfigurationsScreen/GeneralConfigurationsScreen';
import { HomeScreen } from './Containers/HomeScreen/HomeScreen';
import { SummaryScreen } from './Containers/SummaryScreen/SummaryScreen';
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
          <Route path="/general-configurations" component={GeneralConfigurationsScreen} />
          <Route path="/classes-configurations" component={ClassesConfigurationScreen} />
          <Route path="/topology-configurations" component={TopologyConfiguration} />
          <Route path="/summary" component={SummaryScreen} />
        </div>
      </Router>
    </Provider>)
  }
}


export const App = hot(module)(AppClass);
