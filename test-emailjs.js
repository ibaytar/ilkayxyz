import { EmailJSResponseStatus } from "@emailjs/nodejs"
import * as emailjs from "@emailjs/nodejs"

// Test function to send a test email
async function testEmailJS() {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message from the EmailJS integration test.",
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY, // You'll need to add this to your environment variables
      },
    )

    console.log("Test email sent successfully:", result.text)
    console.log("EmailJS integration is working correctly!")
  } catch (error) {
    if (error instanceof EmailJSResponseStatus) {
      console.error("Failed to send test email:", error.text)
    } else {
      console.error("An unexpected error occurred:", error)
    }
    console.log("EmailJS integration test failed. Please check your configuration.")
  }
}

// Run the test
testEmailJS()

