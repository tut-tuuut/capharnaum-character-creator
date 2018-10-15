jQuery(document).ready(function() {
	var perso = {
		sang : '',
		tribu : '',
		bonus_sang : {
		},
		bonus_parole : {
		},
		bonus_figure : {
		},
		bonus_etape_3 : {
		},
		bonus_etape_5 : {
		},
	}
	
	var arbo_sang = {
		'saabi' : {
			'libelle': "Clan",
			'valeurs': [
			{
				'cle': 'malik',
				'libelle': 'Ibn Malik Abd-al-Hassan',
				'bonus': [
				'coordination|puissance+1',
				'arme+1',
				'commander+1',
				'entrainer+1'
				]
			},
			{
				'cle': 'mussah',
				'libelle': 'Ibn Mussah Abd-al-Hassan',
				'bonus': [
				'charme+1',
				'npplf+1',
				'elegance+1',
				'flatter+1'
				]
			},
			{
				'cle': 'rachid',
				'libelle': 'Ibn Rachid Abd-al-Hassan',
				'bonus': [
				'souffle+1',
				'arme+1',
				'assassinat+1',
				'poesie+1'
				]
			},
			{
				'cle' : 'yucef',
				'libelle': 'Ibn Yucef Abd-al-Salif',
				'bonus': [
				'sagesse|charme+1',
				'flatter+1',
				'negoce+1',
				'periple+1'
				]
			},
			{
				'cle' : 'aziz',
				'libelle': 'Ibn Aziz Abd-al-Salif',
				'bonus': [
				'coordination+1',
				'arme+1',
				'detrousser+1',
				'negoce+1',
				]
			},
			{
				'cle' : 'khalil',
				'libelle': 'Ibn Khalil Abd-al-Salif',
				'bonus': [
				'souffle+1',
				'agriculture+1',
				'equitation+1',
				'periple+1'
				]
			},
			{
				'cle' : 'tufiq',
				'libelle' : 'Ibn Tufiq Abd-al-Tarek',
				'bonus' : [
				'puissance+1',
				'arme+1',
				'entrainer+1',
				'priere+1'
				]
			},
			{
				'cle' : 'mimoun',
				'libelle' : 'Ibn Mimoun Abd-al-Tarek',
				'bonus' : [
				'charme+1',
				'assassinat|verbe_sacre+1',
				'discretion+1',
				'flatter+1'
				]
			},
			{
				'cle' : 'mammud',
				'libelle' : 'Ibn Mammûd Abd-al-Tarek',
				'bonus' : [
				'coordination|charme+1',
				'periple+1',
				'priere+1',
				'verbe_sacre+1'
				]
			}
			]
		},
		'shiradi' : {
			'libelle': 'Tribu',
			'valeurs' : [
			{
				'cle' : 'ashkenim',
				'libelle' : 'Ashkenim',
				'bonus' : [
				'coordination|charme+1',
				'arme+1',
				'npplf+1',
				'elegance+1'
				]
			},
			{
				'cle' : 'pharatim',
				'libelle' : 'Pharatim',
				'bonus' : [
				'sagesse+1',
				'enseigner+1',
				'ppl_histoire+1',
				'science+1'
				]
			},
			{
				'cle' : 'salonim',
				'libelle' : 'Salonim',
				'bonus' : [
				'sagesse+1',
				'assassinat+1',
				'science+2'
				]
			}
			]
		},
		'agalantheen' : {
			'libelle': 'Cité',
			'valeurs' : [
			{
				'cle' : 'thereme',
				'libelle' : 'Thérème',
				'bonus' : [
				'coordination+1',
				'arme+1',
				'equitation+1',
				'elegance+1'
				]
			},
			{
				'cle' : 'fragrance',
				'libelle' : 'Fragrance',
				'bonus' : [
				'coordination|charme+1',
				'agriculture+1',
				'equitation+1',
				'elegance+1'
				]
			},
			{
				'cle' : 'etrusie',
				'libelle' : 'Étrusie',
				'bonus' : [
				'souffle|charme+1',
				'agriculture+1',
				'tenir_le_coup+1',
				'elegance+1'
				]
			}
			]
		},
		'escarte' : {
			'libelle' : 'Nation',
			'valeurs' : [
			{
				'cle' : 'aragon',
				'libelle' : 'Aragón',
				'bonus' : [
				'coordination|charme+1',
				'agriculture+1',
				'equitation+1',
				'elegance+1'
				]
			},
			{
				'cle' : 'occidentine',
				'libelle' : 'Occidentine',
				'bonus' : [
				'puissance|sagesse+1',
				'agriculture+1',
				'npplf+1',
				'elegance+1'
				]
			},
			{
				'cle' : 'dorkadie',
				'libelle' : 'Dorkadie',
				'bonus' : [
				'puissance|souffle+1',
				'arme+1',
				'epreuve+1',
				'periple+1'
				]
			}
			]
		}
	};

	var arbo_parole = [
	{
		cle: 'cimeterres_feu',
		libelle: 'Le Sentier de cimeterres de feu',
		sang: 'saabi',
		tribu: 'malik',
		bonus : [
		'coordination+1',
		'arme+1',
		'epreuve+1',
		'verbe_sacre+1'
		]
	},
	{
		cle: 'alchimie_hommes',
		libelle: "L'alchimie des hommes",
		sang: 'saabi',
		tribu: 'mussah',
		bonus : [
		'sagesse+1',
		'inspiration+1',
		'science+1',
		'verbe_sacre+1'
		]
	},
	{
		cle: 'soupcon_traitres',
		libelle: 'Le soupçon des traîtres',
		sang: 'saabi',
		tribu: 'rachid',
		bonus : [
		'sagesse+1',
		'assassinat+1',
		'discretion+1',
		'elegance+1'
		]
	},
	{
		cle: 'dunes_safran',
		libelle: 'Les dunes de Safran',
		sang: 'saabi',
		tribu: 'yucef',
		bonus : [
		'sagesse+1',
		'flatter+1',
		'negoce+1',
		'verbe_sacre+1'
		]
	},
	{
		cle: 'enfants_souk',
		libelle: 'Les enfants du souk',
		sang: 'saabi',
		tribu: 'aziz',
		bonus : [
		'charme+1',
		'detrousser+1',
		'discretion+1',
		's_introduire+1'
		]
	},
	{
		cle: 'walad_badiya',
		libelle: 'Les Walad Badiya',
		sang: 'saabi',
		tribu: 'khalil',
		bonus : [
		'coordination+1',
		'arme+1',
		'equitation+1',
		'contes+1'
		]
	},
	{
		cle: 'marcheurs_sang',
		libelle: 'Les Marcheurs aux semelles de sang',
		sang: 'saabi',
		tribu: 'tufiq',
		bonus : [
		'puissance+1',
		'arme+1',
		'impressionner+1',
		'priere+1'
		]
	},
	{
		cle: 'vierges_papier',
		libelle: 'Les filles aimées d’Agushaya',
		sang: 'saabi',
		tribu: 'mimoun',
		bonus : [
		'charme+1',
		'detrousser+1',
		'flatter+1',
		'comedie|poesie|musique+1'
		]
	},
	{
		cle: 'prieurs_sables',
		libelle: 'Les prieurs des sables',
		sang: 'saabi',
		tribu: 'mammud',
		bonus : [
		'sagesse+1',
		'epreuve+1',
		'periple+1',
		'priere+1'
		]
	},
	{
		cle: 'lions_rouges',
		libelle: 'Les Lions Rouges de Shirad',
		sang: 'shiradi',
		tribu: 'ashkenim',
		bonus : [
		'coordination+1',
		'arme+1',
		'entrainer+1',
		'priere+1'
		]
	},
	{
		cle: 'voix_celeste',
		libelle: 'La Voix céleste de Shirad',
		sang: 'shiradi',
		tribu: 'pharatim',
		bonus : [
		'charme+1',
		'enseigner+1',
		'verbe_sacre+1',
		'science|ppl_histoire+1'
		]
	},
	{
		cle: 'coeur_sacre_shirad',
		libelle: 'Le cœur sacré de Shirad',
		sang: 'shiradi',
		tribu: 'salonim',
		bonus : [
		'sagesse+1',
		'science+3'
		]
	},
	{
		cle: 'lune_de_sang',
		libelle: 'Les assassins de la Lune de Sang',
		sang: 'shiradi',
		tribu: 'salonim',
		bonus : [
		'sagesse+1',
		'science+2',
		'discretion+1'
		]
	},
	{
		cle: 'myrmidons_theremeens',
		libelle: 'L’Ordre des myrmidons théréméens',
		sang: 'agalantheen',
		tribu: 'thereme',
		bonus : [
		'coordination+1',
		'entrainer+2',
		'commander+1'
		]
	},
	{
		cle: 'auriges_fragrantins',
		libelle: 'Les Auriges fragrantins',
		sang: 'agalantheen',
		tribu: 'fragrance',
		bonus : [
		'coordination+1',
		'equitation+2',
		'flatter+1'
		]
	},
	{
		cle: 'bacchorantes_etrusiens',
		libelle: 'Les Bacchorantes étrusiens',
		sang: 'agalantheen',
		tribu: 'etrusie',
		bonus : [
		'souffle+1',
		'agriculture+1',
		'flatter+1',
		'sacrifice+1'
		]
	},
	{
		cle: 'duellistes',
		libelle: 'Les Duellistes de San Llorente de Valladòn',
		sang: 'escarte',
		tribu: 'aragon',
		bonus : [
		'coordination+1',
		'arme+1',
		'equitation+1',
		'agriculture+1'
		]
	},
	{
		cle: 'gerta_dragon',
		libelle: 'Sainte Gerta qui pourfendit le dragon',
		sang: 'escarte',
		tribu: 'dorkadie',
		bonus : [
		'puissance+1',
		'arme+1',
		'entrainer+1',
		'impressionner+1'
		]
	},
	{
		cle: 'temple_sagrada',
		libelle: 'Ordre du Temple de Sagrada',
		sang: 'escarte',
		tribu: 'occidentine',
		bonus : [
		'coordination+1',
		'arme+1',
		'priere+1',
		'verbe_sacre+1'
		]
	}

	];

	// caracs
	var keys_caracs = ['coordination', 'charme', 'puissance', 'souffle', 'sagesse'];
	var keys_comps = [
	'epreuve', 'equitation','contes','periple',
	'science','enseigner','ppl_histoire', 'percevoir',
	'npplf', 'elegance', 'flatter', 'negoce',
	'inspiration', 'priere', 'sacrifice', 'verbe_sacre',
	'arme', 'commander', 'entrainer', 'impressionner',
	'galvaniser', 'comedie', 'poesie', 'musique',
	'assassinat', 'detrousser', 'discretion', 's_introduire',
	'agriculture', 'artisanat', 'compagnonnage', 'tenir_le_coup',
	];
	var keys_figures = [
	'aventurer', 'sage', 'prince', 'sorcier',
	'guerrier', 'poete', 'malandrin', 'travailleur'
	];
	var keys_vertus = ['bravoure', 'foi', 'fidelite'];

	// views
	var v = {
		'libelle_tribu': $('#libelle_tribu')
	}

	// choix du sang en 2 temps : le sang puis le clan
	$('#sang').change(function() {
		var value = $(this).val();
		$('#tribu').html('');
		perso.sang = '';
		if (arbo_sang[value] != undefined) {
			perso.sang = value;
			var data_sang = arbo_sang[value];
			var tribus = [];
			tribus.push($('<option value="">– Sélectionner…</option>'));
			v.libelle_tribu.html(data_sang.libelle);
			for (var i = 0; i < data_sang.valeurs.length; i++) {
				var o = $('<option></option>');
				o.attr('value', data_sang.valeurs[i].cle);
				o.text(data_sang.valeurs[i].libelle);
				tribus.push(o);
			}
			$('#tribu').append(tribus).change();
		}
	});
	
	$('#tribu').change(function() {
		var value = $(this).val();
		perso.tribu = value;
		perso.bonus_sang = {};
		var sang_tribus = arbo_sang[perso.sang].valeurs;
		for (var i = 0; i < sang_tribus.length; i++) {
			var tribu = sang_tribus[i];
			if (tribu.cle === value) {
				var bonus = tribu.bonus;
				for (var j = 0; j < bonus.length; j++) {
					perso.applyBonus(bonus[j], 'bonus_sang');
				}
				perso.calculeTotaux();
				perso.synchroWithView();
				return;
			}
		}
	});

	// remplissage du select des paroles
	(function() {
		var i = 0;
		var elements = [];
		elements.push($('<option value="">– Sélectionner…</option>'));
		for (i = 0; i < arbo_parole.length; i++) {
			elements.push($('<option value="'+i+'">'+
				arbo_parole[i].libelle+
				' ('+arbo_parole[i].sang+' / '+arbo_parole[i].tribu+')'+
				'</option>'));
		}
		$('#parole').html('').append(elements);
	}());

	// gestion du choix des paroles
	$('#parole').change(function() {
		perso.bonus_parole = {};
		var parole_cle = parseInt($(this).val());
		if (arbo_parole[parole_cle] != undefined) {
			var parole = arbo_parole[parole_cle];
			perso.parole = parole_cle;
			for (var i = 0; i < parole.bonus.length; i++) {
				perso.applyBonus(parole.bonus[i], 'bonus_parole');
			}
		}
		perso.calculeTotaux();
		perso.synchroWithView();
	});

	// calcul de l'héroïsme
	$('#vertus_heroiques').on('change', 'input[type=number]', function() {
		var sum = 0, heroisme = 0;
		for (var i = 0; i < keys_vertus.length; i++) {
			var vertu = parseInt($('#'+keys_vertus[i]).val());
			sum += vertu;
		}
		heroisme = Math.floor(sum/keys_vertus.length);
		$('#heroisme').val(heroisme);
	});

	var controle_compte_vertus = function() {
		var vertus_inputs = [
			$('#bravoure'),
			$('#fidelite'),
			$('#foi')
		];
		var vertus_compteur = $('#vertus_points');
		var points_a_repartir = 10;
		return function () {
			sum = 0;
			for (var i = 0; i < vertus_inputs.length; i++) {
				sum += (vertus_inputs[i].val() | 0);
			}
			vertus_compteur.html(points_a_repartir - sum);
		}
	}();
	$('#vertus_heroiques').on('change', 'input[type=number]', controle_compte_vertus);

	// Gestion des figures
	$('#figures').sortable();
	var getBonusFromI = function(i) {
		if (i === 0) {
			return 3;
		}
		if (i === 1) {
			return 2;
		}
		if (i <= 4) {
			return 1;
		}
		return 0;
	}
	$('#figures').on('sortupdate', function() {
		var ids = $('#figures').sortable('toArray');
		perso.bonus_figure = {};
		for (var i = 0; i < ids.length; i++) {
			var fig_key = parseInt(ids[i].split('_')[1]);
			for (var j = 4*fig_key; j <= 4*fig_key+3; j++) {
				var bonus_str = keys_comps[j]+'+'+getBonusFromI(i);
				perso.applyBonus(bonus_str, 'bonus_figure');
			}
		}
		perso.calculeTotaux();
		perso.synchroWithView();
	});

	// répartition libre des caracs
	$('#caracteristiques').on('change', 'input[type=number]', function() {
		var key = this.id;
		var value = $(this).val();
		var bonus_caracs = perso.calculeBonus().caracs;
		var before = bonus_caracs[key] | 0;
		var bonus = value - before;

		if (bonus < 0) {
			perso.calculeTotaux();
			perso.synchroWithView();
			return;
		}
		perso.applyBonus(key+'+'+bonus, 'bonus_etape_3');

		perso.calculeTotaux();
		perso.synchroWithView();
	});

	// répartition libre des compétences
	$('#competences').on('change', 'input[type=number]', function() {
		var key = this.id;
		var value = $(this).val();
		var bonus_comps = perso.calculeBonus().comps;
		var before = bonus_comps[key] | 0;
		var bonus = value - before;
		if ((before < 6 && bonus < 0) || (value < 5 && before > 6)) {
			perso.calculeTotaux();
			perso.synchroWithView();
			return;
		}
		if (before > 5) {
			bonus = value - 5;
		}

		if (bonus > 1) {
			$(this).addClass('ko');
		} else if (bonus == 1) {
			$(this).addClass('ok');
			$(this).removeClass('ko');
		} else if (bonus == 0) {
			$(this).removeClass('ok').removeClass('ko');
		}
		perso.applyBonus(key+'+'+bonus, 'bonus_etape_5');

		perso.calculeTotaux();
		perso.synchroWithView();
	});

	// Calcule les PV, l'init max, la trempe et la défense passive
	var calculeLesTrucs = function() {
		var souffle = parseInt($('#souffle').val()) | 0;
		var coordination = parseInt($('#coordination').val()) | 0;
		var epreuve = parseInt($('#epreuve').val()) | 0;
		var sagesse = parseInt($('#sagesse').val()) | 0;
		var heroisme = parseInt($('#heroisme').val()) | 0;

		var pv = 10 * souffle;
		$('#pv').val(pv);

		var initmax = 1 + Math.floor((coordination + souffle + sagesse)/3);
		$('#init_max').val(initmax);

		var trempe = souffle + heroisme;
		$('#trempe').val(trempe);

		var defense_passive = coordination + epreuve + 6;
		$('#defense_passive').val(defense_passive);
	}

	// calcul des statistiques
	$('#caracteristiques').on('change', 'input[type=number]', calculeLesTrucs);

	perso.applyBonus = function(bonus_str, bonus_key, async) {
		var kv = bonus_str.split('+');
		var key = kv[0];
		var val = parseInt(kv[1]);

		if (key.split('|').length > 1) {
			// there is a choice to do.
			var choices = key.split('|');
			var popin = $('#lapopin');
			popin.html('');
			var el = $('<div></div>');
			el.append('<h2 class="choix">Que souhaitez-vous privilégier ?</h2>');
			for (var i = 0; i < choices.length; i++) {
				var button = $('<button class="button">'+choices[i]+'</button>');
				var new_bonus_str = choices[i]+'+'+val;
				button.click( function(i) {
					return function() {
						perso.applyBonus(i, bonus_key, true);
						popin.trigger('reveal:close');
					};
				}(new_bonus_str));
				el.append(button);
				if (i==0)
					el.append('<span>&nbsp;ou&nbsp;</span>');
			}
			popin.append(el);
			popin.reveal();
			return;
		}
		this[bonus_key][key] = val;
		if (async) {
			perso.calculeTotaux();
			perso.synchroWithView();
		}
	}

	// utilisé pendant les phases de répartition libres
	perso.calculeBonus = function() {
		var comps = {
			negoce: 1,
			inspiration: 1,
			priere: 1,
			tenir_le_coup: 1
		};
		// Points assignés d'office au début de l'étape 3
		var caracs = {
			coordination: 1,
			charme: 1,
			puissance: 1,
			souffle: 1,
			sagesse: 1
		};
		var bonus_keys = ['bonus_sang', 'bonus_parole', 'bonus_figure'];
		var bonus_type = '';
		for (var j = 0; j < bonus_keys.length; j++) {
			bonus_type = bonus_keys[j];
			for (var i = 0; i < keys_caracs.length; i++) {
				var key = keys_caracs[i];
				caracs[key] = caracs[key] || 0;
				if (this[bonus_type][key] != undefined) {
					caracs[key] = caracs[key] + this[bonus_type][key];
				}
			}
			for (i = 0; i < keys_comps.length; i++) {
				key = keys_comps[i];
				comps[key] = comps[key] || 0;
				if (this[bonus_type][key] != undefined) {
					comps[key] = comps[key] + this[bonus_type][key];
				}
			}
		}
		return {
			'comps': comps,
			'caracs': caracs
		}
	};

	perso.calculeTotaux = function() {
		// Points assignés d'office au début de l'étape 4
		var comps = {
			negoce: 1,
			inspiration: 1,
			priere: 1,
			tenir_le_coup: 1
		};
		// Points assignés d'office au début de l'étape 3
		var caracs = {
			coordination: 1,
			charme: 1,
			puissance: 1,
			souffle: 1,
			sagesse: 1
		};
		var bonus_keys = ['bonus_sang', 'bonus_parole', 'bonus_figure', 'bonus_etape_3', 'bonus_etape_5'];
		var bonus_type = '';
		var repartition_libre_competences = 5;
		for (var j = 0; j < bonus_keys.length; j++) {
			bonus_type = bonus_keys[j];
			for (var i = 0; i < keys_caracs.length; i++) {
				var key = keys_caracs[i];
				caracs[key] = caracs[key] || 0;
				if (this[bonus_type][key] != undefined) {
					caracs[key] = caracs[key] + this[bonus_type][key];
				}
			}
			for (i = 0; i < keys_comps.length; i++) {
				key = keys_comps[i];
				comps[key] = comps[key] || 0;
				if (this[bonus_type][key] != undefined) {
					comps[key] = comps[key] + this[bonus_type][key];
					if (bonus_type !== 'bonus_etape_5' && comps[key] > 5) {
						// Les points en trop sont à répartir librement par ailleurs.
						// On peut quand même dépasser un score de 5 à l'étape 5 (répartition libre)
						// pour gérer les cas particuliers (tirages heureux dans les tables, par exemple…).
						repartition_libre_competences += comps[key] - 5;
						comps[key] = 5;
					}
				}
			}
		}
		this.comps = comps;
		this.caracs = caracs;
		this.repartition_libre_competences = repartition_libre_competences;
		calculeLesTrucs();
	}

	perso.synchroWithView = function() {
		for (var i = 0; i < keys_caracs.length; i++) {
			var key = keys_caracs[i];
			$('#'+key).val(perso.caracs[key]);
		}
		for (i = 0; i < keys_comps.length; i++) {
			key = keys_comps[i];
			$('#'+key).val(perso.comps[key]);
		}

		var bonus_etape_3 = perso.bonus_etape_3;
		var sum = 0;
		for (val in bonus_etape_3) {
			sum += bonus_etape_3[val];
		}

		$('#points_carac').html(6 - sum);

		var bonus_etape_5 = perso.bonus_etape_5;
		var sum = 0;
		for (val in bonus_etape_5) {
			sum += bonus_etape_5[val];
		}
		$('#points_comp').html(perso.repartition_libre_competences - sum);

		calculeLesTrucs();
	}

	$('#sang').change();
	perso.calculeTotaux();
	perso.synchroWithView();

	window.perso = perso;
	
	$('input[type=number]').change(function() {
		if (isNaN($(this).val() / 1) == true) {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}
	});
});
