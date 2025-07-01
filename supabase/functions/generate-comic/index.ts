
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { image, caption, style = "marvel" } = await req.json()

    // Get API key from Supabase secrets
    const apiKey = Deno.env.get('COMIC_API_KEY')
    const apiEndpoint = Deno.env.get('COMIC_API_ENDPOINT') || 'https://api.example.com/generate-comic'

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!image || !caption) {
      return new Response(
        JSON.stringify({ error: 'Image and caption are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Call external comic generation API
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({
        prompt: caption,
        image: image,
        style: style
      })
    })

    if (!response.ok) {
      throw new Error(`Comic API error: ${response.statusText}`)
    }

    const data = await response.json()

    // Validate response structure
    if (!data.panels || !Array.isArray(data.panels) || data.panels.length < 2) {
      throw new Error('Invalid comic API response structure')
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Comic generation error:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to generate comic' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
