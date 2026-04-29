import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kinetic Harmony',
    description: (
      <>
        Experience a lifestyle companion that moves with you. Terra balances 
        the weight of your daily tasks against the expansive nature of your long-term goals.
      </>
    ),
  },
  {
    title: 'Interconnected Ecosystem',
    description: (
      <>
        Your habits, mood, finances, and relationships aren't isolated. 
        Terra brings them together into a single, cohesive narrative.
      </>
    ),
  },
  {
    title: 'Tactile Reflection',
    description: (
      <>
        Designed like a premium print publication. Terra treats your digital 
        life with the respect and presence of fine paper and ink.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{color: 'var(--color-primary)', marginBottom: '1.5rem', fontWeight: 600}}>{title}</Heading>
        <p style={{lineHeight: '1.6', color: 'var(--color-on-surface-variant)'}}>{description}</p>
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
