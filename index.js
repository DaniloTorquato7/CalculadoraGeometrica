let base, altura, raio, baseMenor, baseMaior, area, lado;
const pi = 3.14;
let menu;

function areaTriangulo() {

    base = parseFloat(prompt('Digite a base do triângulo'));
    altura = parseFloat(prompt('Digite a altura do triângulo'));
    area = (base * altura) / 2;

    if (!isNaN(area) || !isNaN(altura)) {
        return area;


    }
    else {
        alert('Por favor, informe valores numéricos');
    }

}

function areaRetangulo() {
    base = parseFloat(prompt("Digite a base do retângulo:"));
    altura = parseFloat(prompt("Digite a altura do retângulo:"));
    area = base * altura

    if (!isNaN(area) || !isNaN(altura)) {
        return area;


    }
    else {
        alert('Por favor, informe valores numéricos');

    }

}

function areaQuadrado() {
    lado = parseFloat(prompt("Digite o lado do quadrado:"));
    area = lado * lado

    if (!isNaN(lado)) {
        return area;
    }
    else {
        alert('Por favor, informe valores numéricos');
    }
}

function areaTrapezio() {

    baseMaior = parseFloat(prompt("Digite a base maior do trapezio"));
    baseMenor = parseFloat(prompt("Digite a base menor do trapezio"));
    altura = parseFloat(prompt("Digite a altura do trapezio:"));
    area = (baseMaior + baseMenor) * altura / 2;

    if (!isNaN(baseMaior) || !isNaN(baseMenor) || !isNaN(altura)) {
        return area
    }
    else {
        alert('Por favor, informe valores numéricos');
    }
}

function areaCirculo() {
    raio = parseFloat(prompt("Digite o raio do círculo:"));
    area = pi * raio * raio;

    if (!isNaN(raio)) {
        return area
    }
    else {
        alert('Por favor, informe valores numéricos');
    }
}



do {

    menu = prompt(`Escolha uma das opções de calculos:
    1- Área Triângulo
    2- Área do retângulo
    3- Área do quadrado
    4- Área do Trapezio
    5- Área do círculo
    6- Sair`);

    switch (menu) {
        case '1':
            alert(`A área do triângulo é: ${areaTriangulo()}`);
            break;
        case '2':
            alert(`A área do retângulo é: ${areaRetangulo()}`);
            break;
        case '3':
            alert(`A área do quadrado é: ${areaQuadrado()}`);
            break;
        case '4':
            alert(`A área do trapezio é: ${areaTrapezio()}`);
            break;
        case '5':
            alert(`A área do círculo é: ${areaCirculo()}`);
            break;
        case '6':
            alert('Encerrando a aplicação...');
            break;
        default:
            alert('Opção invalida, reveja as opções!')
            break;
    }
} while (menu != '6');




