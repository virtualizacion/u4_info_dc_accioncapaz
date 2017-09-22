var SEC2A = false;
var SEC2B = false;
var SEC2C = false;

var secAT2 = false;
var secBT2 = false;
var secCT2 = false;


$("document").ready(function(){
    $("#SEC02, #SEC03, #SEC04, #SEC05, #SEC06").hide();

    $("#BT-START").click(function(){
        $("#START").fadeOut();
    });
    
    $("#PDF1, #T2-IC01, #T2-IC02, #T2-IC03, #PDF2, #URL01, #URL02, #AC2PDF2, #T3-BT1, #T3-BT2").click(function(){
        $(this).css("opacity", ".5");
        $(this).removeClass("animated");
    });
    
    $("#PDF1").click(function(){
        $("#SEC02").fadeIn(3000);
    });
    
    ///Tema 1 (Sección 2)
    
    $("#AC01-T1").click(function(){
        SEC2A = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C);
    });
    $("#AC02-T1").click(function(){
        SEC2B = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C);
    });
    $("#AC03-T1").click(function(){
        SEC2C = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C);
    });
    
    /// FIN Tema 1 (Sección 2)
    
	/// Tema 2 (Sección 3)

    $("#T2-IC01, #T2-IC02, #T2-IC03, #C1-IC, #C2-IC, #C3-IC, #T2-T3, #T2-T4, #T2-T5, #LINKS").hide();
    
	$("#T2-IC01").click(function(){
		$("#C1-IC").fadeIn();
		secAT2 = true;
        sec3A(secAT2,secBT2,secCT2);
	});
	$("#T2-IC02").click(function(){
		$("#C2-IC").fadeIn();
		secBT2 = true;
        sec3A(secAT2,secBT2,secCT2);
	});
	$("#T2-IC03").click(function(){
		$("#C3-IC").fadeIn();
		secCT2 = true;
        sec3A(secAT2,secBT2,secCT2);
	});
	$("#PDF2").click(function(){
		$("#T2-T5").delay(2000).fadeIn(function(){
			$("#LINKS").delay(3000).fadeIn();
		});
	});
	
	$("#URL01").click(function(){
		SEC3A = true;
        pasarSEC4(SEC3A,SEC3B);
	});
	$("#URL02").click(function(){
		SEC3B = true;
        pasarSEC4(SEC3A,SEC3B);
	});
    
	/// Actividad 2 (Sección 4)
	
	$("#AC2PDF2").click(function(){
		$("#SEC05").fadeIn(3000);
	});
	
	/// Tema 2 (Sección 5)
	
	$("#T3-BT1").click(function(){
		SEC5A = true;
        pasarSEC6(SEC5A,SEC5B);
	});
	$("#T3-BT2").click(function(){
		SEC5B = true;
        pasarSEC6(SEC5A,SEC5B);
	});
	
});

function pasarSEC3(SEC2A,SEC2B,SEC2C){
    if(SEC2A && SEC2B && SEC2C){
        $("#SEC03").fadeIn(3000, function(){
			$("#T2-IC01").delay(1000).fadeIn(function(){
				$("#T2-IC02").delay(1000).fadeIn(function(){
					$("#T2-IC03").delay(1000).fadeIn();
				});
			});
		});
    }      
}

function sec3A(secAT2,secBT2,secCT2){
	if(secAT2 && secBT2 && secCT2){
		$("#T2-T3").delay(1000).fadeIn(2000, function(){
			$("#T2-T4").delay(1000).fadeIn(2000);
		});
	};
}

function pasarSEC4(SEC3A,SEC3B){
    if(SEC3A && SEC3B){
        $("#SEC04").fadeIn(3000);
    }      
}

function pasarSEC6(SEC5A,SEC5B){
    if(SEC5A && SEC5B){
        $("#SEC06").fadeIn(3000);
    }      
}

