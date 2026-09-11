/**
 * 스킨 생성기가 품질 하한선을 실제로 지키는지 검사한다.
 *
 * 가능한 조합을 전부 돌려 대비 기준 미달이 하나라도 나오면 실패한다.
 * 이 검사가 통과하는 동안에는 AI가 어떤 표를 내놓아도
 * 읽을 수 없는 화면이 나오지 않는다.
 */

import { generateSkin } from "../lib/skin-generator.ts";

const CHROMA = ["zero", "muted", "balanced", "vivid"];
const RADIUS = ["none", "sm", "md", "lg", "full"];
const ELEVATION = ["flat", "subtle", "lifted", "dramatic"];
const BORDER = ["hairline", "strong", "dashed"];
const MOOD = ["light", "dark"];
const FONTS = ["sans", "serif"];
const DENSITY = ["compact", "comfortable", "airy"];
const HUES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

let checked = 0;
const failures = [];

for (const brandHue of HUES) {
  for (const chroma of CHROMA) {
    for (const mood of MOOD) {
      for (const radius of RADIUS) {
        for (const elevation of ELEVATION) {
          for (const border of BORDER) {
            const table = {
              name: `${mood}-${chroma}-${brandHue}`,
              brandHue,
              chroma,
              mood,
              radius,
              elevation,
              border,
              headingFont: FONTS[brandHue % 2],
              density: DENSITY[brandHue % 3],
            };
            const skin = generateSkin(table);
            checked += 1;
            for (const c of skin.contrast) {
              if (c.ratio < c.minimum) {
                failures.push(
                  `${table.name} / ${radius} / ${elevation} / ${border} — ${c.pair} ${c.ratio} < ${c.minimum}`,
                );
              }
            }
          }
        }
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`skin-check: 대비 기준 미달 ${failures.length}건 / 조합 ${checked}개\n`);
  for (const f of failures.slice(0, 20)) console.error(`  ${f}`);
  process.exit(1);
}

console.log(`skin-check: 통과 (조합 ${checked}개, 대비 검사 ${checked * 5}건)`);
