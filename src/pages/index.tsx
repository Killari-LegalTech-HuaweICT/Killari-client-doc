import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { 
  IconDeviceDesktop, 
  IconServer, 
  IconCloud
} from '@tabler/icons-react';

import styles from './index.module.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  isMain?: boolean;
}

function HeroSection({ title, subtitle, icon, isMain }: HeroSectionProps) {
  return (
    <section className={clsx(isMain ? styles.heroBanner : styles.section)}>
      <div className="container">
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
        <Heading as="h1" className={styles.heroTitle}>
          {title}
        </Heading>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        {isMain && (
          <div className={styles.buttons} style={{marginTop: '2rem'}}>
            <Link
              className="button button--secondary button--lg"
              style={{ backgroundColor: '#22d3ee', color: '#0f172a', border: 'none' }}
              to="/docs/category/-tutoriales">
              Documentación Técnica
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Killari" description="LegalTech Ecosystem">
      <main style={{ backgroundColor: '#0f172a' }}>
        {/* SECCIÓN 1: PRINCIPAL */}
        <HeroSection 
          isMain
          title="KILLARI"
          subtitle="Análisis Legal Inteligente con visión forense, impulsado por Inteligencia Artificial y computación en la nube."
        />

        {/* SECCIÓN 2: CLIENTE */}
        <HeroSection 
          title="Cliente de Escritorio"
          icon={<IconDeviceDesktop size={80} stroke={1} />}
          subtitle="Una interfaz robusta desarrollada en Electron y React (Mantine). Diseñada para la gestión de expedientes pesados, visor documental integrado y workspace de análisis en tiempo real."
        />

        {/* SECCIÓN 3: API */}
        <HeroSection 
          title="API Engine"
          icon={<IconServer size={80} stroke={1} />}
          subtitle="Motor centralizado que orquesta el procesamiento de lenguaje natural (NLP). Gestión escalable de documentos, autenticación segura y servicios de transcripción automatizada."
        />

        {/* SECCIÓN 4: TECNOLOGÍAS */}
        <HeroSection 
          title="Infraestructura Huawei Cloud"
          icon={<IconCloud size={80} stroke={1} />}
          subtitle="Potenciado por Huawei ModelArts para el entrenamiento de modelos de IA, OBS para almacenamiento seguro de evidencia y ECS para una disponibilidad global del 99.9%."
        />
      </main>
    </Layout>
  );
}
