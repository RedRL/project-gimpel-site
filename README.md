
# ProjectGimpel (Angular 18, Standalone, SCSS, RTL)

תבנית אתר מוכנה לפריסה תחת `yerushalmi.rl/ProjectGimpel` (או GitHub Pages).

## פקודות

```bash
npm i
npm start
# בנייה רגילה
npm run build
# בנייה ל-GitHub Pages תחת תת-נתיב /ProjectGimpel/
npm run build:gh
```

הקבצים ייווצרו תחת `dist/project-gimpel/`.

## פריסה ל-GitHub Pages

1. צרו ריפו GitHub ושילחו את הקוד.
2. בנו עם:
   ```bash
   npm run build:gh
   ```
3. העלו את התיקייה `dist/project-gimpel` ל-branch בשם `gh-pages` (שורש הענף).
   ניתן לעשות כך:
   ```bash
   git subtree push --prefix dist/project-gimpel origin gh-pages
   ```
   או השתמשו בפתרון אוטומטי של GitHub Actions כפי שמתועד בהמשך.

4. בהגדרות הריפו: Pages → Source: `gh-pages` (root).

5. אם אתם משתמשים בדומיין `yerushalmi.rl`, הגדירו CNAME ל-`USERNAME.github.io` (או לתת-דומיין רלוונטי).
   הוסיפו קובץ `CNAME` ב-`gh-pages` עם הדומיין.

> טיפ: `src/404.html` זהה ל-`index.html` כדי להבטיח SPA fallback ב-GitHub Pages גם ללא hash routing.

## התאמות

- לשינוי כותרות, טקסטים, והמספר: ערכו את רכיבי העמודים ב-`src/app/pages/`.
- לצבעים וסגנון גלובלי: `src/styles.scss`
- ה-Baselink לפריסה בתת-תקייה נקבע ע״י דגל הבנייה `--base-href /ProjectGimpel/`

## הערה

הקוד אינו שולח הודעות אמיתיות — זהו אתר תדמיתי. כאשר תתחברו ל-API, החליפו את פעולת ה״שלחו לי קוד״ בלוגיקה אמיתית.
