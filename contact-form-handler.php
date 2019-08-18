<?php
  $name = $_POST['სახელი'];
  $visitor_emeal = $_POST['ელ.ფოსტა'];
  $message = $_post['შეტყობინება']

  $email_from = 'temuri.kitoshvili@gmail.com';
  $email_subject = "New Form Submission";
  $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                    "User Message: $message.\n";


  $to = "temuri.kitoshvili@gmail.com";
  $headers = "From: $email_form \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
  header("Location: index.html");
 ?>
