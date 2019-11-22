var c = document.getElementById("house");
  var ctx = c.getContext("2d");

// toit de la maison
ctx.beginPath();
ctx.moveTo(200,20);
ctx.lineTo(150,80);
ctx.lineTo(250,80);
ctx.closePath();
ctx.fillStyle = "#D68241";
ctx.fill();
// murs
ctx.beginPath();
ctx.moveTo(150,80);
ctx.lineTo(150,200);
ctx.lineTo(250,200);
ctx.lineTo(250,80);
ctx.lineTo(150,80)
ctx.closePath();
ctx.strokeStyle = "#A2D8E5";
ctx.stroke();
ctx.fillStyle = "#A2D8E5";
ctx.fill();

// fenêtre gauche
ctx.beginPath();
ctx.moveTo(175,100);
ctx.lineTo(175,120);
ctx.lineTo(190,120);
ctx.lineTo(190,100);
ctx.closePath();
ctx.strokeStyle = "#C9C9C9";
ctx.stroke();
ctx.fillStyle = "#C9C9C9";
ctx.fill();

// fenêtre droite
ctx.beginPath();
ctx.moveTo(215,100);
ctx.lineTo(215,120);
ctx.lineTo(230,120);
ctx.lineTo(230,100);
ctx.closePath();
ctx.strokeStyle = "#C9C9C9";
ctx.stroke();
ctx.fillStyle = "#C9C9C9";
ctx.fill();

// porte
ctx.beginPath();
ctx.moveTo(185, 200);
ctx.lineTo(185, 160);
ctx.lineTo(215,160);
ctx.lineTo(215,200);
ctx.closePath();
ctx.strokeStyle = "#C9C9C9";
ctx.stroke();
ctx.fillStyle = "#C9C9C9";
ctx.fill();
