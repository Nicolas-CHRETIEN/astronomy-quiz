
// Declare all the wrong answers that can be used to generate the answers to the questions.
const planets = ['Mercure', 'Vénus', 'Terre', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune', 'Pluton', 'Cérès', 'Éris', 'Makémaké', 'Hauméa'];

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const wrongUADistances = [189000000, 680000,1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 11000000, 12000000, 13000000, 14000000, 16000000, 17000000, 18000000, 19000000, 20000000];

const moons = ['Ganymède', 'Titan', 'Callisto', 'Io', 'Europe', 'Lune', 'Thebe', 'Amalthea', 'Himalia', 'Elara', 'Lysithea', 'Carme', 'Ananke', 'Adrastea', 'Metis', 'Janus', 'Epimetheus', 'Helene', 'Telesto', 'Calypso', 'Atlas', 'Prometheus', 'Pan', 'Daphnis'];

const starsAnswers = ['Achernar', 'Acrux', 'Acrux B', 'Adhara', 'Al Na\'ir', 'Aldébaran', 'Aldéramin', 'Algieba A', 'Algol', 'Alhéna', 'Alioth', 'Alkaïd', 'Almach A', 'Alnilam', 'Alnitak A', 'Alpha Lupi', 'Alphard', 'Alphecca A', 'Alphératz', 'Alsephina', 'Altaïr', 'Aludra', 'Ankaa', 'Antarès', 'Arcturus', 'Aspidiske', 'Atria', 'Avior A', 'Bellatrix', 'Bételgeuse', 'Canopus', 'Capella', 'Capella B', 'Caph', 'Castor A', 'Deneb', 'Deneb Kaitos', 'Dénébola', 'Dschubba', 'Dubhé A', 'Elnath', 'Eltanin', 'Enif', 'Epsilon Centauri', 'Eta Centauri', 'Fomalhaut', 'Gacrux', 'Gamma Cassiopeiae', 'Gienah', 'Girtab', 'Hadar', 'Hamal', 'Kappa Velorum', 'Kaus Australis', 'Kochab', 'Larawag', 'Markab', 'Menkent', 'Mérak', 'Miaplacidus', 'Mimosa', 'Mirach', 'Mirfak', 'Mizar A', 'Murzim', 'Naos', 'Nunki', 'Peacock', 'Phecda', 'Polaris', 'Pollux', 'Procyon', 'Ras Alhague', 'Régulus', 'Rigel', 'Rigil Kentaurus', 'Sadir', 'Saïph', 'Sargas', 'Scheat', 'Schédar', 'Shaula', 'Sirius', 'Spica L\'Épi', 'Suhail', 'Suhail al Muhlif A', 'Tiaki', 'Toliman', 'Véga', 'Wezen'];

const galaxys = ['Andromède', 'Antlia 2', 'Aquarius', 'Boötes', 'Boötes', 'Canes Venatici', 'Carina', 'Cassiopeia', 'Cetus', 'Columba', 'Draco', 'Éridan', 'Galaxie de Barnard (NGC 6822)', 'Galaxie du Lion', 'Galaxie naine de la Carène (E206-G220)', 'Galaxie naine de la Chevelure de Bérénice', 'Galaxie naine de la Coupe 2', 'Galaxie naine de la Grande Ourse I (UMa I dSph)', 'Galaxie naine d\'Hercule', 'Galaxie naine du Dragon (DDO 208)', 'Galaxie naine du Fourneau (E356-G04)', 'Galaxie naine du Phénix (P 6830)', 'Galaxie naine du Sagittaire SagDEG', 'Galaxie naine du Sculpteur (E351-G30)', 'Galaxie naine du Sextant', 'Grand Nuage de Magellan (LMC)', 'Grus I', 'Grus II', 'Horologium I', 'Horologium II', 'Hydra II', 'Hydrus I', 'IC 10 (UGC 192)', 'IC 1613 (UGC 668)', 'Indus II', 'Leo IV Dwarf', 'Leo T', 'Leo V Dwarf', 'NGC 185', 'Pegasus III', 'Petit Nuage de Magellan (SMC, NGC 292)', 'Petite Ourse', 'Phoenix II', 'Pictor II', 'Pictor II', 'Poisson I', 'Poissons II', 'Poissons V (Andromède XVI)', 'Reticulum II', 'Reticulum III', 'Sagittarius II', 'Segue 1', 'Segue 2', 'Triangulum II', 'Tucana II', 'Tucana III', 'Tucana IV', 'Vierge I', 'Voie lactée', 'Willman 1'];

const blackHoles = ['Sagittarius A*', 'Cygnus X-1', 'V616 Monocerotis', 'LMC X-1', 'LMC X-3', 'H 1743-322', 'GRS 1915+105', 'GRO J1655-40', 'GRS 1009-45', 'Galactic Center Black Hole', 'EXO 1846-031', 'Circinus X-1', 'Cen A*', 'CAS A*', 'Capricornus A*', 'CAL 83', 'CAL 87'];

const messierObjects = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17', 'M18', 'M19', 'M20', 'M21', 'M22', 'M23', 'M24', 'M25', 'M26', 'M27', 'M28', 'M29', 'M30', 'M31', 'M32', 'M33', 'M34', 'M35', 'M36', 'M37', 'M38', 'M39', 'M40', 'M41', 'M42', 'M43', 'M44', 'M45', 'M46', 'M47', 'M48', 'M49', 'M50', 'M51', 'M52', 'M53', 'M54', 'M55', 'M56', 'M57', 'M58', 'M59', 'M60', 'M61', 'M62', 'M63', 'M64', 'M65', 'M66', 'M67', 'M68', 'M69', 'M70', 'M71', 'M72', 'M73', 'M74', 'M75', 'M76', 'M77', 'M78', 'M79', 'M80', 'M81', 'M82', 'M83', 'M84', 'M85', 'M86', 'M87', 'M88', 'M89', 'M90', 'M91', 'M92', 'M93', 'M94', 'M95', 'M96', 'M97', 'M98', 'M99', 'M100', 'M101', 'M102', 'M103'];

const messierObjectTypes = ['Rémanent de supernova', 'Nébuleuse', 'Amas d\'étoiles de la Voie lactée', 'Amas globulaire', 'Amas ouvert', 'Étoile binaire', 'Galaxie', 'Nébuleuse et amas ouvert', 'trou noir supermassif', 'Antimatière', 'Epave de l\'étoile de la mort', 'Regroupement de planètes géantes', 'Une tache sur le telescope de Messier'];

const constellationNames = ['Andromède', 'Baleine', 'Cancer', 'Capricorne', 'Cassiopée', 'Chevelure de Bérénice', 'Chiens de chasse', 'Cocher', 'Cygne', 'Dragon', 'Écu de Sobieski', 'Flèche', 'Gémeaux', 'Grand Chien', 'Grande Ourse', 'Hercule', 'Hydre', 'Licorne', 'Lièvre', 'Lion', 'Lyre', 'Ophiuchus', 'Orion', 'Pégase', 'Persée', 'Petit Renard', 'Poissons', 'Poupe', 'Sagittaire', 'Scorpion', 'Serpent', 'Taureau', 'Triangle', 'Verseau', 'Vierge'];

const messierObjectNames = ['Amas de la Crèche ou Amas de la Ruche', 'Amas de la Méduse', 'Amas de Ptolémée', 'Amas du Canard Sauvage', 'Amas du cygne noir', 'Amas du Papillon', 'Amas du Sagittaire', 'Croix de Webb', 'Galaxie d\'Andromède', 'Galaxie de Bode', 'Galaxie de la Planche de surf', 'Galaxie de l\'Aspirateur', 'Galaxie de l\'Œil noir', 'Galaxie du Cigare', 'Galaxie du Fuseau', 'Galaxie du Moulinet', 'Galaxie du Sèche-cheveux', 'Galaxie du Sombrero', 'Galaxie du Tourbillon', 'Galaxie du Tournesol', 'Galaxie du Triangle', 'Galaxie Pin-wheel', 'Grand amas d\'Hercule', 'Gumball Globular Cluster', 'Moulinet du Sud', 'Nébuleuse de la Lagune', 'Nébuleuse de l\'Aigle', 'Nébuleuse de l\'Anneau', 'Nébuleuse de l\'Haltère', 'Nébuleuse de Mairan', 'Nébuleuse d\'Orion', 'Nébuleuse du Crabe', 'Nébuleuse du Hibou', 'Nébuleuse du Petit Haltère', 'Nébuleuse Oméga', 'Nébuleuse du Cygne ou Nébuleuse du Fer à cheval', 'Nébuleuse Trifide', 'Nuage de Pégase', 'Nuage d\'étoiles du Sagittaire', 'Pléiades', 'Winnecke 4'];

const spacialMissionDates = ['20 juin 1944', '4 octobre 1957', '3 novembre 1957', '1er février 1958', '29 juillet 1958', '4 janvier 1959', '13 septembre 1959', '7 octobre 1959', '31 janvier 1961', '12 avril 1961', '5 mai 1961', '6 août 1961', '20 février 1962', '26 avril 1962', '29 septembre 1962', '14 décembre 1962', '16 juin 1963', '25 avril 1964', '15 décembre 1964', '18 mars 1965', '14 juillet 1965', '26 novembre 1965', '15 décembre 1965', '3 février 1966', '3 avril 1966', '16 mars 1966', '26 janvier 1967', '18 octobre 1967', '29 novembre 1967', '14 septembre 1968', '24 décembre 1968', '7 juillet 1969', '21 juillet 1969', '11 février 1970', '24 avril 1970', '17 novembre 1970', '15 décembre 1970', '19 avril 1971', '26 juillet 1971', '28 octobre 1971', '13 novembre 1971', '2 décembre 1971', '19 décembre 1972', '14 mai 1973', '3 décembre 1973', '29 mars 1974', '31 mai 1975', '22 octobre 1975', '20 juillet 1976', '2 mars 1978', '1er septembre 1979', '18 juin 1980', '12 avril 1981', '19 juin 1981', '24 juin 1982', '27 janvier 1983', '11 juin 1985', '24 janvier 1986', '20 février 1986', '6 mars 1986', '19 septembre 1988', '15 novembre 1988', '25 août 1989', '25 avril 1990', '7 décembre 1995', '4 juillet 1997', '20 novembre 1998', '31 octobre 2000', '19 février 2001', '28 avril 2001', '15 octobre 2003', '21 juin 2004', '1er juillet 2004', '14 janvier 2005', '9 mars 2008', '2 février 2009', '13 juin 2010', '18 mars 2011', '8 juillet 2011', '29 septembre 2011', '25 août 2012', '12 décembre 2012', '30 janvier 2013', '12 novembre 2014', '14 juillet 2015', '25 novembre 2015', '21 décembre 2015', '1er janvier 2019', '3 janvier 2019', '11 avril 2019', '6 septembre 2019', '7 décembre 2019', '25 avril 2020', '30 mai 2020', '9 février 2021', '19 avril 2021', '20 avril 2021', '29 avril 2021', '14 mai 2021', '11 juillet 2021', '20 juillet 2021', '16 septembre 2021', '5 octobre 2021', '13 octobre 2021', '14 décembre 2021', '25 décembre 2021'];

const missionNames = ['JUICE', ' Luna 25', 'Psyché', 'Chang\'e 6', 'Europa Clipper', 'Shukrayaan-1', 'Venera-D', 'Martian Moons Exploration', 'Rosalind Franklin', 'Nancy-Grace-Roman', 'Dragonfly', 'Comet Interceptor'];

const spaceNations = ['Russie', 'Canada', 'États-Unis', 'Chine', 'Brésil', 'Australie', 'Inde', 'Argentine', 'Kazakhstan', 'Algérie', 'Danemark', 'Arabie Saoudite', 'Mexique', 'Indonésie', 'Soudan', 'Libye', 'Iran', 'Mongolie', 'Pérou', 'Europe', 'Japon', 'Inde', 'Chine'];

const rockets = ['Angara A5', 'Falcon Heavy', 'Ares V', 'Ares I', 'Ariane 5 ECA', 'Atlas V 400', 'Delta II', 'Delta IV Heavy', 'Falcon 9', 'GSLV', 'H2A 204', 'Longue Marche 2F', 'PSLV', 'Proton', 'Space Shuttle', 'Saturn V', 'Soyouz-FG', 'Titan IV B', 'Vega', 'Zenit'];

const rocketSizes = ['55,4, 70', '116', '94', '56', '58,3', '39', '77,2', '70', '49', '53', '62', '44', '62', '56', '110', '49,5', '44', '30', '59,6'];

const rocketMass = ['759', '1421', '2900', '982', '780', '546', '232', '733', '325', '402', '445', '464', '294', '694', '2040', '3039', '305', '943', '137', '462'];

const rocketUsefullMass = ['24,5', '63,8', '188', '25', '21', '12,5', '6,1', '25,8', '9,9', '5', '15', '8,4', '3,2', '22', '24,4', '118', '7,1', '21,7', '1,5'];

const rocketUsefullMass2 =['4,5', '26,7', '9,6', '7,6', '2,17', '6,3', '4,9', '2,5', '6', '1.4', '6', '3,8', '47', '5,8', '5,3'];

const antiquityDates = ['-130', '125', '50', '238', '486', 'vers 200', '359', '-1375 ', '-240', '-26', '-430', '-46', '-500', '-600', '-750 ', 'Vers -1400', 'Vers -2000', 'Vers -2300', 'Vers -240', 'Vers -250', 'Vers -300', 'Vers -3000', 'Vers -350', 'Vers -400', 'Vers -401', 'Vers -550'];

const hightMiddleAgeDates = ['813', 'Vers 800-830', '837', '900', '964', '990', '985', '746', '855', '989', '845', '877'];

const spectralTypes = ['O', 'A', 'F', 'G', 'K', 'M', 'L', 'T', 'Y', 'Z', 'V', 'R', 'C', 'D', 'E', 'N', 'H'];

const starsTemperatures = ['25000K ou plus', '7500-10000K', '6000-7500K', '5000-6000K', '3500-5000K', '2000-3500K', '1200-2000K', '750-1200K', '750 K ou moins'
];

const spectralTypeParticularityCodes = [':', '…', '!', 'comp', 'e', '[e]', 'er', 'ep', 'eq', 'ev', 'f', 'f+', 'f*', '(f)', '((f))', 'He wk', 'k', 'm', 'n', 'nn', 'neb', 'p', 'pq', 'q', 's', 'ss', 'sh', 'v', 'w', 'd Del', 'd Sct', 'Ba', 'Ca', 'Cr', 'Eu', 'He', 'Hg', 'Mn', 'Si', 'Sr', ':', 'P', 'E', 'H', 'V', 'PEC'];

const completeStarSpectralNames = ['O:', 'O…', 'O!', 'Ocomp', 'Oe', 'O[e]', 'Oer', 'Oep', 'Oeq', 'Oev', 'Of', 'Of+', 'Of*', 'O(f)', 'O((f))', 'OHe wk', 'Ok', 'Om', 'On', 'Onn', 'Oneb', 'Op', 'Opq', 'Oq', 'Os', 'Oss', 'Osh', 'Ov', 'Ow', 'B:', 'B…', 'B!', 'Bcomp', 'Be', 'B[e]', 'Ber', 'Bep', 'Beq', 'Bev', 'Bf', 'Bf+', 'Bf*', 'B(f)', 'B((f))', 'BHe wk', 'Bk', 'Bm', 'Bn', 'Bnn', 'Bneb', 'Bp', 'Bpq', 'Bq', 'Bs', 'Bss', 'Bsh', 'Bv', 'Bw', 'A:', 'A…', 'A!', 'Acomp', 'Ae', 'A[e]', 'Aer', 'Aep', 'Aeq', 'Aev', 'Af', 'Af+', 'Af*', 'A(f)', 'A((f))', 'AHe wk', 'Ak', 'Am', 'An', 'Ann', 'Aneb', 'Ap', 'Apq', 'Aq', 'As', 'Ass', 'Ash', 'Av', 'Aw', 'Ad Del', 'Ad Sct', 'F:', 'F…', 'F!', 'Fcomp', 'Fe', 'F[e]', 'Fer', 'Fep', 'Feq', 'Fev', 'Ff', 'Ff+', 'Ff*', 'F(f)', 'F((f))', 'FHe wk', 'Fk', 'Fm', 'Fn', 'Fnn', 'Fneb', 'Fp', 'Fpq', 'Fq', 'Fs', 'Fss', 'Fsh', 'Fv', 'Fw', 'Fd Del', 'Fd Sct', 'G:', 'G…', 'G!', 'Gcomp', 'Ge', 'G[e]', 'Ger', 'Gep', 'Geq', 'Gev', 'Gf', 'Gf+', 'Gf*', 'G(f)', 'G((f))', 'GHe wk', 'Gk', 'Gm', 'Gn', 'Gnn', 'Gneb', 'Gp', 'Gpq', 'Gq', 'Gs', 'Gss', 'Gsh', 'Gv', 'Gw', 'K:', 'K…', 'K!', 'Kcomp', 'Ke', 'K[e]', 'Ker', 'Kep', 'Keq', 'Kev', 'Kf', 'Kf+', 'Kf*', 'K(f)', 'K((f))', 'KHe wk', 'Kk', 'Km', 'Kn', 'Knn', 'Kneb', 'Kp', 'Kpq', 'Kq', 'Ks', 'Kss', 'Ksh', 'Kv', 'Kw', 'M:', 'M…', 'M!', 'Mcomp', 'Me', 'M[e]', 'Mer', 'Mep', 'Meq', 'Mev', 'Mf', 'Mf+', 'Mf*', 'M(f)', 'M((f))', 'MHe wk', 'Mk', 'Mm', 'Mn', 'Mnn', 'Mneb', 'Mp', 'Mpq', 'Mq', 'Ms', 'Mss', 'Msh', 'Mv', 'Mw'];

const sizePlanets = ['695', '508', '2439', '6051', '6371', '1737', '3389', '11', '6', '69911', '58232', '25362', '24622', '1185'];

const saturnMoons = ['Titan', 'Rhéa', 'Japet', 'Dioné', 'Téthys', 'Encelade', 'Mimas', 'Phœbé', 'Hypérion', 'Épiméthée', 'Hélène', 'Janus', 'Pandore', 'Télesto', 'Paaliaq', 'Siarnaq', 'Ymir', 'Kiviuq', 'Albiorix', 'Prométhée'];

const jupiterMoons = ['Ganymède', 'Callisto', 'Io', 'Europe', 'Amalthée', 'Himalia', 'Thébé', 'Élara', 'Pasiphaé', 'Carmé', 'Métis', 'Sinopé', 'Lysithée', 'Ananké', 'Adrastée', 'Léda', 'Callirrhoé', 'Thémisto', 'Praxidiké', 'Jocaste'];

const uranusMoons = ['Cordélia', 'Ophélie', 'Bianca', 'Cressida', 'Desdémone', 'Juliette', 'Portia', 'Rosalinde', 'Cupidon', 'Bélinda', 'Perdita', 'Puck', 'Mab', 'Miranda', 'Ariel', 'Umbriel', 'Titania', 'Obéron', 'Francisco', 'Caliban', 'Stéphano'];

const SFcategories = ['Le space opera', 'L’uchronie', 'Le post-apocalyptique', 'Le roman d’anticipation', 'Hard science-fiction', 'Voyage dans le temps', 'Cyberpunk', 'Space fantasy', 'Planet opera', 'Science-fiction féministe', 'Le Réalisme fantastique', 'Le Steampunk'];

const nineteenth =['1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909'];

const nineteententh = ['1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919'];

const nineteentwentyth = ['1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929'];

const nineteenthirtyth = ['1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939'];

const nineteenfourtyth = ['1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949'];

const nineteenfiftyth = ['1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959'];

const nineteensixtyth = ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969'];

const nineteenseventyth = ['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979'];

const nineteeneightyth = ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989'];

const nineteennineth = ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999'];

const XXthCenturyDates = nineteenth.concat(nineteententh, nineteentwentyth, nineteenthirtyth, nineteenfourtyth, nineteenfiftyth, nineteensixtyth, nineteenseventyth, nineteeneightyth, nineteennineth);

const SFBooks = ['La Machine à explorer le temps', 'La Guerre des mondes', 'Le Meilleur des mondes', 'Ravage', '1984', 'Chroniques martiennes', 'Fondation', 'Fahrenheit 451', 'La Planète des singes', 'Dune', 'Ubik', 'Les androïdes rêvent-ils de moutons électriques ?', 'Les Robots', '2001, l\'odyssée de l\'espace', 'La Nuit des Temps', 'Cycle de Majipoor', 'Neuromancien', 'La Stratégie d\'Ender', 'La Lignée de Lilith', 'Hypérion', 'Des milliards de tapis de cheveux', 'Le Moineau de Dieu', 'La Horde du Contrevent', 'Le Problème à trois corps', 'The Expanse'];

const SFAutors = ['H.G. Wells', 'Aldous Huxley', 'René Barjavel', 'George Orwell', 'Ray Bradbury', 'Isaac Asimov', 'Pierre Boulle', 'Frank Herbert', 'Philip K. Dick', 'Isaac Asimov', 'Arthur C. Clarke', 'René Barjavel', 'Robert Silverberg', 'William Gibson', 'Orson Scott Card', 'Octavia Butler', 'Dan Simmons', 'Andreas Eschbach', 'Mary Doria Russell', 'Alain Damasio', 'Liu Cixin', 'James S.A. Corey'];


