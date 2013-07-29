<html>
<head>
  <title>
    Euclidian Playground
  </title>
  <?php include '../assets/styles/main.scss' ?>
  <?php include '../assets/variables.php' ?>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
  <script type="text/javascript">
    $(document).ready(function(){
      <?php include '../assets/scripts/definitions.js' ?>
      <?php include '../assets/scripts/events.js' ?>
      var prop = $("#prop").val();
      drawProp(prop);
      }); 
  </script>
</head>