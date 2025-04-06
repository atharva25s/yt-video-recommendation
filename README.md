# BuzzSense

## Help **Content Creators** gain insights about their content and sugessting them improvements based on comments.

# Overview
### BuzzSense is built with variety of TechStack
- *ReactJS, NodeJS, ExpressJS, MongoDB, FastAPI, Scikit-learn, Docker*

### We used the aforementioned technologies for following purposes
- ReactJS was used for developing frontend for **Login/Signup** and accepting the **Yotube video link**.
- NodeJS along with ExpressJS helped in getting the **CommentsThread** of that Youtube video using **YOUTUBE API** and sending it to the model.
- Authorization and authentication of users was carried with MongoDB.
- Model was deployed using FastAPI along with containerization with Docker, for environment Isolation.
- **Logistic Regression** algorithm along with [Youtube comments dataset](model\yt_data.csv) were used model training and building.

### It looks like this
[!Architecture](client\src\assets\architecture.png)

