//           ████████████████▄▄
//      ▄████████████████████████▄
//    ████████▓▓▓██████████████████▄
//   ████▀╢▒▒▒▒▒▒▒╢╢▀▓▓█████████████▌
//  ███▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢▓███████████⌐
// ██▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢▓█████████
// █▌╣▒▒▒▒▒▒▒▒▒▒▒▄▓▓╣▒▒▒▒▒▒▒▒▒╢▓███████µ
// █▓╣▒▒▒▒▒▒╢▓▓██▓╬▒╢╢▄▓╢▒▒▒▒▒▒▒▓▓███▓▓▓µ
// █▓╣╢╢╢╣╣╢▓▓▓▓▓▓█████▀▀▒▒░░░▒▒▒╫▓███▄▓▓
// ▐█▓▓▓▓▓▓▓╣▒╢▓▓█▓▓▓╢▒▒░░▒▒▒▒▒▒▒╢▓▓▓▓▓▓╣
//  ███████▓╣▒▒▒▒▒▒╢╣▒▒▒▒▒▒▒╢╣╣╢╣╣╢▓▓▓▓▒╣█
//  └█▓████▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢╢╣╣╢╢╣▒╢╢▓▓░▐██▄
//    ██▓▓▓▓╢▒▒▒▒▒╢╣╣╣▒▒▒╢╣╢╣╢╣╣╢▒▒▒▒╢▓▓████████▄,
//    ▐█▓╣▓╢▓╣▒▒@▄▄▓▓╣╣╣╣╢╢╣╣╣╢╣╣╣╢╣╣╣▓▓▓████▀▀▀▀╙⌠¬ ╙▐▀▀▀▄
//     █▓╣╢╢▓██████▀╢▒▒▒▒╢╢╢╢╣╣╣╢╣╢╫▓▓╣╣╢▓╬▒╢╬@░░░░░       █
//     ▀█▓▓▓▓▓██▓╢▒▒▒▒╢▓▓▓▓╢╢╢╣▓▓▓▓▓▓▓▓╣▒╢╣▒▓▓▓╢░░▒░       "▌
//      ▀██▓▓▓▓▓▓███████▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣╢╢╣▓▓▓▓▓▒`       ░░▐µ
//        ▀██▓▓▓███▓████▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣▒▒╢╢▒▐▓╜         ░░░░█⌐
//          ▀███▓█████▓╢╢╢╫▓▓▓▓█▓███▓▓╣╣╢▒╢╢╢╣░        ░░░░░░╙╨,
//            ▀▀████▓▓▓▓▓▓██████████▓▓╣╣╣╢╢Ñ░        ░░░░░░        ,
//                -╨▀██████████████▓▓▓▓▓▓╣░       ░░░░░░░           ╙─.
//                  ╔░▒▒╢▓▓████████▓▓▓▓▓╜░    .░░░░▒░░░                 ░░░╟▌
//                  ╫▒▒▒▒▒▓▓██████▓▓▓▓▓░░░░░░▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░@╜░▌
//                   ▒▒▒▒▒╫▓▓████████▀▒▒░▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░╓▒▒░░░░%▄
//                   ╠▒▒▒▒╢▒╢▓██████Ñ▒▒▒╢╢╢╢╢╢╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╣▒▒▒▒▒▒▒▒▒▒▀▌
//                   ▓▒▒▒▒▒╣╣█▓▓▓▓▓╬╢╢╢▓╢▓▓▓▓╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▓▓╣▒▒▒▒▒▒▒▒▒╫▓╣▀
//                   ▓╢▒▒▒▒╢╢▓▓▓▓▓╣╣▓▓▓▓▓▓▓╢╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▓▓▓╢╢▒▒▒▒▒▒▒▒▒▒▒▒╢▓▓
//                   ▓╫╣╢╢╣╢╢▓▓▓▓▓▓▓▓███╢╢╣╣╣╢╣╣╢╣╣╣╣╣╢╢▓▓▓▓╣╢╣╣╢▒▒▒▒▒▒▒▒▒▒▒╢╢╢╢▓▓
//                  ─╝                                                     `╙╙╨╩╩╝═

const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const port = process.env.PORT || 3001

// Syncing all the models at once.
const force = false // Cambiar a false si quieres que no se borren los registros que has guardado
conn.sync({ force }).then(() => {
  if (force)require('./src/utils/superSeeder')

  server.listen(port, () => {
    console.log('Backend listening at 3001') // eslint-disable-line no-console
  })
})
