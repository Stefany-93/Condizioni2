let temperatura = prompt ('Quanti gradi ci sono fuori?');

if (temperatura < 20 && temperatura >= 0) {
    console.log('Non ci sono più le mezze stagioni');
} else if (temperatura >= 30) {
    console.log('Lu mare, lu sole, lu ientu');
} else if (temperatura < 30 && temperatura >= 20) {
    console.log('Mi dia una peroni sudata');
} else if (temperatura < 0 && temperatura >= -10) {
    console.log('Non è tanto il freddo quanto l’umidità');
} else if (temperatura < -10) {
    console.log('Copriti… ancora ti raffreddi');
} else {
    console.log('Valore inserito non valido');
}