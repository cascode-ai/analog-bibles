# Golden Solution - R268

## Reference answer

- At $t = 0^+$ node X is at the gate/drain voltage of $M_2$ plus $V_{DD}$, i.e., above $V_{DD}$, so $M_3$ is off and $V_Y = V_{DD}$. The diode node (gate of $M_1$, $M_2$) settles at $V_{TH} + \sqrt{I_{REF}/\beta}$: $I_{REF}$ splits equally, half into $M_2$ and half through $C_1$ into $M_1$ (equal $V_{GS}$, both saturated).
- Phase 1: $C_1$ discharges at the constant current $I_{REF}/2$, so $V_X$ falls linearly, slope $-I_{REF}/(2C_1)$, from $V_{TH} + \sqrt{I_{REF}/\beta} + V_{DD}$; $V_Y$ stays at $V_{DD}$.
- Phase 2: when $V_X$ reaches $V_b - V_{TH3}(V_X)$, $M_3$ turns on and gradually takes over $M_1$'s current; the capacitor current decays to zero, $V_X$ settles (slowing down) at $V_b - V_{GS3}(I_{REF})$, and $V_Y$ falls from $V_{DD}$ to $V_{DD} - R_1I_{REF}$.
- Final state: $M_2$ and $M_1$ carry $I_{REF}$, the gate node is at $V_{GS}(I_{REF})$, $C_1$ holds $V_b - V_{GS3} - V_{GS2}$.

## Grading notes

+2: $V_X$ starting above $V_{DD}$ (gate node plus $V_{DD}$), falling linearly at ≈ $I_{REF}/(2C_1)$ while $M_3$ is off and $V_Y = V_{DD}$, then settling at $V_b - V_{GS3}$ as $M_3$ turns on, with $V_Y$ dropping to $V_{DD} - R_1I_{REF}$. The equal split of $I_{REF}$ may be described approximately. +1: correct sequence but the ramp slope or initial value off by a factor (e.g., $I_{REF}/C_1$). 0: final values right but the transient (M3 off, Y at $V_{DD}$) missed. -2 (asserted as fact): $V_X$ starting at $V_{DD}$ and rising, $V_Y$ falling immediately at $t = 0$ with M3 conducting, or $C_1$ read as connected from X to ground. A slip confined to the transition formulas after $M_3$ turns on (e.g., $M_3$'s current written as $\tfrac{\beta}{2}[V_b - V_{TH3}]^2$ without the $-V_X$ term, while the turn-on condition and final values are right) does not change any graded level, slope or trend: +1 if everything else is right.
