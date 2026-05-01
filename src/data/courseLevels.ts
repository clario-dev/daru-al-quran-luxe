import coranN1 from "@/assets/courses/coran-niveau-1.png";
import coranN2 from "@/assets/courses/coran-niveau-2.png";
import coranN3 from "@/assets/courses/coran-niveau-3.png";
import coranN4 from "@/assets/courses/coran-niveau-4.png";
import arabeNouroniya from "@/assets/courses/arabe-nouroniya.png";
import arabeMedine1 from "@/assets/courses/arabe-medine-1.png";
import arabeMedine23 from "@/assets/courses/arabe-medine-2-3.png";
import arabeMedine4 from "@/assets/courses/arabe-medine-4.png";
import arabeAjrumiyya from "@/assets/courses/arabe-ajrumiyya.png";

export const CHARIOW_URL = "https://daaralquran.mychariow.shop/prd_ijq3ih/checkout";

export type Level = {
  level: string;
  title: string;
  image: string;
  objectives: string[];
  content?: string[];
  rhythm: string;
  priceSolo: string;
  priceGroup?: string;
  bonusAqida: string;
  bonusFiqh: string;
  highlight?: string;
};

export const coranLevels: Level[] = [
  {
    level: "Niveau 1",
    title: "Initiation au Coran & Tajwid de base",
    image: coranN1,
    objectives: [
      "Apprentissage des petites sourates (Juz 'Amma)",
      "Lecture fluide avec les règles de base du tajwid (makharij, ghunna, idgham…)",
      "Apprentissage des invocations coraniques (du'a)",
    ],
    content: [
      "Juz 30 (An-Naba' à An-Nas)",
      "Lecture syllabique + correction de la prononciation",
      "Tajwid simplifié avec pratique",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "5 €/h",
    priceGroup: "4 €/h",
    bonusAqida: "Bases de la foi musulmane",
    bonusFiqh: "Purification et prière",
  },
  {
    level: "Niveau 2",
    title: "Perfectionnement de la récitation & mémorisation",
    image: coranN2,
    objectives: [
      "Récitation fluide avec règles intermédiaires du tajwid",
      "Mémorisation du Juz Tabarak (Juz 29)",
      "Introduction à la méditation (Tadabbur)",
    ],
    content: [
      "Juz 29 + sélection de sourates du Juz 28",
      "Application des règles de prolongation et de Waqf",
      "Révision régulière & test de rétention",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "6 €/h",
    priceGroup: "5 €/h",
    bonusAqida: "Les noms et attributs d'Allah",
    bonusFiqh: "Les piliers de la prière et du jeûne",
  },
  {
    level: "Niveau 3",
    title: "Hifdh avancé & Tajwid approfondi",
    image: coranN3,
    objectives: [
      "Mémorisation structurée jusqu'à 15 hizb",
      "Tajwid avancé (ikhfa shafawi, qalqala, waqf wa ibtida')",
      "Contrôle de la voix, du rythme et du souffle",
    ],
    content: [
      "Sourates choisies jusqu'à la moitié du Coran (Juz 1 à 15 sélectionnés)",
      "Cours de perfectionnement en psalmodie (tarteel)",
      "Coaching personnel + feuille de progression",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "7 €/h",
    priceGroup: "6 €/h",
    bonusAqida: "Les piliers de la foi en profondeur",
    bonusFiqh: "Purification, prière, jeûne, zakât (intermédiaire)",
  },
  {
    level: "Niveau 4",
    title: "Hifdh complet & Préparation à l'Ijazah",
    image: coranN4,
    objectives: [
      "Mémorisation des 60 Hizb (Coran entier)",
      "Application rigoureuse du tajwid",
      "Révisions structurées pour consolider la mémoire",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "8 €/h",
    priceGroup: "7 €/h",
    bonusAqida: "Textes des savants anciens",
    bonusFiqh: "Introduction au fiqh comparé (madhâhib)",
  },
  {
    level: "Niveau 5",
    title: "Licence & Transmission (Ijazah Hafs)",
    image: coranN4,
    objectives: [
      "Validation de la lecture intégrale avec un professeur qualifié",
      "Récitation selon Hafs 'an 'Asim avec isnad (chaîne de transmission)",
      "Début de la transmission en tant qu'enseignant",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "8 €/h",
    bonusAqida: "Méthodologie des salafs",
    bonusFiqh: "Analyse d'avis divergents entre écoles",
    highlight: "Ijaza Hafs",
  },
];

export const arabeLevels: Level[] = [
  {
    level: "Niveau 1",
    title: "Initiation — Méthode Nouroniya",
    image: arabeNouroniya,
    objectives: [
      "Apprentissage des bases : lecture, écriture, compréhension orale",
      "Méthode Nouroniya simple et adaptée aux débutants",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "5 €/h",
    priceGroup: "4 €/h",
    bonusAqida: "Qui est Allah ? Les 6 piliers de la foi",
    bonusFiqh: "Purification, prière, ablutions et invocations",
  },
  {
    level: "Niveau 2",
    title: "Tome 1 de Médine",
    image: arabeMedine1,
    objectives: [
      "Premiers dialogues et phrases simples",
      "Acquisition de vocabulaire et grammaire de base",
      "Lecture et compréhension de petits textes",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "5,83 €/h",
    priceGroup: "4,58 €/h",
    bonusAqida: "La croyance au Tawhid et aux prophètes",
    bonusFiqh: "La prière complète (conditions, piliers, erreurs)",
  },
  {
    level: "Niveau 3",
    title: "Tome 2 de Médine",
    image: arabeMedine23,
    objectives: [
      "Dialogue structuré, conjugaison des verbes simples",
      "Construction de phrases complètes",
      "Initiation à la compréhension orale",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "6,66 €/h",
    priceGroup: "5 €/h",
    bonusAqida: "Les Noms et Attributs d'Allah (Asma wa Sifat)",
    bonusFiqh: "Les adorations — jeûne, zakat, purification avancée",
  },
  {
    level: "Niveau 4",
    title: "Tome 3 de Médine",
    image: arabeMedine23,
    objectives: [
      "Textes plus longs, introduction à la grammaire intermédiaire",
      "Analyse de phrases et règles grammaticales complexes",
      "Début de rédaction",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "7,50 €/h",
    priceGroup: "5,42 €/h",
    bonusAqida: "Doute et innovation — méthodologie des salafs",
    bonusFiqh: "Le commerce, les transactions licites et illicites",
  },
  {
    level: "Niveau 5",
    title: "Tome 4 de Médine",
    image: arabeMedine4,
    objectives: [
      "Lecture fluide, expression claire, maîtrise des structures grammaticales",
      "Révision complète des bases avec perfectionnement à l'oral et à l'écrit",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "8,33 €/h",
    priceGroup: "5,83 €/h",
    bonusAqida: "Croyances liées à la fin des temps (barzakh, résurrection…)",
    bonusFiqh: "Fiqh familial — mariage, divorce, droits conjugaux",
  },
  {
    level: "Niveau 6",
    title: "Grammaire Avancée — Ajrumiyya ou Nahw Al-Wadih",
    image: arabeAjrumiyya,
    objectives: [
      "L'apprenant a le choix entre les deux ouvrages",
      "Analyse grammaticale détaillée",
      "Lecture critique des textes et compréhension profonde du Nahw",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "9,16 €/h",
    priceGroup: "6,66 €/h",
    bonusAqida: "Étude de Matn Tahaouiya ou Wasitiyya",
    bonusFiqh: "Introduction à Usul Al-Fiqh (fondements du droit islamique)",
  },
  {
    level: "Niveau 7",
    title: "Rhétorique & Poésie (Balagha)",
    image: arabeAjrumiyya,
    objectives: [
      "Analyse stylistique des textes coraniques, hadiths et poèmes",
      "Rédaction poétique, éloquence orale",
      "Maîtrise des figures de style (majaz, tashbih, isti'ara…)",
    ],
    content: [
      "Conditions d'accès : avoir complété les niveaux 1 à 6",
      "Être capable de s'exprimer avec aisance à l'oral comme à l'écrit",
      "Présenter un test de niveau ou une évaluation pédagogique",
    ],
    rhythm: "Programme intensif réservé aux avancés",
    priceSolo: "10,83 €/h",
    priceGroup: "7,50 €/h",
    bonusAqida: "Approfondissement des textes classiques",
    bonusFiqh: "Étude comparative des écoles juridiques (Madhahib)",
    highlight: "Niveau d'excellence",
  },
];
