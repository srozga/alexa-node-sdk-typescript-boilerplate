import { SkillBuilders } from "ask-sdk-core";

import { BuiltinAmazonCancelHandler } from "./handlers/builtin/AMAZON.CANCEL";
import { BuiltinAmazonHelpHandler } from "./handlers/builtin/AMAZON.Help";
import { BuiltinAmazonStopHandler } from "./handlers/builtin/AMAZON.Stop";
import { LaunchHandler } from "./handlers/Launch";
import { HelloWorldHandler } from "./handlers/HelloWorld";
import { SessionEndedHandler } from "./handlers/SessionEndedRequst";

import { CustomErrorHandler } from "./handlers/Error";
import { RequestLoggingInterceptor } from "./interceptors/RequestLogging";
import { ResponseLoggingInterceptor } from "./interceptors/ResponseLogging";

function buildLambdaSkill(): any {
    return SkillBuilders.custom()
        .addRequestHandlers(
            new LaunchHandler(),
            new HelloWorldHandler(),
            new BuiltinAmazonCancelHandler(),
            new BuiltinAmazonHelpHandler(),
            new BuiltinAmazonStopHandler(),
            new SessionEndedHandler()
        )
        .addRequestInterceptors(new RequestLoggingInterceptor())
        .addResponseInterceptors(new ResponseLoggingInterceptor())
        .addErrorHandlers(new CustomErrorHandler())
        .lambda();
}

export let handler = buildLambdaSkill();