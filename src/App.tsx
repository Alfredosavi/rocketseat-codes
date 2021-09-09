import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { PrivateRoute } from "./middlewares/auth";

import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
