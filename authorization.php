<!DOCTYPE html>
<html lang="ru">

<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
    <link rel="stylesheet" href="css/auth.css">
</head>

<body>

    <artiсle class="container">  

        <div class="block">

            <section class="block__item block-item">
                <h2 class="block-item__title">У вас уже есть аккаунт?</h2>
                <button class="block-item__btn signin-btn">Войти</button>
            </section>
            <section class="block__item block-item">
                <h2 class="block-item__title">У вас нет аккаунта?</h2>
                <button class="block-item__btn signup-btn">Зарегистрироваться</button>
            </section>

        </div>

        <div class="form-box">

            <form action="server/checkUser.php" class="form form_signin" method="POST"> 
                <h3 class="form__title">Вход</h3>

                <p>
                    <input type="text" class="form__input" name="login" placeholder="Логин">
                </p>
                <p>
                    <input type="password" class="form__input" name="password" placeholder="Пароль">
                </p>
                <p>
                    <button type="submit" class="form__btn" name="do_signup">Войти</button>
                </p>
                <p>
                    <a href="#" class="form__forgot">Восстановить пароль</a>
                </p>
            </form>

            <form action="server/registerUser.php" class="form form_signup" method="POST">
                <h3 class="form__title">Регистрация</h3>

                <p>
                    <input type="email" class="form__input" name="email" placeholder="Email">
                </p>
                <p>
                    <input type="text" class="form__input" name="name" placeholder="Имя">
                </p>
                <p>
                    <input type="text" class="form__input" name="surname" placeholder="Фамилия">
                </p>
                <p>
                    <input type="password" class="form__input" name="password" placeholder="Пароль">
                </p>
                <p>
                    <input type="password" class="form__input" name="repeatedPassword" placeholder="Подтвердите пароль">
                </p>
                <p>
                    <button type="submit" class="form__btn form__btn_signup" name="do_reg">Зарегистрироваться</button>
                </p>
            </form>

        </div>

    </article>
    <script src="js/auth.js"></script>
</body>

</html>