# HTML Lists

HTML mein lists ka use related items ko organized form mein display karne ke liye hota hai.

# 1. Unordered List

Unordered list mein items ke samne bullets display hote hain.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```
## Important Tags

```html
<ul> — Unordered List

<li> — List Item

```
# 2. Ordered List

Ordered list mein items numbering ke sath display hote hain.

```html
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>

```

## Ordered List Types

type attribute se numbering ka style change kiya ja sakta hai.

```html
<ol type="1">
    <li>HTML</li>
    <li>CSS</li>
</ol>

<ol type="A">
    <li>HTML</li>
    <li>CSS</li>
</ol>

<ol type="a">
    <li>HTML</li>
    <li>CSS</li>
</ol>

<ol type="I">
    <li>HTML</li>
    <li>CSS</li>
</ol>

<ol type="i">
    <li>HTML</li>
    <li>CSS</li>
</ol>

```
# 3. Description List

Description list kisi term aur uski description ko represent karne ke liye use hoti hai.

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

## Important Tags

```html
<dl> — Description List

<dt> — Description Term

<dd> — Description/Definition

```
# 4. Nested Lists

Ek list ke andar doosri list ko nested list kehte hain.

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend</li>
</ul>

```
# Summary
## Tag	Purpose

```html
<ul>	Unordered list
<ol>	Ordered list
<li>	List item
<dl>	Description list
<dt>	Description term
<dd>	Description/details

```  