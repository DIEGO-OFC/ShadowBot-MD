// Importar librerías necesarias
const fs = require('fs');
const textToSpeech = require('@google-cloud/text-to-speech');
const { Client } = require('whatsapp-web.js');
const client = new Client();

// Configurar cliente de WhatsApp
client.on('message', async (msg) => {
  if (msg.body.startsWith('.txTS')) {
    const text = msg.body.substring(6);
    const outputFile = 'output.mp3';
    
    // Configurar cliente de Text-to-Speech de Google Cloud
    const client = new textToSpeech.TextToSpeechClient();
    
    // Configurar la solicitud de conversión de texto a voz
    const request = {
      input: { text: text },
      voice: { languageCode: 'es-ES', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };
    
    // Realizar la solicitud de conversión de texto a voz
    const [response] = await client.synthesizeSpeech(request);
    
    // Guardar el audio en un archivo
    fs.writeFile(outputFile, response.audioContent, 'binary', (err) => {
      if (err) {
        console.error('Error al guardar el archivo de audio:', err);
        return;
      }
      
      // Enviar el archivo de audio al remitente
      msg.reply(new MessageMedia(outputFile));
    });
  }
});

// Iniciar sesión en WhatsApp Web
client.initialize();
