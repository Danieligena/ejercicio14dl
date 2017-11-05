$(document).ready(function(){
	$('#button_color').click(function(){
		$('body').css('background-color', $('#insert_color').val());
	});

		function calcIMC (weight, height){
			return weight / (height * height);
		};

		function interIMC (weight, height){
			var imc_data = calcIMC(weight, height);
		if (imc_data > 24){
		 		return "red";
		} else if (imc_data > 19 && imc_data <= 24) {
		 		return "green";
		} else {
		 		return "red";
		}
		};

	$('#button_imc').click(function(){
		var weight = $('#insert_weight').val();
		var height = $('#insert_height').val();
		var result = calcIMC(weight, height);
		var color = interIMC(weight, height);
		$('#button_imc').after('<p style="color: ' + color + ';">Your IMC is: ' + result + '</p>')
	});

	$('#button_iva').click(function(){
		var price = parseInt($('#insert_price').val());
		var iva = price + (price * 0.19);	
		$('#iva_value').val(iva);
	});

	/*$('#button_names').click(function(){
		var name = $('#insert_name').val();
		var lastName = $('#insert_lastname').val();
		$('#names_result').val(name + ' ' + lastName);
	})*/

	$('#insert_name').on('input', function(){
		var namelastname = $(this).val() + ' ' + $('#insert_lastname').val();
		$('#full_name').val(namelastname);
	});

	//Dar vuelta los valores de namelastname sino funciona raro

	$('#insert_lastname').on('input', function(){
		var namelastname =$('#insert_name').val() + ' ' + $(this).val();
		$('#full_name').val(namelastname);
	});
})