from fastapi import FastAPI
from fastapi.middleware import cors
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:4000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def getall():
    return ("hello")

@app.get('/api/v1/products')
def getAllProducts():
    return [{"imageUrl": "xyz", "title": "tb1", "price": "24"}, {"imageUrl": "xyz", "title": "tb2", "price": "24"}, {"imageUrl": "xyz", "title": "tb3", "price": "48"}]

@app.post('/api/v1/signin')
def signin(payload : dict):
    print(payload)
    return 'hello'