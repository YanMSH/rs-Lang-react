import YanPic from '../../assets/img/yan-pic.png';
import KristinaPic from '../../assets/img/kristina-pic.jpg';
import SergeyPic from '../../assets/img/sergey-pic.jpg';
import TanyaPic from '../../assets/img/tanya-pic.jpg';
import AboutPerson from './AboutPerson';
import React from 'react';
import classes from './AboutUs.module.css';
import ClassLister from 'utils/ClassLister';
const AboutUs = () => {
  const classList = ClassLister(classes);

  return (
    <section className={classList('about-us')}>
      <div className={classList('about-us__title', 'block__title')}>Наша команда</div>
      <div className={classList('about-us__card-container')}>
        <AboutPerson
          name="Ян"
          pic={YanPic}
          description="разработчик, тимлид. Разработал архитектуру и UI-дизайн
            приложения. Выполнил страницы: главная, учебник, регистрация, аутентификация"
        />
        <AboutPerson
          name="Сергей"
          pic={SergeyPic}
          description="разработчик. Продумал и реализовал сбор статистики в приложении. Создал игру 'Аудиовызов'"
        />
        <AboutPerson
          name="Кристина"
          pic={KristinaPic}
          description="разработчик. Сделала игру 'Спринт'"
        />
        <AboutPerson
          name="Таня"
          pic={TanyaPic}
          description="ментор. Делилась советами по организации командной работы.
          Помогала в выборе технологий и в продумывании архитектуры приложения"
          mentor={true}
        />
      </div>
    </section>
  );
};

export default AboutUs;
