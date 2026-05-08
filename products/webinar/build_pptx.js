// 経営者向けAIライブ｜120分ウェビナースライド生成
// 出力: /tmp/slides.pptx

const pptxgen = require('/opt/node22/lib/node_modules/pptxgenjs');
const pres = new pptxgen();

pres.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 inches (16:9)
pres.author = '桜木 健二';
pres.company = 'AI駆動経営ラボ';
pres.title = '社長の30時間を、AIで取り戻す';

// カラーパレット
const C = {
  bg: 'FFF9EE',
  bgWarm: 'FFE9B8',
  ink: '2A2419',
  inkSoft: '4D5862',
  inkMute: '8A929A',
  orange: 'FF8C42',
  orangeDeep: 'E5701F',
  yellow: 'FFD84D',
  yellowSoft: 'FFF1A8',
  green: '5CB85C',
  greenDeep: '3E9A3E',
  red: 'E55A4B',
  redSoft: 'FBE5E1',
  highlight: 'FFE585',
};

// スライド共通設定
pres.defineSlideMaster({
  title: 'STD',
  background: { color: C.bg },
  margin: [0.5, 0.5, 0.5, 0.5],
});

const FONT = 'Yu Gothic UI';
const FONT_BOLD = 'Yu Gothic UI';

function addTag(slide, tag) {
  slide.addText(tag, {
    x: 0.5, y: 0.3, w: 5, h: 0.4,
    fontSize: 12, fontFace: FONT, color: C.orange, bold: true,
    charSpacing: 4,
  });
}

function addPageNum(slide, num, total) {
  slide.addText(`${num} / ${total}`, {
    x: 11.5, y: 0.3, w: 1.3, h: 0.4,
    fontSize: 12, fontFace: FONT, color: C.inkMute, align: 'right',
    italic: true,
  });
}

const TOTAL = 35;

// ========== Slide 1: Cover ==========
let s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.bgWarm };
s.addText('経営者のためのAI活用ライブ', {
  x: 0.5, y: 1.5, w: 12.3, h: 0.6,
  fontSize: 24, fontFace: FONT, color: C.orange, italic: true, align: 'center',
});
s.addText([
  { text: '社長の', options: { color: C.ink } },
  { text: '30時間', options: { color: C.orangeDeep, highlight: C.highlight } },
  { text: 'を、', options: { color: C.ink } },
  { text: '\nAIで取り戻す。', options: { color: C.ink } },
], {
  x: 0.5, y: 2.2, w: 12.3, h: 2.5,
  fontSize: 72, fontFace: FONT_BOLD, bold: true, align: 'center',
});
s.addText('プログラミング知識ゼロでもOK｜"Claude Code" 実装ライブ', {
  x: 0.5, y: 4.8, w: 12.3, h: 0.6,
  fontSize: 24, fontFace: FONT, color: C.inkSoft, bold: true, align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 2, y: 6, w: 9.3, h: 0.7,
  fill: { color: 'FFFFFF' }, line: { color: C.ink, width: 3 },
  rectRadius: 0.35,
});
s.addText('🎤 講師：桜木 健二（東京大学大学院 近山・田浦研究室 卒業）', {
  x: 2, y: 6, w: 9.3, h: 0.7,
  fontSize: 18, fontFace: FONT, bold: true, align: 'center', color: C.ink,
});

// ========== Slide 2: 今日の3つの約束 ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '本日のゴール');
addPageNum(s, 2, TOTAL);
s.addText('120分で持ち帰れるもの', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 44, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
const promises = [
  { num: '1', title: '"ムダ時間" の正体がわかる', desc: 'あなたの月30時間がどこに消えているか' },
  { num: '2', title: '明日からの "1歩目" が決まる', desc: '3つのデモのうち、どれから始めるか' },
  { num: '3', title: '"うちの場合は?" にその場で答える', desc: '個別質問をチャット・音声で受け付けます' },
];
promises.forEach((p, i) => {
  const y = 2.3 + i * 1.5;
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.7, y: y, w: 11.9, h: 1.3,
    fill: { color: 'FFFFFF' }, line: { color: C.ink, width: 3 },
    rectRadius: 0.15,
    shadow: { type: 'outer', color: C.ink, offset: 4, blur: 0, opacity: 1 },
  });
  s.addShape(pres.ShapeType.ellipse, {
    x: 1, y: y + 0.32, w: 0.7, h: 0.7,
    fill: { color: C.orange }, line: { color: C.ink, width: 3 },
  });
  s.addText(p.num, {
    x: 1, y: y + 0.32, w: 0.7, h: 0.7,
    fontSize: 28, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle',
  });
  s.addText(p.title, {
    x: 2, y: y + 0.2, w: 10, h: 0.5,
    fontSize: 22, fontFace: FONT_BOLD, bold: true, color: C.ink,
  });
  s.addText(p.desc, {
    x: 2, y: y + 0.7, w: 10, h: 0.5,
    fontSize: 16, fontFace: FONT, color: C.inkSoft,
  });
});

