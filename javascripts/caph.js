jQuery(document).ready(function() {
	var arbo_sang = {
		'saabi' : {
			'libelle': "Clan",
			'valeurs': [
				{
					'cle': 'malik',
					'libelle': 'Ibn Malik Abd-Al-Hassan',
					'bonus': [
						'coordination|puissance+1',
						'comp_armes+1',
						'comp_commander+1',
						'comp_entrainement+1'
					]
				},
				{
					'cle': 'mussah',
					'libelle': 'Ibn Mussah Abd-Al-Hassan',
					'bonus': [
						'charme+1',
						'comp_npplf+1',
						'comp_elegance+1',
						'comp_flatter+1'
					]
				}			
			]
		},
		'shiradi' : {
			'libelle': 'Tribu'
		},
		'agalantheen' : {
			'libelle': 'Cité-état'
		},
		'escarte' : {
			'libelle' : 'Nation'
		}
	};

	// views
	var v = {
		'libelle_tribu': $('#libelle_tribu')
	}

	$('#sang').change(function() {
		var value = $(this).val();
		if (arbo_sang[value] != undefined) {
			var data_sang = arbo_sang[value];
			console.log(data_sang);
			v.libelle_tribu.html(data_sang.libelle);
		}
	})
});