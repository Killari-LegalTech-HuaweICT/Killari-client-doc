import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// Importamos iconos de Tabler
import { IconBrain, IconShieldLock, IconLayoutDashboard } from '@tabler/icons-react';

type FeatureItem = {
  title: string;
  Icon: React.ElementType;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Análisis IA Forense",
    Icon: IconBrain,
    description: (
      <>
        Implementación de algoritmos avanzados mediante <b>Huawei ModelArts</b>{" "}
        para la detección de inconsistencias en expedientes judiciales.
      </>
    ),
  },
  {
    title: "Seguridad de Grado Legal",
    Icon: IconShieldLock,
    description: (
      <>
        Gestión de evidencia digital segura utilizando la infraestructura de
        <b> Huawei Cloud</b>, garantizando la cadena de custodia.
      </>
    ),
  },
  {
    title: "Workspace Intuitivo",
    Icon: IconLayoutDashboard,
    description: (
      <>
        Interfaz de alta fidelidad construida con <b>Electron y Mantine</b>,
        optimizada para el flujo de trabajo de fiscales y abogados.
      </>
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