// ========== Slide 3: 今日やらないこと ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '念のため');
addPageNum(s, 3, TOTAL);
s.addText('今日やらないこと', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 44, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
const notDo = ['❌ AIの未来予測（抽象論）', '❌ プログラミングの技術論', '❌ 売り込み（最後の20分以外は一切ナシ）'];
notDo.forEach((t, i) => {
  s.addText(t, {
    x: 1.5, y: 2.3 + i * 0.9, w: 11, h: 0.7,
    fontSize: 28, fontFace: FONT, color: C.ink, bold: true,
  });
});
s.addShape(pres.ShapeType.rect, {
  x: 0.7, y: 5.5, w: 11.9, h: 1.3,
  fill: { color: C.bgWarm }, line: { color: C.orange, width: 4 },
});
s.addText('残り100分は実際にClaude Codeを動かして、業務がどう消えるかを目の前でお見せします。', {
  x: 1, y: 5.5, w: 11.3, h: 1.3,
  fontSize: 20, fontFace: FONT, color: C.ink, bold: true, align: 'center', valign: 'middle',
});

// ========== Slide 4: 自己紹介 ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.ink };
addPageNum(s, 4, TOTAL);
s.addText('自己紹介', {
  x: 0.5, y: 0.3, w: 5, h: 0.4,
  fontSize: 12, fontFace: FONT, color: C.yellow, bold: true, charSpacing: 4,
});
s.addText('桜木 健二', {
  x: 0.5, y: 1, w: 12.3, h: 1,
  fontSize: 60, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF',
});
const bio = [
  '📚 東京大学大学院 工学系研究科 近山・田浦研究室 卒業',
  '🧠 日本のAI研究の先達 近山隆教授 のもと、AI研究に従事',
  '💼 現在は経営戦略に直結する AI導入支援・コンサルティング',
  '🎤 プロの塾講師経験 を活かした分かりやすい語り口',
];
bio.forEach((t, i) => {
  s.addText(t, {
    x: 0.7, y: 2.3 + i * 0.7, w: 12, h: 0.6,
    fontSize: 22, fontFace: FONT, color: 'FFFFFF',
  });
});
s.addShape(pres.ShapeType.rect, {
  x: 0.5, y: 5.7, w: 12.3, h: 1.3,
  fill: { color: '404040' }, line: { color: C.yellow, width: 6 },
});
s.addText('「難しいことをやさしく、やさしいことをふかく」\nITが苦手な社長にも腑に落ちる伝え方を心がけています。', {
  x: 0.7, y: 5.7, w: 11.9, h: 1.3,
  fontSize: 18, fontFace: FONT, color: 'FFFFFF', italic: true, align: 'center', valign: 'middle',
});

// ========== Slide 5: Section Divider Part 1 ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.ink };
addPageNum(s, 5, TOTAL);
s.addText('PART 1', {
  x: 0.5, y: 1.5, w: 12.3, h: 0.8,
  fontSize: 24, fontFace: FONT, color: C.yellow, bold: true, charSpacing: 8, align: 'center',
});
s.addText('痛みの掘り下げ', {
  x: 0.5, y: 2.5, w: 12.3, h: 2,
  fontSize: 88, fontFace: FONT_BOLD, bold: true, color: C.yellow, align: 'center',
});
s.addText('あなたの時間はどこに消えているのか', {
  x: 0.5, y: 5, w: 12.3, h: 0.6,
  fontSize: 24, fontFace: FONT, color: 'FFFFFF', align: 'center',
});

// ========== Slide 6: 質問 ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.bgWarm };
addPageNum(s, 6, TOTAL);
s.addText('?', {
  x: 0.5, y: 0.3, w: 12.3, h: 2.5,
  fontSize: 200, fontFace: 'Caveat', italic: true, bold: true, color: C.orange, align: 'center',
});
s.addText('先週1週間、', {
  x: 0.5, y: 3, w: 12.3, h: 0.7,
  fontSize: 32, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('「これ、自分じゃなくてもいい仕事だな」', {
  x: 0.5, y: 3.7, w: 12.3, h: 0.7,
  fontSize: 32, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('と思いながらやっていた業務は', {
  x: 0.5, y: 4.4, w: 12.3, h: 0.7,
  fontSize: 32, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('何分ありましたか？', {
  x: 0.5, y: 5.3, w: 12.3, h: 1.2,
  fontSize: 48, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
  highlight: C.highlight,
});

// ========== Slide 7: 30時間 ==========
s = pres.addSlide({ masterName: 'STD' });
addPageNum(s, 7, TOTAL);
s.addText('平均的な経営者で...', {
  x: 0.5, y: 1, w: 12.3, h: 0.7,
  fontSize: 28, fontFace: FONT, color: C.inkSoft, bold: true, align: 'center',
});
s.addText('30', {
  x: 0.5, y: 1.8, w: 12.3, h: 4,
  fontSize: 320, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
s.addText('時間／月。年間で営業日2か月分が消えています。', {
  x: 0.5, y: 6, w: 12.3, h: 0.7,
  fontSize: 24, fontFace: FONT, color: C.ink, bold: true, align: 'center',
});

// ========== Slide 8: 4つの罠 ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '問題の正体');
addPageNum(s, 8, TOTAL);
s.addText('時間を奪う 4つの "あるある"', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
const pains = [
  { emoji: '📝', title: '議事録づくり', time: '月10時間' },
  { emoji: '📰', title: '朝のニュース', time: '月7.5時間' },
  { emoji: '🔍', title: '"あれ、何だっけ" 検索', time: '月5〜8時間' },
  { emoji: '📱', title: 'SNS発信の停滞', time: '機会損失大' },
];
pains.forEach((p, i) => {
  const x = 0.5 + (i % 2) * 6.2;
  const y = 2.2 + Math.floor(i / 2) * 2.3;
  s.addShape(pres.ShapeType.roundRect, {
    x: x, y: y, w: 5.9, h: 2,
    fill: { color: 'FFFFFF' }, line: { color: C.ink, width: 3 },
    rectRadius: 0.15,
    shadow: { type: 'outer', color: C.ink, offset: 4, blur: 0, opacity: 1 },
  });
  s.addText(p.emoji, {
    x: x + 0.3, y: y + 0.4, w: 1.2, h: 1.2,
    fontSize: 56, align: 'center', valign: 'middle',
  });
  s.addText(p.title, {
    x: x + 1.6, y: y + 0.4, w: 4, h: 0.6,
    fontSize: 22, fontFace: FONT_BOLD, bold: true, color: C.ink,
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: x + 1.6, y: y + 1.1, w: 2.5, h: 0.5,
    fill: { color: C.ink }, line: { color: C.ink, width: 1 },
    rectRadius: 0.25,
  });
  s.addText('⏰ ' + p.time, {
    x: x + 1.6, y: y + 1.1, w: 2.5, h: 0.5,
    fontSize: 14, fontFace: FONT, bold: true, color: C.yellow, align: 'center', valign: 'middle',
  });
});

// ========== Slide 9: チャット呼びかけ ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.orange };
addPageNum(s, 9, TOTAL);
s.addText('💬', {
  x: 0.5, y: 0.5, w: 12.3, h: 1.5,
  fontSize: 100, align: 'center',
});
s.addText('当てはまる罠の番号、', {
  x: 0.5, y: 2.5, w: 12.3, h: 1,
  fontSize: 48, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});
s.addText('チャットに書いてください！', {
  x: 0.5, y: 3.5, w: 12.3, h: 1,
  fontSize: 48, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});
s.addText('全部該当する方は「全部」と書いてください 😊', {
  x: 0.5, y: 5.5, w: 12.3, h: 0.6,
  fontSize: 22, fontFace: FONT, color: 'FFFFFF', align: 'center',
});

// ========== Slide 10: これまでの3選択肢 ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '解決策');
addPageNum(s, 10, TOTAL);
s.addText('これまでの選択肢、3つしかなかった', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 36, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
const options = [
  { emoji: '👔', title: '秘書を雇う', desc: '月30〜50万円\n教育リスク', struck: true },
  { emoji: '🚫', title: '業務をやめる', desc: '実際にはやめられない', struck: true },
  { emoji: '⏰', title: '早起きで頑張る', desc: '続かない', struck: true },
  { emoji: '🤖', title: 'AIに任せる', desc: '給与ゼロ\n24時間稼働', struck: false },
];
options.forEach((o, i) => {
  const x = 0.5 + i * 3.1;
  const y = 2.5;
  const w = 2.9;
  const h = 3;
  s.addShape(pres.ShapeType.roundRect, {
    x: x, y: y, w: w, h: h,
    fill: { color: o.struck ? 'FFFFFF' : C.orange },
    line: { color: C.ink, width: 3 },
    rectRadius: 0.2,
    shadow: !o.struck ? { type: 'outer', color: C.ink, offset: 5, blur: 0, opacity: 1 } : undefined,
  });
  s.addText(o.emoji, {
    x: x, y: y + 0.3, w: w, h: 1,
    fontSize: 56, align: 'center',
  });
  s.addText(o.title, {
    x: x, y: y + 1.4, w: w, h: 0.6,
    fontSize: 20, fontFace: FONT_BOLD, bold: true, color: o.struck ? C.ink : 'FFFFFF', align: 'center',
  });
  s.addText(o.desc, {
    x: x, y: y + 2, w: w, h: 1,
    fontSize: 14, fontFace: FONT, color: o.struck ? C.inkMute : 'FFFFFF', align: 'center',
  });
  if (o.struck) {
    s.addShape(pres.ShapeType.line, {
      x: x + 0.3, y: y + 1.5, w: w - 0.6, h: 0,
      line: { color: C.red, width: 4 },
    });
  }
});
s.addText('👑 これが第4の選択肢', {
  x: 9.6, y: 2, w: 3.1, h: 0.5,
  fontSize: 14, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
  fill: { color: C.yellow }, // ここはハイライト用
});
s.addShape(pres.ShapeType.roundRect, {
  x: 9.6, y: 1.95, w: 3.1, h: 0.45,
  fill: { color: C.yellow }, line: { color: C.ink, width: 2 },
  rectRadius: 0.22,
});
s.addText('👑 これが第4の選択肢！', {
  x: 9.6, y: 1.95, w: 3.1, h: 0.45,
  fontSize: 14, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center', valign: 'middle',
});

// ========== Slide 11: Claude Code 紹介 ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '主役の紹介');
addPageNum(s, 11, TOTAL);
s.addText('今日の主役は Claude Code', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
s.addText('Anthropic社（米国）が作った、"経営層に使える" と注目されているAI', {
  x: 0.5, y: 1.7, w: 12.3, h: 0.6,
  fontSize: 18, fontFace: FONT, color: C.inkSoft,
});
// ChatGPT vs Claude Code
s.addShape(pres.ShapeType.roundRect, {
  x: 0.5, y: 2.7, w: 5.5, h: 4,
  fill: { color: 'FFFFFF' }, line: { color: C.ink, width: 3 },
  rectRadius: 0.15,
  shadow: { type: 'outer', color: C.ink, offset: 4, blur: 0, opacity: 1 },
});
s.addText('ChatGPT', {
  x: 0.7, y: 2.9, w: 5.1, h: 0.6,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.inkSoft,
});
['毎回 "ゼロから" の会話', '記憶は引き継がれない', '業務との連携が弱い'].forEach((t, i) => {
  s.addText(`• ${t}`, {
    x: 0.7, y: 3.7 + i * 0.7, w: 5.1, h: 0.5,
    fontSize: 18, fontFace: FONT, color: C.inkSoft,
  });
});
s.addText('VS', {
  x: 6, y: 4, w: 1.3, h: 0.8,
  fontSize: 48, fontFace: FONT_BOLD, bold: true, color: C.orange, align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 7.3, y: 2.7, w: 5.5, h: 4,
  fill: { color: C.orange }, line: { color: C.ink, width: 3 },
  rectRadius: 0.15,
  shadow: { type: 'outer', color: C.ink, offset: 4, blur: 0, opacity: 1 },
});
s.addText('Claude Code', {
  x: 7.5, y: 2.9, w: 5.1, h: 0.6,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF',
});
['あなた専属に "育てられる"', '会社・性格・好みを覚える', '業務ファイルと連携'].forEach((t, i) => {
  s.addText(`✓ ${t}`, {
    x: 7.5, y: 3.7 + i * 0.7, w: 5.1, h: 0.5,
    fontSize: 18, fontFace: FONT, color: 'FFFFFF', bold: true,
  });
});

// ========== Slide 12: 3つの強み ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '3つの強み');
addPageNum(s, 12, TOTAL);
s.addText('Claude Code が経営者に効く理由', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 36, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
const features = [
  { emoji: '🧠', title: '覚え続ける', desc: '会社情報・性格・好みを\n一度伝えれば毎回伝えなくていい' },
  { emoji: '🔌', title: '業務とつながる', desc: 'メール・カレンダー・社内資料と連携\n本物の "実務" に効く' },
  { emoji: '🎯', title: '得意技をしこめる', desc: '繰り返す業務は "型" として登録\n毎回同じ品質で動く' },
];
features.forEach((f, i) => {
  const x = 0.5 + i * 4.2;
  const y = 2.5;
  s.addShape(pres.ShapeType.roundRect, {
    x: x, y: y, w: 4, h: 4,
    fill: { color: C.bgWarm }, line: { color: C.ink, width: 3 },
    rectRadius: 0.2,
    shadow: { type: 'outer', color: C.ink, offset: 5, blur: 0, opacity: 1 },
  });
  s.addText(f.emoji, {
    x: x, y: y + 0.4, w: 4, h: 1.2,
    fontSize: 64, align: 'center',
  });
  s.addText(f.title, {
    x: x, y: y + 1.7, w: 4, h: 0.6,
    fontSize: 22, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
  });
  s.addText(f.desc, {
    x: x + 0.2, y: y + 2.5, w: 3.6, h: 1.4,
    fontSize: 14, fontFace: FONT, color: C.inkSoft, align: 'center',
  });
});

// ========== Slide 13: プログラミング知識不要 ==========
s = pres.addSlide({ masterName: 'STD' });
addPageNum(s, 13, TOTAL);
s.addText('💡', {
  x: 0.5, y: 0.5, w: 12.3, h: 1,
  fontSize: 72, align: 'center',
});
s.addText('必要なのは', {
  x: 0.5, y: 1.7, w: 12.3, h: 0.7,
  fontSize: 36, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('プログラミング知識 ではない', {
  x: 0.5, y: 2.5, w: 12.3, h: 0.8,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: C.red, align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 1.5, y: 4, w: 10.3, h: 2.5,
  fill: { color: C.bgWarm }, line: { color: C.ink, width: 3 },
  rectRadius: 0.2,
  shadow: { type: 'outer', color: C.ink, offset: 6, blur: 0, opacity: 1 },
});
s.addText('必要なのは、', {
  x: 1.5, y: 4.2, w: 10.3, h: 0.6,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('部下に指示を出すスキル。', {
  x: 1.5, y: 4.8, w: 10.3, h: 0.9,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
  highlight: C.highlight,
});
s.addText('つまり、経営者の本業そのもの。', {
  x: 1.5, y: 5.8, w: 10.3, h: 0.6,
  fontSize: 22, fontFace: FONT, color: C.inkSoft, align: 'center',
});

// ========== Slide 14: Section Divider Part 2 ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.ink };
addPageNum(s, 14, TOTAL);
s.addText('PART 2', {
  x: 0.5, y: 1.5, w: 12.3, h: 0.8,
  fontSize: 24, fontFace: FONT, color: C.yellow, bold: true, charSpacing: 8, align: 'center',
});
s.addText('ライブ実演', {
  x: 0.5, y: 2.5, w: 12.3, h: 2,
  fontSize: 88, fontFace: FONT_BOLD, bold: true, color: C.yellow, align: 'center',
});
s.addText('あなたの仕事が、こう変わります', {
  x: 0.5, y: 5, w: 12.3, h: 0.6,
  fontSize: 24, fontFace: FONT, color: 'FFFFFF', align: 'center',
});

// ========== Slide 15: 3デモ概要 ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'これから60分で');
addPageNum(s, 15, TOTAL);
s.addText('3つの実演をお見せします', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
// 表
const demoRows = [
  ['#', 'テーマ', 'Before', 'After'],
  ['1', '議事録から決定事項を抽出', '30分', '90秒'],
  ['2', '朝のニュースを要約', '20分', '1分'],
  ['3', '動画→記事＋SNSに展開', '2.5時間', '5分'],
];
const tblOpts = {
  x: 1, y: 2.5, w: 11.3,
  colW: [1, 6, 2.15, 2.15],
  border: { type: 'solid', color: C.ink, pt: 2 },
  fontSize: 22, fontFace: FONT,
  rowH: 0.8,
};
const tableData = demoRows.map((row, i) => row.map((cell, ci) => {
  if (i === 0) {
    return {
      text: cell,
      options: { fill: { color: C.bgWarm }, bold: true, color: C.ink, align: 'center', valign: 'middle', fontSize: 20 }
    };
  }
  if (ci === 0) {
    return {
      text: cell,
      options: { color: C.orange, bold: true, fontSize: 32, align: 'center', valign: 'middle' }
    };
  }
  if (ci === 3) {
    return {
      text: cell,
      options: { color: C.greenDeep, bold: true, fontSize: 24, align: 'center', valign: 'middle' }
    };
  }
  if (ci === 2) {
    return {
      text: cell,
      options: { color: C.red, fontSize: 22, align: 'center', valign: 'middle' }
    };
  }
  return {
    text: cell,
    options: { color: C.ink, valign: 'middle', fontSize: 18 }
  };
}));
s.addTable(tableData, tblOpts);

// ========== Slide 16: Demo 1 タイトル ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'DEMO 01');
addPageNum(s, 16, TOTAL);
s.addText('議事録づくり、', {
  x: 0.5, y: 1.5, w: 12.3, h: 1.2,
  fontSize: 56, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('ボタン1つで終わります。', {
  x: 0.5, y: 2.7, w: 12.3, h: 1.2,
  fontSize: 56, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
s.addText('30分会議の文字起こし（約8000字）を、Claude Codeで90秒に。', {
  x: 0.5, y: 4.2, w: 12.3, h: 0.6,
  fontSize: 22, fontFace: FONT, color: C.inkSoft, align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 2, y: 5.3, w: 9.3, h: 1.2,
  fill: { color: C.bgWarm }, line: { color: C.ink, width: 3 },
  rectRadius: 0.15,
});
s.addText('▼ 画面共有でライブ実演 ▼', {
  x: 2, y: 5.3, w: 9.3, h: 1.2,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center', valign: 'middle',
});

// ========== Slide 17: Demo 1 Before/After ==========
function addBeforeAfter(slide, title, beforeTime, beforeList, afterTime, afterList) {
  // Before card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 2.4, w: 5.4, h: 4.5,
    fill: { color: C.redSoft }, line: { color: C.ink, width: 3 },
    rectRadius: 0.15,
  });
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.7, y: 2.6, w: 1.5, h: 0.4,
    fill: { color: C.red }, line: { color: C.ink, width: 2 },
    rectRadius: 0.2,
  });
  slide.addText('これまで', {
    x: 0.7, y: 2.6, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle',
  });
  slide.addText(beforeTime, {
    x: 0.7, y: 3.2, w: 5, h: 1,
    fontSize: 44, fontFace: FONT_BOLD, bold: true, color: C.red,
  });
  beforeList.forEach((t, i) => {
    slide.addText(`😩 ${t}`, {
      x: 0.7, y: 4.5 + i * 0.55, w: 5, h: 0.5,
      fontSize: 16, fontFace: FONT, color: C.ink,
    });
  });
  // Arrow
  slide.addText('→', {
    x: 6, y: 4, w: 1.3, h: 1.3,
    fontSize: 64, fontFace: FONT_BOLD, bold: true, color: C.orange, align: 'center',
  });
  // After card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 7.4, y: 2.4, w: 5.4, h: 4.5,
    fill: { color: 'E5F4DC' }, line: { color: C.ink, width: 3 },
    rectRadius: 0.15,
  });
  slide.addShape(pres.ShapeType.roundRect, {
    x: 7.6, y: 2.6, w: 1.5, h: 0.4,
    fill: { color: C.green }, line: { color: C.ink, width: 2 },
    rectRadius: 0.2,
  });
  slide.addText('これから', {
    x: 7.6, y: 2.6, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle',
  });
  slide.addText(afterTime, {
    x: 7.6, y: 3.2, w: 5, h: 1,
    fontSize: 44, fontFace: FONT_BOLD, bold: true, color: C.greenDeep,
  });
  afterList.forEach((t, i) => {
    slide.addText(`✨ ${t}`, {
      x: 7.6, y: 4.5 + i * 0.55, w: 5, h: 0.5,
      fontSize: 16, fontFace: FONT, color: C.ink,
    });
  });
}

s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'DEMO 01｜結果');
addPageNum(s, 17, TOTAL);
s.addText('議事録要約：30分 → 90秒', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 36, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
addBeforeAfter(s,
  '議事録', '30分／回',
  ['録画を見直して文字起こし', '決定事項を箇条書きに', '誰が何やるか整理', '関係者にメール送信'],
  '90秒／回',
  ['録画ファイルを渡すだけ', '決定事項3点を自動抽出', '担当・期限つきの宿題リスト', '"次に判断すべきこと" まで自動']
);

// ========== Slide 18: Demo 1 Result big number ==========
s = pres.addSlide({ masterName: 'STD' });
addPageNum(s, 18, TOTAL);
s.addText('これだけで...', {
  x: 0.5, y: 1, w: 12.3, h: 0.7,
  fontSize: 28, fontFace: FONT, color: C.inkSoft, bold: true, align: 'center',
});
s.addText('10', {
  x: 0.5, y: 2, w: 12.3, h: 3.5,
  fontSize: 280, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
s.addText('時間／月 が消えました', {
  x: 0.5, y: 5.7, w: 12.3, h: 0.7,
  fontSize: 28, fontFace: FONT, color: C.ink, bold: true, align: 'center',
});

// ========== Slide 19: チャット呼びかけ Demo 1 ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.orange };
addPageNum(s, 19, TOTAL);
s.addText('💬', {
  x: 0.5, y: 0.5, w: 12.3, h: 1.5,
  fontSize: 100, align: 'center',
});
s.addText('議事録、', {
  x: 0.5, y: 2.3, w: 12.3, h: 0.8,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});
s.addText('あなたの会社なら', {
  x: 0.5, y: 3.1, w: 12.3, h: 0.8,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});
s.addText('どんな項目が欲しいですか？', {
  x: 0.5, y: 4, w: 12.3, h: 0.9,
  fontSize: 44, fontFace: FONT_BOLD, bold: true, color: C.yellow, align: 'center',
});
s.addText('例：「論点として残ったもの」「役員別のアクション」など', {
  x: 0.5, y: 5.7, w: 12.3, h: 0.6,
  fontSize: 18, fontFace: FONT, color: 'FFFFFF', align: 'center',
});

// ========== Slide 20: Demo 2 タイトル ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'DEMO 02');
addPageNum(s, 20, TOTAL);
s.addText('朝のニュース、', {
  x: 0.5, y: 1.5, w: 12.3, h: 1.2,
  fontSize: 56, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('1分で終わります。', {
  x: 0.5, y: 2.7, w: 12.3, h: 1.2,
  fontSize: 56, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
s.addText('毎朝15〜20分かけているニュースチェックを、"自社目線" の1分ブリーフに。', {
  x: 0.5, y: 4.2, w: 12.3, h: 0.6,
  fontSize: 20, fontFace: FONT, color: C.inkSoft, align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 2, y: 5.3, w: 9.3, h: 1.2,
  fill: { color: C.bgWarm }, line: { color: C.ink, width: 3 },
  rectRadius: 0.15,
});
s.addText('▼ 画面共有でライブ実演 ▼', {
  x: 2, y: 5.3, w: 9.3, h: 1.2,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center', valign: 'middle',
});

// ========== Slide 21: Demo 2 Before/After ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'DEMO 02｜結果');
addPageNum(s, 21, TOTAL);
s.addText('朝のニュース：20分 → 1分', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 36, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
addBeforeAfter(s,
  '朝のニュース', '15〜20分／日',
  ['ニュースアプリを開く', 'Slackの未読を流し読み', '業界メディアを巡回', '頭が散らかったまま朝MTG'],
  '1分／日',
  ['3行で今朝のサマリ', '競合の動きと自社への影響', '今日の判断に効く1件', '判断モードで朝MTGへ']
);

// ========== Slide 22: Demo 2 Result ==========
s = pres.addSlide({ masterName: 'STD' });
addPageNum(s, 22, TOTAL);
s.addText('さらに...', {
  x: 0.5, y: 1, w: 12.3, h: 0.7,
  fontSize: 28, fontFace: FONT, color: C.inkSoft, bold: true, align: 'center',
});
s.addText('7.5', {
  x: 0.5, y: 2, w: 12.3, h: 3.5,
  fontSize: 240, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
s.addText('時間／月 が消えます。合計 17.5時間／月。', {
  x: 0.5, y: 5.7, w: 12.3, h: 0.7,
  fontSize: 24, fontFace: FONT, color: C.ink, bold: true, align: 'center',
});

// ========== Slide 23: Demo 3 タイトル ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'DEMO 03');
addPageNum(s, 23, TOTAL);
s.addText('動画やPodcastを、', {
  x: 0.5, y: 1.5, w: 12.3, h: 1.2,
  fontSize: 50, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('5分で記事＋SNSに展開。', {
  x: 0.5, y: 2.7, w: 12.3, h: 1.2,
  fontSize: 50, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
s.addText('20分のPodcast音声から、note記事・X・LinkedIn・社内サマリを一気に生成。', {
  x: 0.5, y: 4.2, w: 12.3, h: 0.6,
  fontSize: 18, fontFace: FONT, color: C.inkSoft, align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 2, y: 5.3, w: 9.3, h: 1.2,
  fill: { color: C.bgWarm }, line: { color: C.ink, width: 3 },
  rectRadius: 0.15,
});
s.addText('▼ 画面共有でライブ実演 ▼', {
  x: 2, y: 5.3, w: 9.3, h: 1.2,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center', valign: 'middle',
});

// ========== Slide 24: Demo 3 Before/After ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'DEMO 03｜結果');
addPageNum(s, 24, TOTAL);
s.addText('SNS発信：2.5時間 → 5分', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 36, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
addBeforeAfter(s,
  'SNS', '2〜3時間／本',
  ['文字起こしを読み返す', 'note記事に書き直す', 'X用に短く整える', '気力切れて、結局やめる'],
  '5分／本',
  ['note記事（章立てつき）', 'X投稿スレッド', 'LinkedIn投稿', '社内Slack共有用サマリ']
);

// ========== Slide 25: 3デモのサマリ ==========
s = pres.addSlide({ masterName: 'STD' });
addPageNum(s, 25, TOTAL);
s.addText('3つだけで...', {
  x: 0.5, y: 0.8, w: 12.3, h: 0.9,
  fontSize: 48, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 1.5, y: 2.2, w: 10.3, h: 4.5,
  fill: { color: C.ink }, line: { color: C.ink, width: 3 },
  rectRadius: 0.2,
  shadow: { type: 'outer', color: C.orange, offset: 8, blur: 0, opacity: 1 },
});
s.addText('月に', {
  x: 1.5, y: 2.5, w: 10.3, h: 0.6,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});
s.addText('20〜25', {
  x: 1.5, y: 3.1, w: 10.3, h: 2.5,
  fontSize: 160, fontFace: FONT_BOLD, bold: true, color: C.yellow, align: 'center',
});
s.addText('時間 取り戻せます', {
  x: 1.5, y: 5.8, w: 10.3, h: 0.7,
  fontSize: 32, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});

// ========== Slide 26: 釣り方を教える ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.bgWarm };
addPageNum(s, 26, TOTAL);
s.addText('🎣', {
  x: 0.5, y: 0.5, w: 12.3, h: 1,
  fontSize: 72, align: 'center',
});
s.addText('今日のデモは "魚を見せた" だけ', {
  x: 0.5, y: 1.7, w: 12.3, h: 0.9,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('本当に手に入れるべきは、', {
  x: 0.5, y: 3, w: 12.3, h: 0.7,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('"釣り方" です。', {
  x: 0.5, y: 3.8, w: 12.3, h: 1.2,
  fontSize: 64, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
  highlight: C.highlight,
});
s.addText('自分の業務に合わせて、新しいスキルを 自分で作れる状態。', {
  x: 0.5, y: 5.5, w: 12.3, h: 0.7,
  fontSize: 22, fontFace: FONT, color: C.inkSoft, align: 'center',
});

// ========== Slide 27: Section Divider Part 3 ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.ink };
addPageNum(s, 27, TOTAL);
s.addText('PART 3', {
  x: 0.5, y: 1.5, w: 12.3, h: 0.8,
  fontSize: 24, fontFace: FONT, color: C.yellow, bold: true, charSpacing: 8, align: 'center',
});
s.addText('これから', {
  x: 0.5, y: 2.5, w: 12.3, h: 2,
  fontSize: 88, fontFace: FONT_BOLD, bold: true, color: C.yellow, align: 'center',
});
s.addText('あなたが選べる3つの選択肢', {
  x: 0.5, y: 5, w: 12.3, h: 0.6,
  fontSize: 24, fontFace: FONT, color: 'FFFFFF', align: 'center',
});

// ========== Slide 28: 3つの選択肢 ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '今日からの');
addPageNum(s, 28, TOTAL);
s.addText('3つの選択肢', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 44, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
const choices = [
  { num: '①', title: '何もしない', desc: '来月も同じ業務に追われる', highlight: false },
  { num: '②', title: '自分で頑張る', desc: '公式ドキュメントで独学｜3〜6か月かかる', highlight: false },
  { num: '③', title: '私と一緒にやる', desc: '1か月で実装｜月30時間を取り戻す', highlight: true },
];
choices.forEach((c, i) => {
  const y = 2.4 + i * 1.5;
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.7, y: y, w: 11.9, h: 1.3,
    fill: { color: c.highlight ? C.orange : 'FFFFFF' },
    line: { color: C.ink, width: 3 },
    rectRadius: 0.15,
    shadow: c.highlight ? { type: 'outer', color: C.ink, offset: 5, blur: 0, opacity: 1 } : undefined,
  });
  s.addText(c.num, {
    x: 0.9, y: y + 0.2, w: 1, h: 0.9,
    fontSize: 44, fontFace: FONT_BOLD, bold: true,
    color: c.highlight ? C.yellow : C.inkMute,
    align: 'center', valign: 'middle',
  });
  s.addText(c.title, {
    x: 2.2, y: y + 0.15, w: 10, h: 0.55,
    fontSize: 22, fontFace: FONT_BOLD, bold: true,
    color: c.highlight ? 'FFFFFF' : C.ink,
  });
  s.addText(c.desc, {
    x: 2.2, y: y + 0.7, w: 10, h: 0.5,
    fontSize: 14, fontFace: FONT,
    color: c.highlight ? 'FFFFFF' : C.inkSoft,
  });
});

// ========== Slide 29: AI顧問サービス ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, 'サービス紹介');
addPageNum(s, 29, TOTAL);
s.addText('AIチーフ・オブ・スタッフ顧問', {
  x: 0.5, y: 0.9, w: 12.3, h: 0.9,
  fontSize: 36, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep,
});
s.addText('経営者専属のAIを、1か月で立ち上げ・運用する伴走サービス', {
  x: 0.5, y: 1.7, w: 12.3, h: 0.5,
  fontSize: 18, fontFace: FONT, color: C.inkSoft,
});
const serviceTbl = [
  ['期間', 'サポート内容'],
  ['第1月（ブースト期）', '週1ミーティング × 4回｜環境構築 → スキル3本 → 意思決定支援 → 発信'],
  ['第2〜3月（定着期）', '隔週ミーティング'],
  ['第4月以降（運用期）', '月1ミーティング'],
  ['全期間', 'Slack質問無制限・月配布スキル・月1グループ会'],
];
const tblData = serviceTbl.map((row, i) => row.map((cell, ci) => {
  if (i === 0) {
    return { text: cell, options: { fill: { color: C.bgWarm }, bold: true, color: C.ink, valign: 'middle', fontSize: 16 } };
  }
  return { text: cell, options: { color: C.ink, valign: 'middle', fontSize: 14, bold: ci === 0 } };
}));
s.addTable(tblData, {
  x: 0.5, y: 2.5, w: 12.3,
  colW: [3.5, 8.8],
  border: { type: 'solid', color: C.ink, pt: 2 },
  fontFace: FONT,
  rowH: 0.7,
});

// ========== Slide 30: 価格 ==========
s = pres.addSlide({ masterName: 'STD' });
addTag(s, '価格');
addPageNum(s, 30, TOTAL);
s.addText('月額（最低3か月継続）', {
  x: 0.5, y: 1, w: 12.3, h: 0.7,
  fontSize: 24, fontFace: FONT_BOLD, bold: true, color: C.inkSoft, align: 'center',
});
s.addText('¥50,000', {
  x: 0.5, y: 1.8, w: 12.3, h: 2.5,
  fontSize: 200, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('／月', {
  x: 0.5, y: 4.3, w: 12.3, h: 0.5,
  fontSize: 24, fontFace: FONT, color: C.inkSoft, align: 'center',
});
// 比較
const compares = [
  { label: '秘書1人', value: '月30〜50万' },
  { label: '経営コーチ', value: '月10〜20万' },
  { label: '本サービス', value: '月5万', highlight: true },
];
compares.forEach((c, i) => {
  const x = 1.5 + i * 3.5;
  s.addShape(pres.ShapeType.roundRect, {
    x: x, y: 5, w: 3.2, h: 1.3,
    fill: { color: c.highlight ? C.yellow : 'FFFFFF' },
    line: { color: C.ink, width: 3 },
    rectRadius: 0.15,
    shadow: { type: 'outer', color: C.ink, offset: 3, blur: 0, opacity: 1 },
  });
  s.addText(c.label, {
    x: x, y: 5.1, w: 3.2, h: 0.4,
    fontSize: 14, fontFace: FONT, color: C.inkMute, align: 'center',
  });
  s.addText(c.value, {
    x: x, y: 5.5, w: 3.2, h: 0.7,
    fontSize: 22, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
  });
});

// ========== Slide 31: 3か月一括割引 ==========
s = pres.addSlide({ masterName: 'STD' });
addPageNum(s, 31, TOTAL);
s.addText('3か月一括前払いで...', {
  x: 0.5, y: 1.2, w: 12.3, h: 0.7,
  fontSize: 28, fontFace: FONT, color: C.inkSoft, align: 'center',
});
// Before
s.addText('通常', {
  x: 0.5, y: 2.5, w: 4, h: 0.5,
  fontSize: 18, fontFace: FONT, color: C.inkMute, align: 'center',
});
s.addText('¥150,000', {
  x: 0.5, y: 3, w: 4, h: 1.2,
  fontSize: 56, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center', strike: true,
});
// Arrow
s.addText('→', {
  x: 4.5, y: 3, w: 1.3, h: 1.2,
  fontSize: 64, fontFace: FONT_BOLD, bold: true, color: C.orange, align: 'center',
});
// After
s.addShape(pres.ShapeType.roundRect, {
  x: 6, y: 2.3, w: 6.5, h: 2.5,
  fill: { color: C.orange }, line: { color: C.ink, width: 3 },
  rectRadius: 0.15,
  shadow: { type: 'outer', color: C.ink, offset: 5, blur: 0, opacity: 1 },
});
s.addText('一括だと', {
  x: 6, y: 2.5, w: 6.5, h: 0.5,
  fontSize: 18, fontFace: FONT_BOLD, bold: true, color: C.yellow, align: 'center',
});
s.addText('¥138,000', {
  x: 6, y: 3, w: 6.5, h: 1.5,
  fontSize: 64, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});
s.addText('実質 ¥12,000 引き', {
  x: 0.5, y: 5.5, w: 12.3, h: 0.7,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});

// ========== Slide 32: 個別診断 ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.bgWarm };
addTag(s, '本日限定オファー');
addPageNum(s, 32, TOTAL);
s.addText('15分の 無料個別診断 をプレゼント', {
  x: 0.5, y: 0.9, w: 12.3, h: 1,
  fontSize: 38, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
const consultBenefits = [
  '✅ あなたの業務をヒアリング',
  '✅ どのデモが一番効くかを一緒に見極める',
  '✅ "あなたの業務でClaude Codeが何を自動化できるか" の即興デモ',
  '✅ AI顧問が合うかどうか、率直にお話します（合わなければ「合わない」と言います）',
];
consultBenefits.forEach((t, i) => {
  s.addText(t, {
    x: 1, y: 2.3 + i * 0.7, w: 11.3, h: 0.6,
    fontSize: 20, fontFace: FONT, color: C.ink,
  });
});
s.addShape(pres.ShapeType.rect, {
  x: 0.5, y: 5.7, w: 12.3, h: 1,
  fill: { color: C.ink }, line: { color: C.ink, width: 2 },
});
s.addText('⚠️ 診断枠は 今月10名のみ｜LP下部のフォームから予約', {
  x: 0.5, y: 5.7, w: 12.3, h: 1,
  fontSize: 22, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle',
});

// ========== Slide 33: CTA ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.orange };
addPageNum(s, 33, TOTAL);
s.addText('📋', {
  x: 0.5, y: 0.5, w: 12.3, h: 1.5,
  fontSize: 100, align: 'center',
});
s.addText('個別診断のお申し込み', {
  x: 0.5, y: 2.3, w: 12.3, h: 1,
  fontSize: 56, fontFace: FONT_BOLD, bold: true, color: 'FFFFFF', align: 'center',
});
s.addText('LP下部の申込フォームから、1分で予約できます', {
  x: 0.5, y: 3.5, w: 12.3, h: 0.6,
  fontSize: 22, fontFace: FONT, color: 'FFFFFF', align: 'center',
});
s.addShape(pres.ShapeType.roundRect, {
  x: 2, y: 4.5, w: 9.3, h: 1.2,
  fill: { color: 'FFFFFF' }, line: { color: C.ink, width: 3 },
  rectRadius: 0.6,
  shadow: { type: 'outer', color: C.ink, offset: 6, blur: 0, opacity: 1 },
});
s.addText('👉 [短縮URL or QRコード]', {
  x: 2, y: 4.5, w: 9.3, h: 1.2,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center', valign: 'middle',
});
s.addText('「とりあえず話だけ聞きたい」で全く構いません', {
  x: 0.5, y: 6.2, w: 12.3, h: 0.5,
  fontSize: 18, fontFace: FONT, color: 'FFFFFF', align: 'center',
});

// ========== Slide 34: 最後に ==========
s = pres.addSlide({ masterName: 'STD' });
addPageNum(s, 34, TOTAL);
s.addText('最後にひとつだけ', {
  x: 0.5, y: 0.7, w: 12.3, h: 0.9,
  fontSize: 40, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});
s.addShape(pres.ShapeType.rect, {
  x: 1, y: 2, w: 11.3, h: 2.5,
  fill: { color: C.bgWarm }, line: { color: C.orange, width: 4 },
});
s.addText('今日参加された時点で、皆さんはすでに上位5%の経営者です。', {
  x: 1.2, y: 2.2, w: 10.9, h: 0.8,
  fontSize: 22, fontFace: FONT_BOLD, bold: true, color: C.ink, align: 'center',
});
s.addText('AIに対して "知りたい" "試したい" と能動的に動ける経営者は、', {
  x: 1.2, y: 3.1, w: 10.9, h: 0.6,
  fontSize: 18, fontFace: FONT, color: C.inkSoft, align: 'center',
});
s.addText('まだ全体のごく一部です。', {
  x: 1.2, y: 3.7, w: 10.9, h: 0.6,
  fontSize: 18, fontFace: FONT, color: C.inkSoft, align: 'center',
});
s.addText('30時間を取り戻すか、来月も議事録に追われるか。', {
  x: 0.5, y: 5, w: 12.3, h: 0.7,
  fontSize: 22, fontFace: FONT, color: C.ink, align: 'center',
});
s.addText('決められるのは、社長、あなただけです。', {
  x: 0.5, y: 5.8, w: 12.3, h: 0.8,
  fontSize: 28, fontFace: FONT_BOLD, bold: true, color: C.orangeDeep, align: 'center',
});

// ========== Slide 35: ありがとうございました ==========
s = pres.addSlide({ masterName: 'STD' });
s.background = { color: C.ink };
addPageNum(s, 35, TOTAL);
s.addText('🙏', {
  x: 0.5, y: 1, w: 12.3, h: 1.5,
  fontSize: 80, align: 'center',
});
s.addText('ありがとうございました', {
  x: 0.5, y: 2.7, w: 12.3, h: 1.5,
  fontSize: 72, fontFace: FONT_BOLD, bold: true, color: C.yellow, align: 'center',
});
s.addText('桜木 健二｜AI駆動経営ラボ 主宰', {
  x: 0.5, y: 5, w: 12.3, h: 0.6,
  fontSize: 24, fontFace: FONT, color: 'FFFFFF', align: 'center',
});
s.addText('note：[URL]｜X：[URL]｜お問い合わせ：[email]', {
  x: 0.5, y: 5.7, w: 12.3, h: 0.5,
  fontSize: 16, fontFace: FONT, color: 'FFFFFF', italic: true, align: 'center',
});

// ファイル保存
pres.writeFile({ fileName: '/tmp/slides.pptx' }).then(file => {
  console.log('PPTX saved:', file);
}).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
