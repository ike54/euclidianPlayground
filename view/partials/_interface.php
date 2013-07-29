<body>
  <div id="interface">
    <div id="selection">
    <select id="mode">
       <option value="line">Draw Line</option>
       <option value="circle">Draw Circle</option>
       <option value="label">Label Point</option>
    </select>
    <select id="label">
       <option value="A">A</option>
       <option value="B">B</option>
       <option value="C">C</option>
       <option value="D">D</option>
       <option value="E">E</option>
       <option value="F">F</option>
       <option value="G">G</option>
       <option value="H">H</option>
       <option value="I">I</option>
       <option value="J">J</option>
    </select>
    <div id="position">
  
      <table><tr><td>Current Position: </td><td  id="curPosition">0, 0</td></tr>
             <tr><td>Position Clicked: </td><td  id="clickPosition">0, 0</td></tr></table>
    </div> <!-- position -->

    <input type="button" id="clear" value="Clear">
    <input type="button" id="refDiag" value="Refresh Diagram">
    </div> <!-- selection -->
    <div id="res">
      <table id="results">
      </table>
    </div> <!-- res -->
    <canvas id="canvas" width="750" height="750">
      Your browser does not support the HTML canvas tag.
    </canvas>
    


  </div><!-- interface -->