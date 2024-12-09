import {goLocation} from "../../../Module/PazerModule.tsx";
import {useTranslation} from "react-i18next";
import {CallLogin} from "../../../Calls/CallAuth.tsx";

export default function Page() {

    const { goTo, goBack } = goLocation();
    const { t } = useTranslation();

    return (
        <div>
            <div className={`text-2xl dark:bg-black dark:text-white text-black bg-red-300`} onClick={() => goTo("/mv")}>{t(`welcome`)}</div>
            <button onClick={() => goBack()}>Back to mv</button>
            <button onClick={()=> CallLogin()}>[{import.meta.env.VITE_API_URL}]</button>
        </div>
    )
}