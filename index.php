<?php

  session_start();

  if ($_POST['pageSwitch'] == 'reports') {
    include("reportsView.html");
  } else {
    include("tasksView.html");
  }

  include("scripts.js");
  include("style.css");

?>
