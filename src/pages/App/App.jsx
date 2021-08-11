import "./App.css";
import React, { useState } from "react";
import NewOrderPage from "../NewOrderPage";
import AuthPage from "../AuthPage";
import OrderHistoryPage from "../OrderHistoryPage";
import { NavBar } from "../../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";

export default function App() {
    const [user, setUser] = useState(getUser());

    return (
        <main className='App'>
            {user ? (
                <>
                    <Switch>
                        <Route path='/orders/new'>
                            <NewOrderPage user={user} setUser={setUser} />
                        </Route>
                        <Route path='/orders'>
                            <OrderHistoryPage user={user} setUser={setUser} />
                        </Route>
                        <Redirect to='/orders' />
                    </Switch>
                </>
            ) : (
                <AuthPage setUser={setUser} />
            )}
        </main>
    );
}
