addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Parse the URL from the incoming request
  const url = new URL(request.url)

  // List of paths to redirect
  const pathsToRedirect = ["/custom-path-1", "/custom-path-2"]

  // Check if the request path matches any of the specified paths
  if (pathsToRedirect.includes(url.pathname)) {
    // Set the destination URL based on the path
    let destinationUrl = ''
    if (url.pathname === "/custom-path-1") {
      destinationUrl = 'YOUR-CUSTOM-FUNNEL-URL-1'
    } else if (url.pathname === "/custom-path-2") {
      destinationUrl = 'YOUR-CUSTOM-FUNNEL-URL-2'
    }

    // Create a new request object with the destination URL
    const modifiedRequest = new Request(destinationUrl, request)

    // Fetch the response from the destination URL
    const response = await fetch(modifiedRequest)

    // Create a new response based on the original response
    const newResponse = new Response(response.body, response)

    // Add CORS headers to allow access from any origin
    newResponse.headers.set('Access-Control-Allow-Origin', '*')

    // Ensure the correct content type is set (defaulting to HTML if missing)
    newResponse.headers.set('Content-Type', response.headers.get('Content-Type') || 'text/html')

    // Return the modified response to the user, keeping the original URL in the browser
    return newResponse
  }

  // For all other routes, handle normally
  const destinationUrl = 'YOUR-FUNNEL-URL'
  
  // Modify the hostname but keep the original path and query parameters
  url.hostname = destinationUrl.replace(/^https?:\/\//, '')

  // Create a new request object with the modified URL
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
