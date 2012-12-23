jQuery(document).ready(function() {
	var perso = {
		sang : '',
		tribu : '',
		bonus_sang : {
			
		},
		bonus_parole : {

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
				'bonus': []
			},
			{
				'cle' : 'yucef',
				'libelle': 'Ibn Yucef Abd-al-Salif',
				'bonus': []
			},
			{
				'cle' : 'aziz',
				'libelle': 'Ibn Aziz Abd-al-Salif',
				'bonus': []
			},
			{
				'cle' : 'khalil',
				'libelle': 'Ibn Khalil Abd-al-Salif',
				'bonus': []
			},
			{
				'cle' : 'tufiq',
				'libelle' : 'Ibn Tufiq Abd-al-Tarek',
				'bonus' : []
			},
			{
				'cle' : 'mimoun',
				'libelle' : 'Ibn Mimoun Abd-al-Tarek',
				'bonus' : []
			},
			{
				'cle' : 'mammud',
				'libelle' : 'Ibn Mammûd Abd-al-Tarek',
				'bonus' : []
			}
			]
		},
		'shiradi' : {
			'libelle': 'Tribu',
			'valeurs' : [
			{
				'cle' : 'ashkenim',
				'libelle' : 'Ashkenim',
				'bonus' : []
			},
			{
				'cle' : 'pharatim',
				'libelle' : 'Pharatim',
				'bonus' : []
			},
			{
				'cle' : 'salonim',
				'libelle' : 'Salonim',
				'bonus' : []
			}
			]
		},
		'agalantheen' : {
			'libelle': 'Cité',
			'valeurs' : [
			{
				'cle' : 'thereme',
				'libelle' : 'Thérème',
				'bonus' : []
			},
			{
				'cle' : 'fragrance',
				'libelle' : 'Fragrance',
				'bonus' : []
			},
			{
				'cle' : 'etrusie',
				'libelle' : 'Étrusie',
				'bonus' : []
			}
			]
		},
		'escarte' : {
			'libelle' : 'Nation',
			'valeurs' : [
			{
				'cle' : 'aragon',
				'libelle' : 'Aragón',
				'bonus' : []
			},
			{
				'cle' : 'occidentine',
				'libelle' : 'Occidentine',
				'bonus' : []
			},
			{
				'cle' : 'dorkadie',
				'libelle' : 'Dorkadie',
				'bonus' : []
			}
			]
		}
	};

	// caracs
	var keys_caracs = ['coordination', 'charme', 'puissance', 'souffle', 'sagesse'];
	var keys_comps = [
		'epreuve', 'equitation','contes','periples',
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

	$('#sang').change(function() {
		var value = $(this).val();
		$('#tribu').html('');
		perso.sang = '';
		if (arbo_sang[value] != undefined) {
			perso.sang = value;
			var data_sang = arbo_sang[value];
			v.libelle_tribu.html(data_sang.libelle);
			for (var i = 0; i < data_sang.valeurs.length; i++) {
				var o = $('<option></option>');
				o.attr('value', data_sang.valeurs[i].cle);
				o.text(data_sang.valeurs[i].libelle);
				$('#tribu').append(o);
			}
			$('#tribu').change();
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
				return;
			}
		}
	});

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
			el.append('<h2>Choix à faire...</h2>');
			for (var i = 0; i < choices.length; i++) {
				var button = $('<button>'+choices[i]+'</button>');
				var new_bonus_str = choices[i]+'+'+val;
				button.click( function(i) {
					return function() {
						perso.applyBonus(i, bonus_key, true);
						popin.trigger('reveal:close');
					};
				}(new_bonus_str));
				el.append(button);
			}
			popin.append(el);
			popin.reveal();
			return;
		}
		this[bonus_key][key] = val;
		if (async) {
			perso.calculeTotaux();
		}
	}

	perso.calculeTotaux = function() {
		var comps = {};
		var caracs = {};
		var vertus = {};
		for (var i = 0; i < keys_caracs.length; i++) {
			var key = keys_caracs[i];
			caracs[key] = 0;
			if (this.bonus_sang[key] != undefined) {
				caracs[key] = caracs[key] + this.bonus_sang[key];
			}
		}
		for (var i = 0; i < keys_comps.length; i++) {
			var key = keys_comps[i];
			comps[key] = 0;
			if (this.bonus_sang[key] != undefined) {
				comps[key] = comps[key] + this.bonus_sang[key];
			}
		}
		console.log(caracs);
	}

	perso.synchroWithView = function() {

	}

	$('#sang').change();

	window.perso = perso;
});