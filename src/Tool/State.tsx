import useStore from "../Store/Store.ts";
import {
    setAuthData,
    setAuthSID,
    setAuthState,
    setAuthToken,
    setClientLang,
    setClientTheme
} from "../Module/PazerModule.tsx";

export default function State() {
    const clientMode = useStore((state)=>state.clientMode)
    const clientLang = useStore((state)=>state.clientLang)
    const clientTheme = useStore((state)=>state.clientTheme)
    const clientThemeSystem = useStore((state)=>state.clientThemeSystem)
    const authState = useStore((state)=>state.authState)
    const authToken = useStore((state)=>state.authToken)
    const authSID = useStore((state)=>state.authSID)
    const authData = useStore((state)=>state.authData)
    const setClientMode = useStore((state)=>state.setClientMode)
    return (
        <div className={`fixed flex w-[500px] h-[400px] top-10 right-10 bg-white border text-[12px] overflow-hidden`}>
            <div className={`flex-col w-full h-full overflow-y-auto`}>
                <div className={`flex w-full h-10 border-b`}>
                    <div className={`flex flex-none w-20 justify-center items-center border-r`}>clientMode</div>
                    <div
                        className={`flex flex-1 justify-center items-center`}>{clientMode === 0 ? "PC" : "Mobile"}</div>
                    <div className={`flex flex-none w-40 justify-center items-center border-l`}>
                        <button onClick={() => setClientMode(0)}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>PC
                        </button>
                        <button onClick={() => setClientMode(1)}
                                className={`flex flex-1 h-full justify-center items-center`}>Mobile
                        </button>
                    </div>
                </div>
                <div className={`flex w-full h-10 border-b`}>
                    <div className={`flex flex-none w-20 justify-center items-center border-r`}>clientLang</div>
                    <div
                        className={`flex flex-1 justify-center items-center`}>{clientLang}</div>
                    <div className={`flex flex-none w-40 justify-center items-center border-l`}>
                        <button onClick={() => setClientLang("ko")}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>KO
                        </button>
                        <button onClick={() => setClientLang("en")}
                                className={`flex flex-1 h-full justify-center items-center`}>EN
                        </button>
                    </div>
                </div>
                <div className={`flex w-full h-10 border-b`}>
                    <div className={`flex flex-none w-20 justify-center items-center border-r`}>clientTheme</div>
                    <div
                        className={`flex flex-1 justify-center items-center`}>{clientTheme}/{clientThemeSystem}</div>
                    <div className={`flex flex-none w-40 justify-center items-center border-l`}>
                        <button onClick={() => setClientTheme("system")}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>S
                        </button>
                        <button onClick={() => setClientTheme("light")}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>L
                        </button>
                        <button onClick={() => setClientTheme("dark")}
                                className={`flex flex-1 h-full justify-center items-center`}>D
                        </button>
                    </div>
                </div>
                <div className={`flex w-full h-10 border-b`}>
                    <div className={`flex flex-none w-20 justify-center items-center border-r`}>authState</div>
                    <div
                        className={`flex flex-1 justify-center items-center`}>{authState ? "True" : "False"}</div>
                    <div className={`flex flex-none w-40 justify-center items-center border-l`}>
                        <button onClick={() => setAuthState(true)}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>T
                        </button>
                        <button onClick={() => setAuthState(false)}
                                className={`flex flex-1 h-full justify-center items-center`}>F
                        </button>
                    </div>
                </div>
                <div className={`flex w-full h-10 border-b`}>
                    <div className={`flex flex-none w-20 justify-center items-center border-r`}>authToken</div>
                    <div
                        className={`flex flex-1 justify-center items-center`}>{authToken}</div>
                    <div className={`flex flex-none w-40 justify-center items-center border-l`}>
                        <button onClick={() => setAuthToken("test")}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>T
                        </button>
                        <button onClick={() => setAuthToken("")}
                                className={`flex flex-1 h-full justify-center items-center`}>F
                        </button>
                    </div>
                </div>
                <div className={`flex w-full h-10 border-b`}>
                    <div className={`flex flex-none w-20 justify-center items-center border-r`}>authSID</div>
                    <div
                        className={`flex flex-1 justify-center items-center`}>{authSID}</div>
                    <div className={`flex flex-none w-40 justify-center items-center border-l`}>
                        <button onClick={() => setAuthSID("test")}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>T
                        </button>
                        <button onClick={() => setAuthSID("")}
                                className={`flex flex-1 h-full justify-center items-center`}>F
                        </button>
                    </div>
                </div>
                <div className={`flex w-full h-10 border-b`}>
                    <div className={`flex flex-none w-20 justify-center items-center border-r`}>authData</div>
                    <div
                        className={`flex flex-1 justify-center items-center`}>{authData}</div>
                    <div className={`flex flex-none w-40 justify-center items-center border-l`}>
                        <button onClick={() => setAuthData("test")}
                                className={`flex flex-1 h-full justify-center items-center border-r`}>T
                        </button>
                        <button onClick={() => setAuthData("")}
                                className={`flex flex-1 h-full justify-center items-center`}>F
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}