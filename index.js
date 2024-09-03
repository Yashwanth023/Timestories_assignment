const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;
const TIME_URL = 'https://time.com';

app.get('/getTimeStories', async (req, res) => {
    try {
        // Fetch the HTML from the Time website
        const { data } = await axios.get(TIME_URL);
        const $ = cheerio.load(data);
        
        // Array to store the latest stories and featured voices
        const stories = [];
        const featuredVoices = [];

        // Scrape the "Latest Stories" section
        $('ul[class^="latest"] li a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            const date = $(element).siblings('time').text().trim();
            stories.push({ title, link: TIME_URL + link, date });
        });

        // Scrape the "Featured Voices" section
        $('div[class*="featured-voices"] article').each((index, element) => {
            const name = $(element).find('a').text().trim();
            const title = $(element).find('h3').text().trim();
            const link = $(element).find('a').attr('href');
            featuredVoices.push({ name, title, link: TIME_URL + link });
        });

        // Return the stories and featured voices in JSON format
        res.json({ stories, featuredVoices });
    } catch (error) {
        console.error('Error fetching the stories:', error);
        res.status(500).send('An error occurred while fetching the stories.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
