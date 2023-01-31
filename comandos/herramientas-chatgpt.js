import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
    if (!text) return m.reply('Ingrese un texto')
    let res = await openAi(text)
await conn.sendBlack(m.chat, wait, imagen1, 'Cargando su pedido ⏱️...', wm, script, m)
    await m.reply(res.choices[0].text.trim())
}

handler.command = ['openai', 'chatgpt', 'ia', 'robot']

export default handler


async function openAi(text) {
    let result = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'caba8d6f'
        },
        body: JSON.stringify({
            'model': 'text-davinci-003',
            'prompt': text,
            'temperature': 0.5,
            'max_tokens': 3000,
            'top_p': 1,
        })
    })
    return await result.json()
}
