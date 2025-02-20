const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: "your_service_id",
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: "your_template_id",
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: "your_public_key",
  },
}

module.exports = nextConfig

