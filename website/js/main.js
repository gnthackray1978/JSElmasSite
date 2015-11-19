$(document).ready(function() {

    var planetElma = new PlanetElma(new DataManager());

	planetElma.LoadMenus();
	
    planetElma.SelectMenu(1);

    planetElma.LoadImages();

});