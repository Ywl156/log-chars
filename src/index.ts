import charData from './charData';
import type { charDateKey } from './charData';

export type optionsType = {
  point: string; // 描绘路径的主体字符
  colGap: number; // 打印多字符时，相邻的间隙。单位：字符
  wrap: boolean; // 打印多字符时是否换行
  rowGap: number; // 打印多字符换行，行间隙，单位：\n
  random: boolean; // 是否使用randomList内字符随机替换主体字符（不替换空格）
  randomList: string[]; // 待替换的随机字符列表
};

// 默认配置选项
let options: optionsType = {
  point: '^_^',
  colGap: 5,
  wrap: false,
  rowGap: 1,
  random: false,
  randomList: [],
};

// 工具函数：生成一个单位的字符
function addCharUnit() {
  // 根据options.point和options.randomList生成经随机处理的值
  const randomFn = () => {
    let str = '';
    options.point.split('').forEach(val => {
      str += val.trim() ? options.randomList[Math.floor(Math.random() * options.randomList.length)] : ' ';
    });
    return str;
  };
  return options.random && options.randomList.length ? randomFn() : options.point;
}

/**
 * @param charArr /[0-9A-Z]/的字符数组
 * @param u_options
 * ```
 *{
 *  point?: string; // 描绘路径的主体字符，默认 ^_^
 *  colGap?: number; // 打印多字符时，相邻的间隙。单位：字符，默认 5
 *  wrap?: boolean; // 打印多字符时是否换行，默认 false
 *  rowGap?: number; // 打印多字符换行，行间隙，单位：\n，默认 1
 *  random?: boolean; // 是否使用randomList内字符随机替换主体字符（不替换空格），默认 false
 *  randomList?: string[]; // 待替换的随机字符列表，默认 []
 *}
 * ```
 * @description 根据用户传参，打印具体的字符
 */

function logChars(charArr: charDateKey[], u_options?: Partial<optionsType>) {
  options = Object.assign(options, u_options);
  // 参数处理
  if (!options.point.trim()) return;
  if (options.colGap < 0) options.colGap = 0;
  if (options.rowGap <= 0) options.rowGap = 1;

  let arr: number[][][] = [];
  charArr.forEach(char => {
    charData[char] && arr.push(charData[char]);
  });

  const space = ' '.repeat(options.point.length);
  const colGap = ' '.repeat(options.colGap);
  const maxLine = arr.map(val => val.length).reduce((a, b) => (a > b ? a : b));

  if (arr.length > 1 && options.wrap) {
    arr.forEach((char, i) => {
      char.forEach(row => {
        let str = '';
        row.forEach(col => {
          str += col ? addCharUnit() : space;
        });
        console.log(str);
      });
      if (arr.length - 1 !== i) {
        console.log('\n'.repeat(options.rowGap - 1));
      }
    });
  } else {
    for (let i = 0; i < maxLine; i++) {
      let str = '';
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][i]) {
          arr[j][i].forEach(val => {
            str += val ? addCharUnit() : space;
          });
          str += colGap;
        } else {
          str += ' '.repeat(arr[j][0].length * space.length) + colGap;
        }
      }
      console.log(str);
    }
  }
}

export default logChars;
