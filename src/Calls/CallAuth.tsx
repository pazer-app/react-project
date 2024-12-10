import {Calls} from "./Calls"

export function CallLogin() : void {
    const req = new Calls()
    req.method("GET")
        .endpoint("test")
        .addHeader("Auth-Token","sdf123")
        .addHeader("Auth-Sid","kds")
        .addData("test","test")
    req.send().then(() => {})
}
