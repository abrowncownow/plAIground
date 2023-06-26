import { Configuration, OpenAIApi } from "openai";
import { config } from 'dotenv';
config();
import { get_completion } from "./helper/chatComplete3-5-turbo";

const configuration = new Configuration({
    organization: "org-owR7h7j93sgLxZWl7VoWsNAD",
    apiKey: process.env.OPENAI_KEY,
})

const openai = new OpenAIApi(configuration);
// const response = await openai.listModels();
// console.log(response.data);

