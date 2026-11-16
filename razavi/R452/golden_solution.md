# Golden Solution - R452

## Reference answer

$\mathrm{CMRR} = \dfrac{A_{DM}}{A_{CM}} \approx (1 + 2g_{m1,2}R_{SS})\,g_{m3,4}(r_{O1,2}\|r_{O3,4}) \approx 2g_{m1}g_{m3}R_{SS}(r_{O2}\|r_{O4})$; it is infinite for an ideal tail source.

- Differential gain (single-ended output, active mirror): $A_{DM} = g_{m1,2}(r_{O2}\|r_{O4})$.
- Common-mode gain: a CM input changes each drain current by $\Delta I \approx g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$. The diode-connected $M_3$ converts its share into $-\Delta I/g_{m3}$, and by symmetry the output follows the diode node: $A_{CM} \approx -\dfrac{1}{1 + 2g_{m1,2}R_{SS}}\cdot\dfrac{g_{m1,2}}{g_{m3,4}}$ (neglecting $r_O$ against $1/g_{m3}$) ≈ $-1/(2g_{m3,4}R_{SS})$ for large $R_{SS}$.
- Dividing gives the CMRR above; e.g., with $R_{SS} \sim r_O$ it is of order $(g_m r_O)^2$.
- In this closed-loop circuit the op amp's input CM level follows $V_{in}$, so a finite CMRR shows up as an input-referred error of about $V_{in,CM}/\mathrm{CMRR}$.

## Grading notes

+2: CMRR ≈ $(1+2g_{m1,2}R_{SS})g_{m3,4}(r_{O1,2}\|r_{O3,4})$ or the large-$R_{SS}$ form $2g_{m1}g_{m3}R_{SS}(r_{O2}\|r_{O4})$, with a sensible derivation of $A_{CM}$; noting that it is infinite with an ideal tail is a plus. +1: correct order and dependence (∝ $g_{m3}R_{SS}$ times the differential gain) with a missing factor of about 2 or $(1+\dots)$ detail. 0: $A_{CM}$ derived as for a resistively loaded pair ($\approx r_O/(2R_{SS})$) with otherwise correct logic, or only the ideal-tail result (∞) given with a correct explanation of why. -2 (asserted as fact): CMRR claimed to depend on the feedback capacitors as the main factor, $A_{CM}$ claimed zero with a finite $R_{SS}$ (the flawed symmetry argument), or CMRR given as $A_{DM}$ alone.
