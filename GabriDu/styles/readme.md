![Logo](../favicon.ico)
# Documentação CSS/SCSS do projeto GE

O projeto **GE** é um portfólio criado com as principais linguagens para a criação web. Como o projeto está incluso em um grupo, é necessário uma organização de documentos que sejam autoexplicativos em seus nomes.

Neste documento, será explicada a organização dos documentos de estilização **CSS** e **SCSS**.

## Documentos
A organização de documentos é importante para a redução de códigos em um único documento e para facilitar a detecção de trechos de código.

Além disso, torna-se fácil o entendimento não apenas do grupo de programadores, mas também dos futuros programadores, seja porque o grupo cresça ou seja substituído.

Abaixo, é explicado o que é cada documento **.css** ou **.scss** dentro da pasta styles.

### index.scss
>Documento que contém todas as importações dos outros documentos .scss e com isso, gerar um documento único **index.css** para ser chamado pelos documentos **.html**.
>
>Para isso, é necessário instalar um extensor que possibilite a compilação e da geração do documento .css único, utilizamos o [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
para isso.

```html
<link rel="stylesheet" href="./styles/index.css">
```

### _config.scss

### _utils.scss

### _system.scss