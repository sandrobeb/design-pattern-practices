import { IRequestBuilder } from "./interfaces";

class Request {
    url: string;
    method: string;
    payload: {};
    constructor() {
        this.url = '';
        this.method = '';
    }
}

class RequestBuilder implements IRequestBuilder {
    request: Request;
    constructor() {
        this.request = new Request();
    }

    forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    payload(payload: {}) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

export default RequestBuilder;