# Golden Solution - R448

## Reference answer

$T \approx g_{mE}(r_{OE1}\|r_{OE3})\cdot\dfrac{g_{mT}}{2}\cdot R_{out,CM}$, with $R_{out,CM} = \{(g_{m5}+g_{mb5})r_{O5}r_{OP}\}\,\|\,\{(g_{mNC}+g_{mbNC})r_{ONC}r_{ONS}\}$. For a CM change the source of $M_1$ is driven by the high-impedance tail, so the impedance looking into the drain of $M_1$ is very large (≈ $2g_{m1}r_{O1}r_{OT}$, infinite for an ideal $M_T$) and $r_{O1}$ does not load the folding node; writing $r_{OP}\|r_{O1}$ (the differential-mode value) is a common approximation.

- Break the loop at the gate of $M_T$. A change $v_E$ changes the tail current by $g_{mT}v_E$; by symmetry each input transistor takes $g_{mT}v_E/2$.
- Each input device pulls this extra current out of its folding node. With the output shorted (to find the CM transconductance) the impedance looking into the source of the PMOS cascode is ≈ $1/(g_{m5}+g_{mb5}) \ll r_{OP}$, so all of it is removed from the PMOS cascode branch: $G_{m,CM} \approx g_{mT}/2$, and each output changes by $(g_{mT}v_E/2)R_{out,CM}$ (in the direction opposite to $v_E$).
- $R_1$, $R_2$ carry no current for a CM change; the error amplifier gain is $A_E = g_{mE}(r_{OE1}\|r_{OE3})$.
- Loop gain magnitude $A_E\,(g_{mT}/2)\,R_{out,CM}$, negative feedback ($V_{out,CM}$ up → tail current up → less current into the outputs → outputs down). Compared with controlling the bottom current sources directly, the factor 1/2 (current split between the two halves) appears.

## Grading notes

+2: $T = g_{mE}(r_{OE1}\|r_{OE3})\,(g_{mT}/2)\,R_{out}$ with $R_{out}$ the per-side cascode output resistance (both branches in parallel); dropping $g_{mb}$ is fine, and $r_{OP}$ or $r_{OP}\|r_{O1}$ (the differential-mode value) at the folding node are both accepted. +1: the factor 1/2 missing (using $g_{mT}$ per side) with otherwise correct structure, or $R_{out}$ simplified in a minor way. 0: right idea but $R_{out}$ badly wrong (e.g., $r_{O5}$ only). -2 (asserted as fact): $R_1$/$R_2$ claimed to load the CM loop, the tail-current change claimed to have no effect on the output CM (e.g., "the input pair's CM current is rejected"), or the loop gain written as the differential gain.
