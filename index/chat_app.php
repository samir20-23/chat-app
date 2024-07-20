<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     $uploads_dir = '../images/';
     include "../config.php";
     session_start();

     function moveUploadedFile($file, $uploads_dir)
     {
          $original_name = basename($file["name"]);
          $target_path = $uploads_dir . $original_name;
          if (move_uploaded_file($file["tmp_name"], $target_path)) {
               return $original_name;
          }
          return false;
     }
     if (!empty($_FILES["img"]) && $_FILES['img']['error'] == UPLOAD_ERR_OK) {
          if (!empty($_POST["name"])) {
               $img = moveUploadedFile($_FILES["img"], $uploads_dir);
               // 
               
               if ($img) {
                    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
                    $imgPro = "images/" . $img;
                    try {
                        $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                        $insert = $con->prepare("INSERT INTO $tbname (username, user_pfp) VALUES(:name, :img)");
                        $insert->bindParam(":name", $name);
                        $insert->bindParam(":img", $imgPro);

                        $insert->execute();
                        
                        $select  = $con->query("SELECT user_id FROM $tbname where username = '$name'");
                        $fetch = $select->fetch();
                        $_SESSION["id"] = $fetch["user_id"];
                        echo "verified";
                    } catch (PDOException $e) {
                        echo "error: " . $e->getMessage();
                    }
                } else {
                    echo "invalid";
                }
               // 
          } else {
               echo "emptyName";
               die();
          }
     } else {
          echo "emptyImg";
          die();
     }
}
