# Golden Solution - R062

## Reference answer

- $I_D$ vs overdrive (W/L constant): $I_D = \tfrac12\mu C_{ox}(W/L)(V_{GS}-V_{TH})^2$, a parabola from the origin (integrating $g_m \propto V_{GS}-V_{TH}$); slope at each point = $g_m$.
- Overdrive vs $I_D$ (W/L constant): $V_{GS}-V_{TH} = \sqrt{2I_D/[\mu C_{ox}(W/L)]}$, a square-root curve, steep near the origin and flattening (the inverse of the first plot; $g_m \propto \sqrt{I_D}$ and overdrive = $2I_D/g_m$).
- $W/L$ vs overdrive ($I_D$ constant): $W/L = 2I_D/[\mu C_{ox}(V_{GS}-V_{TH})^2]$, falling as $1/(V_{GS}-V_{TH})^2$, steeper than the $1/(V_{GS}-V_{TH})$ fall of $g_m$ in the third panel ($W/L = g_m/[\mu C_{ox}(V_{GS}-V_{TH})]$).

## Grading notes

Three plots, equal weight: parabola, square root, inverse-square. +2: all three correct. +1: all shapes right with one exponent misstated as a slip. 0: two of three correct. -2 (asserted as fact): two or more wrong shapes (e.g., linear $I_D$ vs overdrive, $W/L \propto 1/V_{ov}$ at constant $I_D$ together with another error).
