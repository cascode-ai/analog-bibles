# Golden Solution - G022

## Reference answer

$f_T \approx 3.5$ GHz, 7.9 GHz and 12.3 GHz at $V_{GS}$ = 1, 1.5 and 2 V (3.3, 7.4 and 11.5 GHz if the $1+\lambda V_{DS}$ factor is left out of $g_m$).

- $f_T = \dfrac{g_m}{2\pi(C_{gs}+C_{gd}+C_{gb})}$ (short-circuited drain, source and body at ac ground).
- $C_{ox} = 4.31$ fF/µm²; $C_{gs} = \tfrac23WLC_{ox} + 2 = 28.75 + 2 = 30.75$ fF; $C_{gd} = 2$ fF (overlap only, active region); total with $C_{gb}$: 37.75 fF.
- $g_m = k'(W/L)(V_{GS}-V_t)(1+\lambda V_{DS}) = 1.94\ \mathrm{mA/V^2}\times V_{ov}\times1.072$: 0.832, 1.87, 2.91 mA/V for $V_{ov}$ = 0.4, 0.9, 1.4 V (all active since $V_{DS} = 3$ V > $V_{ov}$).
- $f_T$ = 0.832 mA/V / (2π·37.75 fF) = 3.51 GHz; 7.89 GHz; 12.3 GHz. $f_T$ grows in proportion to the overdrive.

## Grading notes

+2: the three values within ±5% of either set (3.5/7.9/12.3 or 3.3/7.4/11.5 GHz), with $C_{gs}$ including the 2/3 factor and the overlap, and $C_{gd}$, $C_{gb}$ included. +1: one value off by a slip, or the overlap capacitances (or $C_{gd}$ alone) omitted (≈ 6–12% high). 0: $C_{gb}$ omitted giving values ≈ 15% high, or only one or two of the three bias points right. -2 (asserted as fact): $C_{gs} = WLC_{ox}$ without 2/3 combined with other errors giving values off by > 25%, $f_T$ independent of $V_{GS}$, or $g_m$ computed with a wrong formula (e.g. missing $W/L$).
