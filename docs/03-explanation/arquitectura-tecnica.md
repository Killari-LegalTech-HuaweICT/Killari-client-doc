# Arquitectura Técnica

A continuación deberías añadir un diagrama (Mermaid) que muestre el flujo: PDF -> Electron -> API -> ModelArts -> Resultado.

Ejemplo (Mermaid):

```mermaid
flowchart LR
  PDF[PDF] --> Electron[Electron Client]
  Electron --> API[API Engine]
  API --> ModelArts[Huawei ModelArts]
  ModelArts --> API
  API --> Electron
```

(Expandir con detalles, dimensionamiento y decisiones de diseño.)
