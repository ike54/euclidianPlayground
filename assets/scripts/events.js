$("#mode").change(function(){
      mode = $(this).val();
      if (mode == "label")
         $("#label").show();
      else
         $("#label").hide();
   });

   $("#label").change(function(){
      label = $(this).val();
   });


   $("#canvas").click(function(e){
     if (mode == "line")
     {
       if (clicked == 0)
       {

          $("#clickPosition").html((e.pageX - this.offsetLeft) + ', ' + (e.pageY - this.offsetTop));
          x = (e.pageX - this.offsetLeft);
          y = (e.pageY - this.offsetTop);
          ctx.beginPath();
          ctx.moveTo(x, y);
          x0[i] = x;
          y0[i] = y;
       }

       if (clicked == 1)
       {

          $("#clickPosition").html((e.pageX - this.offsetLeft) + ', ' + (e.pageY - this.offsetTop));
          x = (e.pageX - this.offsetLeft);
          y = (e.pageY - this.offsetTop);
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.closePath();

          x1[i] = x;
          y1[i] = y;
          len();
          diff();
          updateResult();
          
          i++;
          
       }
     }

     if (mode == "circle")
     {
       if (clicked == 0)
       {
          $("#clickPosition").html((e.pageX - this.offsetLeft) + ', ' + (e.pageY - this.offsetTop));
          centerX = (e.pageX - this.offsetLeft);
          centerY = (e.pageY - this.offsetTop);
          
       }

       if (clicked == 1)
       {
          $("#clickPosition").html((e.pageX - this.offsetLeft) + ', ' + (e.pageY - this.offsetTop));
          radiusX = centerX - (e.pageX - this.offsetLeft);
          radiusY = centerY - (e.pageY - this.offsetTop);
          radius = Math.sqrt(Math.pow(radiusX, 2) + Math.pow(radiusY, 2));
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius ,0, 2*Math.PI);
          ctx.stroke();
          ctx.closePath();
       }
     }

     if (mode == "label")
     {
          x = (e.pageX - this.offsetLeft);
          y = (e.pageY - this.offsetTop);
       
     	  ctx.fillText(label, x, y);
     }
       ((clicked == 1) ? clicked = 0 : clicked = 1);
       
   });


   $("#clear, #clear1").click(function() {
     clear();
   });

   $("#refDiag").click(function(){
     clear();
     
     var prop = $("#prop").val();
     drawProp(prop);
   });


   $("#canvas").mousemove(function(e){
      $("#curPosition").html((e.pageX - this.offsetLeft) + ', ' + (e.pageY - this.offsetTop));
   });

   $("#label").hide();
