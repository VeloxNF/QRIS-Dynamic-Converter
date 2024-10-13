/*

QRIS Dynamic Generator rewritten in Javascript by @bagusok
github: https://github.com/bagusok/QRIS-Dynamic-Generator

Original PHP code by @GidhanB.A
github: https://github.com/verssache/qris-dinamis

*/


import QRISGenerator from "./lib/QRISGenerator.js"

// You must decode QRIS first
// and then pass it to QRISGenerator
const qris = new QRISGenerator('00020101021126570011ID.DANA.WWW011893600915350103658802095010365880303UMI51440014ID.CO.QRIS.WWW0215ID10243208661700303UMI5204481453033605802ID5914Rippz Store.ID6015Kabupaten Cireb610545642630469A1')
console.log(qris.generate('12000')) // 12000 is amount you can change it
