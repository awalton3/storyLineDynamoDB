<?php

require 'database.php';

if ($_GET['oneLiner'] !== null)
{
  $oneLiner = trim($_GET['oneLiner']);
}
else
{
  return http_response_code(400);
}


$stmt = mysqli_prepare($con, "delete from oneLiners where oneLiner=?");

if ($stmt)
{
  mysqli_stmt_bind_param($stmt, "s", $oneLiner);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_close($stmt);
  http_response_code(200);
}
else
{
  return http_response_code(422);
}

