// Importar librerías necesarias
const fs = require('fs');
const textToSpeech = require('@google-cloud/text-to-speech');
const { MessageMedia } = require('whatsapp-web.js'); // Importar MessageMedia

// Crear función para convertir texto a voz
async function convertTextToSpeech(text) {
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
        
        console.log('Archivo de audio generado:', outputFile);
    });
}

// Ejecutar la función con un texto de ejemplo
convertTextToSpeech('Hola, este es un mensaje de prueba.');

// Llamar a la función convertTextToSpeech con el texto deseado
convertTextToSpeech('Este es otro mensaje de prueba.');
