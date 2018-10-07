    //remove .click &&


var i;
//    var blackChecker = "<img class='checker-piece' src='blackPiece.jpg'>";
//    var redChecker = "<img class='checker-piece' src='redPiece.jpg'>";

    var blueChecker = "<div class='blue-checker'></div>";
    var redChecker = "<div class='red-checker'></div>";

    var boardTile = document.querySelectorAll(".board-tile");

function addCheckers(){
    
    for(i=11; i<18; i+=2){
        document.getElementById(i).innerHTML = blueChecker;
    }  
    for(i=22; i<29; i+=2){
        document.getElementById(i).innerHTML = blueChecker;
    }  
    for(i=31; i<38; i+=2){
        document.getElementById(i).innerHTML = blueChecker;
    }  

     for(i=62; i<69; i+=2){
        document.getElementById(i).innerHTML = redChecker;
    }  
    for(i=71; i<79; i+=2){
        document.getElementById(i).innerHTML = redChecker;
    }  
    for(i=82; i<89; i+=2){
        document.getElementById(i).innerHTML = redChecker;
    }  
}

boardTile.forEach(function(tile){
    tile.addEventListener("click", function(){
        
         var possibleMoveIndicator = "<div class='possible-move'></div>";
        
        if(this.hasChildNodes){
            
            function clearSelected(){
            var selectedDiv = document.querySelectorAll(".selected");
            [].forEach.call(selectedDiv, function(sel){
                sel.classList.remove("selected");
            });
            }
         
               clearSelected(); 
            
            $(".possible-move").remove();
            
            
            //Find location of selected piece.
            var pieceLocation = tile.id;
            
            console.log("Position " + pieceLocation + " selected.");
            
            //Find color of piece.
            if(tile.childNodes[0] != null){
            var pieceColor = tile.childNodes[0].className;
            console.log(pieceColor);
            }
            
            //Find possible locations to move.
            if(pieceColor == "red-checker"){
                var possibleMove1 = pieceLocation - 9;
                var possibleMove2 = pieceLocation - 11;
                } else {
                    possibleMove1 = parseInt(pieceLocation) + 9;
                    possibleMove2 = parseInt(pieceLocation) + 11;
                }
                console.log(possibleMove1 + " and " + possibleMove2 + " are possible moves.");
                
                //Add indicator to possible locations.
                var indicatorAdded1 = false;
                var indicatorAdded2 = false;
                
                var jump1 = false;
                var jump2 = false;
            
                var nullCheck = document.getElementById(possibleMove1);
                var nullCheck2 = document.getElementById(possibleMove1 - 9);
                if(nullCheck != null && tile.hasChildNodes()){
                   if(document.getElementById(possibleMove1).hasChildNodes() == 0){
                    document.getElementById(possibleMove1).innerHTML = possibleMoveIndicator;
                    indicatorAdded1 = true;
                    }else if(pieceColor == "red-checker"){
                        if(nullCheck2 != null){
                        if(document.getElementById(possibleMove1 - 9).hasChildNodes() == 0){
                            document.getElementById(possibleMove1 - 9).innerHTML = possibleMoveIndicator;
                            indicatorAdded1 = true;
                            possibleMove1 -=9;
                            jump1 = true;
                            }
                        }
                    } else if(pieceColor == "blue-checker"){
                        nullcheck2 = document.getElementById(parseInt(possibleMove1) + 9);
                        if(nullcheck2 != null){
                        if(document.getElementById(parseInt(possibleMove1) + 9).hasChildNodes() == 0){
                            document.getElementById(parseInt(possibleMove1) + 9).innerHTML = possibleMoveIndicator;
                            indicatorAdded1 = true;
                            possibleMove1 = parseInt(possibleMove1) + 9;
                            jump1 = true;
                            }
                        }
                    }
                }
            
                
               nullCheck = document.getElementById(possibleMove2);
               nullCheck2 =  document.getElementById(possibleMove2 - 11);
                if(nullCheck != null && tile.hasChildNodes()){
                    if(document.getElementById(possibleMove2).hasChildNodes() == 0){
                    document.getElementById(possibleMove2).innerHTML = possibleMoveIndicator;
                    indicatorAdded2 = true;
                    } else if(pieceColor == "red-checker"){
                        if(nullCheck2 != null){
                        if(document.getElementById(possibleMove2 - 11).hasChildNodes() == 0){
                            document.getElementById(possibleMove2 - 11).innerHTML = possibleMoveIndicator;
                            indicatorAdded2 = true;
                            possibleMove2 -= 11;
                            jump2 = true;
                            }
                        }
                    } else if(pieceColor == "blue-checker"){
                        nullcheck2 = document.getElementById(parseInt(possibleMove2) + 11);
                        if(nullcheck2 != null){
                        if(document.getElementById(parseInt(possibleMove2) + 11).hasChildNodes() == 0){
                            document.getElementById(parseInt(possibleMove2) + 11).innerHTML = possibleMoveIndicator;
                            indicatorAdded2 = true;
                            possibleMove2 = parseInt(possibleMove2) + 11;
                            jump2 = true;
                            }
                        }
                    }
                }
                
                //Highlight selected piece.
                if(indicatorAdded1 || indicatorAdded2 === true){
                   if(tile.hasChildNodes()){ document.getElementById(pieceLocation).classList.add("selected");
                       }
                }
                
                var jumpedPiece;
                var pieceMoved = false;
               
                //allow player to move red piece to possible location
                $("#"+possibleMove1).click(function(){
                    pieceMoved = true;
                    if(indicatorAdded1 && tile.hasChildNodes()){
                      $("#" + pieceLocation).empty();
                    if(pieceColor == "red-checker"){
                       $(this).html(redChecker); 
                        if(jump1){
                            jumpedPiece = pieceLocation - 9;
                           $("#" + jumpedPiece).empty();
                        }
                    } else{
                        $(this).html(blueChecker);
                        if(jump1){
                            jumpedPiece = parseInt(pieceLocation) + 9;
                           $("#" + jumpedPiece).empty();
                        }
                    }
                    }
                    return;
                 });
                
                $("#"+possibleMove2).click(function(){
                    pieceMoved = true;
                   console.log($("#" + pieceLocation).hasClass("selected"));
                   if(indicatorAdded2 && tile.hasChildNodes()){
                      $("#" + pieceLocation).empty();
                       console.log(" test2");
                    if(pieceColor == "red-checker"){
                       $(this).html(redChecker); 
                        if(jump2){
                            jumpedPiece = pieceLocation - 11;
                           $("#" + jumpedPiece).empty();
                        }
                    } else{
                        $(this).html(blueChecker);
                        if(jump2){
                            jumpedPiece = parseInt(pieceLocation) + 11;
                           $("#" + jumpedPiece).empty();
                        }
                    }
                    }
                    return;
                 });
  
            }
    });
});






