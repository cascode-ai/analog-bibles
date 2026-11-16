# Golden Solution - G216

## Reference answer

$v_o/v_i = -g_{m2}R_L = -8.22$.

- $g_{m2} = \sqrt{2(60\ \mu)(62.5)(1\ \mathrm{mA})} = 2.74$ mA/V; $g_{m1} = 0.612$ mA/V.
- $M_1$ is a source follower with no load at its source (the gate of $M_2$ draws no current, the bias source is ideal, $\lambda = 0$), so $v_{gs1} = 0$ at low frequency: $M_1$ contributes no signal current and passes $v_i$ to $M_2$'s gate with unity gain; no current flows in $R_S$.
- $v_o = -g_{m2}R_Lv_i$ → −8.22.

## Grading notes

+2: −8.2 (±3%) with the observation that $M_1$ is a unity-gain follower. +1: small slip in $g_{m2}$. 0: a follower gain below 1 from an invented load. −2 (asserted as fact): β-type current multiplication through $M_1$ (gains of hundreds), $M_1$'s drain current added as $g_{m1}v_i$, or $R_S$ dividing the input with a finite gate resistance.
