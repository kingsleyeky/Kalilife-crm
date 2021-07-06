/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.11.3.0 (NJsonSchema v10.4.4.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export interface IAgentLeadsClient {
    get(sorting: string | null, skipCount: number, maxResultCount: number, requestCount: boolean): Promise<PagedResultDtoOfAgentLeadDto>;
}

export class AgentLeadsClient implements IAgentLeadsClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    get(sorting: string | null, skipCount: number, maxResultCount: number, requestCount: boolean): Promise<PagedResultDtoOfAgentLeadDto> {
        let url_ = this.baseUrl + "/api/AgentLeads?";
        if (sorting === undefined)
            throw new Error("The parameter 'sorting' must be defined.");
        else if(sorting !== null)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (requestCount === undefined || requestCount === null)
            throw new Error("The parameter 'requestCount' must be defined and cannot be null.");
        else
            url_ += "RequestCount=" + encodeURIComponent("" + requestCount) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<PagedResultDtoOfAgentLeadDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <PagedResultDtoOfAgentLeadDto>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PagedResultDtoOfAgentLeadDto>(<any>null);
    }
}

export interface IAgentOrderClient {
    currentOrder(): Promise<AgentOrderDto>;
    addItem(line: AgentOrderLineDto): Promise<ActionResultDtoOfAgentOrderLineDto>;
    deleteItem(line: AgentOrderLineDto): Promise<AgentOrderLineDto>;
    processCurrentOrder(): Promise<ActionResultDtoOfAgentOrderDto>;
}

export class AgentOrderClient implements IAgentOrderClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    currentOrder(): Promise<AgentOrderDto> {
        let url_ = this.baseUrl + "/api/AgentOrder/CurrentOrder";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCurrentOrder(_response);
        });
    }

    protected processCurrentOrder(response: Response): Promise<AgentOrderDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <AgentOrderDto>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AgentOrderDto>(<any>null);
    }

    addItem(line: AgentOrderLineDto): Promise<ActionResultDtoOfAgentOrderLineDto> {
        let url_ = this.baseUrl + "/api/AgentOrder/AddItem";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(line);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAddItem(_response);
        });
    }

    protected processAddItem(response: Response): Promise<ActionResultDtoOfAgentOrderLineDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ActionResultDtoOfAgentOrderLineDto>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ActionResultDtoOfAgentOrderLineDto>(<any>null);
    }

    deleteItem(line: AgentOrderLineDto): Promise<AgentOrderLineDto> {
        let url_ = this.baseUrl + "/api/AgentOrder/DeleteItem";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(line);

        let options_ = <RequestInit>{
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteItem(_response);
        });
    }

    protected processDeleteItem(response: Response): Promise<AgentOrderLineDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <AgentOrderLineDto>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AgentOrderLineDto>(<any>null);
    }

    processCurrentOrder(): Promise<ActionResultDtoOfAgentOrderDto> {
        let url_ = this.baseUrl + "/api/AgentOrder/ProcessCurrentOrder";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processProcessCurrentOrder(_response);
        });
    }

    protected processProcessCurrentOrder(response: Response): Promise<ActionResultDtoOfAgentOrderDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ActionResultDtoOfAgentOrderDto>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ActionResultDtoOfAgentOrderDto>(<any>null);
    }
}

export interface IAgentProfileClient {
    get(): Promise<AgentProfileDto>;
}

export class AgentProfileClient implements IAgentProfileClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    get(): Promise<AgentProfileDto> {
        let url_ = this.baseUrl + "/api/AgentProfile";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<AgentProfileDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <AgentProfileDto>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AgentProfileDto>(<any>null);
    }
}

export interface IAgentSearchLeadClient {
    get(state: string | null, county: string | null, leadType: string | null, leadLevel: LeadLevel): Promise<LeadStatsDto[]>;
}

export class AgentSearchLeadClient implements IAgentSearchLeadClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    get(state: string | null, county: string | null, leadType: string | null, leadLevel: LeadLevel): Promise<LeadStatsDto[]> {
        let url_ = this.baseUrl + "/api/AgentSearchLead?";
        if (state === undefined)
            throw new Error("The parameter 'state' must be defined.");
        else if(state !== null)
            url_ += "State=" + encodeURIComponent("" + state) + "&";
        if (county === undefined)
            throw new Error("The parameter 'county' must be defined.");
        else if(county !== null)
            url_ += "County=" + encodeURIComponent("" + county) + "&";
        if (leadType === undefined)
            throw new Error("The parameter 'leadType' must be defined.");
        else if(leadType !== null)
            url_ += "LeadType=" + encodeURIComponent("" + leadType) + "&";
        if (leadLevel === undefined || leadLevel === null)
            throw new Error("The parameter 'leadLevel' must be defined and cannot be null.");
        else
            url_ += "LeadLevel=" + encodeURIComponent("" + leadLevel) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<LeadStatsDto[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <LeadStatsDto[]>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<LeadStatsDto[]>(<any>null);
    }
}

