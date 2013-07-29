
var clicked = 0;
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
ctx.lineWidth=4;
ctx.font="30px Arial";
var i = 2, mode = "line", centerX, centerY, radiusX, radiusY, radius, label = "A";
var lineLength = new Array();
var x0   = new Array();
var x1   = new Array();
var y0   = new Array();
var y1   = new Array();
var difference = new Array();
var rad = 200;


function drawProp(num)
{
  if( num == 1)
  {
   x0[0] = 250;
   y0[0] = 400;
   x1[0] = 450;
   y1[0] = 400;
   x0[1] = 250;
   y0[1] = 400;
   x1[1] = 350;
   y1[1] = 227;
   x0[2] = 450; 
   y0[2] = 400;
   x1[2] = 350;
   y1[2] = 227;
   //Line 1
   ctx.beginPath();
   ctx.moveTo(x0[0],y0[0]);
   ctx.lineTo(x1[0],y1[0]);
   ctx.stroke();
   ctx.closePath();
   //Line 2
   ctx.beginPath();
   ctx.moveTo(x0[1], y0[1]);
   ctx.lineTo(x1[1], y1[1]);
   ctx.stroke();
   ctx.closePath();
   //Line 3
   ctx.beginPath();
   ctx.moveTo(x0[2], y0[2]);
   ctx.lineTo(x1[2], y1[2]);
   ctx.stroke();
   ctx.closePath();
   //Circle 1
   ctx.beginPath();
   ctx.arc(x0[0], y0[0], rad ,0, 2*Math.PI);
   ctx.stroke();
   ctx.closePath();
   //Circle 1
   ctx.beginPath();
   ctx.arc(x1[0], y1[0], rad ,0, 2*Math.PI);
   ctx.stroke();
   ctx.closePath();
   //labels
   ctx.fillText('A', 220, 410);
   ctx.fillText('B', 460, 410);
   ctx.fillText('C', 340, 210);
   ctx.fillText('D', 75, 265);
   ctx.fillText('E', 610, 265);

   for (i = 0; i < 3; i++)
   {
   len();
   diff();
   updateResult();
   }
 }
}
   function len()
   {
      lineLength[i] = Math.sqrt(Math.pow((x1[i] - x0[i]), 2) + Math.pow((y1[i] - y0[i]), 2));
   }

   function diff()
   {
        if (i == 0)
           difference[i] = "Percent Difference From Original";
        else
           difference[i] = ((lineLength[i] - lineLength[0])/((lineLength[0] + lineLength[i])/2) * 100).toFixed(4);
   }


   function updateResult()
   {
      $("#results").append("<tr id=\"data\"><td>Line " + (i+1) + ": " + "<td>" + lineLength[i].toFixed(2) + "px" + "</td><td>" + difference[i] + "</td></tr>" );
   }

   function clear()
   {
      ctx.clearRect(0, 0, c.width, c.height);
      $("#clickPosition").html('0, 0');
      for(var j = 0; j < i; j++)
         $("#data").remove();
      i = 0;
     lineLength = [];
     x0   = [];
     x1   = [];
     y0   = [];
     y1   = [];
     difference = [];
   }
