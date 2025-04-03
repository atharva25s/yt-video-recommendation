require('dotenv').config();
const express = require('express');
const cors = require('cors')
const axios = require('axios');
const { URL } = require('url');

const app = express();
const PORT = process.env.PORT || 8000;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Store API key in .env file
const YOUTUBE_COMMENTS_URL = process.env.YOUTUBE_COMMENTS_URL;
const model_ip  = process.env.MODEL_IP;
app.use(express.json() , cors())
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

// Fetch Comments from YouTube API
async function getYouTubeComments(videoId, maxResults = 20) {
    try {
        const response = await axios.get(YOUTUBE_COMMENTS_URL, {
            params: {
                part: "snippet",
                videoId: videoId,
                key: YOUTUBE_API_KEY,
                maxResults: maxResults
            }
        });
        let comments = response.data.items.map(item => item.snippet.topLevelComment.snippet.textDisplay);

        console.dir(comments)
        return comments;

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
                console.log("Error: ", err)
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

    const comments = await getYouTubeComments(videoId);
    let count = 0;
    comments.forEach(element => {
        count +=1
    });

    
    console.log("Count of comments: ", count);
    

    const ans = await generateResponse({comments: comments});
    res.status(200).json({ans: ans});
    }
    catch(error){
        console.log("Error in /api/comments");
    res.status(404).json({message: error.message});

    }

});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));