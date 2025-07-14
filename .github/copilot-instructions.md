You should use, in css, ALWAYS the hsl color format for colors. and the function hsl() should be used with the following parameters:

- hue: 0 to 360 (degrees on the color wheel)
- saturation: 0% to 100% (percentage of color intensity)
- lightness: 0% to 100% (percentage of lightness)

create the variables for the colors in the following format:

```css
:root {
  --color-name: hsl(hue, saturation%, lightness%);
}
```

```css
:root {
  --base-color: hsl(210, 50%, 50%);

  --primary-color: hsl(from var(--base-color), h s l);
  --secondary-color: hsl(from var(--base-color), h s calc(l + 10));
  --tertiary-color: hsl(from var(--base-color), h s calc(l + 20));
  --base-darker-color: hsl(from var(--base-color), h s calc(l - 10));
  --base-blacker-color: hsl(from var(--base-color), h s calc(l - 20));
}
```

Important the from and the var functions, and the new h s l values should be calculated based on the base color.
