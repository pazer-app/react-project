import {create} from "zustand";
import {clientLangType, clientModeType, clientThemeType} from "../Config/Config.tsx";
interface StoreState {
    clientMode : clientModeType
    clientLang : clientLangType
    clientTheme : clientThemeType
    clientThemeSystem : clientThemeType
    authState : boolean
    authToken : string
    authSID : string
    authData : string
    setClientMode : (mode:  clientModeType) => void
    setClientLang : (lang:  clientLangType) => void
    setClientTheme : (theme:  clientThemeType) => void
    setClientThemeSystem : (theme:  clientThemeType) => void
    setAuthState : (authState:  boolean) => void
    setAuthToken : (token: string) => void
    setAuthSID : (authSID:  string) => void
    setAuthData : (authData:  string) => void
}
const useStore = create<StoreState>((set) => ({
    clientMode : 0,
    clientLang : "ko",
    clientTheme : "system",
    clientThemeSystem : "system",
    authState : false,
    authToken : "",
    authSID : "",
    authData : "",
    setClientMode : (mode) => set(() => ({ clientMode: mode })),
    setClientLang : (lang) => set(() => ({ clientLang: lang })),
    setClientTheme : (theme) => set(() => ({ clientTheme: theme })),
    setClientThemeSystem : (theme) => set(() => ({ clientThemeSystem: theme })),
    setAuthState : (authState) => set(() => ({ authState: authState })),
    setAuthToken : (authToken) => set(() => ({ authToken })),
    setAuthSID : (authSID) => set(() => ({ authSID: authSID })),
    setAuthData : (authData) => set(() => ({ authData: authData })),
}));
export default useStore;