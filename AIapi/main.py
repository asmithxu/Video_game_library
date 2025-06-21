from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import openai
import os

load_dotenv()

key = os.environ['API_KEY']

client = openai.OpenAI(api_key=key)

conversation_history = [{"role":"system", "content":"You are a helpful assistant"}]

#Define function to interact with ChatGPT API

def chat_with_gpt(user_input):
    conversation_history.append({"role":"user", "content":user_input})

    response = client.chat.completions.create(
        model="gpt-4o-mini",  # Use GPT-4o-mini model
        messages=conversation_history,
        temperature=0.7,  # Adjust for more creative responses
        max_tokens=40
    )

    #get response text
    chatbox_reply = response.choices[0].message.content
    conversation_history.append({"role":"assistant", "content":chatbox_reply})
    return conversation_history

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message:str

@app.get("/")
def read_root():
    # endpoint to confirm that my server is running
    return {"Hello": "World"}

# endpoint to send prompts to chat api. formatted as json body:  {"message": "Translate..." }
@app.post("/ask")
async def create_message(message: Message):
    server_response = chat_with_gpt(message.message)
    return server_response