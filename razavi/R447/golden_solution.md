# Golden Solution - R447

## Reference answer

$T \approx g_{mE}(r_{OE1}\|r_{OE3})\cdot g_{m3}\cdot R_{out,CM}$, with $R_{out,CM} = \{(g_{mNC}+g_{mbNC})r_{ONC}r_{O3}\}\,\|\,\{(g_{mPC}+g_{mbPC})r_{OPC}r_{OP}\}$. For a common-mode change the ideal $I_{SS}$ fixes $I_{D1} + I_{D2}$, so by symmetry the input pair carries no CM current and $r_{O1}$ does not load the folding node; writing $r_{OP}\|r_{O1}$ there (the differential-mode value) is a common, acceptable approximation.

- Break the loop at $V_E$. A change $v_E$ changes the drain current of each of $M_3$ and $M_4$ by $g_{m3}v_E$.
- This current flows through the NMOS cascode to the output node of each half; the output common-mode voltage changes by $g_{m3}v_E R_{out,CM}$, where $R_{out,CM}$ is the op amp's output resistance per side (cascode up, cascode down; the folding node sees $r_{OP}$ for a CM change, or $r_{OP}\|r_{O1}$ in the usual approximation). $R_1$, $R_2$ carry no current for a common-mode change, so they do not load it, and the sensed $V_{out,CM}$ equals the output CM change.
- The error amplifier returns $v_E = -A_E v_{out,CM}$ with $A_E = g_{mE}(r_{OE1}\|r_{OE3})$ (active-mirror load).
- Loop gain magnitude: $A_E\,g_{m3}\,R_{out,CM}$; the feedback is negative ($V_{out,CM}$ up → $V_E$ up → $M_3$/$M_4$ sink more → outputs down). Since $g_{m3}R_{out,CM}$ is of the order of the op amp's own gain, $T \approx A_E(g_{m3}/g_{m1})A_{DM}$ is very large.

## Grading notes

+2: $T = g_{mE}(r_{OE1}\|r_{OE3})\,g_{m3}\,R_{out}$ with $R_{out}$ the cascode output resistance per side (both cascode branches in parallel; $r_{OP}$, or $r_{OP}\|r_{O1}$, at the folding node), noting that $R_1$/$R_2$ do not load the CM signal. Neglecting $g_{mb}$ or the $r_{O1}$ term in $R_{out}$ is fine. +1: correct structure but $R_{out}$ simplified incorrectly in a minor way (e.g., only one cascode branch), or the sign/negative-feedback check missing. 0: correct error-amplifier gain and $g_{m3}$ but $R_{out}$ taken as $R_1\|R_2$-loaded or only $r_{O3}$. -2 (asserted as fact): $R_1$, $R_2$ claimed to load the CM loop (e.g., $R_{out} \approx R_1\|R_2$ or $(R_1+R_2)/2$), the loop gain written as the differential gain of the op amp, or the loop misread (e.g., $V_E$ controlling the input pair).