export interface IWeatherForecastClient {
    get(): Promise<WeatherForecast[]>;
}

export class WeatherForecastClient implements IWeatherForecastClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    get(): Promise<WeatherForecast[]> {
        let url_ = this.baseUrl + "/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<WeatherForecast[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <WeatherForecast[]>jsonParse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<WeatherForecast[]>(<any>null);
    }
}

export interface PagedResultDtoOfAgentLeadDto {
    items: AgentLeadDto[] | undefined;
    totalCount: number;
}

export interface AgentLeadDto {
    firstName: string | undefined;
    middleName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    leadType: string | undefined;
    leadSource: string | undefined;
    leadLevel: LeadLevel;
    address: AddressDto | undefined;
    dob: string;
    hobby: string | undefined;
    gender: Gender;
    currentCoverage: boolean;
    desiredCoverageAmount: number;
}

export enum LeadLevel {
    A = 0,
    B = 1,
}

export interface AddressDto {
    address1: string | undefined;
    address2: string | undefined;
    state: string | undefined;
    zipCode: string | undefined;
    city: string | undefined;
    county: string | undefined;
}

export enum Gender {
    Male = 0,
    Female = 1,
}

export interface AgentOrderDto {
    startTime: string;
    orderState: number;
    lines: AgentOrderLineDto[] | undefined;
}

export interface AgentOrderLineDto {
    state: string | undefined;
    county: string | undefined;
    leadType: string | undefined;
    leadLevel: LeadLevel;
    count: number;
    discount: number;
    price: number;
    tax: number;
}

export interface ActionResultDtoOfAgentOrderLineDto {
    error: number;
    message: string | undefined;
    details: string | undefined;
    value: AgentOrderLineDto | undefined;
}

export interface ActionResultDtoOfAgentOrderDto {
    error: number;
    message: string | undefined;
    details: string | undefined;
    value: AgentOrderDto | undefined;
}

export interface AgentProfileDto {
    firstName: string | undefined;
    middleName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    emailUpdates: boolean;
    smsUpdates: boolean;
    address: AddressDto | undefined;
}

export interface LeadStatsDto {
    state: string | undefined;
    county: string | undefined;
    leadType: string | undefined;
    leadLevel: LeadLevel;
    count: number;
}

export interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string | undefined;
}

function jsonParse(json: any, reviver?: any) {
    json = JSON.parse(json, reviver);

    var byid: any = {};
    var refs: any = [];
    json = (function recurse(obj: any, prop?: any, parent?: any) {
        if (typeof obj !== 'object' || !obj)
            return obj;
        
        if ("$ref" in obj) {
            let ref = obj.$ref;
            if (ref in byid)
                return byid[ref];
            refs.push([parent, prop, ref]);
            return undefined;
        } else if ("$id" in obj) {
            let id = obj.$id;
            delete obj.$id;
            if ("$values" in obj)
                obj = obj.$values;
            byid[id] = obj;
        }
        
        if (Array.isArray(obj)) {
            obj = obj.map((v, i) => recurse(v, i, obj));
        } else {
            for (var p in obj) {
                if (obj.hasOwnProperty(p) && obj[p] && typeof obj[p] === 'object')
                    obj[p] = recurse(obj[p], p, obj);
            }
        }

        return obj;
    })(json);

    for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        ref[0][ref[1]] = byid[ref[2]];
    }

    return json;
}

function createInstance<T>(data: any, mappings: any, type: any): T | null {
  if (!mappings)
    mappings = [];
  if (!data)
    return null;

  const mappingIndexName = "__mappingIndex";
  if (data[mappingIndexName])
    return <T>mappings[data[mappingIndexName]].target;

  data[mappingIndexName] = mappings.length;

  let result: any = new type();
  mappings.push({ source: data, target: result });
  result.init(data, mappings);
  return result;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}