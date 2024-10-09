const axios = require('axios');
const BotModel = require('../model/BotModel');

// Create a new bot
const createBot = async (req, res) => {
    const body = req.body;

    try {
        const bot = await BotModel.create(body);
        res.status(201).json(bot); // Use 201 for resource creation
    } catch (error) {
        console.error('Error creating bot:', error); 
        res.status(500).json({ error: error.message }); 
    }
}


// Send message to bot
const sendToBot = async (req, res) => {
    try {
        // Extract user input from request body
        const { userInput } = req.body; // Expecting { userInput: "Your message" }

        if (!userInput) {
            return res.status(400).json({ error: 'No user input provided' });
        }

        // Send request to Botpress API with Authorization header
        const response = await axios.post(
            'https://webhook.botpress.cloud/ae95961c-764d-4d01-863b-5f503e9d94ee',
            {
                "name": "db230667-ec08-426f-88fe-e1301821bcc2", // Message name
                "channel": "emulator", // Example channel
                "userId": "user-2", // Dynamic or static user ID
                "type": "text", // Message type (text)
                "text": userInput, // User input from request body
                "botId": "65191a28-b6f7-4630-b036-02abb4cbb211", // Your Botpress bot ID
                "conversationId": "convo-1", // Conversation ID
                "messageId": "2kk3", // Message ID
                "payload": {} // Any extra payload can be added here
            },
            {
                headers: {
                    'Authorization': 'Bearer bp_pat_4LAnDQgHRD4LbhHT15jSILuY2kJYnVNvHPoQ', // Replace with valid token
                    'Content-Type': 'application/json' // Content-Type header
                }
            }
        );

        // Log and send success response to the client
        console.log('Message sent to Botpress:', response.data);
        return res.status(200).json({ message: 'Message sent successfully', data: response.data });

    } catch (error) {
        // Log the error and send an error response to the client
        console.error('Error sending message to Botpress:', error.response ? error.response.data : error.message);

        // Send back a meaningful error message to the client
        return res.status(500).json({
            error: 'Failed to send message to Botpress',
            details: error.response ? error.response.data : error.message
        });
    }
};

    
// Get response from bot without an ID
const getBotResponse = async (req, res) => {
    const userMessage = req.body.message; // Expecting a message in the request body

    try {
        const response = await axios.post('http://your-botpress-url/api/v1/bots/', {
            type: 'text',
            text: userMessage,
            channel: 'web', // Or another channel you're using
            userId: 'unique-user-id' // Generate or specify a user ID
        });

        res.status(200).json(response.data); // Return the bot's response
    } catch (error) {
        console.error('Error fetching bot response:', error); 
        res.status(500).json({ error: error.message }); 
    }
}

module.exports = {
    createBot,
    getBotResponse,
    sendToBot
}
