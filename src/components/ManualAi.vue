<template>
  <div class="container mx-auto mt-5 p-5">
    <h2 class="text-2xl font-bold mb-5">Chat with Botpress AI</h2>

    <!-- Display conversation history -->
    <div class="h-96 border border-gray-300 rounded-lg p-4">
      <div class="scrollable h-72 overflow-y-scroll">
        <!-- Loop through questionAnswerPairs to display questions and answers -->
        <div v-for="(qa, index) in questionAnswerPairs" :key="index" class="flex">
          <div v-if="qa.type === 'question'" class="bg-gray-200 text-black p-1 rounded-lg max-w-xs">
            {{ qa.question }}
          </div>
          <div v-else class="ml-auto bg-blue-600 text-white p-1 rounded-lg max-w-xs">
            {{ qa.answer }}
          </div>
        </div>

        <!-- Display current question -->
        <div v-if="currentQuestion" class="bg-gray-200 text-black p-3 font-semibold rounded-lg max-w-xs">
          {{ currentQuestion }}
        </div>
      </div>

      <!-- Textarea and send button at the bottom -->
      <div class="border rounded-2xl p-3 flex bg-gray-200">
        <input
          v-model="userInput"
          placeholder="Type your answer here..."
          class="bg-gray-200 w-full border-none focus:border-none focus:outline-none focus:ring-0 p-2 align-top"
          @keydown.enter="handleUserInput"
        />
        <div class="pr-5 text-end">
          <button @click="handleUserInput" class="text-sm bg-pink-600 rounded-xl w-44 text-white py-2">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInput: "", // Holds the user's input
      currentQuestionIndex: 0, // Track current question index
      questionAnswerPairs: [], // Holds the conversation history
      questions: [], // Store questions from the Botpress response
      currentQuestion: "", // The current question to display
      botResponse: "", // The bot's response
    };
  },
  async created() {
    await this.getQuestionsFromBot(); // Fetch the initial questions when the component loads
  },
  methods: {
    // Fetch questions dynamically from Botpress
    async getQuestionsFromBot() {
      try {
        const response = await axios.get("https://tuaneka.onrender.com/messaging");
        const questionsFromBot = response.data.payload.text; // Assuming the questions are in payload.text
        
        if (questionsFromBot && Array.isArray(questionsFromBot)) {
          this.questions = questionsFromBot;
          this.currentQuestion = this.questions[this.currentQuestionIndex]; // Set the first question
        } else {
          console.error("No questions found from Botpress.");
        }
      } catch (error) {
        console.error("Error fetching questions from Botpress:", error);
      }
    },

    // Handle the user's input
    async handleUserInput() {
      if (!this.userInput.trim()) return;

      const currentQuestion = this.currentQuestion;
      let answer = this.userInput;

      // Store the question and answer in history
      this.questionAnswerPairs.push({ question: currentQuestion, answer, type: 'question' });
      this.questionAnswerPairs.push({ answer, type: 'answer' });

      // Clear the user input
      this.userInput = "";

      // Move to the next question
      this.currentQuestionIndex++;

      // If all questions have been answered, submit the answers to the API
      if (this.currentQuestionIndex >= this.questions.length) {
        await this.submitAnswers(); // Send the answers
        alert("All questions have been answered. Thank you!");
      } else {
        // Load the next question
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      }
    },

    // Submit the user's answers to your backend
    async submitAnswers() {
      try {
        const response = await axios.post("http://localhost:5000/tobot", {
          conversation: this.questionAnswerPairs, // Send the conversation as a payload
        });
        console.log("Answers submitted successfully:", response.data);
      } catch (error) {
        console.error("Error submitting answers:", error);
      }
    },

    // Start a new conversation
    startNewConversation() {
      this.currentQuestionIndex = 0; // Reset to the first question
      this.userInput = ""; // Clear user input
      this.questionAnswerPairs = []; // Clear previous questions and answers
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
