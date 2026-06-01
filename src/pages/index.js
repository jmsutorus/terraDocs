import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function BrowserFrame({children, url = "docs.earthbound.app"}) {
  return (
    <div className={styles.browserFrame}>
      <div className={styles.browserHeader}>
        <div className={styles.browserDots}>
          <div className={styles.dotRed} />
          <div className={styles.dotYellow} />
          <div className={styles.dotGreen} />
        </div>
        <div className={styles.browserAddress}>{url}</div>
      </div>
      <div className={styles.browserContent}>
        {children}
      </div>
    </div>
  );
}

function MockupContent() {
  return (
    <div className={styles.mockupContainer}>
      <div className={styles.mockupSidebar}>
        <div className={styles.mockupLogo} />
        {[1, 2, 3, 4].map(i => <div key={i} className={styles.mockupNav} />)}
      </div>
      <div className={styles.mockupMain}>
        <div className={styles.mockupHeader}>
          <div className={styles.mockupBreadcrumb} />
          <div className={styles.mockupTitle} />
        </div>
        <div className={styles.mockupBody}>
          <div className={styles.mockupTextLarge} />
          <div className={styles.mockupTextSmall} />
          <div className={styles.mockupTextSmall} style={{width: '60%'}} />
          <div className={styles.mockupGrid}>
            <div className={styles.mockupCard} />
            <div className={styles.mockupCard} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row items--center">
          <div className="col col--6">
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                <span className={styles.pulseDot} />
                Documentation Hub
              </span>
              <Heading as="h1" className={styles.heroTitle}>
                Curate a Life of <span className={styles.accentText}>Intention.</span>
              </Heading>
              <p className={styles.heroSubtitle}>
                A digital sanctuary for the modern archivist. Explore the guides, 
                API references, and philosophy of the Earthbound ecosystem.
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/">
                  Start Your Journey
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="https://earthbound.app">
                  Open Earthbound
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.heroMockup}>
              <BrowserFrame>
                <MockupContent />
              </BrowserFrame>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for the Earthbound personal archive system.">
      <HomepageHeader />
      <main>
        <div className={styles.sectionDivider}>
           <div className="container">
             <div className={styles.dividerLabel}>Core Ecosystem</div>
           </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
