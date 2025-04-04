require('dotenv').config();
const express = require('express');
const cors = require('cors')

const mongoose = require("mongoose");
const axios = require('axios');
const { URL } = require('url');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const app = express();
const PORT = process.env.PORT || 8000;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Store API key in .env file
const YOUTUBE_COMMENTS_URL = process.env.YOUTUBE_COMMENTS_URL;
const model_ip  = process.env.MODEL_IP;
const dbUrl = process.env.MONGO_DB_URL


mongoose
  .connect(dbUrl)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error:", err));


  const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true , unnique: true },
    password: { type: String },
  });

  const User = mongoose.model("User", userSchema);


app.use(express.json() , cors())


const getVideoSuggestions = async(data, comments,videoLink)=> {
    const prompt = `
Based on the following response received from youtube data api 
Analyse the video 
-**data**: ${data} 
    Give only 20-30 words about the response from people on the video
    `;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log("Completed prompt")
        return response.text();
    } catch (error) {
        console.error("Error generating suggestions:", error);
        return "An error occurred while generating suggestions.";
    }
}




// Extract Video ID from YouTube URL
function extractVideoId(url) {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname === "youtu.be") {
            return parsedUrl.pathname.substring(1);
        } else if (parsedUrl.hostname.includes("youtube.com")) {
            return new URLSearchParams(parsedUrl.search).get("v");
        }
    } catch (error) {
        return null;
    }
}


const cleanComment = (comment)=> {
    // Remove <a> tags but keep the inner text
    comment = comment.replace(/<a [^>]+>(.*?)<\/a>/g, '$1');
    // Remove emojis (Unicode emoji ranges)
    comment = comment.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+/gu, '');
    return comment.trim();
}


// Fetch Comments from YouTube API
async function getYouTubeComments(videoId, maxResults = 200) {
    try {
        const response = await axios.get(YOUTUBE_COMMENTS_URL, {
            params: {
                part: "snippet",
                videoId: videoId,
                key: YOUTUBE_API_KEY,
                maxResults: maxResults
            }
        });

        
        return response.data;

    } catch (error) {
        console.error("Error fetching comments:", error.response ? error.response.data : error.message);
        return [];
    }
}


const generateResponse = async (comments)=>{
            return axios.post(`${model_ip}/analyze` , 
                comments 
            )
            .then(response => {
                console.log("Response: ", response.data);
                return response.data.suggestions;
            })
            .catch(err => {
                throw err;
                
            })


}

// Express Route to Fetch Comments
app.post('/api/comments', async (req, res) => {
    try{
        const videoUrl = req.body.link;
    console.log(videoUrl)

    if (!videoUrl) return res.status(400).json({ error: "Video URL is required" });

    const videoId = extractVideoId(videoUrl);
    if (!videoId) return res.status(400).json({ error: "Invalid YouTube URL" });

    let data = await getYouTubeComments(videoId);


    let comments = data.items.map(item =>  cleanComment(item.snippet.topLevelComment.snippet.textDisplay));
    let count = 0;
    // for (comment : comments) count+=1
    comments.forEach(element => {
        count += 1
    });
    console.log("COmments: ", count)
    const ans = await generateResponse({comments: comments});
    // const response = await getVideoSuggestions(data = JSON.stringify(data), comments, videoUrl)

    // console.log(response)

    res.status(200).json({comments: comments , ans:ans  });
    }
    catch(error){
        console.log("Error in /api/comments");
    res.status(404).json({message: error.message});

    }
    

});

app.post('/api/register', async(req,res)=>{
    try{
        const userDetails = req.body;

        console.log(userDetails)
    const username  = userDetails.username;
    const email = userDetails.email;
    const password = userDetails.password;

    const user  = await User.findOne({username: username})

    if (!user){
        await User.create({username: username , email:email, password: password})
        .then((
        )=>{
        console.log("user registered successfully")

            res.status(200).json({message: "User created successfully"})
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
        
        return;
    }

    else {
        console.log("user not registered")
            res.status(500).json({message: `User with the username: ${username} already exists!`});
    }
    }
    catch(err){
        console.log("Error: ", err)
        res.status(500).json({err: err})
    }
})

app.post('/api/login' , async(req,res)=>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username: username})
        if (user){
            if (password == user.password){
                res.status(200).json({message: "User logged in successfully"})
            }
            else(res.status(403).json({
                message: "Incorrect password"
            }))
        }
        else{
            res.status(403).json({message: "User not found"})
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));