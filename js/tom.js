function Tomas(){
    Jerry.call(this);
    this.coordX = 50;
    this.coordY = 50;
    this.width = 50;
    this.height = 50;
    this.name = "Tomas";
    this.speedY /= 2;
}

var timer  = setInterval(function() {
    var tomas = new Tomas();
}, 8000);