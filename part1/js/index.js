$( document ).ready(function(){
    var turn=0;
   $("#cell11, #cell12, #cell21, #cell22, #cell13, #cell23, #cell31, #cell32, #cell33")
        .click(
            function(){
                var cell = $(this);
                if(turn==0) {
                    turn = 1;
                    cell.css("background", "url(img/O.png)");
                } else {
                    turn= 0;
                    cell.css("background", "url(img/X.png)");
                }
            }
   );
});