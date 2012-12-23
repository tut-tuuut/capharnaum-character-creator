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
		console.log(comps, caracs);
	}

	perso.synchroWithView = function() {

	}

	$('#sang').change();

	window.perso = perso;
});