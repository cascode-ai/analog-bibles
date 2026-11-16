# Golden Solution - G393

## Reference answer

$p \approx -1.2 \times 10^{10}$ rad/s ($|p|/2\pi \approx 1.9$ GHz).

- $I_{D23} = |I_{D25}|/2 = 0.2$ mA; $g_{m23} = 2I_D/V_{ov} = 2(0.2\ \text{mA})/0.2\ \text{V} = 2$ mA/V. The node resistance is $1/g_{m23} = 500\ \Omega$.
- $(W/L)_{23} = 2I_D/(k'_nV_{ov}^2) = 0.4\ \text{mA}/(127\ \mu\text{A/V}^2 \times 0.04) \approx 79$, so $W_{23} \approx 63\ \mu$m with $L = 0.8\ \mu$m.
- $C_{gs23} = \tfrac23(63\ \mu\text{m})(0.8\ \mu\text{m})(2.30\ \text{fF}/\mu\text{m}^2) \approx 78$ fF; total $C = 78 + 90 \approx 168$ fF.
- $|p| = g_{m23}/C = 2\ \text{mA/V}/168\ \text{fF} \approx 1.19 \times 10^{10}$ rad/s.

## Grading notes

+2: $|p|$ ≈ 1.1–1.3 × 10¹⁰ rad/s (or ≈ 1.8–2.0 GHz if quoted in Hz and clearly labelled), from $g_{m23}$ = 2 mA/V and $C$ ≈ 165–175 fF. Including gate overlap capacitance (≈ 8 fF) is acceptable. +1: correct $g_m$ and $C$ but the rad/s–Hz conversion confused, or a small slip that leaves $|p|$ within the +2 range. 0: correct $g_m$, node resistance and method but a computational or substitution slip that moves $|p|$ outside the range (e.g. $W/L \approx 79$ substituted for $W$ in $C_{gs}$, giving $C_{gs} \approx 97$ fF and $|p| \approx 1.07\times10^{10}$ rad/s, or a unit slip giving a value off by orders of magnitude; such slips are never −2); or a wrong current ($I_{D23}$ = 0.4 mA) or $C_{gs}$ wrong by a factor. −2 (asserted as fact): node resistance taken as $r_o$ (pole orders of magnitude too low), $C_{gs}$ omitted entirely, or $g_m$ computed with the wrong formula.
