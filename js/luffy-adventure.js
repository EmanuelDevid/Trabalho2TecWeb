function novoElemento(tagName, className) {
    const elemento = document.createElement(tagName);
    elemento.className = className;
    return elemento;
}

function BarraEnergia() {
    this.elemento = novoElemento("div", "barra-energia");
    const energia = novoElemento("div", "progresso-energia");
    this.elemento.appendChild(energia);

    this.getEnergia = () => {
        let energiaAtual = energia.offsetWidth;
        return energiaAtual;
    };

    this.diminuiEnergia = () => {
        let energiaAtual = this.getEnergia();
        if (!(energiaAtual <= 0)) {
            energia.setAttribute("style", `width: ${energiaAtual - 1}%`);
        }
    };

    this.setEnergia = (novaEnergia) => {
        energia.setAttribute("style", `width: ${novaEnergia}%`);
    };
    this.setEnergia(100);
}

function Progresso() {
    this.elemento = novoElemento("span", "progresso");

    this.atualizarPontos = (pontos) => {
        this.elemento.innerHTML = pontos;
    };

    this.atualizarPontos(0);
}

function Carne() {
    this.elemento = novoElemento("img", "carne");
    this.elemento.src = "./img/carne.png";

    this.getX = () => {
        return parseInt(this.elemento.style.left.split("px")[0]);
    };

    this.getY = () => {
        return parseInt(this.elemento.style.bottom.split("px")[0]);
    };

    this.setX = (x) => {
        this.elemento.style.left = `${x}px`;
    };

    this.setY = (y) => {
        this.elemento.style.bottom = `${y}px`;
    };

    this.animarVertical = () => {
        let deslocamento = 1;
        this.setY(this.getY() - deslocamento);
    };

    this.animar = () => {
        this.animarVertical();
        this.setY(490);
        this.setX(Math.trunc(Math.random() * 1000));
    };
}

function Luffy() {
    this.elemento = novoElemento("img", "luffy");
    this.elemento.src = "./img/luffy.gif";

    this.getX = () => {
        return parseInt(this.elemento.style.left.split("px")[0]);
    };

    this.setX = (x) => {
        this.elemento.style.left = `${x}px`;
    };

    this.setX(510);

    this.animar = () => {
        document.onkeydown = (e) => {
            e = e || window.event;
            if ((e.key === "ArrowLeft" || e.key === "a") && this.getX() !== 0) {
                this.setX(this.getX() - 10);
                this.elemento.className = "luffy-left";
            } else if (
                (e.key === "ArrowRight" || e.key === "d") &&
                this.getX() !== 1010
            ) {
                this.setX(this.getX() + 10);
                this.elemento.className = "luffy";
            }
        };
    };
}

function Obstaculo () {
    this.elemento = novoElemento("div", "obstaculo");

    this.setLargura = (largura) => {
        this.elemento.style.width = `${largura}px`
    }
}

function LinhaDeObstaculos(posicaoNaTela) {
    this.elemento = novoElemento("div", "linha-obstaculo");
    const obstaculo1 = new Obstaculo();
    const obstaculo2 = new Obstaculo();
    const obstaculo3 = new Obstaculo();

    this.elemento.appendChild(obstaculo1.elemento);
    this.elemento.appendChild(obstaculo2.elemento);
    this.elemento.appendChild(obstaculo3.elemento);

    this.getY = () => {
        return parseInt(this.elemento.style.bottom.split("px")[0]);
    };
    
    this.setY = (posicaoNaTela) => {
        this.elemento.style.bottom = `${posicaoNaTela}px`;
    };

    this.setY(posicaoNaTela);

    this.larguraObstaculos = (largura1, largura2, largura3) => {
        obstaculo1.setLargura(largura1);
        obstaculo2.setLargura(largura2);
        obstaculo3.setLargura(largura3);
    }
}

function Cenarios(posicaoNaTela) {
    this.rows = [
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
        new LinhaDeObstaculos(posicaoNaTela),
    ];

    this.passagemEsquerda = () => {
        let largura1 = 200;
        let largura2 = 550;
        let increment = 50;
        this.rows.forEach( row => {
            row.larguraObstaculos(largura1, 0, largura2);
            row.setY(row.getY() - 2);
            largura1 += increment;
            largura2 -= increment;

            if(row.getY() < -600){
                row.setY(700);
            }
        })
    }

    this.passagemDireita = () => {
        let largura1 = 550;
        let largura2 = 200;
        let increment = 50;
        this.rows.forEach(row => {
            row.larguraObstaculos(largura1, 0, largura2);
            row.setY(row.getY() - 2);
            largura1 -= increment;
            largura2 += increment;

            if(row.getY() < -600){
                row.setY(700);
            }
        });
    }

    this.passagemLivre = () => {
        this.rows.forEach(row => {
            row.larguraObstaculos(250, 0, 250);
            row.setY(row.getY() - 2);

            if(row.getY() < -600){
                row.setY(700);
            }
        })
    }

    this.bifurcacao = () => {
        let largura1 = 300;
        let largura3 = 480;
        let increment = 40;
        let newLargura = 50;
        this.rows.forEach((row, index) => {
            if(index > 7){
                row.larguraObstaculos(largura1, 0, largura1);
                largura1 += increment;
            }else {
                row.larguraObstaculos(newLargura, largura3, newLargura);
                newLargura += 30;
                largura3 -= 60;
            }

            row.setY(row.getY() -2);

            if(row.getY() < -600){
                row.setY(700);
            }
        });
    }
}

const areaDoJogo = document.querySelector("#game-area");
const cenario = new Cenarios(600);
cenario.rows.forEach((row) => {areaDoJogo.appendChild(row.elemento)})
setInterval(() => {
    cenario.passagemDireita();
}, 15);

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();
    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;

    return horizontal && vertical;
}

function luffyAdventure() {
    const areaDoJogo = document.querySelector("#game-area");

    const luffy = new Luffy();
    const progresso = new Progresso();
    const barraEnergia = new BarraEnergia();
    const carne = new Carne();

    areaDoJogo.appendChild(luffy.elemento);
    areaDoJogo.appendChild(progresso.elemento);
    areaDoJogo.appendChild(barraEnergia.elemento);

    this.start = () => {
        const carnePosition = setInterval(() => {
            carne.elemento.className = "carne";
            areaDoJogo.appendChild(carne.elemento);
            carne.animar();

            if (barraEnergia.getEnergia() === 0) {
                carne.elemento.className = "carne-some";
                clearInterval(carnePosition);
            }
        }, 7000);

        const carneQueda = setInterval(() => {
            carne.animarVertical();

            if (barraEnergia.getEnergia() === 0) {
                carne.elemento.className = "carne-some";
                clearInterval(carneQueda);
            }
        }, 10);

        const game = setInterval(() => {
            luffy.animar();
            barraEnergia.diminuiEnergia();
            if (estaoSobrepostos(luffy.elemento, carne.elemento)) {
                barraEnergia.setEnergia(100);
                carne.elemento.className = "carne-some";
            }
            if (barraEnergia.getEnergia() === 0) {
                clearInterval(game);
            }
        }, 150);
    };
}

new luffyAdventure().start();
