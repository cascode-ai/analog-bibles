# Golden Solution - A038

## Reference answer

$R = 150\ \Omega$.

- Sheet resistance: $R_\square = \rho/t = (4\times10^{-3}\ \Omega\cdot\mathrm{cm})/(8000\times10^{-8}\ \mathrm{cm}) = 50\ \Omega/\square$ (poly thickness 8000 Å from the side view).
- The unsilicided length is set by the silicide block, $L = 3\ \mu$m; the poly width is $W = 1\ \mu$m, so $N = L/W = 3$ squares.
- $R = 50 \times 3 = 150\ \Omega$ (the silicided poly, contacts and metal outside the block are neglected).

## Grading notes

+2: 150 Ω from $R_\square$ = 50 Ω/□ and 3 squares. +1: correct method with a unit slip corrected in the end, or 150 Ω with the sheet resistance not shown. 0: correct sheet resistance but the number of squares taken from the wrong dimension (e.g. the whole poly length) or inverted (1/3 square, ≈ 17 Ω). −2 (asserted as fact): thickness or units mishandled giving values off by orders of magnitude (e.g. 1.5 Ω or 15 kΩ), or the silicided regions counted as the main resistance.
