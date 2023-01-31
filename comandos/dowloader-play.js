const _0x4fd1ca = _0xa871;
function _0xa871(_0x248e14, _0x2aa94d) {
  const _0x32f3dc = _0x32f3();
  return (
    (_0xa871 = function (_0xa8711a, _0x10e7c8) {
      _0xa8711a = _0xa8711a - 0x101;
      let _0x13c4e5 = _0x32f3dc[_0xa8711a];
      return _0x13c4e5;
    }),
    _0xa871(_0x248e14, _0x2aa94d)
  );
}
function _0x32f3() {
  const _0x3a9559 = [
    "[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a",
    "all",
    "command",
    "tags",
    "[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO",
    "downloader",
    "69132fbRVMa",
    "exp",
    "audio",
    "ago",
    "search",
    "url",
    "audio/mp4",
    "9101853VzuRkp",
    "type",
    "822DlHPYY",
    "image",
    "author",
    "\x20\x20\x20\x20\x20*ゲ◜៹\x20YouTube\x20Search\x20៹◞ゲ*\x0a\x0a\x0a*Titulo\x20∙*\x20",
    "19064800jjDqMO",
    "4344472clWNZt",
    "5Ijnrqn",
    "\x0a*Canal\x20∙*\x20",
    "3639PChzjX",
    "getvid\x20",
    "play",
    "limit",
    "sendMessage",
    "\x0a*Publicado\x20∙*\x20",
    "catch",
    "title",
    "128kbps",
    "download",
    "chat",
    "\x20<\x20busqueda\x20>",
    "274qkNMGO",
    "\x0a*Id\x20∙*\x20",
    "\x0a*Enlace\x20∙*\x20",
    "1789894ObGlaU",
    "dorracoins",
    "application/pdf",
    "help",
    "\x20Phonk*",
    "9439824Exjurg",
  ];
  _0x32f3 = function () {
    return _0x3a9559;
  };
  return _0x32f3();
}
(function (_0x599ce9, _0x5b1256) {
  const _0x58d9d0 = _0xa871,
    _0x2969d3 = _0x599ce9();
  while (!![]) {
    try {
      const _0xe4308f =
        parseInt(_0x58d9d0(0x10d)) / 0x1 +
        (-parseInt(_0x58d9d0(0x10a)) / 0x2) *
          (parseInt(_0x58d9d0(0x12a)) / 0x3) +
        (-parseInt(_0x58d9d0(0x127)) / 0x4) *
          (parseInt(_0x58d9d0(0x128)) / 0x5) +
        (-parseInt(_0x58d9d0(0x122)) / 0x6) *
          (parseInt(_0x58d9d0(0x119)) / 0x7) +
        -parseInt(_0x58d9d0(0x112)) / 0x8 +
        parseInt(_0x58d9d0(0x120)) / 0x9 +
        parseInt(_0x58d9d0(0x126)) / 0xa;
      if (_0xe4308f === _0x5b1256) break;
      else _0x2969d3["push"](_0x2969d3["shift"]());
    } catch (_0x159fe5) {
      _0x2969d3["push"](_0x2969d3["shift"]());
    }
  }
})(_0x32f3, 0xe1322);
import {
  youtubeSearch,
  youtubedl,
  youtubedlv2,
  youtubedlv3,
} from "@bochilteam/scraper";
import _0x4a4fdb from "yt-search";
let handler = async (
  _0x828a01,
  {
    conn: _0x2b3e0b,
    command: _0x1d2729,
    args: _0x289b2d,
    text: _0x355102,
    usedPrefix: _0x52fc4f,
  }
) => {
  const _0x6c8b2c = _0xa871;
  if (!_0x355102)
    throw _0x6c8b2c(0x113) + (_0x52fc4f + _0x1d2729) + _0x6c8b2c(0x111);
  let _0xece30 = await _0x4a4fdb[_0x6c8b2c(0x11d)](_0x289b2d["join"]("\x20"));
  try {
    let _0x51ca94 =
      _0x6c8b2c(0x125) +
      _0xece30[_0x6c8b2c(0x114)][0x0]["title"] +
      "\x0a*Duracion\x20∙*\x20" +
      _0xece30["all"][0x0]["timestamp"] +
      "\x0a*Tipo\x20∙*\x20" +
      _0xece30[_0x6c8b2c(0x114)][0x0]["type"] +
      "\x0a*Autor\x20∙*\x20" +
      _0xece30["all"][0x0][_0x6c8b2c(0x124)]["name"] +
      _0x6c8b2c(0x103) +
      _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x11c)] +
      "\x0a*Vistas\x20∙*\x20" +
      _0xece30[_0x6c8b2c(0x114)][0x0]["views"] +
      _0x6c8b2c(0x10c) +
      _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x11e)] +
      _0x6c8b2c(0x10b) +
      _0xece30["all"][0x0][_0x6c8b2c(0x121)] +
      _0x6c8b2c(0x129) +
      _0xece30["all"][0x0][_0x6c8b2c(0x124)][_0x6c8b2c(0x11e)] +
      "\x0a";
    const _0x47bef9 = [
        {
          buttonId:
            prefix +
            (_0x52fc4f +
              _0x6c8b2c(0x12b) +
              _0xece30[_0x6c8b2c(0x114)][0x0]["url"] +
              "\x20360"),
          buttonText: { displayText: "📽VIDEO" },
          type: 0x1,
        },
      ],
      _0x334b6a = {
        document: {
          url: "" + _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x123)],
        },
        mimetype: _0x6c8b2c(0x10f),
        fileName: "𝕐𝕠𝕦𝕋𝕦𝕓𝕖\x20ℙ𝕝𝕒𝕪",
        fileLength: 0x5af3107a3fff,
        pageCount: 0x1869f,
        caption: _0x51ca94,
        footer: "YouTube\x20-\x20Search\x20",
        buttons: _0x47bef9,
        headerType: 0x4,
        contextInfo: {
          externalAdReply: {
            title: "" + _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x105)],
            sourceUrl: _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x11e)],
            mediaType: 0x1,
            thumbnailUrl: _0xece30[_0x6c8b2c(0x114)][0x0]["image"],
            renderLargerThumbnail: !![],
          },
        },
      };
    _0x2b3e0b["sendMessage"](_0x828a01[_0x6c8b2c(0x108)], _0x334b6a, {
      quoted: _0x828a01,
    });
    const _0x34bef6 = await await youtubedlv2(
        _0xece30[_0x6c8b2c(0x114)][0x0]["url"]
      )
        [_0x6c8b2c(0x104)](
          async (_0x3203b9) => await youtubedl(_0xece30["all"][0x0]["url"])
        )
        [_0x6c8b2c(0x104)](
          async (_0x3d326f) =>
            await youtubedlv3(_0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x11e)])
        ),
      _0xdf8685 = await _0x34bef6[_0x6c8b2c(0x11b)][_0x6c8b2c(0x106)][
        _0x6c8b2c(0x107)
      ]();
    let _0x575673 = {
      audio: { url: _0xdf8685 },
      mimetype: _0x6c8b2c(0x11f),
      fileName: "" + _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x105)],
      contextInfo: {
        externalAdReply: {
          showAdAttribution: !![],
          mediaType: 0x2,
          mediaUrl: _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x11e)],
          title: _0xece30["all"][0x0][_0x6c8b2c(0x105)],
          body: wm,
          sourceUrl: _0xece30[_0x6c8b2c(0x114)][0x0]["url"],
          thumbnailUrl: _0xece30[_0x6c8b2c(0x114)][0x0][_0x6c8b2c(0x123)],
        },
      },
    };
    return _0x2b3e0b[_0x6c8b2c(0x102)](_0x828a01["chat"], _0x575673, {
      quoted: _0x828a01,
    });
  } catch {
    throw _0x6c8b2c(0x117);
  }
};
(handler[_0x4fd1ca(0x110)] = [_0x4fd1ca(0x12c)]["map"](
  (_0x58ebf7) => _0x58ebf7 + _0x4fd1ca(0x109)
)),
  (handler[_0x4fd1ca(0x116)] = [_0x4fd1ca(0x118)]),
  (handler[_0x4fd1ca(0x115)] = /^play$/i),
  (handler[_0x4fd1ca(0x10e)] = 0x5),
  (handler[_0x4fd1ca(0x11a)] = 0x0),
  (handler[_0x4fd1ca(0x101)] = !![]);
export default handler;
