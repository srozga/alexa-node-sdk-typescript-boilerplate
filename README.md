# alexa-node-sdk-typescript-boilerplate
A simple TypeScript template for an Alexa skill based on the latest ASK SDK for Node.js based on the blog article at [https://szymonrozga.com/2018/09/an-alexa-nodejs-typesript-boilerplate-project](https://szymonrozga.com/2018/09/an-alexa-nodejs-typesript-boilerplate-project).

## How to get going
1. Create a new Alexa Skill by running `ask new -n SkillName`.
1. Fetch the code from the repo and copy all the contents of `custom/lambda` into your skill's `custom/lambda`.
1. In the `custom/lambda` directory, run the commands `npm install` and `npm run build`.
1. Back in the skill's root directory, run `ask deploy`.
1. You can now use the skill in the simulator, a device or EchoSim.

Enjoy!
