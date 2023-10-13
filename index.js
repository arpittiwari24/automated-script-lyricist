import fetch from "node-fetch";

// Replace with your Render API endpoint
const apiUrl = 'https://lyricist-backend-q3wg.onrender.com/generateText';

const prompt = "Tell me the name of some dog breeds"

// Function to send a POST request
async function sendPostRequest() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
      body: JSON.stringify({ prompt }),
    });

    if (response.ok) {
      console.log('POST request successful.');
    } else {
      console.error('POST request failed:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error sending POST request:', error);
  }
}

function sendPostRequestAndScheduleNext() {
    sendPostRequest();
    // Schedule the next POST request after 10 minutes
    setTimeout(sendPostRequestAndScheduleNext, 10 * 60 * 1000);
  }
  
  // Initial POST request and scheduling
  sendPostRequestAndScheduleNext();
