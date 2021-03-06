/// <reference types="node" />
import http from "http";
import { SetCookieOptions } from "../constants";
export default class Response {
    rawResponse: http.ServerResponse;
    destroyed: boolean;
    constructor(res: http.ServerResponse);
    setStatus(status: number): this;
    sendText(data: string): this;
    sendHTML(htmlData: string): this;
    sendJSON(jsonData: object): this;
    sendFile(filePath: string): this;
    setCookie(cookieName: string, cookieValue: string, options?: SetCookieOptions): void;
    removeCookie(cookieName: string): void;
    end(data?: any): void;
    private responseDestroyed;
}
