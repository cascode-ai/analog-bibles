# Golden Solution - A401

## Reference answer

$\dfrac{\Delta V_{out}(s)}{\Delta V_i(s)} = \dfrac{g_{m1}R}{1-g_{m3}R+sRC} = \dfrac{g_{m1}R/(1-g_{m3}R)}{1+s\,\dfrac{RC}{1-g_{m3}R}}$, pole at $s = -(1-g_{m3}R)/(RC) = (g_{m3}-G)/C$.

Derivation (differential half circuit, $v_{o1} = -\Delta v_{out}/2$, $v_{o2} = +\Delta v_{out}/2$, $v_{i1} = -v_{i2} = \Delta V_i/2$, tail node at ac ground):
KCL at $v_{o1}$: $(sC+G)v_{o1} = -g_{m3}v_{o2} - g_{m1}\Delta V_i/2$ (M3 sources $-g_{m3}v_{o2}$ into the node, M1 sinks $g_{m1}\Delta V_i/2$). Substituting gives $(sC+G-g_{m3})\Delta v_{out} = g_{m1}\Delta V_i$.

- $g_{m3}R < 1$: a stable amplifier with dc gain $g_{m1}R/(1-g_{m3}R)$, enhanced by the positive feedback, and a LHP pole at $-(1-g_{m3}R)/RC$.
- $g_{m3}R > 1$: the pole moves into the right half-plane at $+(g_{m3}R-1)/RC \approx g_{m3}/C$: the circuit regenerates (latch). For a step $\Delta V_i$, $\Delta v_{out}(t) = \dfrac{g_{m1}R}{g_{m3}R-1}\Delta V_i\left(e^{t/\tau_L}-1\right)$ with $\tau_L = \dfrac{RC}{g_{m3}R-1} \approx \dfrac{C}{g_{m3}}$ (with an initial output difference $\Delta V_0$ an extra term $\Delta V_0e^{t/\tau_L}$ appears).

## Grading notes

+2: the transfer function equivalent to $g_{m1}R/(1-g_{m3}R+sRC)$ (or $g_{m1}/(G-g_{m3}+sC)$), with the pole and the two regimes (stable amplifier with enhanced gain vs. RHP pole at $(g_{m3}R-1)/RC$ and exponential regeneration). Writing the regeneration time constant $\tau_L = RC/(g_{m3}R-1) \approx C/g_{m3}$ explicitly is welcome but not required: it is the reciprocal of the pole already given. Sign conventions may differ if stated consistently. +1: correct expression but the discussion of one regime missing, or a sign slip that does not change the pole's location. 0: right method (KCL with cross-coupling) but an algebra error giving a wrong pole. −2 (asserted as fact): cross-coupling treated as negative feedback (denominator $1+g_{m3}R$), M3/M4 treated as diode loads, or the result claimed to be $g_{m1}/g_{m3}$ independent of $s$.
