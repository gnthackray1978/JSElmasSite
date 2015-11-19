function DataManager() {
 
	
	this.configUrl='/config/';
}


DataManager.prototype.GetImagesByParentId = function (parentId,callback) {
    
    
      $.getJSON( "/config/images.js", function( data ) {

        var idx =0;
        var parents = [];
        
        while(idx < data.length){
            if(data[idx].parentCId ==parentId){
                parents.push(data[idx]);
            }
            idx++;
        }

        data = parents;

        //that.displayImages(data);	
        
        callback(data);
         
    });
    
    
};

DataManager.prototype.GetImagesByMenuId = function (menuId,callback) {
    
    
      $.getJSON( "/config/images.js", function( data ) {

        var idx =0;
        var parents = [];
        
        while(idx < data.length){
            if(data[idx].menuId == menuId){
                parents.push(data[idx]);
            }
            idx++;
        }

        data = parents;
 
        callback(data);
         
    });
    
    
};


DataManager.prototype.GetMenusByParentId = function (parentId,callback) {
    
    
      $.getJSON( "/config/menus.js", function( data ) {

        var idx =0;
        var parents = [];
        
        while(idx < data.length){
            if(data[idx].parentMenuId ==parentId){
                parents.push(data[idx]);
            }
            idx++;
        }

        data = parents;
 
        callback(data);
         
    });
    
    
};