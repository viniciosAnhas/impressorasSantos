const Service = require('node-windows').Service

const svc = new Service({

    name: "Pagina Impressora Santos",
    description: "Serviço para iniciar a pagina de impressora de Santos",
    script: "C:\\paginasImpressoras\\impressoras_Santos\\server.js"

})

svc.on('install', () => {
  
    svc.start()

})

svc.install()