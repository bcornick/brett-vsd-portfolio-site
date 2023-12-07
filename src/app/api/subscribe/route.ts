export async function POST(req: Request) {
  const { email, action } = await req.json()

  const JSONdata = JSON.stringify({ email: email, action: action })

  const endpoint = 'https://hook.us1.make.com/' + process.env.WEBHOOK_ID

  const options = {
    method: 'POST',
    body: JSONdata,
    headers: {
      'x-api-key': process.env.WEBHOOK_API_KEY,
    },
  }

  const response = await fetch(endpoint, options)

  if (response.ok) {
    return new Response('Success', { status: 200 })
  } else {
    return new Response('Error', { status: 500 })
  }
}
