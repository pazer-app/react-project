import {goLocation} from "../../../Module/PazerModule.tsx";
export default function Page() {
    const { goTo, goBack } = goLocation();
    return (
        <div>
            <div className={`text-2xl`} onClick={() => goTo("/")}>Error 404</div>
            <button onClick={() => goBack()}>Back to mv</button>
        </div>
    )
}