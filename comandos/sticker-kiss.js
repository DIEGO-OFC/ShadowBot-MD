import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
import axios from "axios";
import ffmpeg from "fluent-ffmpeg";

let handler = async (m, {conn}) => {
  let besoo = await axios.get(`https://nekos.life/api/kiss`);
  let videoUrl = besoo.data.url;
  let gifData = await convertMP4toGIF(videoUrl);

  let Menssage = {
    video: {url: `data:image/gif;base64,${gifData}`},
    caption: `😘 +${m.sender.split("@")[0]} le dio besos a ${m.mentionedJid
        .map((user) => (user === m.sender ? "alguien " : `+${user.split("@")[0]}`))
        .join(", ")}`,
    footer: `*🔥 THE DORRAT - BOT 🔥*`,
    headerType: 4,
  };

  conn.sendMessage(m.chat, Menssage, {quoted: m});
};

handler.command = /^(kiss|skiss|kis|besos|beso)$/i;

export default handler;

async function VideoToGif(videoUrl) {
    const response = await fetch('https://ezgif.com/video-to-gif?url=' + video_url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const data = new URLSearchParams({
        file: $('input[name="file"]').val(),
        start: $('#start').val(),
        end: $('#end').val(),
        size: $('#size').val(),
        fps: $('#fps').val(),
        method: $('#method').val(),
        diff: $('input[name="diff"]').prop('checked') ? 'on' : '',
    });

    const postResponse = await fetch($('form.ajax-form').attr('action'), {
        method: 'POST',
        body: data
    });
    const postHtml = await postResponse.text();
    const $$ = cheerio.load(postHtml);

    return {
        outputImageUrl: 'https:' + $$('#output .outfile img').attr('src'),
        fileSize: $$('#output .filestats strong').text(),
        width: $$('#output .filestats').text().match(/width: (\d+)/)[1],
        height: $$('#output .filestats').text().match(/height: (\d+)/)[1],
        frames: $$('#output .filestats').text().match(/frames: (\d+)/)[1],
        fileType: $$('#output .filestats').text().match(/type: (\w+)/)[1],
    };
}