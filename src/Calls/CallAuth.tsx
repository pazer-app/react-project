import {Calls} from "./Calls"

export function CallLogin() : void {
    const req = new Calls()
    req.method("POST").endpoint("test").addHeader("Auth-Token","test").addData("test","test")
    req.send().then(() => {})
}
