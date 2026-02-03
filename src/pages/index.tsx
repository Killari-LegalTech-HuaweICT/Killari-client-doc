import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Análisis Legal Inteligente impulsado por <b>Huawei Cloud AI</b>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{ 
              backgroundColor: '#22d3ee', 
              color: '#0f172a', 
              border: 'none',
              fontWeight: 'bold'
            }}
            to="/docs/project-innovation/introduction">
            Explorar Innovación - Killari ⚖️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Killari - LegalTech"
      description="Portal de documentación técnica para el ecosistema LegalTech Killari">
      <HomepageHeader />
      <main style={{ backgroundColor: '#0f172a' }}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
