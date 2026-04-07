# HumanizeSpace – Development Workflow

## 🎯 Goal

Build a simple web app that:

- takes pasted AI-generated text
- removes unnatural spacing
- returns a cleaner version
- works in the browser for anyone

**Tech stack:**
- Vite
- React
- TypeScript
- GitHub
- Vercel

---

## 🧱 Phase 1 — Define the product (MVP)

### Core functionality

Your first version should only:

1. User pastes text  
2. Clicks a button  
3. App cleans spacing  
4. User copies result  

### Do NOT add yet

- accounts  
- database  
- file upload  
- AI APIs  
- multiple modes  

---

## ⚙️ Phase 2 — Setup

### Create project

```bash
npm create vite@latest
```

Choose:
- React
- TypeScript

Then:

```bash
cd naturalspacing
npm install
npm run dev
```

---

### Important files

```text
src/App.tsx
src/main.tsx
```

---

## 🧠 Phase 3 — Core functionality

### Create cleaner

`src/utils/cleanText.ts`

```ts
export function cleanText(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!?;:])/g, "$1")
    .replace(/([.,!?;:])([^\s])/g, "$1 $2")
    .trim();
}
```

---

### UI requirements

- input textarea  
- clean button  
- output textarea  
- copy button  

---

## 🎨 Phase 4 — Interface

### Layout

- title  
- short description  
- input  
- button  
- output  
- copy button  

### UX rules

- clear placeholder  
- output is read-only  
- button disabled if empty  
- copy feedback (“Copied”)  

---

## 🧪 Phase 5 — Improve cleaner

### Handle cases

- multiple spaces  
- spacing before punctuation  
- missing spaces after punctuation  
- line breaks  
- quotes  
- parentheses  

### Rule

Do NOT change meaning. Only fix spacing.

---

## 🟦 Phase 6 — TypeScript usage

### Example

```ts
function cleanText(text: string): string
```

### Benefits

- fewer bugs  
- better autocomplete  
- safer logic  

Keep it simple — no overengineering.

---

## 🧪 Phase 7 — Testing

Create `test-cases.md`

Example:

```text
Input:
Hello  world .

Output:
Hello world.
```

Test:

- short text  
- long text  
- punctuation-heavy  
- line breaks  
- markdown  

---

## 🧱 Phase 8 — Structure

```text
src/
  components/
  utils/
    cleanText.ts
  App.tsx
```

Split files when things get messy.

---

## 🌐 Phase 9 — GitHub setup

```bash
git init
git add .
git commit -m "Initial commit"
```

Add remote:

```bash
git remote add origin https://github.com/YOUR-USERNAME/naturalspacing.git
git branch -M main
git push -u origin main
```

---

## 🚀 Phase 10 — Deploy (Vercel)

1. Push to GitHub  
2. Go to Vercel  
3. Import repo  
4. Deploy  

---

### Default settings

```text
Build Command: npm run build
Output Directory: dist
```

---

## 🔁 Workflow after deployment

```bash
git add .
git commit -m "Update"
git push
```

Auto deploy happens.

---

## ✨ Phase 11 — Polish

- copy button  
- feedback messages  
- better UI  
- mobile support  
- edge cases  

---

## 📄 Phase 12 — README

Include:

- what it does  
- why it exists  
- how to run  
- example input/output  

---

## 🧠 Phase 13 — Definition of done

Your app is successful if:

- runs locally  
- cleans spacing correctly  
- is deployed  
- users can paste → clean → copy  

---

## 🧭 Recommended order

1. setup project  
2. run dev server  
3. build cleaner  
4. connect UI  
5. add copy button  
6. test  
7. push to GitHub  
8. deploy  
9. improve  

---

## 🔁 Daily workflow

Start:

```bash
npm run dev
```

Work on ONE thing:

- cleaner  
- UI  
- feature  

Then:

```bash
git add .
git commit -m "What you changed"
git push
```

---

## ⚠️ Mistakes to avoid

- overengineering  
- styling before logic  
- giant App.tsx  
- breaking text meaning  
- no test cases  

---

## 🚀 Next steps (right now)

1. create Vite + React + TypeScript app  
2. build `cleanText.ts`  
3. connect UI  
4. add copy button  
5. test  
6. push  
7. deploy  

---

## 🧠 Summary

- Vite = speed  
- TypeScript = safety  
- MVP first, polish later  