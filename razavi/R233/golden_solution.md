# Golden Solution - R233

## Reference answer

$V_{out} = 0$ for $V_{DD} < |V_{THP}| = 0.8$ V; it rises for larger $V_{DD}$ and then becomes constant at $V_{out,max} = R_L\dfrac{(W/L)_3}{(W/L)_2}\cdot\tfrac12\mu_nC_{ox}\Big(\dfrac{W}{L}\Big)_1(V_{in}-0.7)^2$ once $M_1$ saturates, i.e., for $V_{DD} \ge |V_{GS2}| + (V_{in} - 0.7)$ (provided $M_3$ is saturated, $V_{DD} - V_{out} \ge |V_{GS3}| - 0.8$).

- The diode $M_2$ needs $|V_{GS2}| > 0.8$ V to conduct, so no current flows below $V_{DD} = 0.8$ V: $I_{D1} = I_{D3} = 0$, $V_{out} = 0$.
- For $V_{DD}$ slightly above 0.8 V, $M_1$ (gate at the fixed $V_{in}$) is in triode with a small $V_{DS1} = V_{DD} - |V_{GS2}|$; the branch current rises with $V_{DD}$ and $M_3$ copies it: $V_{out} = R_L\frac{(W/L)_3}{(W/L)_2}I_{D1}$ rises from zero.
- When $V_{DS1}$ reaches $V_{in} - 0.7$, $M_1$ saturates and $I_{D1} = \tfrac12\mu_nC_{ox}(W/L)_1(V_{in}-0.7)^2$ no longer depends on $V_{DD}$: $V_{out}$ is flat from there to 3 V.
- If $R_L$ is so large that $V_{out,max}$ leaves $M_3$ less than its overdrive, $M_3$ is in triode instead and $V_{out}$ tracks $V_{DD}$ a little below it until $V_{DD}$ is large enough to saturate $M_3$; the plateau is the same.

## Grading notes

+2: zero output up to $V_{DD} \approx 0.8$ V ($|V_{THP}|$ of the diode), a rising segment with $M_1$ in triode, and a plateau equal to $R_L[(W/L)_3/(W/L)_2]\tfrac12\mu_nC_{ox}(W/L)_1(V_{in}-V_{TH})^2$ beyond $V_{DD} \approx |V_{GS2}| + V_{in} - V_{TH}$. Mentioning the $M_3$ saturation condition is a plus, not required. +1: correct plateau and onset but the break point to the plateau missing or misplaced. 0: plateau only (constant $V_{out}$ for all $V_{DD}$). -2 (asserted as fact): $V_{out}$ proportional to $V_{DD}$ throughout, an inverting dependence, nonzero output below 0.8 V, or the mirror ratio inverted.
