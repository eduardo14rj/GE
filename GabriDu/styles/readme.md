![Logo](../favicon.ico)
# Documentação CSS/SCSS do projeto GE

O projeto **GE** é um portfólio que engloba as principais linguagens de criação web. Como faz parte de um grupo, é fundamental manter uma organização dos documentos, garantindo que seus nomes sejam autoexplicativos.

Neste documento, será explicada a organização dos documentos de estilização **CSS** e **SCSS**.

## Documentos
>A organização de documentos é importante para a redução de códigos em um único documento e para facilitar a detecção de trechos de código.
>
>Além disso, torna-se fácil o entendimento não apenas do grupo de programadores, mas também dos futuros programadores, seja porque o grupo cresça ou seja substituído.
>
>Abaixo, é explicado o que é cada documento **.css** ou **.scss** dentro da pasta styles.

### index.scss
Documento que contém todas as importações de outros documentos .scss, com o objetivo de gerar um documento único **index.css**, sendo chamado pelos documentos **.html**.

Para isso, é necessário instalar um extensor que possibilite a compilação e da geração do documento **.css** único, utilizamos o [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
para isso.

```html
<link rel="stylesheet" href="./styles/index.css">
```

### _config.scss
Documento que tem a utilidade de armazenar variáveis, como cores, colunas, valores de espaçamentos e outras variáveis. 
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
E para utilizar essas variáveis dentro de **_config.css**, assim como todos os outros documentos, é necessário importar o documento no lugar desejado.

```scss
    @import './config';
```
### _system.scss
Documento que define as estilizações principais dos elementos HTML, como definições de fontes, tamanhos e cores bases dos elementos, baseados no **Design System** do projeto.

```scss
h1,
h2,
h3,
h4,
h5,
h6,
label,
a,
span {
    font-family: "Inter", "Lato", sans-serif;
}

h1 {
    font-size: 48px;
    line-height: 64px;
}

h2 {
    font-size: 38px;
    line-height: 46px;
}
```



### _utils.scss
Um documento responsável em armazenar pacotes de utilidades para a criação de outra estilizações futuras. Isso ajuda outros documentos de estilizações do projeto, servindo como suporte de pacote de funções e **@includes**.
 ```scss
 @mixin mobile() {
    @media screen and (max-width: 762px) {
        @content;
    }
}
@mixin web(){
    @media (min-width: 762px) {
        @content;
    }
}
 ```

### _classes.scss
Documento que armazena e defina uma série de pacotes de classes prontas para o uso no **.html**. O documento inclusive converta as variáveis armazenadas no documento **_config.scss** em classes únicas ou combinadas usáveis.

>Exemplo da classe definida e convertida em css no index.css:
```css
.m-3 {
  margin: 2rem;
}

.p-3 {
  padding: 2rem;
}

.pt-3 {
  padding-top: 2rem;
}

.mt-3 {
  margin-top: 2rem;
}

.pb-3 {
  padding-bottom: 2rem;
}

.mb-3 {
  margin-bottom: 2rem;
}

.pl-3 {
  padding-left: 2rem;
}

.ml-3 {
  margin-left: 2rem;
}

.pr-3 {
  padding-right: 2rem;
}

.mr-3 {
  margin-right: 2rem;
}
```

### _components.scss
Documento de estilização livre, que também serve para estilizações específicos das páginas em geral.