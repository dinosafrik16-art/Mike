:root {
  --bg: #06111f;
  --panel: #0f1c30;
  --panel2: #152741;
  --panel3: #1b3151;
  --line: #2a4363;
  --text: #f8fbff;
  --muted: #9fb1c8;
  --blue: #2f6df6;
  --cyan: #23c4d8;
  --green: #18b981;
  --amber: #f5b642;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(circle at 16% 0%, rgba(47, 109, 246, .24), transparent 34%),
    radial-gradient(circle at 86% 8%, rgba(35, 196, 216, .14), transparent 30%),
    var(--bg);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button,
input {
  font: inherit;
}

button {
  border: 0;
  border-radius: 12px;
  padding: 11px 15px;
  background: var(--blue);
  color: #fff;
  font-weight: 850;
  cursor: pointer;
}

button.secondary {
  background: var(--panel3);
  border: 1px solid var(--line);
}

button.green {
  background: var(--green);
}

button:disabled {
  opacity: .6;
  cursor: default;
}

input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  background: #07111f;
  color: var(--text);
  outline: none;
}

h1,
h2,
p {
  margin: 0;
}

.page {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 26px 0 58px;
}

.top,
.selectedHead {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: flex-start;
}

.top {
  align-items: center;
  margin-bottom: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  display: grid;
  place-items: center;
  font-size: 23px;
  font-weight: 950;
}

.brand strong {
  display: block;
  font-size: 17px;
}

.brand span,
.hero p,
.answers p,
.topic small,
.selectedHead p {
  color: var(--muted);
}

.brand span,
.topic small {
  font-size: 12px;
}

.topActions {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.hero,
.panel,
.answers > div,
.notice {
  background: rgba(15, 28, 48, .92);
  border: 1px solid rgba(159, 177, 200, .16);
  border-radius: 20px;
  box-shadow: 0 28px 90px rgba(0, 0, 0, .32);
}

.hero {
  display: grid;
  grid-template-columns: 1fr 210px;
  gap: 18px;
  padding: 28px;
  margin-bottom: 18px;
  align-items: end;
}

.eyebrow {
  color: #b9dcff;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: .09em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

h1 {
  max-width: 780px;
  font-size: clamp(34px, 5vw, 58px);
  line-height: .98;
  letter-spacing: 0;
  margin-bottom: 16px;
}

.hero p {
  max-width: 720px;
  line-height: 1.62;
  font-size: 15px;
}

.score {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px;
  background: var(--panel2);
}

.score strong {
  display: block;
  font-size: 36px;
}

.score span {
  color: var(--muted);
  font-size: 12px;
}

.notice {
  padding: 12px 14px;
  margin-bottom: 18px;
  color: #bfdbfe;
}

.answers {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 18px;
}

.answers > div {
  min-height: 126px;
  padding: 14px;
  box-shadow: none;
}

.answers strong {
  display: block;
  color: #dbeafe;
  font-size: 13px;
  margin-bottom: 7px;
}

.answers p {
  font-size: 12px;
  line-height: 1.45;
}

.grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 18px;
  align-items: start;
}

.panel {
  padding: 16px;
}

.panelHead {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.panelHead h2 {
  font-size: 21px;
}

.panelHead span {
  color: #cce5ff;
  background: rgba(47, 109, 246, .18);
  border: 1px solid rgba(47, 109, 246, .34);
  border-radius: 999px;
  padding: 5px 9px;
  font-size: 11px;
  font-weight: 900;
}

.topicList {
  display: grid;
  gap: 10px;
}

.topic {
  width: 100%;
  text-align: left;
  color: var(--text);
  background: var(--panel2);
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 14px;
  display: grid;
  gap: 8px;
}

.topic.active {
  border-color: #68adff;
  background: linear-gradient(180deg, rgba(47, 109, 246, .24), rgba(21, 39, 65, .96));
}

.topic span,
.badge {
  display: inline-flex;
  width: fit-content;
  color: #fed7aa;
  background: rgba(245, 182, 66, .13);
  border: 1px solid rgba(245, 182, 66, .34);
  border-radius: 999px;
  padding: 5px 9px;
  font-size: 11px;
  font-weight: 900;
}

.topic span.ok,
.badge.ok {
  color: #bbf7d0;
  background: rgba(24, 185, 129, .13);
  border-color: rgba(24, 185, 129, .34);
}

.selectedHead h2 {
  font-size: 27px;
  line-height: 1.12;
  margin-top: 8px;
}

.selectedHead p {
  margin-top: 8px;
  line-height: 1.5;
}

.tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 14px 0 12px;
}

.tabs button {
  background: #081523;
  border: 1px solid var(--line);
  color: var(--muted);
}

.tabs button.active {
  color: white;
  background: var(--blue);
  border-color: var(--blue);
}

pre {
  min-height: 250px;
  margin: 0;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 15px;
  background: #07111f;
  color: #eaf2ff;
  white-space: pre-wrap;
  line-height: 1.65;
  font-size: 14px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.sources {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.sources a {
  color: #b9dcff;
  text-decoration: none;
  background: rgba(47, 109, 246, .1);
  border: 1px solid rgba(47, 109, 246, .2);
  border-radius: 10px;
  padding: 9px 10px;
  font-size: 13px;
  overflow-wrap: anywhere;
}

.canvasGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 12px;
}

.canvasGrid canvas {
  width: 100%;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: #07111f;
}

.make {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 8px;
  margin-top: 14px;
}

@media (max-width: 1040px) {
  .grid,
  .hero {
    grid-template-columns: 1fr;
  }

  .answers {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .top,
  .selectedHead {
    flex-direction: column;
  }

  .topActions,
  .make {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  .answers,
  .canvasGrid {
    grid-template-columns: 1fr;
  }
}
