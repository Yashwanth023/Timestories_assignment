import React from 'react';
import './StorySection.css'; // Importing CSS file for styling

// Sample data for Featured Voices
const featuredVoices = [
  {
    title: "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
    link: "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/",
    image: "https://example.com/featured-image1.jpg" // Replace with actual image URL
  },
  {
    title: "NASA's Mars Rover Discovers Signs of Ancient Life",
    link: "https://time.com/6143123/nasa-mars-rover-ancient-life/",
    image: "https://example.com/featured-image2.jpg" // Replace with actual image URL
  },
  
  {
    title: "The Impact of Renewable Energy on Developing Countries",
    link: "https://example.com/renewable-energy-impact",
    image: "https://example.com/renewable-energy.jpg" // Replace with an actual image URL
  },
  {
    title: "Breaking Barriers: Women in Tech Share Their Stories",
    link: "https://example.com/women-in-tech",
    image: "https://example.com/women-tech.jpg" // Replace with an actual image URL
  },
  {
    title: "The Future of Space Exploration: What Lies Ahead?",
    link: "https://example.com/future-space-exploration",
    image: "https://example.com/space-exploration.jpg" // Replace with an actual image URL
  },
  {
    title: "How Remote Work Is Changing the Global Job Market",
    link: "https://example.com/remote-work-job-market",
    image: "https://example.com/space-exploration.jpg"
  },
  {
    title: "How Remote Work Is Changing the Global Job Market",
    link: "https://example.com/remote-work-job-market",
    image: "https://example.com/space-exploration.jpg"
  }
];

// Sample data for Latest Stories
const latestStories = [
  {
    title: "'Writing With Fire' Shines a Light on All-Women News Outlet",
    link: "https://time.com/6142628/writing-with-fire-india-documentary/"
  },
  {
    title: "Moderna Booster May Wane After 6 Months",
    link: "https://time.com/6142852/moderna-booster-wanes-omicron/"
  },
  {
    title: "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
    link: "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"
  },
   {
    title: "Revolutionary Tech: AI That Can Predict Natural Disasters",
    link: "https://example.com/ai-natural-disasters"
  },
  
];

// Featured Voice Component
const FeaturedVoice = ({ voice }) => {
  return (
    <div className="featured-voice">
      <img src={voice.image} alt={voice.title} className="featured-image" />
      <a href={voice.link} target="_blank" rel="noopener noreferrer">
        <h2 className="featured-title">{voice.title}</h2>
      </a>
    </div>
  );
};

// Latest Stories Component
const LatestStories = ({ stories }) => {
  return (
    <div className="latest-stories">
      {stories.map((story, index) => (
        <div key={index} className="latest-story">
          <a href={story.link} target="_blank" rel="noopener noreferrer">
            <h3 className="latest-title">{story.title}</h3>
            <h4 style={{ color: 'blue', textDecoration: 'underline' }}>Saturday 24th July 2024</h4>
          </a>
        </div>
      ))}
    </div>
  );
};

// Main StorySection Component
const StorySection = () => {
  return (
    <div className="story-section">
      <div className="featured-section">
        <h1>Featured Voices</h1>
        {featuredVoices.map((voice, index) => (
          <FeaturedVoice key={index} voice={voice} />
        ))}
      </div>
      <div className="latest-section">
        <h1>Latest Stories</h1>
        <LatestStories stories={latestStories} />
      </div>
    </div>
  );
};

export default StorySection;
