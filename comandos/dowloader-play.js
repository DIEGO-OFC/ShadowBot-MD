function _0x36d8(_0x1415c4, _0x29e068) {
  const _0x349f10 = _0x349f();
  return (
    (_0x36d8 = function (_0x36d82e, _0xc06ca2) {
      _0x36d82e = _0x36d82e - 0x1bd;
      let _0x5abc2e = _0x349f10[_0x36d82e];
      return _0x5abc2e;
    }),
    _0x36d8(_0x1415c4, _0x29e068)
  );
}
const _0x12af9e = _0x36d8;
(function (_0x39e102, _0xed83e8) {
  const _0x5ad87b = _0x36d8,
    _0x360959 = _0x39e102();
  while (!![]) {
    try {
      const _0x3c1c5a =
        -parseInt(_0x5ad87b(0x1e3)) / 0x1 +
        -parseInt(_0x5ad87b(0x1dd)) / 0x2 +
        (parseInt(_0x5ad87b(0x1d5)) / 0x3) *
          (-parseInt(_0x5ad87b(0x1d6)) / 0x4) +
        -parseInt(_0x5ad87b(0x1c7)) / 0x5 +
        (parseInt(_0x5ad87b(0x1e9)) / 0x6) *
          (parseInt(_0x5ad87b(0x1d4)) / 0x7) +
        (parseInt(_0x5ad87b(0x1c3)) / 0x8) *
          (-parseInt(_0x5ad87b(0x1cf)) / 0x9) +
        (-parseInt(_0x5ad87b(0x1d7)) / 0xa) *
          (-parseInt(_0x5ad87b(0x1e4)) / 0xb);
      if (_0x3c1c5a === _0xed83e8) break;
      else _0x360959["push"](_0x360959["shift"]());
    } catch (_0x475071) {
      _0x360959["push"](_0x360959["shift"]());
    }
  }
})(_0x349f, 0xdb9db);
import {
  youtubeSearch,
  youtubedl,
  youtubedlv2,
  youtubedlv3,
} from "@bochilteam/scraper";
import _0x125b13 from "yt-search";
function ConvertMiles(_0x31e141) {
  const _0x2d282a = _0x36d8,
    _0x1de358 = /(\d)(?=(\d{3})+(?!\d))/g,
    _0x3bda3b = _0x2d282a(0x1c5);
  let _0x3f4fd6 = _0x31e141["toString"]()[_0x2d282a(0x1e8)](".");
  return (
    (_0x3f4fd6[0x0] = _0x3f4fd6[0x0][_0x2d282a(0x1eb)](_0x1de358, _0x3bda3b)),
    _0x3f4fd6[0x1] ? _0x3f4fd6[_0x2d282a(0x1be)](".") : _0x3f4fd6[0x0]
  );
}
let handler = async (
  _0x1becda,
  {
    conn: _0x5c4f38,
    command: _0x4625a1,
    args: _0x581d05,
    text: _0x586f77,
    usedPrefix: _0x213ead,
  }
) => {
  const _0x24ca66 = _0x36d8;
  if (!_0x586f77)
    throw _0x24ca66(0x1c6) + (_0x213ead + _0x4625a1) + _0x24ca66(0x1db);
  let _0xc84e3c = await _0x125b13["search"](
    _0x581d05[_0x24ca66(0x1be)]("\x20")
  );
  try {
    let _0x4cfdc6 =
      _0x24ca66(0x1e0) +
      _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1e2)] +
      "\x0a*Duracion\x20∙*\x20" +
      _0xc84e3c["all"][0x0][_0x24ca66(0x1c1)] +
      _0x24ca66(0x1ec) +
      _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1de)] +
      _0x24ca66(0x1e5) +
      _0xc84e3c["all"][0x0][_0x24ca66(0x1bd)][_0x24ca66(0x1cd)] +
      _0x24ca66(0x1ee) +
      _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1e7)] +
      _0x24ca66(0x1d0) +
      ConvertMiles(_0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1da)]) +
      _0x24ca66(0x1dc) +
      _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1d2)] +
      _0x24ca66(0x1d3) +
      _0xc84e3c[_0x24ca66(0x1c0)][0x0]["type"] +
      "\x0a*Canal\x20∙*\x20" +
      _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1bd)][_0x24ca66(0x1d2)] +
      "\x0a";
    const _0x353c65 = [
        {
          buttonId:
            prefix +
            (_0x213ead +
              "getvid\x20" +
              _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1d2)] +
              "\x20360"),
          buttonText: { displayText: _0x24ca66(0x1df) },
          type: 0x1,
        },
      ],
      _0x529784 = {
        document: { url: "" + _0xc84e3c[_0x24ca66(0x1c0)][0x0]["image"] },
        mimetype: _0x24ca66(0x1e1),
        fileName: _0x24ca66(0x1d9),
        fileLength: 0x5af3107a3fff,
        pageCount: 0x1869f,
        caption: _0x4cfdc6,
        footer: _0x24ca66(0x1cb),
        buttons: _0x353c65,
        headerType: 0x4,
        contextInfo: {
          externalAdReply: {
            title: "" + _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1e2)],
            sourceUrl: _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1d2)],
            mediaType: 0x1,
            thumbnailUrl: _0xc84e3c[_0x24ca66(0x1c0)][0x0]["image"],
            renderLargerThumbnail: !![],
          },
        },
      };
    _0x5c4f38["sendMessage"](_0x1becda[_0x24ca66(0x1e6)], _0x529784, {
      quoted: _0x1becda,
    });
    const _0x395e0d = await await youtubedlv2(
        _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1d2)]
      )
        [_0x24ca66(0x1cc)](
          async (_0x30c83e) => await youtubedl(_0xc84e3c["all"][0x0]["url"])
        )
        [_0x24ca66(0x1cc)](
          async (_0x3ee0f9) =>
            await youtubedlv3(
              _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1d2)]
            )
        ),
      _0x312b9e = await _0x395e0d[_0x24ca66(0x1c9)]["128kbps"]["download"]();
    let _0xeeed54 = {
      audio: { url: _0x312b9e },
      mimetype: _0x24ca66(0x1c8),
      fileName: "" + _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1e2)],
      contextInfo: {
        externalAdReply: {
          showAdAttribution: !![],
          mediaType: 0x2,
          mediaUrl: _0xc84e3c["all"][0x0][_0x24ca66(0x1d2)],
          title: _0xc84e3c[_0x24ca66(0x1c0)][0x0][_0x24ca66(0x1e2)],
          body: wm,
          sourceUrl: _0xc84e3c[_0x24ca66(0x1c0)][0x0]["url"],
          thumbnailUrl: _0xc84e3c["all"][0x0][_0x24ca66(0x1ea)],
        },
      },
    };
    return _0x5c4f38["sendMessage"](_0x1becda["chat"], _0xeeed54, {
      quoted: _0x1becda,
    });
  } catch {
    throw _0x24ca66(0x1ed);
  }
};
(handler[_0x12af9e(0x1ce)] = [_0x12af9e(0x1ca)][_0x12af9e(0x1ef)](
  (_0x45214b) => _0x45214b + "\x20<\x20busqueda\x20>"
)),
  (handler["tags"] = [_0x12af9e(0x1d8)]),
  (handler[_0x12af9e(0x1bf)] = /^play$/i),
  (handler[_0x12af9e(0x1d1)] = 0x5),
  (handler[_0x12af9e(0x1c2)] = 0x0),
  (handler[_0x12af9e(0x1c4)] = !![]);
