function init() {
    let stage = new createjs.Stage("gameCanvas");
    let circle = new createjs.Shape();
    
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;

    messageField = new createjs.Text("Coming Soon", "bold 550% Arial", "#6cd1ef");
	messageField.maxWidth = 1000;
	messageField.textAlign = "center";
	messageField.textBaseline = "middle";
	messageField.x = stage.canvas.width / 2;
	messageField.y = stage.canvas.height / 2;
	stage.addChild(messageField);

    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);

    stage.update();

    createjs.Tween.get(circle, { loop: true })
    .to({ x: stage.canvas.width - 100 }, 800, createjs.Ease.getPowInOut(4))
    .to({ y: stage.canvas.height - 100 }, 800, createjs.Ease.getPowInOut(4))
    .to({ x: 100 }, 800, createjs.Ease.getPowInOut(4))
    .to({ y: 100 }, 800, createjs.Ease.getPowInOut(4));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}
