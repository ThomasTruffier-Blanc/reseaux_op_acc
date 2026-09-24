const ponQuestions=[
{q:'Que signifie le « S » de XGS-PON ?',options:['Symmetric : environ 10 Gbit/s dans chaque sens','Shared : 10 Gbit/s garantis par abonné','Secure : pas de chiffrement nécessaire'],correct:0,why:'La ligne XGS-PON est symétrique ; la capacité est partagée sur l’arbre.'},
{q:'Quelle est la référence de XGS-PON ?',options:['ITU-T G.9807.1','IEEE 802.3av','ITU-T G.984 pour GPON uniquement'],correct:0,why:'La recommandation ITU-T G.9807.1 définit XGS-PON.'},
{q:'Quel débit nominal de ligne a XGS-PON dans chaque sens ?',options:['Environ 10 Gbit/s','8 Gbit/s réservés à chaque abonné','2,5 Gbit/s descendant et 1,25 montant'],correct:0,why:'Le débit nominal précis est 9,95328 Gbit/s dans les deux sens, arrondi à 10 dans le cours.'},
{q:'Quelle norme correspond à la famille 10G-EPON ?',options:['IEEE 802.3av','ITU-T G.9807.1','ITU-T G.984'],correct:0,why:'10G-EPON appartient à la famille Ethernet PON de l’IEEE.'},
{q:'Existe-t-il une variante asymétrique de 10G-EPON ?',options:['Oui, 10 Gbit/s descendant et 1 Gbit/s montant','Non, seule la variante 10/10 existe','Oui, 1 Gbit/s descendant et 10 montant uniquement'],correct:0,why:'La diapositive montre le 10/10 symétrique ; IEEE 802.3av prévoit aussi 10/1.'},
{q:'L’offre « jusqu’à 8 Giga » du support signifie-t-elle 8 Gbit/s garantis à chacun de 64 abonnés ?',options:['Non, la capacité de l’arbre est partagée','Oui, 64 × 8 Gbit/s sont réservés sur le même port PON','Oui, grâce au coupleur qui multiplie le débit'],correct:0,why:'Un débit commercial maximal par abonné ne représente pas une capacité garantie et simultanée pour tous.'},
{q:'Quel élément optique permet de partager la fibre de l’OLT entre plusieurs abonnés ?',options:['Le coupleur passif','Le routeur MPLS','Le serveur DHCP'],correct:0,why:'Le coupleur optique répartit le signal sur plusieurs branches sans équipement actif à cet endroit.'},
{q:'La portée de 20 km des diapositives suffit-elle à valider toute installation ?',options:['Non, il faut aussi calculer les pertes et vérifier le budget optique','Oui, indépendamment du nombre de coupleurs','Oui, si la box affiche 8 Giga'],correct:0,why:'Distance et partage affectent les pertes : il faut dimensionner la liaison avec les équipements choisis.'},
{q:'XGS-PON et 10G-EPON sont-ils directement interchangeables parce qu’ils affichent 10/10 Gbit/s ?',options:['Non, ils appartiennent à deux familles de normalisation et exigent des équipements compatibles','Oui, tous les ONT de 10 Gbit/s fonctionnent avec tous les OLT','Oui, si la longueur de fibre est inférieure à 20 km'],correct:0,why:'Le même ordre de débit ne signifie pas que les trames, le contrôle et les équipements sont identiques.'},
{q:'Quelle précaution faut-il prendre avec « moins de latence que GPON » ?',options:['La latence réelle dépend aussi de la DBA et du réseau entier','La latence est toujours exactement nulle','Le débit de l’abonné est alors toujours 10 Gbit/s'],correct:0,why:'La technologie influence la latence, mais l’observation dépend de la configuration et de la charge.'}
];
questions.push(...ponQuestions.map(q=>({...q,chapter:'xgs-pon'})));
examples.push({chapter:'xgs-pon',title:'Un arbre de 64 abonnés et une offre « jusqu’à 8 Giga »',scenario:'Un port XGS-PON d’environ 10 Gbit/s est partagé entre 64 ONT. Chaque abonnement annonce jusqu’à 8 Gbit/s.',steps:['Identifier les deux nombres : environ 10 Gbit/s de capacité de ligne partagée et un plafond commercial de 8 Gbit/s pour un accès.','Ne pas multiplier 64 × 8 = 512 Gbit/s pour en déduire la capacité de l’arbre : 512 Gbit/s dépasserait la capacité du port.','Si plusieurs abonnés transfèrent simultanément de gros volumes, l’OLT répartit les ressources selon les profils et la charge.','La vitesse observée reste limitée par les ports de la box, les équipements de l’abonné, la collecte et le serveur distant.'],result:'Le « jusqu’à 8 Giga » est un maximum commercial, pas une garantie simultanée pour 64 abonnés.'});
const ponCards=[
['Que signifie XGS-PON ?','10-Gigabit-capable Symmetric Passive Optical Network.'],
['Quelle norme décrit XGS-PON ?','ITU-T G.9807.1.'],
['Quel débit de ligne nominal pour XGS-PON ?','9,95328 Gbit/s en descendant et en montant, soit environ 10/10 Gbit/s.'],
['Quelle est la famille de 10G-EPON ?','La famille Ethernet PON de l’IEEE 802.3av.'],
['Quelle variante de 10G-EPON montre la photo ?','La variante symétrique 10/10 Gbit/s.'],
['10G-EPON existe-t-il en 10/1 ?','Oui : la norme prévoit aussi 10 Gbit/s descendant et 1 Gbit/s montant.'],
['Quel est le rôle du coupleur PON ?','Répartir passivement la fibre du port OLT vers plusieurs branches ONT.'],
['Que signifie « jusqu’à 64 abonnés » ?','Le scénario de partage montré sur les diapositives, sous réserve du budget optique.'],
['Pourquoi 8 Gbit/s ne sont-ils pas garantis à 64 ONT ?','La capacité du port PON est partagée et bien inférieure à 64 × 8 Gbit/s.'],
['La portée 20 km garantit-elle la liaison ?','Non, il faut aussi vérifier pertes, coupleurs et budget optique.'],
['XGS-PON et 10G-EPON sont-ils interchangeables ?','Non, les familles de standards et les équipements doivent être compatibles.'],
['XGS-PON garantit-il toujours une latence inférieure ?','Non, la latence mesurée dépend notamment de la DBA, de la charge et du réseau complet.']
];
flashcards.push(...ponCards.map(([q,a],i)=>({group:'PON 10 Gbit/s',q,a,id:'pon-card-'+i})));
