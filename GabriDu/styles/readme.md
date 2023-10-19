![Logo](../favicon.ico)
# Documentação CSS/SCSS do projeto GE

O projeto **GE** é um portfólio criado com as principais linguagens para a criação web. Como o projeto está incluso em um grupo, é necessário uma organização de documentos que sejam autoexplicativos em seus nomes.

Neste documento, será explicada a organização dos documentos de estilização **CSS** e **SCSS**.

## Documentos
A organização de documentos é importante para a redução de códigos em um único documento e para facilitar a detecção de trechos de código.

Além disso, torna-se fácil o entendimento não apenas do grupo de programadores, mas também dos futuros programadores, seja porque o grupo cresça ou seja substituído.

Abaixo, é explicado o que é cada documento **.css** ou **.scss** dentro da pasta styles.

### index.scss
>Documento que contém todas as importações de outros documentos .scss, com o objetivo de gerar um documento único **index.css**, sendo chamado pelos documentos **.html**.
>
>Para isso, é necessário instalar um extensor que possibilite a compilação e da geração do documento **.css** único, utilizamos o [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
para isso.

```html
<link rel="stylesheet" href="./styles/index.css">
```

### _config.scss
>Documento que tem a utilidade de armazenar variáveis, como cores, colunas, valores de espaçamentos e outras variáveis. 
```scss
    $colors: (
    primary: #14E3D9,
    secondary: #912BE3,
    ...
    );
    $opacity: (
        100: 1,
        50: .5,
        25: .25
    );
```
>E para utilizar essas variáveis dentro de **_config.css**, é necessário importar o documento no documento **.scss** desejado.

```scss
    @import './config';
```
### _system.scss
>Documento que define as estilizações principais dos elementos HTML, como definições de fontes, tamanhos e cores bases dos elementos, baseados no **Design System** do projeto.


### _utils.scss