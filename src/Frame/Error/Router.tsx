import {Redirect, Route, Switch} from "wouter"
import MainPage from "./Page/Main.tsx"
import Layer from "./Layer.tsx"
export default function Router() {
    const path = "/error"
    return (
        <Layer page={
            <Switch>
                <Route path={`${path}`} component={MainPage} />
                <Route>
                    <Redirect to="/error"/>
                </Route>
            </Switch>
        }/>
    )
}