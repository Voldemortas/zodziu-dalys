# Žodžių Dalys

## Paskirtis

Šis įrankis skirtas žymėti žodžio dalims (priešdėliams, šaknims, priesagoms, galūnėms ir t.t.).

![žodis pasakėlė suskirstyta žodžio dalimis](/pasakele.png "žodis pasakėlė suskirstyta žodžio dalimis")

[Veikiantis pavyzdys](https://html-preview.github.io/?url=https://github.com/Voldemortas/zodziu-dalys/blob/master/index.html).

## Naudojimas

### CSS klasės

Žodžių dalių žymėjimas ir žymių įpatybės yra valdomos css klasių pagalba.

_ŽYMOS_:

- `zd_prefix` - priešdėlis
- `zd_root` - šaknis
- `zd_suffix` - priesaga
- `zd_flection` - galūnė
- `zd_stem` - kamienas
- `zd_infix` - įterpinys
- `zd_compound` - sudėtinių žodžių jungiamasis balsis
- `zd_reflexive` - sangrąžinė dalelytė

Žymas galima stilizuoti (keisti dydį ir spalvą) paduodant css kintamuosius:

- `--zd-default-size` - numatytasis žymos dydis (numatytoji reikšmė - `1px`)
- `--zd-default-color` - numatytoji žymos spalva (numatytoji reikšmė - `red`)

Taip pat galima stilizuot tik atskirą žymą, pavyzdžiui keičiant `--zd-root-color` bus pakeičiama šaknies žymos spalva

#### Trumpas pavyzdys

```html
<head>
    <!-- css failas -->
    <link rel="stylesheet" href="https://cdn.statically.io/gh/Voldemortas/zodziu-dalys/master/zodziu-dalys.css" />
    <!-- js failas -->
    <script src="https://cdn.statically.io/gh/Voldemortas/zodziu-dalys/master/zodziu-dalys.js"></script>
</head>
<body>
      <div
        style="
          --zd-default-size: 2px;
          --zd-prefix-color: orange;
          --zd-root-color: yellow;
          --zd-suffix-color: green;
          --zd-flection-color: #00aaff;
        "
      >
        <span class="zd_prefix">pa</span><span class="zd_root">sak</span><span class="zd_suffix">ėl</span><span class="zd_flection">ė</span>
      </div>
    </div>
    <script>
        zdDecorateSuffixes() //uždeda priesagų trikampėlius
    </script>
</body>
```

### Javascript dokumentacija

#### Šriftų savybės

![šrifto sąvokų paaiškinimai](/font.png "šrifto sąvokų paaiškinimai")

Iliustracijoje matome 3 dydžius - `top diff`, `x-size` ir `bottom-diff`. Priklausomai nuo šrifto, šie dydžia skiriasi - o tai yra svarbu. Priesagų stogelių aukštis priklauso nuo `top diff`. Mūsų `javascript` funkcijos (kol kas viena) priima `top-diff/font-size` (pastaras yra nurodomas `css`), štai keletas reikšmių:

- `Tahoma` - `0.43`
- `Arial` - `0.38`
- `Comic Sans` - `0.59`

#### Esamas funkcionalumas

```javascript
/**
 * topDiffRatio - jau minėtasis top-diff/font-size su numatytąja reikšme 0.4
 * element - DOM elementas, kurio vaikams bus taikomas žymų uždėjimas, numatytoji reikšmė - visas dokumentas
 */
zdDecorateSuffixes((topDiffRatio = 0.4), (element = document)); //uždeda priesagų stogelius
```

### Ateities planai:

- [ ] leisti visoms žymoms pasirinkti ignoruoti `top-diff` (padaryti, kad jos nebūtų taip aukštai)
- [ ] leisti visoms žymoms pasirinkti ignoruoti `bottom-diff` (padaryti, kad jos nebūtų taip žemai)
- [ ] sukurti WYSIWYG įrankį

© Andrius Simanaitis, 2024
