var DataManager, SelectionList;



function PlanetElma(datamanager, initialMenu, initialImage) {

    this.dataManager =datamanager;// new DataManager();

	this.selectedMenu=0;
	//this.selection = [];
	this.selectionList = new SelectionList(datamanager);
	this.subMenuList = new SelectionList(datamanager);
	this.imageUrl='/images/testcontent/';
}


PlanetElma.prototype.LoadImages = function () {
    var that =this;

    // this.dataManager.GetImagesByParentId(0, function(data){
    //     that.displayImages(data);
    // });

	$('body').on("click", ".frame", $.proxy(function (e) { 
        console.log('image clicked');
        var id = e.target.attributes['data-id'].value;
        
        this.SelectImage(id); 
        return false; 
    }, this));
};


PlanetElma.prototype.displayImages = function (data) {
    var that =this;
   
    var newInner = "";
    
    $.each( data, function( key, val ) {		
// 			newInner+= '<div style="display: inline">' ;
// 			newInner+= '<a id ="image'+ key + '" href="" class ="frame"><img id ="i'+ key +'"  data-id = "'+ val.cId +'" src="'+ that.imageUrl+val.imageName + '" class = "thumb" ></a>';			
// 	        newInner+= '</div>' ;

        	newInner+= '<div class ="col">' ;
 			newInner+= '<a id ="image'+ key + '" href=""><img id ="i'+ key +'"  data-id = "'+ val.cId +'" src="'+ that.imageUrl+val.imageName + '" class = "thumb" ></a>';			
 	        newInner+= '</div>' ;
    });
	  
    $('#base-container').html(newInner);
};



PlanetElma.prototype.SelectImage = function (id) {

    console.log('select image:'+id);
    
    var that = this;

    this.dataManager.GetImagesByParentId(id, function(data){
        that.displayImages(data);	
        that.LoadMenus(1);	
    });
    
    
    
    // get child images from parentid
};


PlanetElma.prototype.LoadMenus = function (parentId) { 
	var that = this;
	
    if(parentId == undefined )
    {
        parentId =0;
        
        this.dataManager.GetMenusByParentId(parentId, function(data){
            that.selectionList.populateList(data, that.SelectMenu, that, 'navbar');
        });
    }
     

};

PlanetElma.prototype.SelectMenu = function (evt) {
  
    var that = this;
    console.log('select menu:'+evt);

    if(evt == undefined) return ;
    
    this.dataManager.GetImagesByMenuId(evt, function(data){
        that.displayImages(data);
    });
};


