import { RequestInterceptor, HandlerInput } from "ask-sdk-core";

export class RequestLoggingInterceptor implements RequestInterceptor {
    process(handlerInput: HandlerInput): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log("Incoming request:\n" + JSON.stringify(handlerInput.requestEnvelope.request));
            resolve();
        });
    }
}
