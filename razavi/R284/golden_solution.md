# Golden Solution - R284

## Reference answer

$\Delta V_{out}/\Delta V_{DD} = 1$: the output follows the supply one-for-one, i.e., the circuit provides no supply rejection by itself. The power-supply rejection ratio is therefore just the differential gain, PSRR $= |A_{DM}|/|A_{sup}| = \dfrac{g_{m1}}{2}\,[(2r_{O2})\,\|\,r_{O4}]$.

- $M_3$ carries a fixed current from an ideal source, so $V_{SG3}$ is constant: the gates of $M_3$, $M_4$ move with $V_{DD}$, and $M_4$ looks like $r_{O4}$ from $V_{DD}$ to $V_{out}$ with no change in its controlled current.
- Try $\Delta V_{out} = \Delta V_{DD}$: $M_4$'s current is unchanged; the drains of $M_1$ (at $V_{DD}$) and $M_2$ (at $V_{out}$) both move by $\Delta V_{DD}$, so by symmetry node P moves by $\Delta V_{DD}/[1+(g_m+g_{mb})r_O]$ and both drain currents stay unchanged, satisfying the ideal tail. This solution is unique, so the supply gain is exactly 1 (for matched devices).
- Small-signal check: with $g_m$, $r_O$ for $M_{1,2}$, $i_{D2} = (v_{out} - v_{dd})/(2r_O)$ and $i_{D4} = (v_{dd} - v_{out})/r_{O4}$; KCL $i_{D2} = i_{D4}$ gives $v_{out} = v_{dd}$.
- Differential gain: only $M_2$'s half of the signal current reaches the output ($M_1$'s drain is tied to $V_{DD}$), $G_m = g_{m1}/2$, $R_{out} = (2r_{O2})\|r_{O4}$.

## Grading notes

+2: supply gain $\Delta V_{out}/\Delta V_{DD} = 1$ (output tracks the supply, no rejection), with a correct argument (constant $V_{SG4}$ because $M_3$'s current is fixed, symmetry of $M_1$/$M_2$ drains); PSRR expressed as the differential gain $(g_{m1}/2)[(2r_{O2})\|r_{O4}]$ or simply stated to equal $|A_v|$. +1: supply gain ≈ 1 with an approximate argument, PSRR not related to $A_v$. 0: correct setup with an algebra slip giving a value near but not equal to 1, stated with doubt. -2 (asserted as fact): supply gain ≈ 0 or ≈ $1/(g_mr_O)$ (claiming the current-source load rejects supply noise), or a supply gain much larger than 1.
