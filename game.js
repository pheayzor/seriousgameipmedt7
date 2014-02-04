var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var canvasX = canvasBg.width / 2;
var canvasY = canvasBg.height - 50;

var startSchermButton = new Button(180, 600, 130, 500); // startknop om het spel te starten
var helpButton = new Button(485, 505, 510, 540); // startknop om het spel te starten
var telefoonButton = new Button(260, 350, 200, 250); // telefoon button
var telefoonTerugButton = new Button(325, 370, 100, 130); // telefoon exit button
var telefoonThuisButton = new Button(370, 520, 190, 250); // telefoon thuis button
var antwoordApparaatBaasButton = new Button(380, 520, 120, 170);
var kluisButton = new Button(738, 800, 390, 471); // kluis button
var kantineKindButton = new Button(210, 480, 5, 200);
var fotoRemcoButton = new Button(370, 450, 320, 401);
var tekstBallonButtonRechtsKantoorSpeler = new Button(425, 690, 0, 195); // rechter wolkje kantoor speler
var tekstBallonButtonLinksKantoorSpeler = new Button(1, 315, 0, 195); // linker wolkje kantoor speler
var tekstBallonButtonRechtsKantoorBaas1 = new Button(200, 465, 230, 420); // rechter wolkje kantoor baas
var tekstBallonButtonLinksKantoorBaas1 = new Button(135, 395, 240, 428); // linker wolkje kantoor baas
var tekstBallonButtonRechtsKantoorSpelerBadEnding1 = new Button(450,710,20,210); // speler wolkje laatste kantoor
var tekstBallonButtonRechtsKantoorSpelerBadEnding2 = new Button(450,710,20,210); // speler wolkje laatste kantoor
var tekstBallonButtonRechtsKantoorSpelerGoodEnding1 = new Button(450,710,20,210);
var tekstBallonButtonLinksKantoorSpelerGoodEnding1 = new Button(160, 420, 30, 230);
var tekstBallonButtonRechtsKantoorBaasBadEnding1 = new Button(160, 420, 30, 230); // baas wolkje laatste kantoor
var tekstBallonButtonRechtsKantoorBaasBadEnding2 = new Button(160, 420, 30, 230); // baas wolkje laatste kantoor
var badEndingButton = new Button(450,710,20,210);
var tekstBallonButtonLinksKind = new Button(160, 420, 30, 230);	// kind wolkje laatste kantoor
var deurKnopButtonKantoorSpelerIntern = new Button(86, 98, 155, 171); // deurknop kantoor speler intern
var deurKnopButtonKantoorBaasIntern = new Button(712, 724, 190, 205); // deurknop kantoor baas intern
var deurKnopButtonKantoorBaasExtern = new Button(120, 135, 300, 320); // deurknop kantoor baas extern
var deurKnopButtonKantineExtern = new Button(430, 445, 300, 320); // deurknop kantine extern
var deurKnopButtonKantineIntern = new Button(135, 155, 240, 255); // deurknop kantine extern
var deurKnopButtonKantoorSpelerExtern = new Button(745, 760, 300, 320); // deurknop kantoor speler extern
var speler1 = document.getElementById('speler1'); // variabele voor de speler
var kind1; // variabele voor de dochter
var baas1; // variabele voor de baas
var telefoon1; // variabele voor de telefoon


var beginGeluid; // Sound Efx
var soundEfx2; // Sound Efx2
var achtergrondMuziek; // Sound Efx3
var commentator1; // Sound Efx4
var eindBoem; // Sound Efx4
var kluisComment; // Sound kluis
var applausGeluid; // Sound applaus
var antwoordApparaatBaasGeluid;
var voicemailRemcoMeisner;
var remcoBenieuwdNaarVolgendeUitslagen;
var remcoJeBentOntslagen;
var remcoRapportCheckVerward;
var remcoPromotieFinancieelManager;
var remcoNaarKantoorKomen;
var introductieHenk;
var lunch;
var lieflunchmee;
var teruginkantoorbellen;
var remcobeltnaarkantoorkomen;
var goedendagwaarmeehelpen;
var geweldigverderrapport;
var documentkwijt;
var spoorloosverdwenen;
var ditisvreselijk;
var klik_kluis_opbergen;
var remcocheckrapport;
var gelukkigkluis;
var fotoremco;
var kindSpreekt;

var kantineStatus = false;
var kantoorSpelerStatus = 0;
var kantoorBaasStatus = 0;
var kluisStatus = 0;
var henkDeurStatus = 1;




var gameWidth = canvasBg.width; // variabele voor de breedte van het speelscherm
var gameHeight = canvasBg.height; // variabele voor de hoogte van het speelscherm
var mouseX = 0; // variabele voor de horizontale muispositie
var mouseY = 0; // variabele voor de verticale muispositie
var isPlaying = false; // variabele voor de loopfunctie

// variabelen voor het soepel laten animeren
var requestAnimFrame = window.requestAnimationFrame ||
					   window.webkitRequestAnimationFrame ||
					   window.mozRequestAnimationFrame ||
					   window.oRequestAnimationFrame ||
					   window.msRequestAnimationFrame;

var mouseX, mouseY = 0;


var imgSprite = new Image(); // variabele voor de spritesheet
imgSprite.src = 'spritesheet.png'; // variabele voor de spritesheet afbeelding
imgSprite.addEventListener('load',init,false); // variabele voor de eventlistener bij het laden van het spel

