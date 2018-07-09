import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import 'bootstrap/scss/bootstrap.scss';
import Navbar from "./Navbar/Navbar";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    {routes.map(({path, exact, component: C, ...rest}) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => (
                                <C {...props} {...rest} />
                            )}
                        />
                    ))}
                </Switch>
            </div>
        )
    }
}
// const App = () => {
//     return (
//         <Switch>
//             {routes.map((route, i) => <Route key={i} {...route} />)}
//         </Switch>
//     );
// }

export default App;