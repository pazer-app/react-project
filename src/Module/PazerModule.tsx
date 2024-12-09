import {
    clientLangList,
    clientLangType, clientModeDefault, clientModeList,
    clientModeType,
    clientThemeDefault,
    clientThemeList,
    clientThemeType
} from "../Config/Config.tsx"
import useStore from "../Store/Store.ts"
import {useLocation} from "wouter"
import i18n from "i18next";
/** Init **/
export function PazerInit() : void {
    loadClientTheme()
    loadClientLang()
    loadAuth()
}
/** Client Mode **/
export function setClientMode(clientMode: clientModeType) : void {
    const setClientMode = useStore.getState().setClientMode
    const value = clientModeList.indexOf(clientMode) ? clientMode : clientModeDefault
    setClientMode(value)
}
export function resizeClientMode() : void {
    const width = window.innerWidth
    const setClientMode = useStore.getState().setClientMode
    if(width < 1024) setClientMode(1)
    else setClientMode(0)
}
/** Client Theme **/
export function setClientTheme(clientTheme: clientThemeType) : void {
    const setClientTheme = useStore.getState().setClientTheme
    const setClientThemeSystem = useStore.getState().setClientThemeSystem
    const value = clientThemeList.includes(clientTheme) ? clientTheme : clientThemeDefault

    setClientTheme(value)
    if(value === "system") {
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const sysValue = systemDarkMode ? "dark" : "light"
        setClientThemeSystem(sysValue)
        setMetaTheme(sysValue === "dark")
    }else{
        setClientThemeSystem(value)
        setMetaTheme(value === "dark")
    }
    setStorage("clientTheme", value)
}
export function loadClientTheme() : void {
    const systemTheme = getStorage("clientTheme") as clientThemeType
    setClientTheme(systemTheme)
}
export function setMetaTheme(dark: boolean) : void {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}
/** Client Language **/
export function setClientLang(clientLang: clientLangType) : void {
    const setClientLang = useStore.getState().setClientLang
    const value = clientLangList.includes(clientLang) ? clientLang : getBrowserLanguage() as clientLangType
    setClientLang(value)
    setStorage("clientLang", value)
    setLanguage(clientLang)
}
export function getBrowserLanguage(): string {
    const browserLang = navigator.language || 'en';
    return browserLang.split('-')[0];
}
export function loadClientLang() : void {
    const systemLang = getStorage("clientLang") as clientLangType
    setClientLang(systemLang)
}
export function setLanguage(lng: string) {
    i18n.changeLanguage(lng).catch((error) => {
        console.error(`언어 변경 실패: ${error.message}`);
    });
}
/** localStorage **/
export function setStorage(name:string, value:string) : void {
    localStorage.setItem(name, value)
}
export function getStorage(name: string) : string {
    return localStorage.getItem(name) || ""
}
/** Routing **/
export const goLocation = () => {
    const [_, setLocation] = useLocation()
    const goTo = (url: string) => { setLocation(url) }
    const goBack = () => { window.history.back() }
    return { goTo, goBack }
};
/** Auth **/
export function loadAuth() : void {
    const authState = getStorage("authState")
    if(authState === "true") setAuthReload()
    else setAuthReset()
}
export function setAuthReset() : void {
    setAuthState(false)
    setAuthToken("")
    setAuthSID("")
    setAuthData("")
}
export function setAuthReload() : void {
    setAuthState(true)
    setAuthToken(getStorage("authToken"))
    setAuthSID(getStorage("authSID"))
    setAuthData(getStorage("authData"))
}
export function setAuthState(state : boolean) : void {
    const setAuthState = useStore.getState().setAuthState
    setAuthState(state)
    setStorage("authState", state ? "true" : "false")
}
export function setAuthToken(token : string = "") : void {
    const setAuthToken = useStore.getState().setAuthToken
    setAuthToken(token)
    setStorage("authToken", token)
}
export function setAuthSID(sid : string = "") : void {
    const setAuthSID = useStore.getState().setAuthSID
    setAuthSID(sid)
    setStorage("authSID", sid)
}
export function setAuthData(data : string = "") : void {
    const setAuthData = useStore.getState().setAuthData
    setAuthData(data)
    setStorage("authData", data)
}