import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Response } from "ask-sdk-model";

export class BuiltinAmazonStopHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === "IntentRequest" && request.intent.name === "AMAZON.StopIntent";
    }

    handle(handlerInput: HandlerInput): Response {
        const speechText = "Goodbye!";

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard("Hello World", speechText)
            .getResponse();
    }
}