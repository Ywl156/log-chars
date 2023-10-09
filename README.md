```
lg             gooo         oggo
gg           lg    lo     lo
ll           lo    ol     oo  ggll
og           ol    lo     ll    oo
llgllggg       ogol         olgl

  sscr       ar    sa       ccsh       hscsah         arahha
ac    ar     ra    ar     ca    cr     ha    hs     rc
as           srchrrhr     rsscahah     crsshh         aacr
rc    hc     sc    ac     sc    as     sh  sr             hc
  ssrh       ra    ss     ca    sh     aa    hc     crhhhh
```

### 用途

- 在命令行打印生成简单的自定义字符，如上

### 安装

`npm install log-chars`

### 使用

```javascript
const logChars = require('log-chars');
// or
import logChars from 'log-chars';
// or
<script scr="https://unpkg.com/log-chars/dist/index.js"></script>;

logChars(chars, options);

// chars /[0-9A-Z]/的字符数组，如：['A', 'B', 'C', ...]

// options
/* 
{
    point?: string; // 描绘路径的主体字符，默认 ^_^
    colGap?: number; // 打印多字符时，相邻的间隙。单位：字符，默认 5
    wrap?: boolean; // 打印多字符时是否换行，默认 false
    rowGap?: number; // 打印多字符换行，行间隙，单位：\n，默认 0
    random?: boolean; // 是否使用randomList内字符随机替换主体字符（不替换空格），默认 false
    randomList?: string[]; // 待替换的随机字符列表，默认 []
}
*/
```

### 示例

- `logChars(['A', 'B']);`

```
   ^_^^_^        ^_^^_^^_^
^_^      ^_^     ^_^      ^_^
^_^^_^^_^^_^     ^_^^_^^_^
^_^      ^_^     ^_^      ^_^
^_^      ^_^     ^_^^_^^_^
```

- `logChars(['A', 'B'], { point: '*-*' });`

```
   *-**-*        *-**-**-*
*-*      *-*     *-*      *-*
*-**-**-**-*     *-**-**-*
*-*      *-*     *-*      *-*
*-*      *-*     *-**-**-*
```

- `logChars(['A', 'B'], { point: '*-*', colGap: 10 });`

```
   *-**-*             *-**-**-*
*-*      *-*          *-*      *-*
*-**-**-**-*          *-**-**-*
*-*      *-*          *-*      *-*
*-*      *-*          *-**-**-*
```

- `logChars(['A', 'B'], { point: '*-*', wrap: true });`

```
   *-**-*
*-*      *-*
*-**-**-**-*
*-*      *-*
*-*      *-*

*-**-**-*
*-*      *-*
*-**-**-*
*-*      *-*
*-**-**-*
```

- `logChars(['A', 'B'], { point: '*-*', wrap: true, row: 2 });`

```
   *-**-*
*-*      *-*
*-**-**-**-*
*-*      *-*
*-*      *-*


*-**-**-*
*-*      *-*
*-**-**-*
*-*      *-*
*-**-**-*
```

- `logChars(['A', 'B'], { random: true, randomList: ['h', 'e', 'l', 'l', 'o'] } );`

```
   lhhhll        lleeleeoe
ell      eho     elh      lle
hlohheoloole     lhoellhhh
llh      hle     ell      lll
lhh      hho     elelelhoe
```
