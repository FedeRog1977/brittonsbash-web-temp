// import { characterMap } from '../constants/character-map';

export const enrichMarkdown = (content: string) => {
  content = content
    // Desired but doesn't work:
    // .replace(/([^::]+)'(?=^[A-Za-z]+$)/u, '$1&rsquo;')
    // Replace a single-quotations
    .replace(/(?<!`)`(?!`)([^::]+)(?<!')'(?!')/g, '&lsquo;$1&rsquo;')
    // Replace all double-quotations
    .replace(/``([^::]+)''/g, '&ldquo;$1&rdquo;')
    // Replace remaining right-single-quotations (apostrophes)
    .replace(/([^::]+)'/g, '$1&rsquo;')
    // Replace dashes
    .replace(/-/g, '&mdash;')
    // Replace subscript
    .replace(/_\{([^::]+)\}/g, '<sub>$1</sub>')
    // Replace superscript
    .replace(/\^\{([^::]+)\}/g, '<sup>$1</sup>');

  // Unused as Record<> does not support RegExp :(
  // for (const character in characterMap) {
  //   if (content.match(character)) {
  //     content = content.replace(
  //       new RegExp(character, 'u'),
  //       characterMap[character]
  //     );
  //   }
  // }

  return content;
};
