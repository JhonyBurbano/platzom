# Platzom

Platzom es un idioma inventad para el Curso de Fundamentos de Javascript en [Platzi](https://platzi.com)

## Descripión del Idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra inicia con Z, Se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras. Se debe partir a la mitad y unir con un guion de medio
- Si la palabra original es un palindrimo. Ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom('Programar') // Program
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('abecedario') // Zarppe
platzom('sometemos') // SoMeTeMoS
```

## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