function _0x349f() {
  const _0x499c86 = [
    "name",
    "help",
    "15746814zRcCul",
    "\x0a*Vistas\x20∙*\x20",
    "dorracoins",
    "url",
    "\x0a*Id\x20∙*\x20",
    "7CfnpJm",
    "4439121XGtqQT",
    "4ojPjNd",
    "21876310tIZyVi",
    "downloader",
    "𝕐𝕠𝕦𝕋𝕦𝕓𝕖\x20ℙ𝕝𝕒𝕪",
    "views",
    "\x20Phonk*",
    "\x0a*Enlace\x20∙*\x20",
    "2879366bTXSIK",
    "type",
    "📽VIDEO",
    "\x20\x20\x20\x20\x20*ゲ◜៹\x20YouTube\x20Search\x20៹◞ゲ*\x0a\x0a*Titulo\x20∙*\x20",
    "application/pdf",
    "title",
    "644115ATMHBY",
    "33hlZuVg",
    "\x0a*Autor\x20∙*\x20",
    "chat",
    "ago",
    "split",
    "4048404tpNpVn",
    "image",
    "replace",
    "\x0a*Tipo\x20∙*\x20",
    "[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO",
    "\x0a*Publicado\x20∙*\x20",
    "map",
    "author",
    "join",
    "command",
    "all",
    "timestamp",
    "exp",
    "8WEAmHz",
    "limit",
    "$1.",
    "[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a",
    "5124645DhJNfP",
    "audio/mp4",
    "audio",
    "play",
    "YouTube\x20-\x20Search\x20",
    "catch",
  ];
  _0x349f = function () {
    return _0x499c86;
  };
  return _0x349f();
}
export default handler;
