<?php
    require_once "connect.php";

    $login = $_POST['login'];
    $password = $_POST['password'];

    $stmt = $db->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $login);
    $stmt->execute();
    $result = $stmt->get_result();

    $users = $result->fetch_all(MYSQLI_ASSOC);
    $user = null;
    if(count($users) > 0)
    {
        $user = current($users);
        if($user['password_hash'] != md5($password))
        {
            //неверный пароль
            exit('Неверный пароль.');
        }
        else
        {
            $cookieOptions = Array('path' => '/');
            setcookie('user', $user['email'], $cookieOptions);
            header('Location: ../index.php');
        }
    }
    else
    {
        //такого пользователя не существует
        exit('Такого пользователь ещё не зарегистрирован.');
    }
     
?>