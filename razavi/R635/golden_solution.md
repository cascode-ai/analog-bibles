# Golden Solution - R635

## Reference answer

Minimum: $I_{SS,min} = \dfrac{1}{\mu_nC_{ox}(W/L)_{1,2}R_P^2}$ (from $g_{m1,2}R_P \ge 1$).
Maximum (estimate): $I_{SS,max} \approx \dfrac{\pi V_{TH}}{4R_P}$, i.e., ≈ 0.55 V/$R_P$ with $V_{TH} = 0.7$ V, or ≈ 0.8 V/$R_P$ if the body effect is included ($V_{TH} \approx 1.0$ V for a common source node near 2 V).

Derivation:
- Start-up: at equilibrium each transistor carries $I_{SS}/2$, so $g_m = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_{SS}}$. The loop consists of two inverting tuned stages with gain $(g_mR_P)^2$ at resonance (equivalently, the cross-coupled pair presents $-2/g_m$ across the differential tank resistance $2R_P$), so oscillation requires $g_mR_P \ge 1$ → $I_{SS} \ge 1/[\mu_nC_{ox}(W/L)_{1,2}R_P^2]$.
- Swing: once the pair switches completely, each drain current is a square wave between 0 and $I_{SS}$ whose fundamental has amplitude $(2/\pi)I_{SS}$; the tank (impedance $R_P$ at resonance, small at harmonics) gives $V_X = V_{DD} + A\cos\omega t$, $V_Y = V_{DD} - A\cos\omega t$ with $A \approx (2/\pi)I_{SS}R_P$ (differential amplitude $(4/\pi)I_{SS}R_P$).
- Triode check: $M_1$ has its gate at $V_Y$ and its drain at $V_X$. When $M_1$ conducts hardest, $V_X = V_{DD} - A$ while $V_Y = V_{DD} + A$. Saturation requires $V_X \ge V_Y - V_{TH}$ → $2A \le V_{TH}$ → $(4/\pi)I_{SS}R_P \le V_{TH}$ → $I_{SS} \le \pi V_{TH}/(4R_P)$.
- Body effect: the common source node sits near $V_{DD} - V_{GS} \approx 2$ V, giving $V_{TH} \approx 0.7 + 0.45(\sqrt{2.9} - \sqrt{0.9}) \approx 1.04$ V and a limit ≈ 0.8 V/$R_P$. (A cruder estimate taking the single-ended peak swing as $I_{SS}R_P$ gives $V_{TH}/(2R_P)$.)

## Grading notes

Two parts, equal weight. Part 1: $I_{SS,min} = 1/[\mu_nC_{ox}(W/L)_{1,2}R_P^2]$ from $g_mR_P \ge 1$ with $g_m$ evaluated at $I_{SS}/2$ per transistor. Part 2: the drain may fall at most $V_{TH}$ below the gate, with the trough of $V_X$ coinciding with the peak of $V_Y$ ($2A \le V_{TH}$), and $A \approx (2/\pi)I_{SS}R_P$, giving $\pi V_{TH}/(4R_P)$; $V_{TH}$ with or without body effect (0.7 V or ≈ 1.0 V) both fine. +2: both parts. +1: part 1 right and part 2 with the cruder swing estimate $A \approx I_{SS}R_P$ (giving $V_{TH}/(2R_P)$) or a factor slip. 0: one part right, the other missing or wrong. -2 (asserted as fact): start-up condition $g_mR_P \ge 2$ or $\ge 4$ (ring or Colpitts conditions), $g_m$ computed with the full $I_{SS}$ in one transistor, the gate swing ignored in the triode check (gate held at $V_{DD}$) as the main result, or a different circuit (e.g., a current-folding stage) analyzed.
