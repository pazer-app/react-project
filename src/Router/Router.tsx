import {Redirect, Route, Switch} from "wouter";
import {useEffect} from "react";
import {PazerInit, resizeClientMode} from "../Module/PazerModule.tsx";
import MainFrame from "../Frame/Main/Router"
import ErrorFrame from "../Frame/Error/Router"
import "../Module/PazerLang.tsx"
export default function Router() {
    useEffect(() => {
        PazerInit()
        resizeClientMode()
        window.addEventListener('resize', resizeClientMode)
        return () => { window.removeEventListener('resize', resizeClientMode) }
    }, []);

    return (
        <Switch>
            <Route path="/" component={MainFrame} />
            <Route path="/users/:name">
                {(params) => <>Hello, {params.name}!</>}
            </Route>
            <Route path="/error" component={ErrorFrame} />
            <Route>
                <Redirect to="/error"/>
            </Route>
        </Switch>
    )
}