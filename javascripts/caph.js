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
				'comp_armes+1',
				'comp_commander+1',
				'comp_entrainement+1'
				]
			},
			{
				'cle': 'mussah',
				'libelle': 'Ibn Mussah Abd-al-Hassan',
				'bonus': [
				'charme+1',
				'comp_npplf+1',
				'comp_elegance+1',
				'comp_flatter+1'
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

	perso.applyBonus = function(bonus_str, bonus_key) {
		var kv = bonus_str.split('+');
		var key = kv[0];
		var val = parseInt(kv[1]);
		this[bonus_key][key] = val;
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
	}

	perso.synchroWithView = function() {

	}

	$('#sang').change();

	window.perso = perso;
});