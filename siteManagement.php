<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/siteManagement.css">
    <title>Управление сайтом</title>
</head>
<body>
    <div class="aside-menu">
        <h1 class="aside-menu__header">Главная</h1>
        <ul class="edit-menu">
            <li class="menu-item" id="edit-tests">Редактировать тесты</li>
            <li class="menu-item" id="edit-courses">Редактировать курсы</li>
            <li class="menu-item" id="edit-colleges">Редактировать учебные заведения</li>
            <li class="menu-item" id="edit-professions">Редактировать профессии</li>
            <li class="menu-item" id="show-users">Просмотр учетных записей</li>
        </ul>
    </div>
    <div class="main" id="main">
        <?php
            require_once "server/showTable.php";
            showTable('users');
        ?>
    </div>
    <script src="js/selectTable.js"></script>
</body>
</html>