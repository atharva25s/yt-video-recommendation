import pickle
import re
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import numpy as np

# Load the trained Logistic Regression model
with open("logistic_model.pkl", "rb") as f:
    model = pickle.load(f)

# Load the vectorizer (TF-IDF or CountVectorizer)
with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

# Define FastAPI app
app = FastAPI()

# Define request schema
class CommentRequest(BaseModel):
    comments: List[str]

# Preprocessing function
def preprocess_text(text):
    text = text.lower()  # Convert to lowercase
    text = re.sub(r'[^a-zA-Z\s]', '', text)  # Remove special characters
    return text

# Define suggestions based on goodness score
SUGGESTIONS = [
    "Your content needs improvement. Try engaging with your audience more.",
    "You're getting mixed feedback. Consider enhancing your content.",
    "Great job! Your audience is responding positively!"
]

@app.post("/analyze")
def analyze_comments(request: CommentRequest):
    if not request.comments:
        raise HTTPException(status_code=400, detail="No comments provided")
    
    # Preprocess comments
    processed_comments = [preprocess_text(comment) for comment in request.comments]
    
    # Convert text data to feature vectors (Ensures correct shape)
    comment_vectors = vectorizer.transform(processed_comments)  
    
    # Predict sentiments using Logistic Regression model
    predictions = model.predict(comment_vectors)
    
    # Calculate goodness score
    good_count = sum(1 for pred in predictions if pred == 2)
    bad_count = sum(1 for pred in predictions if pred == 0)
    neutral_count = sum(1 for pred in predictions if pred == 1)
    total = good_count + bad_count + neutral_count
    goodness_score = good_count / total if total > 0 else 0
    
    # Select suggestion based on score
    if goodness_score < 0.3:
        suggestion = [SUGGESTIONS[0]]
    elif goodness_score < 0.7:
        suggestion = [SUGGESTIONS[1]]
    else:
        suggestion = [SUGGESTIONS[2]]
    
    return {"goodness_score": round(goodness_score, 2), "suggestions": suggestion}
