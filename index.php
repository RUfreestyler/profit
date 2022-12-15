<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="css/itc-slider.css" rel="stylesheet">
  <script src="js/itc-slider.js" defer></script>
  <link rel="shortcut icon" href="images/logo1.png">
  <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:400,700&display=swap&subset=cyrillic-ext" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto|Yeon+Sung&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <title>ProfIT</title>
</head>

<body>

  <header class="header">
    <div class="container">
      <div class="header_inner">
        <a class="logo"><img width="200px" height="150px" src="images/logo.png" alt=""></a>
        <nav class="navigation" role="navigation">
          <ul class="menu">
            <li><a href="#info">ИНФОРМАЦИЯ</a></li>
            <li><a href="#prof">ПРОФЕССИИ</a></li>
            <li><a href="#team">КОМАНДА</a></li>
            <li><a href="#contact">КОНТАКТЫ</a></li>
            <?php if(!isset($_COOKIE['user'])): ?>
              <li>
                <a href="authorization.php">ВХОД</a>
              </li>
            <?php else: ?>
              <li>
                <a href="profile.php">МОЙ ПРОФИЛЬ</a>
              </li>
            <?php endif; ?>
          </ul>
      </div>
    </div>
  </header>

  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">Ваш спутник в мир IT-индустрии</h1>
        <?php if(!isset($_COOKIE['user'])): ?>
            <a class="btn" href="authorization.php">Пройти тест</a>
        <?php else: ?>
            <a class="btn" href="test.html">Пройти тест</a>
        <?php endif; ?>
      </div>

    </div>
  </div>
  <!-- /.intro -->

  <section class="section">
    <div class="container">
      <div class="section__header">
        <article id ="info"> <h2 class="section__title2">Информация o компании</h2></article>
        <div class="section__text">
          <p>Интерактивная цифровая платформа для профориентации школьников и студентов, которая была запущена в декабре 2022 года. 
            Представляет собой онлайн-площадку для выбора IT профессии.
            Проходите наши тесты по профориентации в IT-сфере и получайте индивидуальную траекторию развития в подобранной области. 
            С нашими специалистами Вы получите быструю обратную связь и поддержку в выборе своей профессии :)
            </p>
        </div>
      </div>

      <div class="about">
        <div class="about__item">
          <div class="about__img1">
            <img src="images\circle.png" width="390px" height="390px" class="round" alt="">

          </div>

          <div class="about__text">1</div>
          <div class="about__text2">область</div>

        </div>
        <div class="about__item">
          <div class="about__img1">
            <img src="images\circle.png" width="390px" height="390px" class="round" alt="">

          </div>

          <div class="about__text">100+</div>
          <div class="about__text2">курсов и вузов</div>
        </div>

        <div class="about__item">
          <div class="about__img1">
            <img src="images\circle.png" width="390px" height="390px" class="round" alt="">

          </div>

          <div class="about__text">12</div>
          <div class="about__text2">профессий</div>
        </div>
      </div>

    </div>
    <!-- /.container -->
  </section>

  <section class="section">
    <div class="container2">
      <div class="section__header">
        <article id ="prof"><h2 class="section__title2">Профессии</h2> </article>
			<div class="margin">
				<a href="prof1.html" ><img src="images/prof1.png"  alt="Программист игр" width="350" height="350"></a>
				<a href="prof2.html"><img src="images/prof2.png" alt="Тестировщик" width="350" height="350"></a>
				<a href="prof3.html"><img src="images/prof3.png" alt="Специалист по инф. безопасности" width="350" height="350"></a>
				<a href="prof4.html"><img src="images/prof4.png" alt="Системный администратор" width="350" height="350"></a>
				<a href="prof5.html"><img src="images/prof5.png" alt="Web-дизайнер" width="350" height="350"></a>
				<a href="prof6.html"><img src="images/prof6.png" alt="Data Scientist" width="350" height="350"></a>
				<a href="prof7.html"><img src="images/prof7.png" alt="Системный программист" width="350" height="350"></a>
				<a href="prof8.html"><img src="images/prof8.png" alt="Разработчик программ для персональной электроники" width="350" height="350"></a>
				<a href="prof9.html"><img src="images/prof9.png" alt="Системный менеджер" width="350" height="350"></a>
			</div>
			<div class="margin2">
				<a href="prof10.html"><img src="images/prof10.png" alt="Сценарист игр" width="350" height="350"></a>
				<a href="prof11.html"><img src="images/prof11.png" alt="Администратор базы данных" width="350" height="350"></a>
				<a href="prof12.html"><img src="images/prof12.png" alt="SEO-специалист" width="350" height="350"></a>
			</div>
      </div>
    </div>
  </div>
  </section>
  
  <section class="section">
    <div class="container">
      <div class="section__header">
        <article id ="team"><h2 class="section__title2">Команда</h2> </article>
		<div class="container1">
			<div class="itc-slider" data-slider="itc-slider" data-loop="true" data-autoplay="false">
			<div class="itc-slider__wrapper">
			<div class="itc-slider__items">
				<div class="itc-slider__item"> 
            <div class="about__text3">Дарья</div><img src="images/dasha.jpg" alt="Дарья" width="350" height="450">
				</div>
				<div class="itc-slider__item">
            <div class="about__text3">Максим</div><img src="images/maxxx.jpg" alt="Максим" width="350" height="450">
				</div>
				<div class="itc-slider__item"> 
            <div class="about__text3">Кирилл</div><img src="images/kirik.jpg" alt="Кирилл" width="350" height="450">
				</div>
				<div class="itc-slider__item">
            <div class="about__text3">Наталья</div><img src="images/natalie.jpg" alt="Наталья" width="350" height="450">
				</div>
				<div class="itc-slider__item">
            <div class="about__text3">Илья</div><img src="images/ilya.jpg" alt="Илья" width="350" height="450">
				</div>
				<div class="itc-slider__item">
            <div class="about__text3">Владислав</div><img src="images/vlad.jpg" alt="Владислав" width="350" height="450">
				</div>
			<div class="itc-slider__item">
            <div class="about__text3">Роман</div><img src="images/roman.jpg" alt="Роман" width="350" height="450">
				</div>
        </div>
      </div>
      <button class="itc-slider__btn itc-slider__btn_prev"></button>
      <button class="itc-slider__btn itc-slider__btn_next"></button>
		</div>
      </div>
    </div>
  </div>
  </section>
  
  <section class="section2">
    <div class="container">
      <div class="section__header">
        <article id ="contact"><h2 class="section__title2">Мы в соц. сетях</h2> </article>
		<a href="https://telegram.im/@ProfIT_182"><img src="images/telegram.png" alt="" width="100" height="100" class="round"></a>
		<a href="https://vk.com/profit_18"><img src="images/vk.png" alt="" width="100" height="100" class="round"></a>
		<a href="https://wa.me/79508183156?text=Здравствуйте%2C+у+меня+есть+вопрос"><img src="images/wa.png" alt="" width="100" height="100" class="round"></a>
      </div>
    </div>
  </div>
  </section>
  
  </div>
  </div>

</body>

</html>