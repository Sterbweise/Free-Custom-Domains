addEventListener('fetch', event => {
  // The event listener responds to fetch events and calls the handleRequest function
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Parse the URL from the incoming request
  const url = new URL(request.url)

  // Check if the user is trying to access the /custom-path route
  if (url.pathname === "/custom-path") {
    // If the path is /newsletter, redirect the user to a specific URL
    // The 301 status code indicates a permanent redirection
    return Response.redirect('YOUR-FUNNEL-URL-CUSTOM', 301)
  }

  // For all other routes, use the default destination URL
  const destinationUrl = 'YOUR-FUNNEL-URL'

  // Modify the hostname of the URL to match the destination URL
  // This keeps the original path and query parameters intact
  url.hostname = destinationUrl.replace(/^https?:\/\//, '')

  // Create a new request object with the modified URL
  // This copies over the original request headers and method
  const modifiedRequest = new Request(url, request)

  // Send the modified request to the new URL and await the response
  const response = await fetch(modifiedRequest)

  // Create a new response based on the original, but modify headers if needed
  const newResponse = new Response(response.body, response)

  // Set CORS headers to allow access from any origin
  newResponse.headers.set('Access-Control-Allow-Origin', '*')

  // Ensure the correct content type is set (defaulting to HTML if missing)
  newResponse.headers.set('Content-Type', response.headers.get('Content-Type') || 'text/html')

  // Return the final response to the user
  return newResponse
}