function mouseMovedListenerStartSpel(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 180 && mouseX <= 600) && (mouseY >= 130 && mouseY <= 500)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 485 && mouseX <= 505) && (mouseY >= 510 && mouseY <= 540)) // helpknop startscherm
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorSpelerExplore(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 86 && mouseX <= 98) && (mouseY >= 155 && mouseY <= 171)) // deurknop kantoor speler intern
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 260 && mouseX <= 350) && (mouseY >= 200 && mouseY <= 250)) // telefoon speler
	{
		document.body.style.cursor = 'pointer';	
	}

	else if((mouseX >= 738 && mouseX <= 800) && (mouseY >= 390 && mouseY <= 471)) // kluis speler
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 86 && mouseX <= 98) && (mouseY >= 155 && mouseY <= 171)) // deurknop kantoor speler intern
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 260 && mouseX <= 350) && (mouseY >= 200 && mouseY <= 250)) // telefoon speler
	{
		document.body.style.cursor = 'pointer';	
	}

	else if((mouseX >= 443 && mouseX <= 707) && (mouseY >= 17 && mouseY <= 214)) // kluis speler
	{
		document.body.style.cursor = 'pointer';	
	}

	else if((mouseX >= 738 && mouseX <= 800) && (mouseY >= 390 && mouseY <= 471)) // kluis speler
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 86 && mouseX <= 98) && (mouseY >= 155 && mouseY <= 171)) // deurknop kantoor speler intern
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 260 && mouseX <= 350) && (mouseY >= 200 && mouseY <= 250)) // telefoon speler
	{
		document.body.style.cursor = 'pointer';	
	}

	else if((mouseX >= 159 && mouseX <= 424) && (mouseY >= 30 && mouseY <= 229)) // tekstballon links baas
	{
		document.body.style.cursor = 'pointer';	
	}

	else if((mouseX >= 738 && mouseX <= 800) && (mouseY >= 390 && mouseY <= 471)) // kluis speler
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorSpelerTelefoon(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 325 && mouseX <= 370) && (mouseY >= 100 && mouseY <= 130)) // Sluitknop
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 380 && mouseX <= 520) && (mouseY >= 120 && mouseY <= 170)) // deurknop kantine extern
	{
		document.body.style.cursor = 'pointer';	
	}

	else if((mouseX >= 370 && mouseX <= 520) && (mouseY >= 190 && mouseY <= 250)) // deurknop kantine extern
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorSpelerTelefoonBaasBelt(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 325 && mouseX <= 370) && (mouseY >= 100 && mouseY <= 130)) // Sluitknop
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 380 && mouseX <= 520) && (mouseY >= 120 && mouseY <= 170)) // deurknop kantine extern
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerGang(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 120 && mouseX <= 135) && (mouseY >= 300 && mouseY <= 320)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 430 && mouseX <= 445) && (mouseY >= 300 && mouseY <= 320)) // deurknop kantine extern
	{
		document.body.style.cursor = 'pointer';	
	}

	else if((mouseX >= 745 && mouseX <= 760) && (mouseY >= 300 && mouseY <= 320)) // deurknop speler extern
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorBaasExplore(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 712 && mouseX <= 724) && (mouseY >= 190 && mouseY <= 205)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorBaasExploreFotolijst(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 712 && mouseX <= 724) && (mouseY >= 190 && mouseY <= 205)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 370 && mouseX <= 450) && (mouseY >= 320 && mouseY <= 401)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorBaasTekstBallonLinksEnDeur(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 135 && mouseX <= 395) && (mouseY >= 240 && mouseY <= 428)) // tekstballon links
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 712 && mouseX <= 724) && (mouseY >= 190 && mouseY <= 205)) // deurknop kantoor manager ixtern
	{
		document.body.style.cursor = 'pointer';
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantoorBaasTekstBallonRechtsEnDeur(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 200 && mouseX <= 465) && (mouseY >= 230 && mouseY <= 420)) // tekstballon links
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 712 && mouseX <= 724) && (mouseY >= 190 && mouseY <= 205)) // deurknop kantoor manager ixtern
	{
		document.body.style.cursor = 'pointer';
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantineExplore(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 135 && mouseX <= 155) && (mouseY >= 240 && mouseY <= 255)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantineKind(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 135 && mouseX <= 155) && (mouseY >= 240 && mouseY <= 255)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else if((mouseX >= 210 && mouseX <= 480) && (mouseY >= 5 && mouseY <= 200)) // tekstwolk kind
	{
		document.body.style.cursor = 'pointer';	
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}

function mouseMovedListenerKantineSpeler(e)
{
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;

	if((mouseX >= 135 && mouseX <= 155) && (mouseY >= 240 && mouseY <= 255)) // deurknop kantoor manager extern
	{
		document.body.style.cursor = 'pointer';
	}

	else
	{
		document.body.style.cursor = 'default';
	}
}



// main functions

function init() {
	speler1 = new Speler(); // de speler definieren
	baas1 = new Baas(); // de baas definieren
	telefoon1 = new Telefoon(); // de telefoon definieren
	kind1 = new Kind(); // de dochter definieren
	drawStartscherm(); // het startmenu tekenen
	document.addEventListener('click',mouseClickedStartSchermButton,false); // event listener voor het startscherm
	document.addEventListener('click',mouseClickedHelpButton,false);
	document.addEventListener('mousemove', mouseMovedListenerStartSpel, false);
	beginGeluid = document.getElementById("beginGeluid");
	soundEfx2 = document.getElementById("soundEfx2");
	achtergrondMuziek = document.getElementById("achtergrondMuziek");
	commentator1 = document.getElementById("commentator1");
	eindBoem = document.getElementById("eindBoem");
	kluisComment = document.getElementById("kluisComment");
	applausGeluid = document.getElementById("applausGeluid");
	antwoordApparaatBaasGeluid = document.getElementById("antwoordApparaatBaasGeluid");
	voicemailRemcoMeisner = document.getElementById("voicemailRemcoMeisner");
	remcoBenieuwdNaarVolgendeUitslagen = document.getElementById("remcoBenieuwdNaarVolgendeUitslagen");
	remcoJeBentOntslagen = document.getElementById("remcoJeBentOntslagen");
	remcoRapportCheckVerward = document.getElementById("remcoRapportCheckVerward");
	remcoPromotieFinancieelManager = document.getElementById("remcoPromotieFinancieelManager");
	remcoNaarKantoorKomen = document.getElementById("remcoNaarKantoorKomen");
	lunch = document.getElementById("lunch");
	lieflunchmee = document.getElementById("lieflunchmee");
	teruginkantoorbellen = document.getElementById("teruginkantoorbellen");
	remcobeltnaarkantoorkomen = document.getElementById("remcobeltnaarkantoorkomen");
	goedendagwaarmeehelpen = document.getElementById("goedendagwaarmeehelpen");
	geweldigverderrapport = document.getElementById("geweldigverderrapport");
	documentkwijt = document.getElementById("documentkwijt");
	spoorloosverdwenen = document.getElementById("spoorloosverdwenen");
	ditisvreselijk = document.getElementById("ditisvreselijk");
	klik_kluis_opbergen = document.getElementById("klik_kluis_opbergen");
	documentuitkluis = document.getElementById("documentuitkluis");
	remcocheckrapport = document.getElementById("remcocheckrapport");
	gelukkigkluis = document.getElementById("gelukkigkluis");
	fotoremco = document.getElementById("fotoremco");
	introductieHenk = document.getElementById("introductieHenk");
	kindSpreekt = document.getElementById("kindSpreekt");
}

function laadGame() {
	document.removeEventListener('click', mouseClickedStartSchermButton, false);
	document.removeEventListener('mousemove', mouseMovedListenerStartSpel, false);
	document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
	document.addEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerIntern, false);
	document.addEventListener('click', mouseClickedTelefoonButton, false);
	document.addEventListener('click', mouseClickedKluisButton, false);
	clearScreen(); // eerst het scherm wissen voordat de nieuwe afbeelding wordt geladen
	introductieHenk.play();
	drawKantoorSpelerMetDocument(); // achtergrond 1 tekenen
	drawSpelerKantoorSpelerNeutraal(); // speler tekenen
	telefoon1.draw(); // telefoon tekenen
	drawKluis();
	achtergrondMuziek.play();
}


