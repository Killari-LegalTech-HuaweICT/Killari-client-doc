---
sidebar_position: 3
---

# Arquitectura del sistema

A continuación un diagrama de alto nivel (Mermaid) que muestra el flujo desde el cliente hasta los servicios de IA en la nube.

```mermaid
flowchart LR
  A[Cliente (Electron)] -->|Carga PDF| B[Preprocesado local]
  B -->|Upload| C[OBS (Huawei Cloud)]
  C -->|Trigger| D[ModelArts]
  D -->|Resultados| E[API / Backend]
  E -->|Entrega resultado| A
```

## Componentes

- **Cliente (Electron)**: Interfaz para cargar documentos y revisar resultados.
- **Preprocesado**: OCR/normalización y extracción de metadatos.
- **OBS**: Almacenamiento de evidencia.
- **ModelArts**: Procesamiento/analítica IA.
- **API/Backend**: Orquestación y persistencia de resultados.

> Incluye aquí diagramas más detallados y notas sobre escalabilidad, latencia esperada y patrones de seguridad.
