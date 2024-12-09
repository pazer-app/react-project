import axios from 'axios';


export class Calls {
    protected _method:string = "GET"
    protected _endpoint:string = ""
    protected _header: Record<string, string|number|null|boolean> = {}
    protected _data: Record<string, string|number|null|boolean> = {}
    protected _api_host = import.meta.env.VITE_API_URL;
    constructor() {
        console.log(this._api_host)
    }
    public method(type:"GET" | "POST" | "PUT" | "DELETE") : Calls {
        this._method = type
        return this
    }
    public endpoint(url:string) : Calls {
        this._endpoint = this._api_host + "/" + url
        return this
    }
    public addHeader(name:string, value:string) : Calls {
        this._header[name] = value
        return this
    }
    public addData(name:string, value:string) : Calls {
        this._data[name] = value
        return this
    }

    public async send() {
        try {
            console.log(this._data)
            const response = await axios({
                method : this._method,
                url : this._endpoint,
                headers : this._header,
                data: this._data,
                ...this._header,
            })
            console.log(`[OK] 응답 데이터:`, response.data);
            return response.data;
        }catch {
            console.error(`[Error] 에러 발생!`);
        }
    }
}