function loop() {
	if (isPlaying) {
		clearScreen();
		drawBg2();
		telefoon1.draw();
		speler1.draw();
		baas1.draw();		
		requestAnimFrame(loop);
	}
}

function startLoop() { // de loop voor de animatie starten
	isPlaying = true;
	loop();
}



function stopLoop() {
	isPlaying = false;
}

// startscherm
function drawStartscherm() {
	ctxBg.drawImage(imgSprite,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor met vertrouwelijke document
function drawKantoorSpelerMetDocument() {
	ctxBg.drawImage(imgSprite,800,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	ctxBg.textAlign = 'center';
	ctxBg.font = '12pt Calibri';
	ctxBg.fillStyle = 'white';
	ctxBg.fillText('"Mijn naam is Henk. Ik ben financieel medewerker bij het bedrijf Josenco. Mijn directeur heet Remco Meisner.', canvasX, canvasY - 30);
	ctxBg.fillText('Remco is erg orderlijk en hij raakt nooit iets kwijt. Ik heb de taak gekregen om de financiele jaarrapportage te maken.', canvasX, canvasY- 15);
	ctxBg.fillText('Ik moet ervoor zorgen dat dit document niet in de verkeerde handen komt. Ik kan op verschillende voorwerpen klikken,', canvasX, canvasY);
	ctxBg.fillText('Zoals deurknoppen, een kluis, mijn telefoon op mijn bureau en tekstballonnen.', canvasX, canvasY + 15);
	ctxBg.fillText('Maar ik bedenk me opeens dat ik mijn lunch ben vergeten mee te nemen! Laat ik even naar huis bellen."', canvasX, canvasY + 30);
}

function drawKantoorSpelerMetDocumentNaLunchKind() {
	ctxBg.drawImage(imgSprite,800,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	ctxBg.textAlign = 'center';
	ctxBg.font = '12pt Calibri';
	ctxBg.fillStyle = 'white';
	ctxBg.fillText('"Trrrring... Ik vraag me af wie me opbelt. Laat ik even de telefoon opnemen."', canvasX, canvasY);
}

function drawKantoorSpelerExplore() {
	ctxBg.drawImage(imgSprite,800,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor vertrouwelijke document kwijt
function drawKantoorSpelerUitroepteken() {
	ctxBg.drawImage(imgSprite,1600,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
	
}

// kantoor van Baas
function drawKantoorBaas() {
	ctxBg.drawImage(imgSprite,2400,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor van Baas
function drawGang() {
	ctxBg.drawImage(imgSprite,800,600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor van Baas
function drawKantineExplore() {
	ctxBg.drawImage(imgSprite,1600,600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawKantineKind() {
	ctxBg.drawImage(imgSprite,3200,600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawKantineSpeler() {
	ctxBg.drawImage(imgSprite,0,1200,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawKantine() {
	ctxBg.drawImage(imgSprite,1600,600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor zonder document
function drawKantoorSpelerZonderDocument() {
	ctxBg.drawImage(imgSprite,3200,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 5
function drawKantoorSpelerVoorstellen() {
	ctxBg.drawImage(imgSprite,800,1200,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 6
function drawKantoorSpelerBesturingOnderKnie() {
	ctxBg.drawImage(imgSprite,1600, 1200,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 7
function drawKantoorSpelerTelefoonGaat() {
	ctxBg.drawImage(imgSprite,2400, 1200,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerHierSpreektBaas() {
	ctxBg.drawImage(imgSprite,2400, 600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerKomEraan() {
	ctxBg.drawImage(imgSprite,800, 1800,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerKlikOpDeurknop() {
	ctxBg.drawImage(imgSprite,1600, 1800,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorBaasWaarmeeHelpen() {
	ctxBg.drawImage(imgSprite,2400, 1800,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorBaasBedrijfWinst() {
	ctxBg.drawImage(imgSprite,3200, 1800,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorBaasVerderJaarrapportage() {
	ctxBg.drawImage(imgSprite,800, 2400,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerWaarIsDocument() {
	ctxBg.drawImage(imgSprite,1600, 2400,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerControleBaasRapport() {
	ctxBg.drawImage(imgSprite,2400, 2400,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerDocumentSpoorloosVerdwenen() {
	ctxBg.drawImage(imgSprite,3200, 2400,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerOnacceptabelOntslagen() {
	ctxBg.drawImage(imgSprite,800, 3000,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerVreselijkOpgeborgen() {
	ctxBg.drawImage(imgSprite,1600, 3000,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawKantoorSpelerKindLunch() {
	ctxBg.drawImage(imgSprite,2400, 3000,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawGang() {
	ctxBg.drawImage(imgSprite,800, 600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawCiscoScherm() {
	ctxBg.drawImage(imgSprite,2400, 600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawCiscoSchermBaas() {
	ctxBg.drawImage(imgSprite,0, 1800,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

// kantoor 8
function drawEindSchermOntslagen() {
	ctxBg.drawImage(imgSprite,3200, 3000,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawEindSchermGewonnen() {
	ctxBg.drawImage(imgSprite,1600, 3600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawKantoorSpelerGoodEndingDocumentUitKluis() {
	ctxBg.drawImage(imgSprite,0, 2400,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawKantoorSpelerGoodEndingBaasVoortgang() {
	ctxBg.drawImage(imgSprite,0, 3000,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawKantoorSpelerGoodEndingGeenOnbevoegden() {
	ctxBg.drawImage(imgSprite,800, 3600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawKantoorSpelerGoodEndingBenieuwdUitslagen() {
	ctxBg.drawImage(imgSprite,0, 3600,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}

function drawFotoRemco() {
	ctxBg.drawImage(imgSprite,530, 600, 82, 81, 370, 320, 82, 81);
}

function drawSpelerKantoorBaasNeutraal() {
	ctxBg.drawImage(imgSprite,0, 600, 80, 280, 510, 90,76,262);
}

function drawSpelerKantoorSpelerNeutraal() {
	ctxBg.drawImage(imgSprite,0, 600, 80, 280, 350, 255,76,262);
}

function clearScreen() {
	ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

function drawBaas() {
	ctxBg.drawImage(imgSprite,80, 600, 90, 360, 20, 102,90,360);
}

function drawSpelerNeutraalGang() {
	ctxBg.drawImage(imgSprite,0, 600, 80, 280, 550, 255,76,262);
}

function drawSpelerNeutraalKantine() {
	ctxBg.drawImage(imgSprite,0, 600, 80, 280, 230, 255,76,262);
}

function drawSpelerVerward() {
	ctxBg.drawImage(imgSprite,260, 600, 110, 270, 350, 235,110,270);
}

function drawKluis() {
	ctxBg.drawImage(imgSprite,463, 600, 62, 83, 738, 390, 62, 81);
}

function drawDocument() {
	ctxBg.drawImage(imgSprite,0, 894, 42, 50, 479, 292, 42, 54);
}

// end of main functions








// speler functions

function Speler() {
	this.srcX = 0;
	this.srcY = 600;
	this.width = 80;
	this.height = 280;
	this.speed = 2;
	this.drawX = 350;
	this.drawY = 255;
	this.noseX = this.drawX + 100;
	this.noseY = this.drawY + 30;
	this.leftX = this.drawX;
	this.rightX = this.drawX + this.width;
	this.topY = this.drawY;
	this.bottomY = this.drawY + this.height;
	this.isUpKey = false;
	this.isRightKey = false;
	this.isDownKey = false;
	this.isLeftKey = false;
}

Speler.prototype.draw = function () {
	ctxBg.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};

// end of speler functions




// baas functions

function Baas() {
	this.srcX = 80;
	this.srcY = 600;
	this.width = 90;
	this.height = 360;
	this.speed = 2;
	this.drawX = 20;
	this.drawY = 100;
}

Baas.prototype.draw = function () {
	
	//this.drawY += this.speed;
	
	if (this.drawY >= 220) stopLoop();
	
	ctxBg.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};






// baas functions


// kind functions

function Kind() {
	this.srcX = 370;
	this.srcY = 600;
	this.width = 90;
	this.height = 160;
	this.speed = 2;
	this.drawX = 20;
	this.drawY = 220;
}

Kind.prototype.draw = function () {
	
	//this.drawY += this.speed;
	
	if (this.drawY >= 220) stopLoop();
	
	ctxBg.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};






// eind kind functions










// telefoon functions

function Telefoon() {
	this.srcX = 180;
	this.srcY = 600;
	this.width = 80;
	this.height = 45;
	this.drawX = 260;
	this.drawY = 210;
}

Telefoon.prototype.draw = function () {
	
	ctxBg.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};


function mouseClickedTelefoonButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (telefoonButton.checkClicked())
		if (kantoorSpelerStatus == 0)
		{
			console.log("telefoonbutton geklikt")
			document.removeEventListener('click', mouseClickedTelefoonButton, false);
			document.removeEventListener('click', mouseClickedKluisButton, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerTelefoon, false);
			document.addEventListener('click', mouseClickedTelefoonTerugButton, false);
			document.addEventListener('click', mouseClickedTelefoonThuisButton, false);
			document.addEventListener('click', mouseClickedAntwoordApparaatBaasButton, false);
			clearScreen();
			drawKantoorSpelerExplore();
			drawCiscoScherm();
			drawKluis();
			introductieHenk.pause();
			//alert("TEST");
		}
		else if (kantoorSpelerStatus == 1)
		{
			console.log("telefoonbutton geklikt")
			document.removeEventListener('click', mouseClickedTelefoonButton, false);
			document.removeEventListener('click', mouseClickedKluisButton, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerTelefoonBaasBelt, false);
			document.addEventListener('click', mouseClickedTelefoonTerugButton, false);
			//document.addEventListener('click', mouseClickedTelefoonThuisButton, false);
			document.addEventListener('click', mouseClickedAntwoordApparaatBaasButton, false);
			clearScreen();
			drawKantoorSpelerExplore();
			drawCiscoSchermBaas();
			drawKluis();
			teruginkantoorbellen.pause();
			//alert("TEST"); 
		}
};

function mouseClickedAntwoordApparaatBaasButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (antwoordApparaatBaasButton.checkClicked())
		if (kantoorSpelerStatus == 0)
		{
			console.log("antwoord apparaat baasbutton geklikt")
			ctxBg.fillText('"Dit is de voicemail van Remco Meisner. Op dit moment ben ik even niet bereikbaar, bel mij op een later moment terug.”', canvasX, canvasY + 15);
			lunch.pause();
			voicemailRemcoMeisner.play();
		}
		else if (kantoorSpelerStatus == 1)
		{
			console.log("telefoon - kom naar baas")
			remcoNaarKantoorKomen.play();
			ctxBg.fillText('"Hallo Henk, Dit is Remco Meisner. Zou je even naar mijn kantoor willen komen?”', canvasX, canvasY + 30);
			henkDeurStatus = 0;
		}
};

function mouseClickedFotoRemcoButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (fotoRemcoButton.checkClicked())
		{
			console.log("foto remco geklikt")
			ctxBg.fillText('"Dat is een mooie foto van mijn baas Remco. Laat ik maar snel verder gaan met mijn werk."', canvasX, canvasY);
			fotoremco.play();
		}

}

function mouseClickedTelefoonThuisButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (telefoonThuisButton.checkClicked())
		{
			console.log("telefoon thuisbutton geklikt")
			//alert("test");
			ctxBg.textAlign = 'center';
			ctxBg.font = '12pt Calibri';
			ctxBg.fillStyle = 'white';
			ctxBg.fillText('"Hallo lieverd, met papa! Ik kwam er net achter dat ik mijn lunch was vergeten mee te nemen.', canvasX, canvasY + 30);
			ctxBg.fillText('Zou je alsjeblieft even naar het kantoor willen komen? Dan zie ik je zometeen in de kantine. Totzo!"', canvasX, canvasY + 45);
			kantineStatus = true;
			lunch.play();
			voicemailRemcoMeisner.pause();
		}
};

function mouseClickedTelefoonTerugButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (telefoonTerugButton.checkClicked())
		if (kantoorSpelerStatus == 0)
		{
			console.log("telefoon terug button geklikt")
			document.removeEventListener('click', mouseClickedTelefoonTerugButton, false);
			//document.removeEventListener('click', mouseClickedKluisButton, false);
			document.removeEventListener('click', mouseClickedTelefoonThuisButton, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerTelefoon, false);
			document.removeEventListener('click', mouseClickedAntwoordApparaatBaasButton, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
			document.addEventListener('click', mouseClickedKluisButton, false);
			document.addEventListener('click', mouseClickedTelefoonButton, false);
			clearScreen();
			drawKantoorSpelerExplore();
			telefoon1.draw();
			drawSpelerKantoorSpelerNeutraal();
			drawKluis();
			lunch.pause();
			voicemailRemcoMeisner.pause();
			//alert("TEST");
		}
		else if (kantoorSpelerStatus == 1)
		{
			console.log("telefoon terug button geklikt kom naar baas")
			document.removeEventListener('click', mouseClickedTelefoonTerugButton, false);
			//document.removeEventListener('click', mouseClickedKluisButton, false);
			document.removeEventListener('click', mouseClickedTelefoonThuisButton, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerTelefoon, false);
			document.removeEventListener('click', mouseClickedAntwoordApparaatBaasButton, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
			document.addEventListener('click', mouseClickedKluisButton, false);
			document.addEventListener('click', mouseClickedTelefoonButton, false);
			clearScreen();
			drawKantoorSpelerExplore();
			telefoon1.draw();
			drawSpelerKantoorSpelerNeutraal();
			drawKluis();
			kantoorBaasStatus = 1;
			kantoorSpelerStatus = 2;
			kluisStatus = 1;
			remcoNaarKantoorKomen.pause();
			remcobeltnaarkantoorkomen.play();
			ctxBg.fillText('"Ik wilde net verder werken aan de financiele jaarraportage, maar Remco klonk best dringend.', canvasX, canvasY);
			ctxBg.fillText('Laat ik maar even naar hem toe gaan!”', canvasX, canvasY + 15);
			//alert("TEST");
		}
};

// telefoon functions








function Button (xL, xR, yT, yB) {
	this.xLeft = xL;
	this.xRight = xR;
	this.yTop = yT;
	this.yBottom = yB;
}

Button.prototype.checkClicked = function() {
	if 
	(
		this.xLeft <= mouseX && mouseX <= this.xRight 
		&& this.yTop <= mouseY && mouseY <= this.yBottom
	) 

	return true;
};


// end of button object















// event functions

function mouseClickedKluisButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (kluisButton.checkClicked())
		if (kluisStatus == 0)
		{
			console.log("kluisbutton geklikt")
			introductieHenk.pause();
			kluisComment.play();
		}
		else if (kluisStatus == 1)
		{
			console.log("kluisbutton geklikt")
			clearScreen();
			drawKantoorSpelerExplore();
			drawSpelerKantoorSpelerNeutraal();
			telefoon1.draw();
			drawKluis();
			remcobeltnaarkantoorkomen.pause();
			klik_kluis_opbergen.play();
			document.removeEventListener('click', mouseClickedKluisButton, false);
			document.addEventListener('click', mouseClickedDocumentInKluis, false);
			ctxBg.fillText('"In deze kluis kan je spullen veilig opbergen.', canvasX, canvasY);
			ctxBg.fillText('Klik nog een keer op de kluis om de jaarrapportage hierin op te bergen.”', canvasX, canvasY + 15);
			kluisStatus = 0;
		}
}

function mouseClickedDocumentInKluis(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (kluisButton.checkClicked())
		{
			console.log("doe document in kluis geklikt")
			document.removeEventListener('click', mouseClickedDocumentInKluis, false);
			document.removeEventListener('click', mouseClickedKluisButton, false);
			clearScreen();
			drawKantoorSpelerZonderDocument();
			telefoon1.draw();
			drawSpelerKantoorSpelerNeutraal();
			drawKluis();
			kantoorSpelerStatus = 3;
		}

}

function mouseClickedHelpButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (helpButton.checkClicked())
		{
			console.log("helpbutton geklikt")
			applausGeluid.play();
		}

}

function mouseClickedStartSchermButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (startSchermButton.checkClicked()) 
	{
		document.removeEventListener('click', mouseClickedStartSchermButton, false);
		document.removeEventListener('mousemove', mouseMovedListenerStartSpel, false);
		//document.addEventListener('click', mouseClickedTelefoonButton, false);
		//document.addEventListener('click', mouseClickedKluisButton, false);
		//document.addEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerIntern, false);
		clearScreen();
		laadGame();
		
		document.body.style.cursor = 'default';
	}
	
 
}












function mouseClickedTekstBallonButtonRechtsKantoorSpeler(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorSpeler.checkClicked())
		{
			console.log("tekstBallonButtonRechtsKantoorSpeler geklikt");
			document.removeEventListener('click', mouseClickedTelefoonButton, false);
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
			document.addEventListener('click', mouseClickedTekstBallon13Button, false);
	
			clearScreen();
			//drawGang();
			//telefoon1.draw();
			drawSpelerKantoorSpelerNeutraal();
			//kind1.draw();
			//soundEfx2.play();
		}

}

function mouseClickedDeurKnopButtonKantineExtern(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (deurKnopButtonKantineExtern.checkClicked())
	{
		if (!kantineStatus) // false
		{
			console.log("deurknop kantine extern geklikt");
			document.removeEventListener('click', mouseClickedDeurKnopButtonKantineExtern, false);
			//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
			document.removeEventListener('mousemove', mouseMovedListenerGang, false);
			document.addEventListener('mousemove', mouseMovedListenerKantineExplore, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantineIntern, false);
			clearScreen();
			//drawGang();
			//telefoon1.draw();
			drawKantineExplore();
			drawSpelerNeutraalKantine();
			//kind1.draw();
			//soundEfx2.play();

			document.body.style.cursor = 'default';
		}
		else if (kantineStatus) // true
			{
			console.log("deurknop kantine extern kind geklikt");
			document.removeEventListener('click', mouseClickedDeurKnopButtonKantineExtern, false);
			//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
			document.removeEventListener('mousemove', mouseMovedListenerGang, false);
			document.addEventListener('mousemove', mouseMovedListenerKantineKind, false);
			document.addEventListener('click', mouseClickedKantineKindButton, false);
			
			clearScreen();
			//drawGang();
			//telefoon1.draw();
			drawKantineKind();
			drawSpelerNeutraalKantine();
			kindSpreekt.play();
			//kind1.draw();
			//soundEfx2.play();

			document.body.style.cursor = 'default';
		}
	}

}

function mouseClickedKantineKindButton(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (kantineKindButton.checkClicked())
		{
			console.log("kantine kind button geklikt");
			document.removeEventListener('click', mouseClickedKantineKindButton, false);
			//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantineKind, false);
			document.addEventListener('mousemove', mouseMovedListenerKantineSpeler, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantineIntern, false);
			//document.addEventListener('click', mouseClickedTelefoonButton, false);
			//document.addEventListener('click', mouseClickedKluisButton, false);
			clearScreen();
			kindSpreekt.pause();
			lieflunchmee.play();
			//drawGang();
			
			drawKantineSpeler();
			drawSpelerNeutraalKantine();
			//telefoon1.draw();
			//drawKantineKind();
			//soundEfx2.play();
			kantineStatus = false;
			kantoorSpelerStatus = 1;

			document.body.style.cursor = 'default';
		}

}

function mouseClickedDeurKnopButtonKantoorSpelerExtern(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (henkDeurStatus == 1)
	{
		if (deurKnopButtonKantoorSpelerExtern.checkClicked())
			if (kantoorSpelerStatus == 0) // beginscherm
			{
				console.log("deurknop kantoor speler extern geklikt");
				document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerExtern, false);
				//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
				document.removeEventListener('mousemove', mouseMovedListenerGang, false);
				document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
				document.addEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerIntern, false);
				document.addEventListener('click', mouseClickedTelefoonButton, false);
				document.addEventListener('click', mouseClickedKluisButton, false);
				clearScreen();
				//drawGang();
				
				drawKantoorSpelerExplore();
				drawSpelerKantoorSpelerNeutraal();
				telefoon1.draw();
				drawKluis();
				//kind1.draw();
				//soundEfx2.play();

				document.body.style.cursor = 'default';
			}

			else if (kantoorSpelerStatus == 1) // telefoon rinkelt
			{
				console.log("deurknop kantoor speler extern geklikt telefoon baas ringt");
				document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerExtern, false);
				//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
				document.removeEventListener('mousemove', mouseMovedListenerGang, false);
				document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
				document.addEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerIntern, false);
				document.addEventListener('click', mouseClickedTelefoonButton, false);
				document.addEventListener('click', mouseClickedKluisButton, false);
				clearScreen();
				//drawGang();
				
				drawKantoorSpelerMetDocumentNaLunchKind();
				
				telefoon1.draw();
				drawKluis();
				drawSpelerKantoorSpelerNeutraal();
				teruginkantoorbellen.play();
				//kind1.draw();
				//soundEfx2.play();

				document.body.style.cursor = 'default';
			}

			else if (kantoorSpelerStatus == 2) // voor bad ending
			{
				console.log("deurknop kantoor speler extern geklikt document vergeten te verbergen");
				document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerExtern, false);
				//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
				document.removeEventListener('mousemove', mouseMovedListenerGang, false);
				document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
				document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerBadEnding1, false);
				document.addEventListener('click', mouseClickedTelefoonButton, false);
				//document.addEventListener('click', mouseClickedKluisButton, false);
				clearScreen();
				//drawGang();
				
				drawKantoorSpelerWaarIsDocument();
				drawSpelerVerward();
				telefoon1.draw();
				drawKluis();
				documentkwijt.play();
				//kind1.draw();
				//soundEfx2.play();

				document.body.style.cursor = 'default';
			}

			else if (kantoorSpelerStatus == 3) // voor good ending
			{
				console.log("deurknop kantoor speler extern geklikt document veilig opgeborgen");
				document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerExtern, false);
				//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
				document.removeEventListener('mousemove', mouseMovedListenerGang, false);
				document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
				document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerGoodEnding1, false);
				document.addEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerIntern, false);
				document.addEventListener('click', mouseClickedTelefoonButton, false);
				document.addEventListener('click', mouseClickedKluisButton, false);
				clearScreen();
				//drawGang();
				
				drawKantoorSpelerGoodEndingDocumentUitKluis();
				documentuitkluis.play();
				
				telefoon1.draw();

				drawSpelerKantoorSpelerNeutraal();
				drawKluis();
				//soundEfx2.play();

				document.body.style.cursor = 'default';
			}
	}

	if (henkDeurStatus == 0)
	{
		console.log("henk deur onklikbaar");
	}
	
}

function mouseClickedTekstBallonButtonRechtsKantoorSpelerGoodEnding1(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorSpelerGoodEnding1.checkClicked())
		{
			console.log("tekstBallonButton good ending 1 geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerGoodEnding1, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonLinksKantoorSpelerGoodEnding2, false);
	
			clearScreen();
			drawKantoorSpelerGoodEndingBaasVoortgang();
			documentuitkluis.pause();
			remcocheckrapport.play();
			telefoon1.draw();
			drawSpelerKantoorSpelerNeutraal();
			drawBaas();
			telefoon1.draw();
			drawKluis();
			drawDocument();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedTekstBallonButtonLinksKantoorSpelerGoodEnding2(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonLinksKantoorSpelerGoodEnding1.checkClicked())
		{
			console.log("tekstBallonButton good ending 2 geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonLinksKantoorSpelerGoodEnding2, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerGoodEnding3, false);
	
			clearScreen();
			drawKantoorSpelerGoodEndingGeenOnbevoegden();
			remcocheckrapport.pause();
			gelukkigkluis.play();
			telefoon1.draw();
			drawSpelerKantoorSpelerNeutraal();
			drawBaas();
			telefoon1.draw();
			drawKluis();
			drawDocument();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedTekstBallonButtonRechtsKantoorSpelerGoodEnding3(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorSpelerGoodEnding1.checkClicked())
		{
			console.log("tekstBallonButton good ending 3 geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerGoodEnding3, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonLinksKantoorSpelerGoodEnding4, false);
	
			clearScreen();
			drawKantoorSpelerGoodEndingBenieuwdUitslagen();
			gelukkigkluis.pause();
			remcoBenieuwdNaarVolgendeUitslagen.play();
			telefoon1.draw();
			drawSpelerKantoorSpelerNeutraal();
			drawBaas();
			telefoon1.draw();
			drawKluis();
			drawDocument();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedTekstBallonButtonLinksKantoorSpelerGoodEnding4(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonLinksKantoorSpelerGoodEnding1.checkClicked())
		{
			console.log("tekstBallonButton good ending 4 geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonLinksKantoorSpelerGoodEnding4, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			//document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorBaasBadEnding4, false);
	
			clearScreen();
			remcoBenieuwdNaarVolgendeUitslagen.pause();
			achtergrondMuziek.pause();
			applausGeluid.play();
			drawEindSchermGewonnen();
			//telefoon1.draw();
			//drawSpelerKantoorSpelerNeutraal();
			//drawBaas();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}


function mouseClickedTekstBallonButtonRechtsKantoorSpelerBadEnding1(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorSpelerBadEnding1.checkClicked())
		{
			console.log("tekstBallonButton controle baas rapport geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerBadEnding1, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorBaasBadEnding1, false);
	
			clearScreen();
			drawKantoorSpelerControleBaasRapport();
			drawSpelerVerward();
			telefoon1.draw();
			drawBaas();
			drawKluis();
			documentkwijt.pause();
			remcoRapportCheckVerward.play();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedTekstBallonButtonRechtsKantoorBaasBadEnding1(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorBaasBadEnding1.checkClicked())
		{
			console.log("tekstBallon document spoorloos verdwenen geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorBaasBadEnding1, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerBadEnding2, false);
			
			//document.addEventListener('click', mouseClickedTekstBallon13Button, false);
	
			clearScreen();
			drawKantoorSpelerDocumentSpoorloosVerdwenen();
			remcoRapportCheckVerward.pause();
			spoorloosverdwenen.play();
			telefoon1.draw();
			drawSpelerVerward();
			telefoon1.draw();
			drawBaas();
			drawKluis();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedTekstBallonButtonRechtsKantoorSpelerBadEnding2(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorSpelerBadEnding2.checkClicked())
		{
			console.log("tekstBallon onacceptabel ontslagen geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpelerBadEnding2, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorBaasBadEnding2, false);
			
			//document.addEventListener('click', mouseClickedTekstBallon13Button, false);
	
			clearScreen();
			drawKantoorSpelerOnacceptabelOntslagen();
			telefoon1.draw();
			drawSpelerVerward();
			telefoon1.draw();
			drawBaas();
			drawKluis();
			spoorloosverdwenen.pause();
			remcoJeBentOntslagen.play();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedTekstBallonButtonRechtsKantoorBaasBadEnding2(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorBaasBadEnding2.checkClicked())
		{
			console.log("tekstBallon vreselijk had ik maar opgeborgen geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorBaasBadEnding2, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonLinksEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			document.addEventListener('click', mouseClickedBadEnding, false);
			
			//document.addEventListener('click', mouseClickedTekstBallon13Button, false);
	
			clearScreen();
			drawKantoorSpelerVreselijkOpgeborgen();
			remcoJeBentOntslagen.pause();
			ditisvreselijk.play();
			telefoon1.draw();
			drawSpelerVerward();
			drawBaas();
			drawKluis();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedBadEnding(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (badEndingButton.checkClicked())
		{
			console.log("bad ending button geklikt");
			document.removeEventListener('click', mouseClickedBadEnding, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerBadEndingTekstBallonRechtsEnDeur, false);
			
						
			//document.addEventListener('click', mouseClickedTekstBallon13Button, false);
	
			clearScreen();
			drawEindSchermOntslagen();
			ditisvreselijk.pause();
			achtergrondMuziek.pause();
			eindBoem.play();
			//telefoon1.draw();
			//drawSpelerVerward();
			//drawBaas();
			//soundEfx2.play();
			document.body.style.cursor = 'default';
		}
}

function mouseClickedDeurKnopButtonKantineIntern(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (deurKnopButtonKantineIntern.checkClicked())
		{
			console.log("deurknop kantine intern geklikt");
			document.removeEventListener('click', mouseClickedDeurKnopButtonKantineIntern, false);
			//document.removeEventListener('click', telefoonButton, false);
			//document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorSpeler, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantineExplore, false);
			document.addEventListener('mousemove', mouseMovedListenerGang, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantineExtern, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantoorBaasExtern, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerExtern, false);
			
			clearScreen();
			//drawGang();
			//telefoon1.draw();
			drawGang();
			drawSpelerNeutraalGang();
			lieflunchmee.pause();
			//kind1.draw();
			//soundEfx2.play();

			document.body.style.cursor = 'default';
		}

}

function mouseClickedDeurKnopButtonKantoorBaasExtern(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (deurKnopButtonKantoorBaasExtern.checkClicked())
		if (kantoorBaasStatus == 0)
		{
			console.log("deurknop kantoor baas extern geklikt");
			document.removeEventListener('mousemove', mouseMovedListenerGang, false);
			document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorBaasExtern, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorBaasExploreFotolijst, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantoorBaasIntern, false);
			document.addEventListener('click', mouseClickedFotoRemcoButton, false);
			clearScreen();
			drawKantoorBaas();
			drawFotoRemco();
			drawSpelerKantoorBaasNeutraal();
			//soundEfx2.play();

			document.body.style.cursor = 'default';
		}
		else if (kantoorBaasStatus == 1)
		{
			console.log("deurknop kantoor baas na belletje");
			document.removeEventListener('mousemove', mouseMovedListenerGang, false);
			document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorBaasExtern, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorBaasTekstBallonRechtsEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorBaas1, false);
			clearScreen();
			drawKantoorBaasWaarmeeHelpen();
			goedendagwaarmeehelpen.play();
			drawBaas();
			drawSpelerKantoorBaasNeutraal();
			//soundEfx2.play();

			document.body.style.cursor = 'default';
		}

}

function mouseClickedDeurKnopButtonKantoorSpelerIntern(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (deurKnopButtonKantoorSpelerIntern.checkClicked())
		{
			console.log("deurknop kantoor speler intern geklikt");
			clearScreen();
			document.removeEventListener('mousemove', mouseMovedListenerKantoorSpelerExplore, false);
			document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerIntern, false);
			document.removeEventListener('click', mouseClickedTelefoonButton, false);
			document.removeEventListener('click', mouseClickedKluisButton, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantoorSpelerExtern, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantoorBaasExtern, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantineExtern, false);
			document.addEventListener('mousemove', mouseMovedListenerGang, false);
			introductieHenk.pause();
			remcobeltnaarkantoorkomen.pause();
			drawGang();
			drawSpelerNeutraalGang();

			document.body.style.cursor = 'default';
		}
}

function mouseClickedTekstBallonButtonRechtsKantoorBaas1(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonRechtsKantoorBaas1.checkClicked())
		{
			console.log("goedendag waarmee helpen geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonRechtsKantoorBaas1, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorBaasTekstBallonRechtsEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorBaasTekstBallonLinksEnDeur, false);
			document.addEventListener('click', mouseClickedTekstBallonButtonLinksKantoorBaas1, false);
			clearScreen();
			drawKantoorBaasBedrijfWinst();
			goedendagwaarmeehelpen.pause();
			remcoPromotieFinancieelManager.play();
			drawSpelerKantoorBaasNeutraal();
			drawBaas();
			henkDeurStatus = 1;

			document.body.style.cursor = 'default';
		}


}

function mouseClickedTekstBallonButtonLinksKantoorBaas1(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (tekstBallonButtonLinksKantoorBaas1.checkClicked())
		{
			console.log("afgelopen jaar grote winst geklikt");
			document.removeEventListener('click', mouseClickedTekstBallonButtonLinksKantoorBaas1, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorBaasTekstBallonLinksEnDeur, false);
			document.addEventListener('mousemove', mouseMovedListenerKantoorBaasTekstBallonRechtsEnDeur, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantoorBaasIntern, false);
			clearScreen();
			drawKantoorBaasVerderJaarrapportage();
			drawSpelerKantoorBaasNeutraal();

			drawBaas();
			remcoPromotieFinancieelManager.pause();
			geweldigverderrapport.play();
			kantoorBaasStatus = 0;

			document.body.style.cursor = 'default';
		}


}



function mouseClickedDeurKnopButtonKantoorBaasIntern(e) {
	mouseX = e.pageX - canvasBg.offsetLeft;
	mouseY = e.pageY - canvasBg.offsetTop;
	if (deurKnopButtonKantoorBaasIntern.checkClicked())
		{
			console.log("deurknop kantoor baas intern geklikt");
			document.removeEventListener('mousemove', mouseMovedListenerKantoorBaasExplore, false);
			document.removeEventListener('mousemove', mouseMovedListenerKantoorBaasExploreFotolijst, false);
			document.removeEventListener('click', mouseClickedDeurKnopButtonKantoorBaasIntern, false);
			document.removeEventListener('click', mouseClickedFotoRemcoButton, false);
			document.addEventListener('click', mouseClickedDeurKnopButtonKantoorBaasExtern, false);
			document.addEventListener('mousemove', mouseMovedListenerGang, false);
			
			//drawBg11();
			//drawSpelerVerward();
			
			fotoremco.pause();
			geweldigverderrapport.pause();
			clearScreen();
			drawGang();
			drawSpelerNeutraalGang();
			document.body.style.cursor = 'default';
		}
}

// end of event functions





