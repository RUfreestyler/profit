<?php 
    require_once "connect.php";

    $email = $_POST['email'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $password = trim($_POST['password']);
    $repPassword = trim($_POST['repeatedPassword']);

    $stmt = $db->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $users = $result->fetch_all(MYSQLI_ASSOC);
    
    if(count($users) > 0)
    {
        //пользователь с такой почтой уже зарегистрирован
        exit('Пользователь с такой почтой уже зарегистрирован.');
    }
    else if(strcmp($password, $repPassword) != 0)
    {
        //пароли не совпадают
        exit('Пароли не совпадают.');
    }

    $stmt = $db->prepare("INSERT INTO users (email, name, surname, password_hash) VALUES (?, ?, ?, ?)");
    $stmt->bind_param('ssss', $email, $name, $surname, md5($password));
    $stmt->execute();

    $cookieOptions = Array('path' => '/');
    setcookie('user', $email, $cookieOptions);

    header('Location: ../index.php');
?>