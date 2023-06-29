import { Configuration, OpenAIApi } from "openai";
import { config } from 'dotenv';
config();

const configuration = new Configuration({
    organization: "org-owR7h7j93sgLxZWl7VoWsNAD",
    apiKey: process.env.OPENAI_KEY,
})

const openai = new OpenAIApi(configuration);
// const response = await openai.listModels();
// console.log(response.data);

async function get_completion(prompt, model="gpt-3.5-turbo") {
    const messages = [{"role": "user", "content": prompt}];
    const response = await openai.createChatCompletion({
      model: model,
      messages: messages,
      temperature: 0
    });
    const result = response.data.choices[0].message["content"];
    console.log(result);
    return result;
  }


const text = "Japanese Literature";

const prompt = `Generate a list of made up movie titles along with their directors and the genre based on the provided subject. Provide them in JSON format with the following keys:
movie_id, title, author, genre, leading_actors

subject: ${text}`;

const movies = get_completion(prompt);
console.log(movies);

