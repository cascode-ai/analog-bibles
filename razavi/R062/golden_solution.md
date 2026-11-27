# Golden Solution - R062

## Reference answer

![Requested plots of the three relationships](/q/R062/solution-01.svg)

The ideal square-law saturation model applies for $V_{ov} = V_{GS}-V_{TH}>0$ and $V_{DS}\ge V_{ov}$. Plots (a) and (b) extend continuously to the origin. At fixed $I_D>0$, plot (c) diverges as $V_{ov}\to0^+$.

- $I_D$ vs overdrive ($W/L$ constant): $I_D = \tfrac12\mu_n C_{ox}(W/L)(V_{GS}-V_{TH})^2$, a parabola from the origin (integrating $g_m \propto V_{GS}-V_{TH}$); slope at each point = $g_m$.
- Overdrive vs $I_D$ ($W/L$ constant): $V_{GS}-V_{TH} = \sqrt{2I_D/[\mu_n C_{ox}(W/L)]}$, a square-root curve, steep near the origin and flattening (the inverse of the first plot; $g_m \propto \sqrt{I_D}$ and overdrive = $2I_D/g_m$).
- $W/L$ vs overdrive ($I_D$ constant): $W/L = 2I_D/[\mu_n C_{ox}(V_{GS}-V_{TH})^2]$, falling as $1/(V_{GS}-V_{TH})^2$, steeper than the $1/(V_{GS}-V_{TH})$ fall of $g_m$ in the third panel ($W/L = g_m/[\mu_n C_{ox}(V_{GS}-V_{TH})]$).

## Grading notes

The parabola, square-root curve, and inverse-square curve carry equal weight. +2: all three shapes and their corresponding conditions are correct. +1: all shapes right with one exponent misstated as a slip. 0: two of three correct. -2 (asserted as fact): two or more wrong shapes (e.g., linear $I_D$ vs overdrive, $W/L \propto 1/V_{ov}$ at constant $I_D$ together with another error).
