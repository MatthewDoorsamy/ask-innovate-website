import emailjs from "@emailjs/browser"

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_ask_innovate",
  TEMPLATE_ID: "template_3lw31ek", // Your actual template ID
  PUBLIC_KEY: "DoPW3Fwm4lv-0zYIp", // Your actual public key
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Send email function
export const sendEmail = async (templateParams: Record<string, any>) => {
  try {
    console.log("Sending email with params:", templateParams) // Debug log
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY,
    )
    console.log("Email sent successfully:", response) // Debug log
    return { success: true, response }
  } catch (error) {
    console.error("EmailJS Error:", error)
    return { success: false, error }
  }
}
