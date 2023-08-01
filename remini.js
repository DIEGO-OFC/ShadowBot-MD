import FormData from 'form-data';
import Jimp from 'jimp';

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ['enhance', 'recolor', 'dehaze'];
    if (availableOperations.includes(operation)) {
      operation = operation;
    } else {
      operation = availableOperations[0];
    }
    const baseUrl = 'https://inferenceengine.vyro.ai/' + operation + '.vyro';
    const formData = new FormData();
    formData.append('image', Buffer.from(imageData), {
      filename: 'enhance_image_body.jpg',
      contentType: 'image/jpeg',
    });
    formData.append('model_version', 1, {
      'Content-Transfer-Encoding': 'binary',
      contentType: 'multipart/form-data; charset=utf-8',
    });
    formData.submit(
      {
        url: baseUrl,
        host: 'inferenceengine.vyro.ai',
        path: '/' + operation,
        protocol: 'https:',
        headers: {
          'User-Agent': 'okhttp/4.9.3',
          Connection: 'Keep-Alive',
          'Accept-Encoding': 'gzip',
        },
      },
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on('data', function (chunk) {
          chunks.push(chunk);
        });
        res.on('end', function () {
          resolve(Buffer.concat(chunks));
        });
        res.on('error', function (err) {
          reject(err);
        });
      }
    );
  });
}

export default { remini };
