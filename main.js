var canvas = new fabric.Canvas('myCanvas'); //criando canvas utilizando a biblioteca gráfica Fabric

playerX = 10; //posição x
playerY = 10; //posição y

larguraBlocos = 30;
alturaBlocos = 30;

var playerObject = "";
var blockImageObject = "";

//criação e atualização da imagem do personagem
function playerUpdate() {
	fabric.Image.fromURL("player.png", function (Img) {
		playerObject = Img;

		playerObject.scaleToWidth(150);
		playerObject.scaleToHeight(140);
		playerObject.set({
			top: playerY,
			left: playerX
		});
		canvas.add(playerObject);

	});
}

//criação e atualização das imagens de cada bloco
function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (Img) {
		blockImageObject = Img;

		blockImageObject.scaleToWidth(larguraBlocos);
		blockImageObject.scaleToHeight(alturaBlocos);
		blockImageObject.set({
			top: playerY,
			left: playerX
		});
		canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown",teclas)
function teclas(e) {
	teclapressionada=e.keyCode
	console.log(teclapressionada)
	if (teclapressionada=="17" && teclapressionada=="77") {
		console.log("control e m pressionadas juntas");
		larguraBlocos=larguraBlocos+10
		alturaBlocos=alturaBlocos+10
		document.getElementById("larguraAtual").innerHTML = larguraBlocos;
		document.getElementById("alturaAtual").innerHTML = alturaBlocos;
	}
	if (teclapressionada=="17" && teclapressionada=="81") {
		console.log("control e q pressionadas juntas");
		larguraBlocos = larguraBlocos - 10;
		alturaBlocos = alturaBlocos - 10;
		document.getElementById("larguraAtual").innerHTML = larguraBlocos;
		document.getElementById("alturaAtual").innerHTML = alturaBlocos;
		
	}

	//programar os movimentos com as setas
	if (teclapressionada=='38' ) {
		up();
		console.log("cima");
	}
	if (teclapressionada=='40' ) {
		down();
		console.log("baixo");
	}
	if (teclapressionada=='37' ) {
		left();
		console.log("esquerda");
	}

	if (teclapressionada=='39' ) {
		right();
		console.log("direita");
	}


	//programar as teclas para gerar os blocos
	if (teclapressionada=='84' ) {
		newImage('wall.jpg');
	}
	if (teclapressionada=='71') {
		newImage('ground.png');
	}
	if (teclapressionada=='72') {
		newImage('light_green.png');
	}
	if (teclapressionada=='77') {
		newImage('trunk.jpg');
	}
	if (teclapressionada=='73') {
		newImage('roof.jpg');
	}
	if (teclapressionada=='65') {
		newImage('yellow_wall.png');
	}
	if (teclapressionada=='86') {
		newImage('dark_green.png');
	}
	if (teclapressionada=='76') {
		newImage('unique.png');
	}
	if (teclapressionada=='80') {
		newImage('cloud.jpg');
	}

}
function up() {
	if (playerY >= 0) {
		playerY = playerY - alturaBlocos;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down() {
	if (playerY <= 500) {
		playerY=playerY+alturaBlocos
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left() {
	if (playerX > 0) {
		playerX = playerX - larguraBlocos;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right() {
	if (playerX <= 850) {
		playerX=playerX+larguraBlocos
		canvas.remove(playerObject);
		playerUpdate();
	}
}
