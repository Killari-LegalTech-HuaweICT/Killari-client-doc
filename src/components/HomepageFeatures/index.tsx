import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// Importamos iconos de Tabler
import { IconBrain, IconShieldLock, IconLayoutDashboard } from '@tabler/icons-react';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Icon: React.ElementType;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Huawei ModelArts",
    Icon: IconBrain,
    description: (
      <Translate id="homepage.feature.modelarts">
        Potenciado por Huawei Cloud AI para ejecutar modelos forenses y análisis de expedientes con alta precisión.
      </Translate>
    ),
  },
  {
    title: "Electron.js",
    Icon: IconLayoutDashboard,
    description: (
      <Translate id="homepage.feature.electron">
        Arquitectura de escritorio robusta y multiplataforma, integrando procesos de sistema nativos con web tech.
      </Translate>
    ),
  },
  {
    title: "React / Mantine",
    Icon: IconShieldLock,
    description: (
      <Translate id="homepage.feature.react">
        Interfaz moderna y accesible construida con componentes reactivos y un sistema de diseño consistente.
      </Translate>
    ),
  },
];

function Feature({ title, Icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center feature-icon-wrapper">
        {/* Renderizamos el icono con el azul eléctrico de Killari */}
        <Icon size={64} stroke={1.5} className="feature-icon" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
