addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Destination URL
  const destinationUrl = 'YOUR-FUNNEL-URL'

  // Build the new URL, keeping the path and query parameters
  const url = new URL(request.url)
  url.hostname = destinationUrl.replace(/^https?:\/\//, '')
  
  const modifiedRequest = new Request(url, request)

  // Make a request to the new URL
  const response = await fetch(modifiedRequest)

  // Modify headers to hide redirection
  const newResponse = new Response(response.body, response)
  newResponse.headers.set('Access-Control-Allow-Origin', '*')
  newResponse.headers.set('Content-Type', response.headers.get('Content-Type') || 'text/html')

  return newResponse
}
