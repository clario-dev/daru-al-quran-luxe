// Articles SEO optimisés pour la France et l'Europe francophone.
// Inspiration thématique : 3ilmchar3i.net (apprentissage / talab al-'ilm).
// Chaque article se conclut par un CTA d'inscription.

export type BlogPost = {
  slug: string;
  title: string; // <60 chars idéalement
  description: string; // meta description <160 chars
  keywords: string[];
  category: string;
  readingTime: number; // minutes
  publishedAt: string; // ISO date
  cover: string; // image import
  excerpt: string;
  content: string; // markdown-lite (titres ##, paragraphes, listes -)
};

import quranDesk from "@/assets/quran-desk.jpg";
import zoomClass from "@/assets/zoom-class.jpg";
import mixedZoom from "@/assets/mixed-zoom-class.jpg";
import teacherPortrait from "@/assets/teacher-portrait.jpg";
import maleTeacher from "@/assets/male-teacher.jpg";
import studentReading from "@/assets/student-reading.jpg";
import maleStudent from "@/assets/male-student-reading.jpg";
import childWriting from "@/assets/child-writing.jpg";
import maleChild from "@/assets/male-child-writing.jpg";
import mosqueParakou from "@/assets/mosque-parakou.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import heroMixed from "@/assets/hero-mixed.png";

const CTA = `

[[CTA]]
`;

// Citation authentique injectée au début de chaque article (Coran ou Hadith en arabe + traduction).
const AUTH_INTRO = `

> AR: ﴿ يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ﴾
> TR: Allah élèvera en degrés ceux d'entre vous qui ont cru et ceux qui ont reçu la science.
> REF: Coran, sourate Al-Mujâdala (58), verset 11.

> AR: « مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ »
> TR: Quiconque emprunte un chemin par lequel il recherche une science, Allah lui facilite par cela un chemin vers le Paradis.
> REF: Rapporté par Mouslim (n°2699), d'après Abou Hourayra رضي الله عنه.

`;

