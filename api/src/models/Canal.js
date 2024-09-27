const usuario = require("./Usuario");

class Canal extends usuario {
    constructor(nome, email, imagem, papel) {
        super(nome, email, imagem, papel)
        this.videos = [];
        this.inscrito = [];
    }
    
    pegarUsuarioDono() {}

    postarVideos() {};
    
}

module.exports = Canal;