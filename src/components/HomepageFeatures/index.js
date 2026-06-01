import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Habits & Workouts',
    icon: 'directions_run',
    description: (
      <>
        Track your physical rituals and daily consistency. Build kinetic 
        harmony through streaks, heatmaps, and personal records.
      </>
    ),
  },
  {
    title: 'Moods & Insights',
    icon: 'psychology',
    description: (
      <>
        Chronicle the weather of your mind. Let the Ranger connect your 
        emotional texture to your actions and environment.
      </>
    ),
  },
  {
    title: 'Tasks & Events',
    icon: 'event_note',
    description: (
      <>
        Align your daily actions with your long-term intentions. Manage 
        your horizon through smart events and proactive notifications.
      </>
    ),
  },
  {
    title: 'AI & Media Curation',
    icon: 'auto_stories',
    description: (
      <>
        Curate your intellectual consumption. The Ranger synthesizes your 
        media, journals, and health logs to surface deep patterns.
      </>
    ),
  },
];

function Feature({title, icon, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
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
