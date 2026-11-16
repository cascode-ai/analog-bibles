# Golden Solution - R631

## Reference answer

$R_{load} = 1/g_{m3}$ (exact for λ = γ = 0 and an ideal follower current source; more generally $r_{O3} \parallel 1/(A_{SF}\,g_{m3})$ with follower gain $A_{SF} \approx 1$).

Derivation:
- Region of $M_3$: the follower places the gate of $M_3$ a voltage $V_{GS5}$ below its drain, so $|V_{DS3}| = |V_{GS3}| - V_{GS5}$. Saturation requires $|V_{DS3}| \ge |V_{GS3}| - |V_{TH3}|$, i.e., $V_{GS5} \le |V_{TH3}|$; with $V_{GS5} \approx |V_{TH3}|$, $M_3$ is just at the edge, so its saturation transconductance $g_{m3}$ applies (and $r_{O3} \to \infty$ for λ = 0).
- Apply a small voltage $v_x$ at X. $M_5$ carries a constant current (ideal current source; the gate of $M_3$ draws no current), so $g_{m5}(v_x - v_{s5}) = 0$ → $v_{g3} = v_{s5} = v_x$ (unity follower gain with γ = 0).
- The source of $M_3$ is at ac ground, so its drain current changes by $g_{m3}v_{sg3} = -g_{m3}v_x$ (source to drain); the current drawn from X into the load is $i_x = g_{m3}v_x$. Hence $v_x/i_x = 1/g_{m3}$.
- The load therefore behaves like a diode-connected PMOS, but $M_3$ consumes only $|V_{DS3}| = |V_{GS3}| - V_{GS5}$ (about its overdrive) of headroom instead of $|V_{GS3}|$. With nonzero γ and λ: $A_{SF} = g_{m5}/(g_{m5} + g_{mb5}) < 1$ and $r_{O3}$ appears in parallel, so $R \approx (1 + g_{mb5}/g_{m5})/g_{m3} \parallel r_{O3}$, still close to $1/g_{m3}$.
- Each side works independently ($M_5$ senses only X), so both differential and common-mode load resistances are $1/g_{m3}$.

## Grading notes

+2: shows that the follower transfers $v_x$ to the gate of $M_3$ with (about) unity gain and that $i_x = g_{m3}v_x$, giving $1/g_{m3}$, with the saturation (edge-of-triode) condition of $M_3$ used or explained. +1: correct result and small-signal argument without the region argument, or a minor slip. 0: correct small-signal setup without reaching the result. -2 (asserted as fact): result $1/g_{m5}$, $1/(g_{m3} + g_{m5})$, $r_{O3}$ or a triode on-resistance as the load resistance; the follower treated as inverting; or $M_5$'s gate connected to the wrong node.
