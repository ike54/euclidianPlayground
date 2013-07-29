  <select hidden id="prop"><option value="1"></select>
  <?php include './assets/variables.php';
        $prop = 1;
  ?> 
  <?php include './partials/_head.php' ?>
  <?php include './partials/_interface.php' ?>

  <div id="info">        
  <h1>Euclid's Elements<br><small> Book One: Proposition 1</small></h1>
  <h2><i>On a given finite straight line to construct an equilateral triangle.</i></h2>
  <ul>
   <li>Let AB be the given finite straight line.</li>
   <li>Thus it is required to construct an equilateral traingle on the straight line AB.</li>
   <li>With center A and distance AB let the circle BCD be described;</li>
   <li>again, with center B and distance BA let the circle ACE be described;</li>
   <li>and, from the point C, in which the circles cut one another,<br> 
       to the points A, B let the straight lines CA, CB be joined.</li>
   <li>Now, since the point A is the center of the circle CDB, AC is equal to AB.</li>
   <li>Again since the point B is the center of the cirlce CAE, BC is equal to BA.</li>
   <li>But CA was also proved equal to AB; therefore each of the straight lines CA, CB is equal to AB.</li>
   <li>And things which are equal to the same thing are also equal to one another.</li>
   <li>Therefore the triangle ABC is equilateral; and it has been constructed on the given finite straight line AB.</li>
  </ul>
  <h3><i>Q.E.F.</i></h3>
  <input type="button" id="clear1" value="Try for yourself!"><br>
  Select Draw Line or Draw Circle to draw a line from your frist click to your second click,<br>
  or draw a circle where your first click defines the center and the second sets the radius.<br>
  <b>Euclid's technique allows one to draw an exact equilateral trangle with only a straight edge and compass.</b>
  
  </div>
  <?php include './partials/_footer.php' ?>