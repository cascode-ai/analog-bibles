# Golden Solution - R510

## Reference answer

$A_v = V_{out}/V_{in} \approx (g_{m1} + g_{m7}g_{mA}r_{OA})\,R_{out}$ (differential output), with $R_{out} \approx [g_{m5}r_{O5}(r_{O2} \parallel r_{O7})] \parallel [g_{m3}r_{O3}r_{O9}]$ (and symmetrically for the other side).
- Half circuit with $+V_{in}/2$ on the $M_1$/$M_A$ side and $-V_{in}/2$ on the $M_2$/$M_B$ side. Main path: $M_2$'s drain current (drawn from P) falls by $g_{m1}V_{in}/2$, so that much more current flows from P into $M_5$ toward the left output.
- Secondary path: $M_A$'s current rises, and with ideal $I_1$ node X falls by $g_{mA}r_{OA}V_{in}/2$. That raises $|V_{GS7}|$, so $M_7$ pushes $g_{m7}g_{mA}r_{OA}V_{in}/2$ more into P. The two contributions add.
- Short-circuit transconductance per side: $G_m = g_{m1} + g_{m7}g_{mA}r_{OA}$. Each output moves by $\pm G_mR_{out}V_{in}/2$, so the differential gain is $G_mR_{out}$.
- Output resistance: the PMOS cascode $M_5$ over $r_{O7} \parallel r_{O2}$ (folding node), in parallel with the NMOS cascode $M_3$ over $M_9$.
- The gain is boosted by $1 + g_{m7}g_{mA}r_{OA}/g_{m1}$, roughly an intrinsic gain $g_mr_O$ if $g_{m7}$, $g_{mA}$ and $g_{m1}$ are comparable.

## Grading notes

+2: $G_m = g_{m1} + g_{m7}g_{mA}r_{OA}$ (paths adding) times a correct folded-cascode $R_{out}$. A simplified $R_{out}$ such as $(g_{m5}r_{O5}r_{O7}) \parallel (g_{m3}r_{O3}r_{O9})$ is fine if stated. A single-ended gain of half the differential value is accepted if labeled. +1: correct structure with a minor omission in $R_{out}$. 0: only one path counted (main or secondary). -2 (asserted as fact): paths subtracting, node X resistance taken as $r_{OA} \parallel r_{I1}$ with a finite $r_{I1}$ (contradicting the stated assumption), or infinite gain from also dropping $r_{OA}$, or misread connections (e.g., $M_7$ feeding Q, or $M_1$ driving P).
