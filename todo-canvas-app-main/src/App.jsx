import React from "react";
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";
import "./App.css";
import { createGlobalStyle } from 'styled-components';
import { darkJoy, darkEva, darkSber } from '@sberdevices/plasma-tokens/themes'; 
import {text, background, gradient} from '@sberdevices/plasma-tokens';
import { DeviceThemeProvider } from '@sberdevices/plasma-ui/components/Device';
import { typography } from '@sberdevices/plasma-tokens';
import { body1, headline2 } from '@sberdevices/plasma-tokens';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect,
} from "react-router-dom";

import Menu from "./pages/Menu";
import NotFound from "./pages/404";
import Museums from "./pages/Museums";
import Favorites from "./pages/Favorites";
import Tretyakovka from "./pages/museums/Tretyakovka";

const initializeAssistant = (getState) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};

const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);

const DocStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`;

window.currentURL = "/";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character: "sber", //текущий персонаж
      openedMusId: -1,
      addFavID: -1,
      delFavID: -1,
    }
    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("start", (event) => {
      setTimeout(this.assistant.sendData({action: {action_id: "getSub"}}), 300);
    });
    this.assistant.on("data", (event) => {
      if(event.type === 'character') {
        console.log("был вызван " + event.character.id);
        this.setState({
          character: event.character.id,  
        });
      }
      const { action } = event
      this.dispatchAssistantAction(action);
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant () {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: null,
      },
    };
    console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case "test":
          console.log("test");
          break;
        case "get_sub":
          window.user_id = action.data;
          break;
        case "open_museums_list":
          window.open("./museums", "_self");
          break;
        case "open_favor_museums":
          window.open("./fav", "_self");
          break;
        case "open_museum":
          if(window.currentURL === "/museums" || window.currentURL === "/fav") {
            this.setState({openedMusId: action.data});
            this.setState({openedMusId: -1});
          }
          break;
        case "add_favorite":
          if(window.currentURL !== "/") {
            this.setState({addFavID: action.data});
            this.setState({addFavID: -1});
          }
          break;
        case "delete_favorite":
          if(window.currentURL !== "/") {
            this.setState({delFavID: action.data});
            this.setState({delFavID: -1});
          }
          break;
        case "back":
          if(window.currentURL !== "/")
            window.history.back();
          break;
      }
    }
  }
  
  render() {
    console.log(this.state.character);
    return (
      <DeviceThemeProvider>
        <DocStyle/>
        {(() => {
                  switch (this.state.character) {
                      case 'sber':
                          return <ThemeBackgroundSber />;
                      case 'eva':
                          return <ThemeBackgroundEva />;
                      case 'joy':
                          return <ThemeBackgroundJoy />;
                      default:
                          return; 
                  }
              })()}
              <div>
                <Router>
                      <Switch>
                        <Route exact path = "/" component={Menu} />
                        <Route exact path = "/404" component = {NotFound} />
                        <Route exact path = "/museums" render={(props) => <Museums 
                          openId={this.state.openedMusId}
                          addFavID={this.state.addFavID}
                          delFavID={this.state.delFavID}
                          />}
                        />
                        <Route exact path = "/museums/first" component = {Tretyakovka} />
                        <Route exact path = "/fav/first" component = {Tretyakovka} />
                        <Route exact path = "/fav" render={(props) => <Favorites 
                          openId={this.state.openedMusId}
                          addFavID={this.state.addFavID}
                          delFavID={this.state.delFavID}
                          />}
                        />
                        <Redirect to = "/404"/>
                      </Switch>
                </Router>
              </div>
      </DeviceThemeProvider>
    );
  }
}

export default App;