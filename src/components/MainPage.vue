<template>
  <div class="container mx-auto mt-0 p-1">
    <h2 class="text-2xl font-bold mb-2">Chat with Botpress AI</h2>

    <!-- Chat conversation window -->
    <div class="h-96 border border-gray-300 rounded-lg p-2 px-2">
      <div class="scrollable h-80 overflow-y-scroll">
        
        <!-- Loop through conversation history and display messages -->
        <div v-for="(message, index) in conversation" :key="index" class="mb-3">
          
          <div v-if="message.type === 'user'" class="flex justify-end mb-0">
            <div class="bg-blue-500 text-white p-2 px-2 rounded-md max-w-xs">
              {{ message.text }}
            </div>
          </div>
          <div v-else class="flex justify-start">
            <div class="bg-gray-200 text-black p-2 rounded-md max-w-xs">
              {{ message.text }}
            </div>
                <!-- Loading state -->
                
              </div>
            </div>
            <div v-if="loading" class="mt-3">Loading...</div>
      </div>
          <!-- User input -->
    <div class="flex">
      <input
        v-model="userInput"
        type="text"
        placeholder="Type your message here..."
        class="w-full p-3 border rounded-md"
        @keydown.enter="sendMessageToBot"
      />
      <button
        @click="sendMessageToBot"
        class="text-sm bg-pink-600 rounded-xl w-44 text-white py-2"
      >
        Send
      </button>
    </div>
    </div>



  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInput: "", // User's message input
      conversation: [], // Holds the entire conversation (user and bot messages)
      loading: false // Loading state for bot's response
    };
  },
  methods: {
    // Send the user's message to the Botpress API and handle the response
    async sendMessageToBot() {
      console.log("Sending message to Botpress...");

      // Validate user input
      if (!this.userInput.trim()) {
        this.conversation.push({ type: 'bot', text: "Please enter a valid message." });
        return;
      }

      // Add the user's message to the conversation
      this.conversation.push({ type: 'user', text: this.userInput });

      // Show loading while waiting for the bot's response
      this.loading = true;

      try {
        // Send message to the bot
        await axios.post('http://localhost:5000/tobot', {
          userInput: this.userInput
        }, {
          headers: {
            'Authorization': 'Bearer bp_pat_4LAnDQgHRD4LbhHT15jSILuY2kJYnVNvHPoQ', // Replace with valid token
            'Content-Type': 'application/json' // Content-Type header
          }
        });

        // Clear the user input
        this.userInput = "";

        // Fetch the bot's response
        await this.getBotResponse();
      } catch (error) {
        console.error("Error sending message to Botpress:", error);
        this.conversation.push({ type: 'bot', text: "Error sending message." });
      } finally {
        this.loading = false; // Stop the loading spinner
      }
    },

    // Fetch the bot's response from an external API
    async getBotResponse() {
      try {
        const response = await axios.get("https://tuaneka.onrender.com/messaging");

        // Add the bot's response to the conversation
        this.conversation.push({ type: 'bot', text: response.data.payload.text || "No response received." });
      } catch (error) {
        console.error("Failed to fetch response from the bot:", error);
        this.conversation.push({ type: 'bot', text: "Error receiving response from the bot." });
      }
    }
  }
};
</script>

<style>
.scrollable {
  height: 18rem; /* Adjust height as needed */
  overflow-y: scroll; /* Enable vertical scrolling */
}

.scrollable::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.scrollable {
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}
</style>
