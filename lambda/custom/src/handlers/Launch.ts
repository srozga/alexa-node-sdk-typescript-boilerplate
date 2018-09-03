import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Response } from "ask-sdk-model";

export class LaunchHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === "LaunchRequest";
    }

    handle(handlerInput: HandlerInput): Response {
        const speechText = "Welcome to the Alexa Skills Kit, you can say hello!";

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard("Hello World", speechText)
            .getResponse();
    }
}