## Objetivo
El objetivo de esta prueba es evaluar tu capacidad para estructurar y refactorizar una aplicación React utilizando las mejores prácticas de Clean Architecture, patrones de diseño, y buenas prácticas de desarrollo frontend.

## Requerimientos

### Estilos y Maquetación
- [ ] Configura Tailwind CSS en el proyecto.
- [ ] Agrega estilos básicos para mejorar la visualización de la aplicación.

### Refactor y Funcionalidad
- [ ] Reubica los componentes siguiendo el patrón de Atomic Design.
- [ ] Agrega tipos utilizando TypeScript y separa la lógica de la presentación siguiendo un patrón de Clean Architecture.
- [ ] Al agregar un nuevo ítem, este debe ser el único listado en la pantalla.
- [ ] Agrega validaciones al formulario de adición de ítems.

### Integración
- [ ] Crea un Pull Request (PR) en el repositorio, detallando los cambios realizados.

# Cambios realizados en el proyecto

## Estructura y configuración

- **Se configuró el patrón de diseño Repository** con Inversify para el manejo de dependencias en la carpeta `/src/services`.

  - Esta carpeta incluye:
    - La carpeta **/config**, que contiene:
      - El contexto de los servicios inyectados.
      - La configuración del contenedor de módulos.
      - Los tipos seleccionables.
      
  - En la carpeta **/repositories** se adaptó las clases y las implementaciónes de los servicios utilizando **Axios**.

- **Se agregó la carpeta `/config`** donde se encuentra la configuración general del proyecto, incluyendo la instancia de Axios (**axiosInstance**).

## Componentes

- **Se creó la carpeta `/components`** que se divide en dos subcarpetas:
  
  1. **/features**
     - Contiene las características del proyecto, como sugiere su nombre.
     - Incluye la pantalla principal que implementa servicios y componentes individuales, como el componente **Home**, el cual es la página principal del proyecto.
     
  2. **/ui**
     - Implementa el enfoque de **Design Atomic**.
     - Contiene:
       - **/atoms**: Componentes individuales y reutilizables que cumplen una única función.
       - **/molecules**: Componentes que combinan varios **atoms** y añaden funcionalidades adicionales.

## Helpers

- **Se creó la carpeta `/helpers`** donde se alojan todas las funciones reutilizables que pueden ser útiles a lo largo del proyecto.

## Hooks

- **Se creó la carpeta `/hooks`** que contiene la lógica de los hooks reutilizables.
  
  - Dentro de esta carpeta, **/repositories** aloja los hooks encargados de interactuar con cada servicio individual.

## Estilos

- **Se instaló y configuró Tailwind CSS**.
- **Se agregaron los estilos básicos** requeridos para el proyecto.


## Types

- En la carpeta, **/types** se dejaron todos los archivos de tipos para las respuestas y manejo del tipado.