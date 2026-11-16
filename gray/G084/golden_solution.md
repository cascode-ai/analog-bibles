# Golden Solution - G084

## Reference answer

$v_o/v_i \approx -24$ (−24.4 with $r_o = 1/(\lambda I_D)$; −29 if the $r_o$'s were ignored).

- $M_2$: $V_{SB2} = 1$ V → $V_{t2} = -1 + 0.28(\sqrt{1.66} - \sqrt{0.66}) = -0.867$ V. With $V_{GS2} = 0$, $V_{ov2} = 0.867$ V; $V_{DS2} = 2$ V > $V_{ov2}$, so $M_2$ is saturated: $I_D = \tfrac12(194\ \mu)(10/0.82)(0.867)^2 \approx 0.89$ mA (≈ 0.93 mA with the factor $1+\lambda V_{DS2}$).
- $M_1$: $V_{ov1} = \sqrt{2I_D/(k'\cdot121.95)} = 0.274$ V < $V_{DS1} = 1$ V (saturated); $g_{m1} = 2I_D/V_{ov1} = 6.49$ mS.
- $g_{m2} = 2I_D/V_{ov2} = 2.05$ mS, $\chi = \gamma/(2\sqrt{2\phi_f + V_{SB}}) = 0.109$, $g_{mb2} = \chi g_{m2} = 0.223$ mS ($1/g_{mb2} = 4.48$ kΩ). Because $v_{gs2} = 0$, $g_{m2}$ does not load the output; the body transconductance acts as a resistor $1/g_{mb2}$ from the output to ground.
- $r_{o1} = r_{o2} = 1/(\lambda I_D) = 46$ kΩ.
- $v_o/v_i = -g_{m1}\,(r_{o1}\|r_{o2}\|1/g_{mb2}) = -6.49\ \mathrm{mS}\times3.75\ \mathrm{k\Omega} \approx -24.4$.

## Grading notes

+2: gain between −22.5 and −26.5, with $V_{t2}$ evaluated at $V_{SB} = 1$ V, $g_{mb2}$ as the dominant load and both $r_o$'s included. +1: correct approach with a slip giving a gain within about ±15 %, or the body effect on $V_{t2}$ (bias current) neglected while $g_{mb2}$ is included. 0: body effect included but the $r_o$'s left out (≈ −29), or only the symbolic expression $-g_{m1}(r_{o1}\|r_{o2}\|1/g_{mb2})$ without values. -2 (asserted as fact): $g_{m2}$ treated as a load conductance (as if $M_2$ were diode-connected), body effect ignored entirely (gain ≈ −150 from $-g_{m1}r_o/2$), $M_1$ or $M_2$ claimed to be in triode, or a positive gain.
