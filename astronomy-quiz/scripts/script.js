const objectInformations = {
    moon: [
        'du fait des forces de marées, la Lune met autant de temps à tourner sur elle même qu\'à tourner autour de la terre.\nDe ce fait, elle nous présente toujours la même face.',
        'La face visible de la Lune est divisée en zones claires appelées les hauts plateaux lunaires et en zones plus sombres appelées maria (« mers » ; le singulier est mare).\nLes premiers astronomes qui cartographient ces zones sombres pensent que ce sont des océans (au XVIIème siècle).\nAujourd\'hui le terme des mers de la lune demeure.',
        'La matière sombre qui remplit les mers de la Lune est de la lave sombre et solidifiée provenant de périodes antérieures du volcanisme lunaire.',
        'La face cachée de la Lune a une apparence très différente de la face visible. En particulier, on y trouve presque pas de mers lunaires.',
        'La masse volumique apparente de la Lune est de 7,342 * 1022 kg soit 1,23% de celle de la Terre.',
        'La Lune est recouverte d\'une couche de terre poudreuse légèrement ondulée avec des roches éparpillées que l\'on appelle le régolithe.\nIl est constitué de débris projetés hors des cratères lunaires par les impacts de météores qui les ont créés.\nChaque cratère lunaire bien préservé est entouré d\'une feuille de matériau éjecté appelée couverture d\'éjection.',
        'Sur la Lune, il n\'y a pas d\'atmosphère et peu ou pas d\'eau, et les roches les plus courantes ont été formées par des coulées de lave, contrairement à la Terre ou l\'on trouve principalement des roches sédimentaires.'
    ],

    mars: [],
    ceres: [],
    jupiter: [],
    galimede: [],
    calisto: [],
    europe: [],
    io: [],
    saturn: [],
    lapetus: [],
    hyperion: [],
    titan: [],
    rhea: [],
    dione: [],
    tethys: [],
    encelade: [],
    mimas: [],
    uranus: [],
    oberon: [],
    titania: [],
    umbriel: [],
    ariel: [],
    miranda: [],
    neptune: [],
    triton: [],
    charon: [],
    pluton: [],
    voyager1: []
}

scriptElements = [
    {
        source: '',
        text: ''
    },
    {
        source: 'scripts/images/rocket/rocket1.PNG',
        text: 'Répond aux questions pour faire décoller la fusée.'
    },
    {
        source: 'scripts/images/rocket/rocket1.PNG',
        text: 'Bien joué! Fermeture du sas.\nRépond encore juste pour initier la procédure de rétractation des ponts.'
    },
    {
        source: 'scripts/images/rocket/rocket3.PNG',
        text: 'Rétractation des ponts.'
    },
    {
        source: 'scripts/images/rocket/rocket4.PNG',
        text: 'Ponts rétractés.'
    },
    {
        source: 'scripts/images/rocket/rocket4.PNG',
        text: 'Réponds à 5 autres questions pour évacuer les tours de lancement.'
    },
    {
        source: 'scripts/images/rocket/rocket4.PNG',
        text: 'Evacuation du personel présent sur le pas de tir.\nAllez encore un effort!'
    },
    {
        source: 'scripts/images/rocket/rocket5.PNG',
        text: 'Tours de lancement en movement.\nConfirmation personel évacué.'
    },
    {
        source: 'scripts/images/rocket/rocket5.PNG',
        text: 'Tours de lancement en movement.\nDébut de l\'enregistrement de la mission.'
    },
    {
        source: 'scripts/images/rocket/rocket6.PNG',
        text: 'Tours de lancement en movement.\nMise en route des générateurs de puissance auxiliaires.'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Tours de lancement retirées!\nAmorçage des moteurs des propulseurs (SRB) et activation des dispositifs de sécurité.'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Ventilation des circuits d\'oxygène liquide...\n\nCircuits d\'oxygène liquide OK!'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Mise sous pression du réservoir d\'oxygène liquide...\n\nRéservoir d\'oxygène liquide OK!'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Début du retrait du bras de remplissage d\'oxygène liquide...\n\nBras de remplissage d\'oxygène liquide OK!'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'mise sous pression du réservoir d\'hydrogène liquide...\n\nRéservoir d\'hydrogène liquide OK!'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Mise hors tension des réchauffeurs des joints des propulseurs...\n\nRéchauffeurs des joints des propulseurs OK!'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Mise sous tension autonome de l\'orbiteur...\n\nOrbiteur OK!'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Mise en route de la séquence automatique...\n\nSéquence automatique activée!'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: 'Allumage des moteurs de la fusée et du moteur principal...\n\nMoteurs allumés! Début du compte à rebours.'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: '10, 9, 8, 7, 6...'
    },
    {
        source: 'scripts/images/rocket/rocket7.PNG',
        text: '5, 4, 3, 2, 1...'
    },
    {
        source: 'scripts/images/rocket/spaceship1.PNG',
        text: 'Bienvenu dans l\'espace.\nPour nous échaper de l\'attraction gravitationnelle de la terre, nous avons du atteindre une vitesse supérieure à 40 320 km/h.\nMalgré cette vitesse prodigieuse il nous reste 380 000km à parcourir pour atteindre notre prochaine destination: la Lune!\nIl te faudra pour ça répondre à 3 questions.'
    },
    {
        source: 'scripts/images/rocket/spaceship1.PNG',
        text: 'Il nous reste 260 000km à parcourir pour atteindre la Lune.\nNous nous trouvons actuelement à 125 000km de la terre.'
    },
    {
        source: 'scripts/images/rocket/spaceship1.PNG',
        text: 'Il nous reste 140 000km à parcourir pour atteindre la Lune.\nNous nous trouvons actuelement à 245 000km de la terre.'
    },
    {
        source: 'scripts/images/rocket/spaceship2.PNG',
        text: 'Nous ne sommes plus qu\'à 20 000km de la Lune.\nNous pouvons déjà la voir à l\'écran.\nNous nous trouvons actuelement à 365 000km de la terre.'
    },
    {
        source: 'scripts/images/rocket/spaceship3.PNG',
        text: objectInformations.moon[Math.floor(Math.random() * objectInformations.moon.length)]
    },
    {
        source: 'scripts/images/rocket/spaceship4.PNG',
        text: objectInformations.moon[Math.floor(Math.random() * objectInformations.moon.length)]
    },
    {
        source: 'scripts/image/rocket/spaceship5.PNG',
        text: 'Nous venons de dépasser le point le plus proche de la lune sur notre trajet.\nA présent nous nous dirigeons vers notre prochain objectif: Mars.\nJ\'ai une bonne nouvelle: Tes brillantes réponses aux questions posées nous ont permi d\'augmenter significativement la pousée des moteurs.\nMalgré la distance Faramineuse de 40 000 000 de km qui nous sépare de la planète rouge, nous réussirons à atteindre Mars si tu réponds juste aux 5 prochaines questions.'
    },
];
