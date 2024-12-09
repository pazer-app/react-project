import {ReactNode} from "react"
export default function Layer({ page }: {page:ReactNode}): JSX.Element {
    return (
        <div>
            <div>Layer</div>
            <div>{page}</div>
        </div>
    )
}