export const blogPosts: BlogPost[] = [
  {
    slug: "apprendre-le-coran-en-ligne-france",
    title: "Apprendre le Coran en ligne en France : guide complet 2026",
    description: "Comment apprendre le Coran en ligne en France avec des enseignants qualifiés ? Méthode, tajwid, mémorisation et conseils pratiques pour débuter.",
    keywords: ["apprendre le Coran en ligne", "cours Coran en ligne France", "Coran en ligne Paris", "apprendre Coran français"],
    category: "Apprentissage du Coran",
    readingTime: 9,
    publishedAt: "2026-01-12",
    cover: quranDesk,
    excerpt: "Vous vivez en France et souhaitez apprendre le Coran sérieusement, sans vous déplacer ? Ce guide vous explique tout : méthode, étapes, pièges à éviter et meilleurs outils.",
    content: `## Pourquoi apprendre le Coran en ligne quand on vit en France ?

En France, l'accès à un enseignant qualifié de Coran n'est pas toujours évident. Beaucoup de musulmans vivant à Paris, Lyon, Marseille, Lille, Toulouse ou en zone rurale n'ont pas de mosquée proposant un enseignement structuré du tajwid ou de la mémorisation. Apprendre le **Coran en ligne** devient alors la solution la plus efficace : vous gardez votre rythme, vous étudiez avec un enseignant authentique, et vous évitez les heures de transport.

L'apprentissage en ligne n'est pas un compromis : c'est une opportunité. Il vous permet de choisir un enseignant sur la base de sa science et de sa méthodologie, et non simplement de sa proximité géographique.

## Les étapes pour apprendre le Coran en ligne

1. **Définir clairement votre objectif** : voulez-vous apprendre à lire, perfectionner votre tajwid, ou mémoriser le Coran (hifz) ?
2. **Choisir une institution sérieuse** dont la méthodologie suit celle des pieux prédécesseurs (Salaf as-Salih).
3. **Commencer par la lecture** : maîtrisez l'alphabet arabe, les voyelles, les règles de base avant la mémorisation.
4. **Étudier le tajwid** progressivement, règle après règle, avec un enseignant qui corrige votre prononciation.
5. **Réviser quotidiennement** : sans révision, la mémorisation s'effondre.

## La méthodologie correcte : la voie des pieux prédécesseurs

À Daaru Al Qurane, nous nous attachons à la méthodologie des pieux prédécesseurs (Salaf as-Salih) et nous nous désavouons des groupes hérétiques égarés. Cela signifie :

- Une lecture du Coran selon les *qira'at* authentifiées
- Une compréhension basée sur le *tafsir* des grands savants sunnites
- Un enseignement sans innovations religieuses (bid'a)

## Combien de temps faut-il pour apprendre le Coran en ligne ?

Cela dépend de votre objectif. Pour apprendre à **lire le Coran correctement**, comptez en moyenne 3 à 6 mois à raison de 2 cours par semaine. Pour mémoriser le Coran complet, il faut généralement entre 3 et 7 ans avec une assiduité quotidienne.

## Les erreurs à éviter

- Étudier seul sans enseignant : vous prenez le risque de figer de mauvaises prononciations
- Sauter les bases : un débutant doit absolument maîtriser le Nourania ou équivalent
- Multiplier les enseignants en parallèle : restez fidèle à un parcours cohérent
- Négliger la révision

## Outils pratiques pour étudier en France

- Une connexion internet stable
- Un Mushaf imprimé (préférez le Mushaf de Médine)
- Un cahier pour noter les règles
- Zoom installé sur votre ordinateur, tablette ou smartphone

${CTA}`,
  },
  {
    slug: "cours-arabe-en-ligne-debutant",
    title: "Cours d'arabe en ligne pour débutant : par où commencer ?",
    description: "Cours d'arabe en ligne pour débutants en France et Europe : alphabet, vocabulaire, grammaire. Méthode progressive en français.",
    keywords: ["cours d'arabe en ligne", "apprendre l'arabe débutant", "arabe coranique français", "cours arabe en ligne France"],
    category: "Langue arabe",
    readingTime: 8,
    publishedAt: "2026-01-15",
    cover: studentReading,
    excerpt: "Débuter l'arabe peut sembler intimidant. Voici un parcours clair, étape par étape, pour passer de zéro à la lecture fluide en quelques mois.",
    content: `## Pourquoi apprendre l'arabe en ligne ?

La langue arabe n'est pas qu'une langue étrangère parmi d'autres : c'est la langue du Coran, choisie par Allah pour Sa parole finale. Apprendre l'arabe, c'est s'ouvrir directement aux sources de la religion, sans passer par le filtre des traductions.

En France, en Belgique, en Suisse, peu d'écoles proposent un enseignement de l'arabe orienté vers la compréhension du Coran. Les cours en ligne comblent ce vide.

## Étape 1 : maîtriser l'alphabet arabe

L'alphabet arabe contient 28 lettres. Chaque lettre a 4 formes possibles selon sa position dans le mot (isolée, initiale, médiane, finale). Cette étape demande environ 2 à 4 semaines de travail régulier.

## Étape 2 : les voyelles courtes et longues

- Fatha, kasra, damma : les trois voyelles courtes
- Alif, ya, waw : les trois lettres de prolongation (voyelles longues)
- Soukoun, shadda, tanwin : les signes complémentaires

## Étape 3 : la lecture syllabique

Une fois les lettres et voyelles maîtrisées, vous combinez les sons. C'est l'étape clé : ne brûlez pas cette phase. Une lecture mal posée freinera tout votre apprentissage futur.

## Étape 4 : le vocabulaire de base

Concentrez-vous d'abord sur le **vocabulaire coranique** : environ 500 mots couvrent près de 80 % des occurrences du Coran. C'est un investissement extraordinairement rentable.

## Étape 5 : la grammaire (nahw) et la morphologie (sarf)

La grammaire arabe est logique et structurée. Avec un bon enseignant, ce qui semble compliqué devient un véritable plaisir intellectuel. Les cours en direct sur Zoom vous permettent de poser vos questions immédiatement.

## Combien de temps pour parler arabe ?

- 3 mois : lire l'arabe sans hésitation
- 6 mois : comprendre des phrases simples du Coran
- 1 à 2 ans : comprendre la majorité du Coran et des textes religieux classiques
- 3 ans et plus : maîtrise avancée

## Comment progresser plus vite ?

- Étudiez chaque jour, même 20 minutes
- Écoutez du Coran récité avec le texte sous les yeux
- Apprenez le vocabulaire en contexte
- N'apprenez pas seul : un enseignant divise votre temps d'apprentissage par 3

${CTA}`,
  },
  {
    slug: "tajwid-en-ligne-regles-essentielles",
    title: "Tajwid en ligne : les règles essentielles à connaître",
    description: "Apprenez les règles du tajwid en ligne : Noun saakinah, Meem saakinah, Madd, points d'articulation. Cours en français avec enseignants qualifiés.",
    keywords: ["tajwid en ligne", "cours tajwid Coran", "règles tajwid français", "apprendre tajwid débutant"],
    category: "Tajwid",
    readingTime: 10,
    publishedAt: "2026-01-18",
    cover: zoomClass,
    excerpt: "Le tajwid n'est pas un luxe : c'est une obligation pour préserver la parole d'Allah. Voici les règles fondamentales expliquées clairement.",
    content: `## Qu'est-ce que le tajwid ?

Le **tajwid** désigne la science qui étudie la prononciation correcte du Coran. Le mot vient de la racine *j-w-d* qui signifie "rendre meilleur, embellir". Pratiquer le tajwid, c'est restituer la parole d'Allah comme elle a été révélée au Prophète ﷺ.

Les savants ont établi que la lecture du Coran sans respecter les règles évidentes du tajwid est une faute. Apprendre le tajwid n'est donc pas optionnel pour celui qui récite le Coran.

## Les makharij (points d'articulation)

L'arabe possède 17 points d'articulation principaux répartis en 5 zones :

- La gorge (al-halq)
- La langue (al-lisan)
- Les lèvres (al-shafatan)
- La cavité buccale (al-jawf)
- La cavité nasale (al-khayshoum)

Maîtriser les makharij est le préalable absolu à toute récitation correcte.

## Les règles du Noun saakinah et du Tanwin

Quatre règles s'appliquent :

1. **Idh-har** (manifestation) : prononciation claire devant les lettres gutturales
2. **Idgham** (assimilation) : fusion avec certaines lettres
3. **Iqlab** (transformation) : transformation en *meem* devant le *ba*
4. **Ikhfa'** (dissimulation) : son intermédiaire avec ghounnah

## Les règles du Meem saakinah

- Idgham shafawi
- Ikhfa' shafawi
- Idh-har shafawi

## Les règles du Madd (allongement)

- Madd tabi'i (naturel) : 2 mouvements
- Madd far'i (dérivé) : 4 ou 6 mouvements selon la cause

## Pourquoi étudier le tajwid avec un enseignant en direct ?

Le tajwid est une science orale. On ne l'apprend pas dans un livre seul : on l'apprend de la bouche d'un enseignant qui corrige votre prononciation en temps réel. C'est précisément ce que permettent les cours en ligne sur Zoom : la même qualité qu'en présentiel, avec la flexibilité de votre domicile.

## Combien de temps pour maîtriser le tajwid ?

Avec 2 cours par semaine et une pratique quotidienne :

- 3 mois : règles théoriques et application sur des sourates courtes
- 6 mois : application correcte sur tout le Coran
- 1 an et plus : maîtrise avancée et embellissement

${CTA}`,
  },
  {
    slug: "memorisation-coran-hifz-en-ligne",
    title: "Mémorisation du Coran (Hifz) en ligne : méthode efficace",
    description: "Méthode de mémorisation du Coran (Hifz) en ligne : planification, révision, motivation. Pour francophones en France, Belgique, Suisse.",
    keywords: ["mémorisation Coran en ligne", "hifz en ligne", "apprendre Coran par cœur", "hifz francophone"],
    category: "Mémorisation",
    readingTime: 11,
    publishedAt: "2026-01-22",
    cover: maleStudent,
    excerpt: "Mémoriser le Coran est l'une des œuvres les plus nobles. Voici la méthode complète pour y parvenir, même en travaillant ou en étudiant.",
    content: `## Le mérite de la mémorisation du Coran

Le Prophète ﷺ a dit : *« Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne »* (Boukhari). Mémoriser le Coran est l'un des plus grands trésors qu'un musulman puisse acquérir.

## Conditions préalables avant de commencer le hifz

1. **Maîtriser la lecture** : ne commencez pas la mémorisation si vous trébuchez encore sur les mots
2. **Connaître les bases du tajwid** : pour mémoriser correctement
3. **Avoir un enseignant** : pour valider chaque page mémorisée
4. **Une intention sincère** : exclusivement pour Allah

## La méthode classique en 4 étapes

### 1. La nouvelle leçon (sabaq)
Mémorisez 5 à 10 lignes par jour. Lisez d'abord 20 fois en regardant, puis 20 fois sans regarder.

### 2. La révision proche (sabqi)
Révisez les 7 dernières pages mémorisées chaque jour.

### 3. La révision lointaine (manzil)
Révisez 1 *juz* (1/30 du Coran) déjà mémorisé chaque jour.

### 4. La récitation devant l'enseignant
Validation indispensable de chaque nouvelle leçon.

## Combien de temps pour mémoriser le Coran complet ?

- À raison de 1 page par jour : environ 1,5 an
- À raison de 1/2 page par jour : environ 3 ans
- À raison de 1/4 page par jour (rythme adulte actif) : 5 à 7 ans

## Conseils pratiques pour les francophones

- Choisissez **toujours le même Mushaf** (idéalement le Mushaf de Médine, format standard)
- Mémorisez le matin, après Fajr de préférence
- Liez la mémorisation à la prière (récitez ce que vous venez d'apprendre)
- Trouvez un partenaire de révision

## Les erreurs fatales à éviter

- Avancer sans réviser : vous oublierez tout
- Changer constamment de Mushaf : la mémoire visuelle se perd
- Sauter des jours : le hifz exige une régularité absolue
- Mémoriser seul sans enseignant pour corriger

## Le hifz est-il possible pour un adulte ?

Absolument. De nombreux adultes en France, Belgique et Suisse ont mémorisé le Coran complet entre 35 et 60 ans, en ligne, en parallèle de leur travail. Le secret : la régularité, pas l'intensité.

${CTA}`,
  },
  {
    slug: "coran-pour-enfants-en-ligne",
    title: "Cours de Coran pour enfants en ligne : guide pour parents",
    description: "Comment enseigner le Coran à votre enfant en ligne ? Conseils, âge idéal, pédagogie adaptée. Cours en français pour enfants en Europe.",
    keywords: ["cours Coran enfants en ligne", "apprendre Coran enfant France", "Coran enfants français", "école Coran en ligne enfants"],
    category: "Enfants",
    readingTime: 8,
    publishedAt: "2026-01-25",
    cover: childWriting,
    excerpt: "Donner à votre enfant un lien fort avec le Coran dès le plus jeune âge est l'un des plus beaux héritages que vous puissiez lui offrir.",
    content: `## À quel âge commencer ?

Vous pouvez familiariser votre enfant avec le Coran dès 3 ans (par l'écoute et la mémorisation orale). L'apprentissage formel de la lecture peut commencer dès **5 à 6 ans**, lorsque l'enfant est capable de se concentrer 20 à 30 minutes.

## Pourquoi choisir un cours en ligne pour son enfant ?

- L'enfant étudie depuis la sécurité du foyer
- Les parents peuvent suivre les progrès en direct
- Pas de transport, donc plus d'énergie pour étudier
- Choix d'un enseignant qualifié, peu importe la ville

## Une pédagogie adaptée

Un bon enseignant pour enfants doit :

- Être patient et bienveillant
- Utiliser le jeu et la répétition
- Récompenser les progrès
- Adapter le rythme à chaque enfant

## La méthode progressive

1. **Familiarisation orale** : sourates courtes apprises par cœur (An-Nas, Al-Falaq, Al-Ikhlas)
2. **Apprentissage de l'alphabet arabe**
3. **Lecture syllabique** avec le Nourania
4. **Lecture du Coran** avec tajwid simplifié
5. **Mémorisation progressive**

## Le rôle des parents

Sans implication des parents, l'apprentissage stagne. Voici ce que vous pouvez faire :

- Réviser 10 minutes chaque jour avec votre enfant
- Récompenser les efforts (et pas seulement les résultats)
- Écouter du Coran à la maison
- Faire de l'apprentissage un moment de joie, jamais de stress

## Combien d'heures par semaine ?

Pour un enfant débutant : 2 séances de 30 minutes par semaine suffisent. Pour un enfant motivé : 3 à 4 séances de 45 minutes.

## Filles et garçons : faut-il séparer ?

À Daaru Al Qurane, les enfants sont accueillis avec une organisation pédagogique respectueuse, et les sections frères/sœurs sont distinctes pour les adolescents et adultes.

${CTA}`,
  },
  {
    slug: "talab-al-ilm-quete-de-la-science",
    title: "Talab al-'ilm : la quête de la science religieuse expliquée",
    description: "Talab al-'ilm : pourquoi et comment chercher la science religieuse selon la voie des pieux prédécesseurs. Conseils pratiques pour francophones.",
    keywords: ["talab al ilm", "quête de la science", "apprendre la religion", "science islamique en français"],
    category: "Sciences religieuses",
    readingTime: 9,
    publishedAt: "2026-01-28",
    cover: maleTeacher,
    excerpt: "Chercher la science religieuse n'est pas réservé aux savants. C'est une obligation pour tout musulman. Découvrez comment commencer correctement.",
    content: `## Qu'est-ce que talab al-'ilm ?

*Talab al-'ilm* signifie littéralement "la quête de la science". Dans le contexte religieux, il désigne l'effort sincère du musulman pour apprendre sa religion : croyance ('aqida), jurisprudence (fiqh), exégèse du Coran (tafsir), tradition prophétique (hadith), langue arabe.

Le Prophète ﷺ a dit : *« La quête de la science est une obligation pour tout musulman »* (Ibn Majah).

## Par quoi commencer ?

L'ordre traditionnel des pieux prédécesseurs est le suivant :

1. **L'unicité d'Allah** (tawhid) — la base de toute la religion
2. **Les piliers de l'islam et de la foi**
3. **Les règles de la prière, de la purification, du jeûne**
4. **La langue arabe** comme outil
5. **Les sciences plus avancées** : usul al-fiqh, hadith, etc.

## La méthodologie correcte

Étudiez avec des enseignants reconnus pour suivre la voie des pieux prédécesseurs. Méfiez-vous :

- Des innovations religieuses (bid'a)
- Des groupes égarés et hérétiques
- Des enseignants sans isnad (chaîne de transmission)
- De l'auto-apprentissage exclusif sur internet sans guide

## Les vertus du chercheur de science

- Allah lui facilite le chemin du Paradis
- Les anges baissent leurs ailes par satisfaction pour lui
- Tout l'univers demande pardon en sa faveur
- Sa supériorité sur l'adorateur est comme la lune sur les autres astres

## Comment étudier sans abandonner le travail ?

C'est l'une des plus belles forces des cours en ligne : vous pouvez étudier sérieusement la religion sans quitter votre emploi en France ou en Belgique. 2 à 4 heures par semaine bien encadrées suffisent à transformer votre vie spirituelle en quelques années.

## Bonus : sciences religieuses incluses

À Daaru Al Qurane, des enseignements complémentaires en *fiqh*, *aqida* et *tafsir* sont **inclus en bonus** dans chaque niveau d'apprentissage (langue arabe ou Coran), sans coût supplémentaire. Ces enseignements suivent une approche méthodique et respectueuse des écoles classiques.

${CTA}`,
  },
  {
    slug: "apprendre-arabe-coranique-comprendre-coran",
    title: "Apprendre l'arabe coranique pour comprendre le Coran",
    description: "Comment apprendre l'arabe coranique pour comprendre le Coran sans traduction ? Méthode, vocabulaire, grammaire essentiels.",
    keywords: ["arabe coranique", "comprendre le Coran en arabe", "apprendre arabe Coran", "vocabulaire coranique"],
    category: "Langue arabe",
    readingTime: 9,
    publishedAt: "2026-02-01",
    cover: quranDesk,
    excerpt: "Lire le Coran sans le comprendre est une grande perte. Voici comment combler ce fossé en quelques mois d'efforts ciblés.",
    content: `## Pourquoi l'arabe coranique mérite une approche spécifique

L'arabe coranique est une variante littéraire et classique de la langue arabe. Il diffère sensiblement de l'arabe dialectal parlé au quotidien. Apprendre l'arabe pour comprendre le Coran demande donc une pédagogie ciblée.

## Le vocabulaire coranique : 80/20

Une statistique fascinante : seulement **500 mots** couvrent environ **80 % des occurrences** du Coran. Si vous apprenez ces 500 mots-clés, vous comprendrez la majeure partie du sens littéral du Coran.

## Les piliers de l'arabe coranique

- **Le verbe trilitère** : la quasi-totalité des mots arabes dérivent de racines de 3 lettres
- **Les schèmes** (awzân) : modèles morphologiques qui modifient le sens
- **L'i'rab** : les marques grammaticales de fin de mot
- **La syntaxe coranique** : ordre des mots, accords, conjonctions

## Méthode d'étude proposée

1. **Mois 1-2** : Alphabet, voyelles, lecture
2. **Mois 3-4** : 100 verbes coraniques + grammaire de base
3. **Mois 5-6** : 200 mots-clés du vocabulaire coranique + i'rab simple
4. **Mois 7-12** : Lecture commentée de sourates courtes
5. **Année 2 et plus** : Étude des sourates longues, tafsir, syntaxe avancée

## Le piège à éviter : la traduction littérale

Apprendre le Coran via une traduction française seule vous coupera de la richesse de la langue. La traduction reste un appui utile, mais l'objectif final est la lecture directe.

## Les outils indispensables

- Un dictionnaire arabe-français (Reverso, Almaany)
- Un Mushaf avec traduction interlinéaire
- Une application d'audio Coran (pour entraîner l'oreille)
- Un enseignant en direct pour corriger et expliquer

${CTA}`,
  },
  {
    slug: "tajwid-pour-debutant-par-ou-commencer",
    title: "Tajwid pour débutant : par où commencer en ligne ?",
    description: "Tajwid pour débutant : alphabet, points d'articulation, premières règles. Cours tajwid en ligne en français pour adultes.",
    keywords: ["tajwid débutant", "cours tajwid en ligne", "tajwid pour débutants français", "apprendre tajwid"],
    category: "Tajwid",
    readingTime: 7,
    publishedAt: "2026-02-04",
    cover: heroBg,
    excerpt: "Vous savez à peine lire l'arabe et vous voulez bien prononcer le Coran ? Voici la feuille de route claire pour le tajwid débutant.",
    content: `## Étape 1 : maîtriser parfaitement la lecture

Avant de parler de tajwid, assurez-vous de lire couramment. Si vous hésitez encore sur des mots, consacrez d'abord 1 à 3 mois à la lecture pure.

## Étape 2 : les points d'articulation

Travaillez ces 5 zones une par une :

- La gorge : ء، ه، ع، ح، غ، خ
- La langue : ق، ك، ج، ش، ي، ض، ل، ن، ر، ط، د، ت، ص، س، ز، ظ، ذ، ث
- Les lèvres : ف، ب، م، و
- La cavité buccale : voyelles longues
- La cavité nasale : ghounnah

## Étape 3 : les attributs des lettres

- Lettres fortes (mufakhama) vs lettres fines (muraqqaqa)
- Lettres avec souffle (hams) vs sans souffle (jahr)
- Lettres avec écho (qalqala) : ق، ط، ب، ج، د

## Étape 4 : les premières règles

Commencez par :

- Idh-har et idgham du Noun saakinah
- Madd tabi'i (allongement naturel)
- Qalqala

## Étape 5 : pratiquer, pratiquer, pratiquer

Lisez chaque jour à voix haute, idéalement devant un enseignant qui corrige vos erreurs en direct.

## Les ressources utiles

- Mushaf Tajwid coloré (les règles sont marquées par couleurs)
- Récitations de référence : Hussary, Minshawi (lents et clairs)
- Cours en direct : indispensables pour la correction

${CTA}`,
  },
  {
    slug: "cours-coran-en-ligne-belgique",
    title: "Cours de Coran en ligne en Belgique : enseignants qualifiés",
    description: "Cours de Coran en ligne en Belgique avec enseignants qualifiés. Bruxelles, Anvers, Liège : étudiez depuis chez vous en français.",
    keywords: ["cours Coran en ligne Belgique", "Coran Bruxelles", "apprendre Coran Belgique", "institut arabe Belgique"],
    category: "Apprentissage du Coran",
    readingTime: 7,
    publishedAt: "2026-02-08",
    cover: zoomClass,
    excerpt: "Vous vivez à Bruxelles, Anvers, Liège ou ailleurs en Belgique et cherchez un enseignement sérieux du Coran ? Voici votre solution.",
    content: `## Le défi de l'apprentissage du Coran en Belgique

La Belgique compte une importante communauté musulmane, mais l'offre éducative en français orientée vers la voie des pieux prédécesseurs reste limitée. Beaucoup de musulmans à Bruxelles, Anvers, Charleroi, Liège, Gand ou Namur peinent à trouver un enseignant qualifié à proximité.

## La solution : les cours en ligne

Étudier en ligne, c'est :

- Choisir un enseignant sur sa science et non sur sa proximité
- Économiser le temps de transport
- Étudier dans un environnement familial sécurisé
- Suivre un parcours structuré et progressif

## Quel programme choisir ?

À Daaru Al Qurane, vous avez le choix entre :

- **Lecture du Coran** : pour celui qui ne sait pas encore lire
- **Tajwid** : pour celui qui lit mais veut perfectionner
- **Mémorisation (hifz)** : pour celui qui veut apprendre par cœur
- **Langue arabe** : pour comprendre le Coran sans traduction

Tous les cours sont **en français**, en direct, sur Zoom.

## Le fuseau horaire est-il un problème ?

Non. Les cours sont planifiés selon votre disponibilité. Que vous soyez à Bruxelles, à Genève ou à Paris, vous choisissez vos créneaux avec votre enseignant.

## Cours pour hommes, femmes et enfants

Daaru Al Qurane organise les sections séparément :

- Section frères : enseignants hommes, contact dédié
- Section sœurs : enseignantes, mail dédié (daaralquranesoeurs@gmail.com)
- Section enfants : pédagogie adaptée

${CTA}`,
  },
  {
    slug: "cours-coran-en-ligne-suisse",
    title: "Cours de Coran en ligne en Suisse : Genève, Lausanne, Zurich",
    description: "Cours de Coran et d'arabe en ligne en Suisse romande et alémanique. Enseignants qualifiés, en français, depuis chez vous.",
    keywords: ["cours Coran en ligne Suisse", "Coran Genève", "Coran Lausanne", "apprendre arabe Suisse"],
    category: "Apprentissage du Coran",
    readingTime: 7,
    publishedAt: "2026-02-11",
    cover: mosqueParakou,
    excerpt: "Que vous viviez à Genève, Lausanne, Zurich, Bâle ou Fribourg, accédez à un enseignement coranique francophone de qualité, sans déplacement.",
    content: `## La Suisse francophone et l'apprentissage religieux

En Suisse, les centres islamiques sont peu nombreux et souvent éloignés. Les musulmans francophones de Genève, Lausanne, Neuchâtel, Fribourg ou même de la Suisse alémanique (où le français reste largement compris) cherchent souvent un enseignement structuré et accessible.

## Pourquoi étudier le Coran en ligne en Suisse ?

- **Flexibilité** : compatible avec votre emploi du temps suisse
- **Qualité** : enseignants qualifiés, pas seulement disponibles
- **Coût** : largement plus accessible qu'un enseignant à domicile
- **Famille entière** : adultes et enfants peuvent étudier à la maison

## Comment commencer concrètement ?

1. **Inscrivez-vous en ligne** sur Daaru Al Qurane
2. **Choisissez votre programme** selon votre niveau
3. **Réservez votre créneau** avec votre enseignant
4. **Démarrez sur Zoom** depuis votre salon

## La méthodologie

Nous suivons la voie des pieux prédécesseurs (Salaf as-Salih). Cela signifie un enseignement clair, basé sur le Coran et la Sunnah authentique, sans innovations religieuses.

## Témoignages d'étudiants suisses

De nombreux étudiants en Suisse ont commencé débutants et lisent aujourd'hui le Coran avec tajwid. Le facteur clé : la régularité, pas le talent.

${CTA}`,
  },
  {
    slug: "comment-bien-prononcer-arabe-coran",
    title: "Comment bien prononcer l'arabe pour la récitation du Coran",
    description: "Conseils pour bien prononcer l'arabe lors de la récitation du Coran : lettres difficiles pour francophones, exercices, méthodes.",
    keywords: ["bien prononcer l'arabe", "prononciation Coran", "lettres difficiles arabe", "récitation Coran français"],
    category: "Tajwid",
    readingTime: 8,
    publishedAt: "2026-02-14",
    cover: teacherPortrait,
    excerpt: "Les francophones rencontrent des difficultés spécifiques avec certaines lettres arabes. Voici comment les surmonter méthodiquement.",
    content: `## Les lettres les plus difficiles pour un francophone

Certaines lettres arabes n'ont aucun équivalent en français :

- **ع (ayn)** : son guttural unique, très différent du *a* français
- **ح (ha)** : souffle profond du fond de la gorge
- **خ (kha)** : râpé du fond du palais (proche du *jota* espagnol)
- **ق (qaf)** : son profond émanant de la racine de la langue
- **ض (dhad)** : lettre emblématique, parfois appelée "la lettre du dhad"
- **ط، ص، ظ** : lettres emphatiques (mufakhama)

## Comment travailler ces lettres ?

1. **Écouter beaucoup** : récitateurs lents comme Hussary
2. **Imiter à voix haute** : sans honte, encore et encore
3. **Filmer sa bouche** au téléphone pour comparer la position
4. **Travailler avec un enseignant en direct** : c'est la seule manière de corriger durablement

## Les erreurs typiques des francophones

- Confondre *س* et *ص* (perte de l'emphase)
- Prononcer le *ر* comme un *r* français (rouler trop ou pas assez)
- Adoucir le *ع* en simple *a*
- Négliger le *ه* (souffle clair)

## Exercices pratiques

- Lisez 5 minutes par jour à voix haute, en exagérant chaque lettre
- Concentrez-vous sur 1 lettre par semaine jusqu'à la maîtrise
- Enregistrez-vous et comparez à un récitateur professionnel

${CTA}`,
  },
  {
    slug: "etudier-coran-en-travaillant",
    title: "Étudier le Coran tout en travaillant : organisation efficace",
    description: "Comment étudier le Coran en parallèle d'un emploi à temps plein ? Organisation, planning, conseils pour adultes actifs en France.",
    keywords: ["étudier Coran adulte", "Coran adulte France", "apprendre Coran travail", "étudier religion adulte"],
    category: "Apprentissage du Coran",
    readingTime: 8,
    publishedAt: "2026-02-17",
    cover: maleStudent,
    excerpt: "Vous travaillez 40 heures par semaine et pensez que c'est impossible d'étudier sérieusement la religion ? Voici la méthode des adultes qui réussissent.",
    content: `## Le mythe du "je n'ai pas le temps"

Si vous trouvez le temps de manger, de dormir et de regarder votre téléphone, vous trouverez le temps d'étudier le Coran. La vraie question n'est pas le temps, c'est la priorité.

## Construire un emploi du temps réaliste

L'erreur classique : vouloir étudier 2 heures par jour dès le départ. Au bout d'une semaine, vous abandonnez.

La méthode efficace :

- **Semaine 1-4** : 20 minutes par jour, 5 jours sur 7
- **Semaine 5-12** : 30 à 40 minutes par jour
- **Mois 4 et plus** : 1 heure par jour si possible

## Les meilleurs créneaux

- **Après Fajr** : esprit clair, pas d'interruptions
- **Pendant le trajet** (audio Coran)
- **Pause déjeuner** : 15 minutes de révision
- **Avant de dormir** : 10 minutes de lecture

## Les cours en ligne : la clé pour les adultes actifs

Avec 2 cours par semaine de 45 minutes en ligne sur Zoom, vous progressez réellement sans bouleverser votre vie professionnelle. Pas de transport, pas de logistique : vous ouvrez votre ordinateur, et vous étudiez.

## Garder la motivation sur le long terme

- Fixez un objectif clair à 3 mois (ex : terminer le juz 'amma)
- Suivez votre progression dans un carnet
- Récompensez-vous à chaque palier
- Étudiez avec un binôme

${CTA}`,
  },
  {
    slug: "fiqh-priere-bases-essentielles",
    title: "Fiqh de la prière : les bases essentielles à connaître",
    description: "Fiqh de la prière : conditions, piliers, obligations, annulatifs. Cours de jurisprudence inclus dans nos formations en ligne.",
    keywords: ["fiqh prière", "règles de la prière", "jurisprudence islamique", "fiqh français"],
    category: "Sciences religieuses",
    readingTime: 9,
    publishedAt: "2026-02-20",
    cover: maleTeacher,
    excerpt: "La prière est le pilier de la religion. Connaître ses règles est une obligation pour chaque musulman. Voici les bases incontournables.",
    content: `## L'importance du fiqh de la prière

La prière (salat) est le second pilier de l'islam. Le Prophète ﷺ a dit : *« La première chose pour laquelle le serviteur sera jugé le Jour de la Résurrection est la prière »* (Tirmidhi).

Connaître les règles de la prière n'est donc pas optionnel : c'est une obligation individuelle pour tout musulman pubère.

## Les conditions de validité de la prière

1. L'islam
2. La raison
3. L'âge de discernement
4. La purification (de la grande et petite impureté)
5. L'élimination des impuretés (du corps, du vêtement, du lieu)
6. La couverture des parties intimes
7. L'orientation vers la qibla
8. L'entrée du temps
9. L'intention

## Les piliers de la prière

14 piliers selon de nombreux savants, parmi lesquels :

- Se tenir debout (pour celui qui en est capable)
- Le takbir d'ouverture
- La récitation de la Fatiha
- L'inclinaison (rouku')
- La prosternation (soujoud)
- La position assise finale
- Le tashahhud
- Les salutations finales

## Les obligations (wajibat)

- Les autres takbir
- "Sami' Allahu liman hamidah"
- Le tashahhud intermédiaire
- Etc.

## Les annulatifs de la prière

- Parler intentionnellement
- Manger ou boire
- Tourner sa poitrine de la qibla sans excuse
- Rire (rire bruyamment)
- Toute action étrangère prolongée

## Inclus en bonus dans vos cours

À Daaru Al Qurane, le **fiqh** (jurisprudence), l'**aqida** (croyance), le **tafsir** (exégèse) et les sciences complémentaires sont inclus en bonus dans chaque parcours, sans coût supplémentaire. Vous étudiez la langue arabe ou le Coran, et vous bénéficiez en plus d'un véritable cursus religieux.

${CTA}`,
  },
  {
    slug: "aqida-pieux-predecesseurs-introduction",
    title: "L'aqida des pieux prédécesseurs : introduction simple",
    description: "Introduction à l'aqida (croyance) des pieux prédécesseurs : tawhid, sources, méthodologie. Cours en français en ligne.",
    keywords: ["aqida pieux prédécesseurs", "croyance islamique", "tawhid", "aqida sunnite"],
    category: "Sciences religieuses",
    readingTime: 9,
    publishedAt: "2026-02-23",
    cover: heroMixed,
    excerpt: "L'aqida (croyance) est la fondation de toute la religion. Découvrez la voie claire des pieux prédécesseurs, sans détours et sans innovations.",
    content: `## Qu'est-ce que l'aqida ?

L'**aqida** désigne la croyance, ce que le musulman tient pour vrai dans son cœur sans le moindre doute. Elle constitue la fondation sur laquelle repose toute la religion.

## Les trois catégories du tawhid

1. **Tawhid ar-Rububiyya** : l'unicité dans la seigneurie (Allah est le seul créateur, pourvoyeur, organisateur)
2. **Tawhid al-Uluhiyya** : l'unicité dans l'adoration (Allah seul mérite d'être adoré)
3. **Tawhid al-Asma' wa as-Sifat** : l'unicité dans les noms et attributs

## La méthodologie des pieux prédécesseurs

Les pieux prédécesseurs (Salaf as-Salih) sont les trois premières générations de l'islam : les Compagnons, leurs Successeurs, et les Successeurs de leurs Successeurs. Le Prophète ﷺ a dit : *« Les meilleurs des hommes sont ma génération, puis ceux qui viennent après eux, puis ceux qui viennent après eux »* (Boukhari).

Suivre leur voie, c'est :

- Comprendre le Coran et la Sunnah comme eux les ont compris
- Affirmer ce qu'ils ont affirmé et nier ce qu'ils ont nié
- S'éloigner des innovations religieuses (bid'a)
- Se désavouer des groupes hérétiques

## Les sources de l'aqida

L'aqida ne se fonde que sur le Coran et la Sunnah authentique, comprise selon la méthodologie des pieux prédécesseurs. Aucune raison philosophique ne peut prendre le pas sur un texte clair.

## Pourquoi l'étudier en priorité ?

Une mauvaise aqida invalide tous les actes. Étudier l'aqida correctement est donc plus important que d'étudier les détails du fiqh ou même la mémorisation, car elle conditionne la validité de toute la pratique religieuse.

## Les écueils à éviter

- L'extrémisme dans l'interprétation
- Le ta'wil rationaliste (interpréter les attributs d'Allah par la raison)
- Les groupes égarés (rejetés par les pieux prédécesseurs)
- L'ignorance prolongée alors qu'on peut apprendre

${CTA}`,
  },
  {
    slug: "sourates-courtes-a-memoriser-en-priorite",
    title: "Les sourates courtes à mémoriser en priorité (juz 'amma)",
    description: "Liste des sourates courtes essentielles à mémoriser pour la prière : juz 'amma, ordre conseillé, mérites. Pour adultes francophones.",
    keywords: ["sourates courtes mémoriser", "juz amma", "mémoriser pour la prière", "sourates Coran français"],
    category: "Mémorisation",
    readingTime: 7,
    publishedAt: "2026-02-26",
    cover: studentReading,
    excerpt: "Pour prier en variant ses récitations, mémoriser le juz 'amma est la priorité absolue. Voici l'ordre conseillé et les mérites de chaque sourate.",
    content: `## Pourquoi commencer par le juz 'amma ?

Le juz 'amma est le 30e et dernier juz du Coran. Il rassemble la plupart des sourates courtes que le Prophète ﷺ et les Compagnons récitaient fréquemment dans la prière. Pour un musulman débutant, c'est l'investissement le plus rentable.

## Ordre conseillé de mémorisation

1. **Al-Fatiha** (obligatoire dans chaque prière)
2. **An-Nas, Al-Falaq, Al-Ikhlas** (les trois protections)
3. **Al-Kafiroun**
4. **An-Nasr**
5. **Al-Masad, An-Nasr, Al-Kawthar, Al-Ma'oun, Quraysh, Al-Fil**
6. **Al-Humazah, Al-'Asr, At-Takathur**
7. Puis remontez progressivement vers le début du juz 'amma

## Mérites de quelques sourates

- **Al-Ikhlas** : équivaut au tiers du Coran (Boukhari)
- **Al-Mu'awwidhatayn (Al-Falaq + An-Nas)** : protection contre tout mal
- **Al-Kafiroun** : équivaut au quart du Coran selon une parole rapportée
- **Al-Mulk** : intercède pour son lecteur dans la tombe

## Méthode pratique

- Apprenez 1 sourate par semaine
- Récitez-la dans toutes vos prières surérogatoires
- Révisez quotidiennement les sourates précédemment mémorisées
- Faites valider chaque sourate par un enseignant

## Combien de temps pour le juz 'amma complet ?

À raison d'1 sourate par semaine : environ **9 mois**. À raison de 2 sourates par semaine : environ **5 mois**. Avec un bon accompagnement, ce délai peut être réduit.

${CTA}`,
  },
].map((p) => ({ ...p, content: AUTH_INTRO + p.content }));

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
