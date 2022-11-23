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

function Obstaculo() {
    this.elemento = novoElemento("div", "obstaculo");

    this.setLargura = (largura) => {
        if(largura === 0){
            this.elemento.style.display = "none";
        }else {
            this.elemento.style.width = `${largura}px`;
        }
    };
}

function LinhaDeObstaculos(posicaoNaTela) {
    this.elemento = novoElemento("div", "linha-obstaculo");
    this.obstaculo1 = new Obstaculo();
    this.obstaculo2 = new Obstaculo();
    this.obstaculo3 = new Obstaculo();

    this.elemento.appendChild(this.obstaculo1.elemento);
    this.elemento.appendChild(this.obstaculo2.elemento);
    this.elemento.appendChild(this.obstaculo3.elemento);

    this.getY = () => {
        return parseInt(this.elemento.style.bottom.split("px")[0]);
    };

    this.setY = (posicaoNaTela) => {
        this.elemento.style.bottom = `${posicaoNaTela}px`;
    };

    this.setY(posicaoNaTela);

    this.larguraObstaculos = (largura1, largura2, largura3) => {
        this.obstaculo1.setLargura(largura1);
        this.obstaculo2.setLargura(largura2);
        this.obstaculo3.setLargura(largura3);
    };
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
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(2 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(3 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(4 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
        new LinhaDeObstaculos(5 * posicaoNaTela),
    ];

    this.passagemDireita = () => {
        let largura1 = 550;
        let largura2 = 200;
        let increment = 50;
        this.rows.forEach((row, index) => {
            if (index <= 10) {
                row.larguraObstaculos(largura1, 0, largura2);
                row.setY(row.getY() - 2);
                largura1 -= increment;
                largura2 += increment;

                if (row.getY() < -6 * 660) {
                    row.setY(660);
                }
            }
        });
    };

    this.passagemEsquerda = () => {
        let largura1 = 200;
        let largura2 = 550;
        let increment = 50;
        this.rows.forEach((row, index) => {
            if (index > 10 && index <= 21) {
                row.larguraObstaculos(largura1, 0, largura2);
                row.setY(row.getY() - 2);
                largura1 += increment;
                largura2 -= increment;

                if (row.getY() < -5 * 660) {
                    row.setY(2 * 660);
                }
            }
        });
    };

    this.passagemLivre = () => {
        this.rows.forEach((row, index) => {
            if (index > 21 && index <= 32) {
                row.larguraObstaculos(250, 0, 250);
                row.setY(row.getY() - 2);

                if (row.getY() < -4 * 660) {
                    row.setY(3 * 660);
                }
            }
        });
    };

    this.bifurcacao = () => {
        let largura1 = 300;
        let largura3 = 480;
        let increment = 40;
        let newLargura = 50;
        this.rows.forEach((row, index) => {
            if (index > 32 && index <= 43) {
                if (index > 40) {
                    row.larguraObstaculos(largura1, 0, largura1);
                    largura1 += increment;
                } else {
                    row.larguraObstaculos(newLargura, largura3, newLargura);
                    newLargura += 30;
                    largura3 -= 60;
                }

                row.setY(row.getY() - 2);

                if (row.getY() < -3 * 660) {
                    row.setY(4 * 660);
                }
            }
        });
    };

    this.zigZag = () => {
        this.rows.forEach((row, index) => {
            if (index > 43) {
                if (index === 54) {
                    row.larguraObstaculos(550, 0, 400);
                } else if (index === 48) {
                    row.larguraObstaculos(500, 0, 400);
                } else if (index === 44 || index === 51) {
                    row.larguraObstaculos(300, 0, 580);
                } else {
                    row.larguraObstaculos(300, 0, 400);
                }

                row.setY(row.getY() - 2);

                if (row.getY() < -2 * 660) {
                    row.setY(5 * 660);
                }
            }
        });
    };
}

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
    const cenario = new Cenarios(1500);

    areaDoJogo.appendChild(luffy.elemento);
    areaDoJogo.appendChild(progresso.elemento);
    areaDoJogo.appendChild(barraEnergia.elemento);
    cenario.rows.forEach((row) => {
        areaDoJogo.appendChild(row.elemento);
    });

    this.start = () => {
        const cenarioAnimacao = setInterval(() => {
            cenario.passagemDireita();
            cenario.passagemEsquerda();
            cenario.passagemLivre();
            cenario.bifurcacao();
            cenario.zigZag();
            
            cenario.rows.forEach((row) => {
                if (
                    barraEnergia.getEnergia() === 0 ||
                    estaoSobrepostos(luffy.elemento, row.obstaculo1.elemento) ||
                    estaoSobrepostos(luffy.elemento, row.obstaculo2.elemento) ||
                    estaoSobrepostos(luffy.elemento, row.obstaculo3.elemento)
                ) {
                    clearInterval(cenarioAnimacao);
                    barraEnergia.setEnergia(0);
                    luffy.elemento.className = "luffy-some";
                }
            });
        }, 15);

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
        }, 200);
    };
}

new luffyAdventure().start();
