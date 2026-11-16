# Golden Solution - R633

## Reference answer

$R_S < \dfrac{1}{\sqrt{g_{m1}g_{m2}}}$, i.e., $R_S < 1/g_m$ for $g_{m1} = g_{m2} = g_m$ (strictly $(R_S \parallel R_P) < 1/\sqrt{g_{m1}g_{m2}}$, which reduces to $R_S$ because $R_S \ll R_P$).

Derivation:
- At low frequencies $C_P$ is open and $L_P$ is a short except for its series resistance, so each drain sees $R_S$ to $V_{DD}$ (in parallel with $R_P$ if $R_P$ is a separate physical resistor; if $R_P$ is only the parallel equivalent of the inductor loss at resonance, the dc load is just $R_S$).
- The two common-source stages form a dc-coupled loop: loop gain $= (-g_{m1}R_S)(-g_{m2}R_S) = g_{m1}g_{m2}R_S^2 > 0$, positive feedback. If it exceeds unity the loop latches (one transistor fully on, the other off).
- Requirement: $g_{m1}g_{m2}R_S^2 < 1$.
- This is compatible with oscillation: at resonance each load is $R_P \approx Q^2R_S$, so $g_mR_P \ge 1$ and $g_mR_S < 1$ can hold together ($1/R_P \le g_m < 1/R_S$).

## Grading notes

+2: $R_S < 1/\sqrt{g_{m1}g_{m2}}$ or $1/g_m$ (with or without $\parallel R_P$ or $\parallel r_O$), from the dc loop gain $g_{m1}g_{m2}R_S^2$ recognized as positive feedback. +1: correct bound with thin justification, or a minor slip. 0: correct setup (dc load = $R_S$, two inverting stages) without a final bound. -2 (asserted as fact): $R_P$ (or the resonant tank impedance) used as the dc load, the inequality reversed ($R_S > 1/g_m$), or a bound involving $Q$, $L_P$ or frequency presented as the dc condition.
