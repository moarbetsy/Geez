
import type { Order, Client, Product, Expense, LogEntry } from '../types';

export const initialClients: Client[] = [
  { id: 'c1', displayId: 1, name: 'Alain Basque', phone: '(438) 342-5879', notes: 'Juin 2025 Grindr. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c2', displayId: 2, name: 'Alex', etransfer: 'Johnny Karathanos', phone: '(514) 424-3810', address: '4892 Papineau', notes: 'Couple Plateau Beaucoup Mdma+Onz Veed+Viagra', orders: 0, totalSpent: 0 },
  { id: 'c3', displayId: 3, name: 'Amjad', etransfer: 'Amjad Bou Dargham', phone: '(438) 929-0408', notes: 'Rencontrer sauna janvier 2025. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c4', displayId: 4, name: 'Ben Bringer', etransfer: 'Benoit Bringer', phone: '(514) 497-6184', address: '1435 Cuvillier', notes: 'Livreur Voisin Mickey Mike', orders: 0, totalSpent: 0 },
  { id: 'c5', displayId: 5, name: 'Amar', etransfer: 'Amar Albane', phone: '(438) 820-5572', notes: 'Daddy Grindr', orders: 0, totalSpent: 0 },
  { id: 'c6', displayId: 6, name: 'Ashley Gauthier', phone: '(514) 972-6700', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c7', displayId: 7, name: 'Brandon Cutie Rs', etransfer: 'Brandon Doyon-Kemp', phone: '(514) 805-7523', notes: 'Dette 200$ Statut Inactif. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c8', displayId: 8, name: 'Bruno', etransfer: 'Emmanuel Bruno Libite', phone: '(514) 589-2990', notes: 'Fatiguant. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c9', displayId: 9, name: 'Camille Blanc Methot', etransfer: 'Camille Blanc Methot', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c10', displayId: 10, name: 'Charles-Etienne', etransfer: 'Charles Ferland', phone: '(438) 365-8319', notes: 'Dette 20$ Viagra. Status: Inactif', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c11', displayId: 11, name: 'Christopher Maclean', notes: 'Ami de Rassim (Dette 50$). Status: Inactif', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c12', displayId: 12, name: 'Ciavia', phone: '(450) 898-3928', notes: 'Client', orders: 0, totalSpent: 0 },
  { id: 'c13', displayId: 13, name: 'Claude Noel', etransfer: 'Claude Noel', phone: '(514) 835-2971', notes: 'Camping (Achat en gros)', orders: 0, totalSpent: 0 },
  { id: 'c14', displayId: 14, name: 'Client Dallas', phone: '(214) 985-8245', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c15', displayId: 15, name: 'Client Soumis', phone: '(438) 884-3566', notes: 'Supplement Arrêter Condo (Juin 2025). Status: Inactif', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c16', displayId: 16, name: 'Daniel', etransfer: 'Daniel Levesque', phone: '(438) 929-9712', notes: 'Ancien Coloc', orders: 0, totalSpent: 0 },
  { id: 'c17', displayId: 17, name: 'Dani', phone: '(514) 246-2672', notes: 'Daddy Sauna', orders: 0, totalSpent: 0 },
  { id: 'c18', displayId: 18, name: 'David FBI', phone: '(438) 834-4233', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c19', displayId: 19, name: 'Donald', etransfer: 'Donald Browne', phone: '(514) 265-6713', address: '2292 Cuvillier', orders: 0, totalSpent: 0 },
  { id: 'c20', displayId: 20, name: 'Eddie red bull', phone: '(438) 350-4478', notes: 'Speed et 1/2 blanc (Easygay)', orders: 0, totalSpent: 0 },
  { id: 'c21', displayId: 21, name: 'Edmundo', phone: '(514) 546-2017', notes: 'Ex de Philippe Rivard. Status: Inactif', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c22', displayId: 22, name: 'Eric Bernard', etransfer: 'Eric Benard', phone: '(514) 581-2465', notes: 'Leather Domtop', orders: 0, totalSpent: 0 },
  { id: 'c23', displayId: 23, name: 'Eric Deveau', phone: '(438) 370-3310', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c24', displayId: 24, name: 'Felipe', phone: '(438) 518-3829', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c25', displayId: 25, name: 'Ffbeaudry', phone: '(514) 727-2437', address: 'Village', orders: 0, totalSpent: 0 },
  { id: 'c26', displayId: 26, name: 'Francis Auger', etransfer: 'Francis Auger', phone: '(438) 887-8512', notes: 'Cousin Pingouin', orders: 0, totalSpent: 0 },
  { id: 'c27', displayId: 27, name: 'Francois Palmiee', etransfer: 'Francois Dussault', phone: '(514) 349-7916', address: 'Camping', notes: 'Camping achat en gros', orders: 0, totalSpent: 0 },
  { id: 'c28', displayId: 28, name: 'Frank', notes: 'Voleur menteur blacklisted. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c29', displayId: 29, name: 'Frankee Dee', etransfer: 'Francois Dagenais', phone: '(263) 382-9132', notes: '2g T 60$', orders: 0, totalSpent: 0 },
  { id: 'c30', displayId: 30, name: 'Gab Thibeault', etransfer: 'Gabryel Thibeault', phone: '(438) 408-7559', notes: 'Chum a Camille', orders: 0, totalSpent: 0 },
  { id: 'c31', displayId: 31, name: 'Gabriel Serrano', etransfer: 'Gabriel Serrano', phone: '(514) 299-8980', orders: 0, totalSpent: 0 },
  { id: 'c32', displayId: 32, name: 'Gerome', phone: '(514) 506-7593', notes: 'Francais', orders: 0, totalSpent: 0 },
  { id: 'c33', displayId: 33, name: 'Ghislain', etransfer: 'Ghislain Simard', phone: '(514) 452-1819', address: '2211 l’Esperance , apt 202', notes: 'Ghislain l', orders: 0, totalSpent: 0 },
  { id: 'c34', displayId: 34, name: 'GilBert Gizmo', etransfer: 'Gilbert', phone: '(438) 227-1152', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c35', displayId: 35, name: 'Greg', phone: '(514) 971-7191', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c36', displayId: 36, name: 'Guy', phone: '(514) 213-0731', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c37', displayId: 37, name: 'Guy Nurse', phone: '(438) 834-0605', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c38', displayId: 38, name: 'Hachim', etransfer: 'Hakim Belmihoub', notes: 'Lover Grindr', orders: 0, totalSpent: 0 },
  { id: 'c39', displayId: 39, name: 'Hugo Michael', phone: '(438) 765-4461', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c40', displayId: 40, name: 'Ian FrancoQueb', etransfer: 'Ian Oliveri', phone: '(438) 523-2992', orders: 0, totalSpent: 0 },
  { id: 'c41', displayId: 41, name: 'Jacques', phone: '(579) 369-1113', notes: 'Vendu kilo sauna daddy', orders: 0, totalSpent: 0 },
  { id: 'c42', displayId: 42, name: 'Jason', phone: '(514) 463-2841', notes: 'Exta cialis', orders: 0, totalSpent: 0 },
  { id: 'c43', displayId: 43, name: 'Jason Latino', phone: '(514) 430-4295', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c44', displayId: 44, name: 'Jason Niles', etransfer: 'Jason Niles', phone: '(250) 858-4574', orders: 0, totalSpent: 0 },
  { id: 'c45', displayId: 45, name: 'Jay Frontenac', phone: '(514) 928-7638', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c46', displayId: 46, name: 'Jean-Luc', phone: '(438) 495-8221', notes: 'Easygaychat', orders: 0, totalSpent: 0 },
  { id: 'c47', displayId: 47, name: 'Jean-Raphaël Aspirot', etransfer: 'Jean Raphael Aspirot', phone: '(418) 563-5298', orders: 0, totalSpent: 0 },
  { id: 'c48', displayId: 48, name: 'Jesse Coupons', etransfer: 'Jesse Powell', phone: '(438) 834-3548', orders: 0, totalSpent: 0 },
  { id: 'c49', displayId: 49, name: 'Jimmy-Me', phone: '(450) 944-7089', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c50', displayId: 50, name: 'Joe', phone: '(438) 528-5900', notes: 'Ami de Martin*', orders: 0, totalSpent: 0 },
  { id: 'c51', displayId: 51, name: 'John REX', notes: 'T-Rex', orders: 0, totalSpent: 0 },
  { id: 'c52', displayId: 52, name: 'John Macadams', etransfer: 'John Macadam', phone: '(514) 604-2009', orders: 0, totalSpent: 0 },
  { id: 'c53', displayId: 53, name: 'Jorge', phone: '(514) 291-7189', notes: 'Referer kevin Jorge top latino beef (Grindr)', orders: 0, totalSpent: 0 },
  { id: 'c54', displayId: 54, name: 'Joshua', phone: '(514) 224-5531', address: '4157 Mentana', notes: 'My Jew', orders: 0, totalSpent: 0 },
  { id: 'c55', displayId: 55, name: 'Juan Feler', etransfer: 'Juan Feler / Juan Feler Planas', phone: '(438) 459-4536', address: '4865 Partenais', orders: 0, totalSpent: 0 },
  { id: 'c56', displayId: 56, name: 'Kevin Duhaime', etransfer: 'Kevin Duhaime', phone: '(438) 829-9791', address: '2479 Logan', orders: 0, totalSpent: 0 },
  { id: 'c57', displayId: 57, name: 'Karim malki', etransfer: 'Karim Malki', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c58', displayId: 58, name: 'Kyle', phone: '(438) 529-5949', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c59', displayId: 59, name: 'Latino', phone: '(514) 836-6552', notes: 'Ami Jraf Latino (Piercing)', orders: 0, totalSpent: 0 },
  { id: 'c60', displayId: 60, name: 'Luis Fafard', etransfer: 'Luis Fafard', phone: '(438) 406-5847', address: '2893 Rouen', orders: 0, totalSpent: 0 },
  { id: 'c61', displayId: 61, name: 'Luc Girard', etransfer: 'Luc Girard', phone: '(438) 399-5826', address: '6950 boul. Des Roserais, Anjou', notes: 'Client 500$ Coke', orders: 0, totalSpent: 0 },
  { id: 'c62', displayId: 62, name: 'Lucas Linette', etransfer: 'Lucas John Lynette-Krechm', phone: '(438) 435-2667', notes: 'Muscle Hotstud (Referer de Kevin)', orders: 0, totalSpent: 0 },
  { id: 'c63', displayId: 63, name: 'Marc Asselin', phone: '(514) 464-0842', address: '3885 avenue Colons, Brossard', notes: 'Rive sud pozguy', orders: 0, totalSpent: 0 },
  { id: 'c64', displayId: 64, name: 'Marc Lauzon', etransfer: 'Marc Lauzon', phone: '(438) 882-5593', orders: 0, totalSpent: 0 },
  { id: 'c65', displayId: 65, name: 'Marco', phone: '(514) 996-8860', address: 'Rue Lasalle', notes: 'Dette 150$. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c66', displayId: 66, name: 'Marco Priape', phone: '(514) 616-2328', address: 'Rue Viau', orders: 0, totalSpent: 0 },
  { id: 'c67', displayId: 67, name: 'Marek', phone: '(416) 906-6773', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c68', displayId: 68, name: 'Martin *', phone: '(438) 988-1587', address: '5322 Partenais', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c69', displayId: 69, name: 'Marvel Junior', etransfer: 'Yves Racine', phone: '(514) 552-6937', address: 'Davidson / St-Catherine', orders: 0, totalSpent: 0 },
  { id: 'c70', displayId: 70, name: 'Maxime Lachance', etransfer: 'Maxime Lachance', phone: '(514) 574-7383', address: '1883 René-Lévesques', orders: 0, totalSpent: 0 },
  { id: 'c71', displayId: 71, name: 'Meedo Mohamed', phone: '(514) 999-5747', address: 'Pyramide Olympiques', notes: 'Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c72', displayId: 72, name: 'Michael Belec', phone: '(514) 233-4206', notes: 'Dette 1100$ Loyer + Drogues (Ancien Coloc)', orders: 0, totalSpent: 0 },
  { id: 'c73', displayId: 73, name: 'Momo', phone: '(438) 921-9195', notes: 'Ami de Meedo. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c74', displayId: 74, name: 'Nicholas Bougie', etransfer: 'Nicholas Bougie', phone: '(438) 879-0230', orders: 0, totalSpent: 0 },
  { id: 'c75', displayId: 75, name: 'Nicolas', etransfer: 'Nicholas Williams', phone: '(514) 779-8357', notes: 'Ami Donald', orders: 0, totalSpent: 0 },
  { id: 'c76', displayId: 76, name: 'NKP', etransfer: 'Francis Senecal', phone: '(514) 437-0401', notes: 'Indetect top électronique', orders: 0, totalSpent: 0 },
  { id: 'c77', displayId: 77, name: 'Omar Badawi', etransfer: 'Omar Badawi', phone: '(438) 365-7222', notes: 'Rue sussex', orders: 0, totalSpent: 0 },
  { id: 'c78', displayId: 78, name: 'Pat Voleur', phone: '(514) 249-6705', notes: 'Voleur 2 Onz Coke 2000$. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c79', displayId: 79, name: 'Patric Surprenant', phone: '(418) 313-4063', notes: 'Hotel (Meedo)', orders: 0, totalSpent: 0 },
  { id: 'c80', displayId: 80, name: 'Patrick de Varennes', phone: '(514) 702-4558', notes: 'Grindr Hookup', orders: 0, totalSpent: 0 },
  { id: 'c81', displayId: 81, name: 'Philippe Rivard', etransfer: 'André-Philippe Rivard', phone: '(873) 455-9117', notes: 'Ancien Coloc (1g = 30)', orders: 0, totalSpent: 0 },
  { id: 'c82', displayId: 82, name: 'Raphael', etransfer: 'Jimmy Andres Zea Loyola', phone: '(438) 812-4976', notes: 'Lover', orders: 0, totalSpent: 0 },
  { id: 'c83', displayId: 83, name: 'Rassim', phone: '(514) 882-9480', notes: 'Fucked up kinda. Status: Blacklist', inactive: true, orders: 0, totalSpent: 0 },
  { id: 'c84', displayId: 84, name: 'Remi racine', etransfer: 'Remi Racine', phone: '(514) 473-7399', orders: 0, totalSpent: 0 },
  { id: 'c85', displayId: 85, name: 'Richard Bolduc', phone: '(579) 373-2220', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c86', displayId: 86, name: 'Roberto', phone: '(416) 575-2970', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c87', displayId: 87, name: 'Said', etransfer: 'Said / Said Al Achkar', phone: '(514) 244-0114', notes: 'Hung Top (Baise pu, bon prix quand même)', orders: 0, totalSpent: 0 },
  { id: 'c88', displayId: 88, name: 'Sam Dupras', etransfer: 'Samuel Dupras', phone: '(289) 984-1337', orders: 0, totalSpent: 0 },
  { id: 'c89', displayId: 89, name: 'Samuel Bergeron', etransfer: 'Samuel Bergeron', phone: '(514) 207-8533', notes: 'Fatiguant', orders: 0, totalSpent: 0 },
  { id: 'c90', displayId: 90, name: 'Sébastien Fortin', phone: '(438) 799-4420', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c91', displayId: 91, name: 'Shean black', phone: '(514) 922-8819', notes: 'Dette 100$', orders: 0, totalSpent: 0 },
  { id: 'c92', displayId: 92, name: 'Shuja', etransfer: 'Muhammad Shujah Akhtar', phone: '(438) 465-7293', orders: 0, totalSpent: 0 },
  { id: 'c93', displayId: 93, name: 'Simon Kingston', etransfer: 'Simon Fortin Kingston', phone: '(514) 791-1785', notes: 'Dette 200$', orders: 0, totalSpent: 0 },
  { id: 'c94', displayId: 94, name: 'Stephan', etransfer: 'Stephan Labonte', phone: '(514) 778-3172', address: 'Rue Lasalle', notes: 'Peintre', orders: 0, totalSpent: 0 },
  { id: 'c95', displayId: 95, name: 'Tesdy MTL', phone: '(514) 608-5882', notes: 'Grindr', orders: 0, totalSpent: 0 },
  { id: 'c96', displayId: 96, name: 'Thierry Etienne Olga', phone: '(438) 765-9326', notes: '', orders: 0, totalSpent: 0 },
  { id: 'c97', displayId: 97, name: 'Voisin Dimitry', etransfer: 'Dimitri Nana Cote', phone: '(438) 491-9625', orders: 0, totalSpent: 0 },
  { id: 'c98', displayId: 98, name: 'Waleed', phone: '(514) 213-6957', notes: 'App Builder', orders: 0, totalSpent: 0 },
  { id: 'c99', displayId: 99, name: 'waleed Hakim', etransfer: 'Waleed Hakim', phone: '(613) 255-1026', orders: 0, totalSpent: 0 },
  { id: 'c100', displayId: 100, name: 'Xavier POS', etransfer: 'Xavier Parent Belec', phone: '(514) 444-4405', notes: 'Poz Admin SLM', orders: 0, totalSpent: 0 },
  { id: 'c101', displayId: 101, name: 'Cheick', phone: '(514) 709-2607', notes: 'Black dom Préfontaine group', orders: 0, totalSpent: 0 },
  { id: 'c102', displayId: 102, name: '?', phone: '(514) 756-0831', address: '1821 Tupper', notes: '10 via Noir (EasyGayChat)', orders: 0, totalSpent: 0 },
];

export const initialProducts: Product[] = [
  {
    id: 'p1', name: 'Tina', type: 'g', stock: 457, costPerUnit: 6, increment: 0.5,
    tiers: [
      { sizeLabel: '1g', quantity: 1, price: 40 }, { sizeLabel: '2g', quantity: 2, price: 60 },
      { sizeLabel: '3.5g', quantity: 3.5, price: 130 }, { sizeLabel: '7g', quantity: 7, price: 200 },
      { sizeLabel: '14g', quantity: 14, price: 300 }, { sizeLabel: '28g', quantity: 28, price: 450 },
      { sizeLabel: '100g', quantity: 100, price: 1800 }, { sizeLabel: '500g', quantity: 500, price: 4900 },
      { sizeLabel: '1000g', quantity: 1000, price: 8000 },
    ]
  },
  {
    id: 'p2', name: 'Tina Premium', type: 'g', stock: 0, costPerUnit: 6, increment: 0.5,
    tiers: [
      { sizeLabel: '1g', quantity: 1, price: 40 }, { sizeLabel: '2g', quantity: 2, price: 70 },
      { sizeLabel: '3.5g', quantity: 3.5, price: 150 }, { sizeLabel: '7g', quantity: 7, price: 250 },
      { sizeLabel: '14g', quantity: 14, price: 400 }, { sizeLabel: '28g', quantity: 28, price: 600 },
      { sizeLabel: '100g', quantity: 100, price: 1100 }, { sizeLabel: '500g', quantity: 500, price: 7000 },
      { sizeLabel: '1000g', quantity: 1000, price: 12000 },
    ]
  },
  {
    id: 'p3', name: 'G', type: 'ml', stock: 1014, costPerUnit: 2, increment: 1,
    tiers: [
      { sizeLabel: '5ml', quantity: 5, price: 10 }, { sizeLabel: '10ml', quantity: 10, price: 40 },
      { sizeLabel: '60ml', quantity: 60, price: 100 }, { sizeLabel: '100ml', quantity: 100, price: 180 },
      { sizeLabel: '1000ml', quantity: 1000, price: 1200 },
    ]
  },
  { id: 'p4', name: 'Viagra Blue (100mg)', type: 'unit', stock: 0, costPerUnit: 2, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 6 }] },
  { id: 'p5', name: 'Viagra Purple (100mg)', type: 'unit', stock: 0, costPerUnit: 2, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 8 }] },
  { id: 'p6', name: 'Viagra Red (150mg)', type: 'unit', stock: 0, costPerUnit: 2, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 10 }] },
  { id: 'p7', name: 'Viagra Black (200mg)', type: 'unit', stock: 130, costPerUnit: 3, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 10 }] },
  { id: 'p8', name: 'Viagra Levitra (60mg)', type: 'unit', stock: 0, costPerUnit: 3, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 12 }] },
  { id: 'p9', name: 'Viagra Karma Jelly (100mg)', type: 'unit', stock: 0, costPerUnit: 3, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 10 }] },
  { id: 'p10', name: 'Cialis (20mg)', type: 'unit', stock: 0, costPerUnit: 3, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 8 }] },
  { id: 'p11', name: 'Cialis (60mg)', type: 'unit', stock: 0, costPerUnit: 3, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 10 }] },
  { id: 'p12', name: 'Cialis (80mg)', type: 'unit', stock: 0, costPerUnit: 3, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 12 }] },
  {
    id: 'p13', name: 'Speed', type: 'unit', stock: 120, costPerUnit: 1, increment: 1,
    tiers: [
      { sizeLabel: '1 unit', quantity: 1, price: 3 }, { sizeLabel: '2 units', quantity: 2, price: 5 },
      { sizeLabel: '10 units', quantity: 10, price: 12 }, { sizeLabel: '100 units', quantity: 100, price: 200 },
    ]
  },
  {
    id: 'p14', name: 'Ecstasy', type: 'unit', stock: 730, costPerUnit: 2, increment: 1,
    tiers: [
      { sizeLabel: '1 unit', quantity: 1, price: 8 }, { sizeLabel: '2 units', quantity: 2, price: 15 },
      { sizeLabel: '100 units', quantity: 100, price: 400 },
    ]
  },
  { id: 'p15', name: 'MD (unit)', type: 'unit', stock: 700, costPerUnit: 4, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 8 }] },
  { id: 'p16', name: 'MD (g)', type: 'g', stock: 21.5, costPerUnit: 15, increment: 1, tiers: [{ sizeLabel: '1g', quantity: 1, price: 70 }] },
  {
    id: 'p17', name: 'Weed', type: 'g', stock: 322, costPerUnit: 3, increment: 0.5,
    tiers: [
      { sizeLabel: '0.5g', quantity: 0.5, price: 5 }, { sizeLabel: '3.5g', quantity: 3.5, price: 20 },
      { sizeLabel: '28g', quantity: 28, price: 90 },
    ]
  },
  {
    id: 'p18', name: 'Hash', type: 'g', stock: 17, costPerUnit: 3, increment: 0.5,
    tiers: [{ sizeLabel: '1g', quantity: 1, price: 10 }]
  },
  {
    id: 'p19', name: 'Ket', type: 'g', stock: 296, costPerUnit: 20, increment: 0.33,
    tiers: [
      { sizeLabel: '0.33g', quantity: 0.33, price: 40 }, { sizeLabel: '1g', quantity: 1, price: 90 },
      { sizeLabel: '28g', quantity: 28, price: 750 },
    ]
  },
  {
    id: 'p20', name: 'Coco', type: 'g', stock: 112, costPerUnit: 50, increment: 0.25,
    tiers: [
      { sizeLabel: '0.25g', quantity: 0.25, price: 25 }, { sizeLabel: '0.5g', quantity: 0.5, price: 50 },
      { sizeLabel: '1g', quantity: 1, price: 100 }, { sizeLabel: '2g', quantity: 2, price: 180 },
      { sizeLabel: '3.5g', quantity: 3.5, price: 280 }, { sizeLabel: '7g', quantity: 7, price: 560 },
      { sizeLabel: '14g', quantity: 14, price: 800 }, { sizeLabel: '28g', quantity: 28, price: 1200 },
    ]
  },
  {
    id: 'p21', name: 'Shrooms', type: 'g', stock: 2, costPerUnit: 5, increment: 0.5,
    tiers: [
      { sizeLabel: '1g', quantity: 1, price: 10 }, { sizeLabel: '3.5g', quantity: 3.5, price: 25 },
      { sizeLabel: '28g', quantity: 28, price: 150 },
    ]
  },
  { id: 'p22', name: 'Poppers (30ml)', type: 'unit', stock: 9, costPerUnit: 25, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 55 }] },
  { id: 'p23', name: 'Poppers (60ml)', type: 'unit', stock: 2, costPerUnit: 35, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 75 }] },
  { id: 'p24', name: 'Glass Pipe', type: 'unit', stock: 2, costPerUnit: 2, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 5 }] },
  { id: 'p25', name: 'Lighter', type: 'unit', stock: 7, costPerUnit: 4, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 10 }] },
  { id: 'p26', name: 'Bong', type: 'unit', stock: 3, costPerUnit: 20, increment: 1, tiers: [{ sizeLabel: '1 unit', quantity: 1, price: 30 }] },
];


export const initialOrders: Order[] = [];

export const initialExpenses: Expense[] = [];

export const initialLogs: LogEntry[] = [
    { id: 'l1', timestamp: new Date().toISOString(), user: 'System', action: 'Initialized Dashboard', details: { version: '1.1.0' } },
];
