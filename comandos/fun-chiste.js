// Créditos a https://github.com/matias-crypto 

import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';

let handler = async (m, { usedPrefix, command }) => {
  try {
    let res = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!res.ok) throw new Error('Error');
    
    let json = await res.json();
    if (json.setup && json.punchline) {
      let translatedSetup = await translate(json.setup, { to: 'es' });
      let translatedPunchline = await translate(json.punchline, { to: 'es' });

      let chiste = `${translatedSetup.text}\n${translatedPunchline.text}`;
      let imageUrl = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Chiste'],datasets:[{label:'',data:[],backgroundColor:'white',borderColor:'black',borderWidth:1}]},options:{scales:{yAxes:[{ticks:{display:false},gridLines:{display:false}}],xAxes:[{ticks:{display:false},gridLines:{display:false}}]},plugins:{datalabels:{align:'start',anchor:'end',color:'black',backgroundColor:'white',borderRadius:5,borderWidth:1,borderColor:'black',font:{size:16},formatter:function(){return '${chiste.replace(/\n/g, "\\n")}';}}},layout:{padding:{top:30,right:30,bottom:30,left:30}}}}`;

      await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: '*Chiste aleatorio:*' });
    } else {
      throw new Error('Invalid');
    }
  } catch (e) {
    console.error(e);
    m.reply('Ocurrió un error.');
  }
};

handler.help = ["chiste"];
handler.tags = ["fun"];
handler.command = ["chiste", "joke"];

export default handler;