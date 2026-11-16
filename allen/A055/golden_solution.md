# Golden Solution - A055

## Reference answer

$R_D = R_S \approx 8.15$ Ω (7.95 Ω of n⁺ diffusion plus 0.2 Ω of contacts).

- From the layout: the active area is 20 µm × 22 µm and the poly gate is 2 µm wide, so drain and source are each a 9 µm × 22 µm n⁺ region. Each has a column of five 2 µm × 2 µm contacts, starting 2 µm from its outer edge, under a 4 µm-wide metal strip.
- Current enters the n⁺ at the contacts and flows to the channel: length 5 µm (from the inner edge of the contacts to the gate edge), width 22 µm, i.e. 5/22 = 0.227 squares × 35 Ω/sq = 7.95 Ω.
- Five contacts in parallel: 1 Ω/5 = 0.2 Ω.
- $R_D = R_S$ = 7.95 + 0.2 = 8.15 Ω (the layout is symmetric).

## Grading notes

+2: $R_D = R_S$ ≈ 8.2 Ω from a 22 µm-wide n⁺ path whose length runs from the contacts to the gate edge, plus 0.2 Ω for five parallel contacts. Measuring the length from the metal edge (4 µm, 6.6 Ω total) or from the contact centres (6 µm, 9.7 Ω total) is acceptable if stated. +1: correct method with the contact resistance omitted or taken as 1 Ω (a single contact), or a slip in the number of squares. 0: the whole 9 µm diffusion taken as the resistor length (14.3 + 0.2 = 14.5 Ω) with otherwise correct reasoning. −2 (asserted as fact): length and width interchanged (≈ 150 Ω), the contacts added in series (5 Ω), the gate length used as the resistor length, or $R_D \ne R_S$ claimed for this symmetric layout. Width and length both misread from the grid by a common scale (e.g. 36 µm and 8 µm) so that their ratio, and hence $R_D = R_S$, still falls in the +2 range: 0 (the resistance is right but the layout reading asserted is wrong), not −2.
