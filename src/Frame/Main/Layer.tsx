import {ReactNode} from "react"
import useStore from "../../Store/Store.ts";
export default function Layer({ page }: {page:ReactNode}): JSX.Element {
    const clientMode = useStore((state)=>state.clientMode)
    return (
        <div >
            <div className={`${clientMode === 1 && "h-80" } `}>Layer</div>
            <div>{page}</div>
        </div>
    )
}