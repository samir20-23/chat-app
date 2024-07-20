<?php
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     include "../config.php";
     session_start();
     $id =  $_SESSION["id"];
     

     if (isset($_POST["condition"]) && $_POST["condition"] == "send") {
          $message = $_POST["message"];

          try {
               $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
               $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

               $insert = $con->prepare("INSERT INTO messages  (message_content , sender_id) VALUES(:message,:senderId)");
               $insert->bindParam(":message", $message);
               $insert->bindParam(":senderId", $id);
               $insert->execute();
               echo "verified";
          } catch (PDOException $e) {
               echo "error";
          }
     }

     if (isset($_POST["condition"]) && $_POST["condition"] == "show") {

          try {
               $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
               $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

               $select  = $con->query("SELECT * FROM messages");
               $fetch = $select->fetchAll(pdo::FETCH_ASSOC);

               echo json_encode($fetch);
          } catch (PDOException $e) {
               echo $e;
          }
     }
}
