let temperatura = prompt ('Quanti gradi ci sono fuori?');

switch (true) {
    case temperatura < 20 && temperatura >= 0:
        console.log('Non ci sono più le mezze stagioni');
        break;

    case temperatura >= 30:
        console.log('Lu mare, lu sole, lu ientu');
        break;

    case temperatura < 30 && temperatura >= 20:
        console.log('Mi dia una peroni sudata');
        break;

    case temperatura < 0 && temperatura >= -10:
        console.log('Non è tanto il freddo quanto l’umidità');
        break;

    case temperatura < -10:
        console.log('Copriti… ancora ti raffreddi');
        break;

    default:
        console.log('Valore inserito non valido');
        break;
}