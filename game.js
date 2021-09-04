const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

function init() {
    let stage = new createjs.Stage("gameCanvas");
    let circle = new createjs.Shape();

    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;
    
    if (deviceType == 'mobile' || deviceType == 'tablet') {
        messageField = new createjs.Text("Please Open On Laptop or PC", "bold 250% Arial", "#6cd1ef");
	    messageField.maxWidth = 1000;
	    messageField.textAlign = "center";
	    messageField.textBaseline = "middle";
	    messageField.x = stage.canvas.width / 2;
    	messageField.y = stage.canvas.height / 2;
	    stage.addChild(messageField);
    }

    else {
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
}