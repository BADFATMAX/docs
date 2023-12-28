import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


// const FeatureList = [
//   {
//     title: 'Персонализация',
//     Svg: require('@site/static/img/code_head.svg').default,
//     description: (
//       <>
//         Индивидуальный подход к каждому.
//       </>
//     ),
//     SecondParagraph: (
//       <>
//         The First.
//       </>
//     ),
//   },
//   {
//     title: 'Удобство использования',
//     Svg: require('@site/static/img/Code-Head-Prismatic.svg').default,
//     description: (
//       <>
//       Подбор ухода за кожей прямо у Вас в телефоне.

//       </>
//     ),
//     SecondParagraph: (
//       <>
//         The Second.
//       </>
//     ),
//   },
//   {
//     title: 'Экономия',
//     Svg: require('@site/static/img/Code-Head-Text.svg').default,
//     description: (
//       <>
//         Выбор уходовых средств без лишних затрат.
//       </>
//     ),
//     SecondParagraph: (
//       <>
//         The Third.
//       </>
//     ),
//   },
// ];

const FeatureList = [
  {
    title: 'Легок в использовании',
    Svg: require('@site/static/img/s1.svg').default,
    description: (
      <>
        А главное удобен, все что нужно пользователю - подключиться к сайту и пользоваться прекрасными возможностями 
      </>
    ),
  },
  {
    title: 'Поможет разработчикам',
    Svg: require('@site/static/img/s2.svg').default,
    description: (
      <>
        Согласно исследованию рынка, каждый разработчик считает проект полезным
      </>
    ),
  },
  {
    title: 'От русских разработчиком',
    Svg: require('@site/static/img/s3.svg').default,
    description: (
      <>
        Лучшие студенты НГУ делали этот великий проект
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
