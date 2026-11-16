# Golden Solution - R632

## Reference answer

$Z(s) = \dfrac{1}{g_{m3}}\left(1 + \dfrac{sC_{GS3}}{g_{m5}}\right) = \dfrac{1}{g_{m3}} + s\,\dfrac{C_{GS3}}{g_{m3}g_{m5}}$: a resistance $1/g_{m3}$ in series with an equivalent inductance $L_{eq} = C_{GS3}/(g_{m3}g_{m5})$.
The load is inductive because the follower drives $C_{GS3}$ through its nonzero output resistance $1/g_{m5}$: the gate of $M_3$ lags $V_X$, so the load current lags the voltage. The inductive behavior is significant at frequencies comparable to or above the zero $\omega_z = g_{m5}/C_{GS3}$, i.e., when the follower's output time constant $C_{GS3}/g_{m5}$ is not negligible against the signal period (a weak follower: small $g_{m5}$, or a large $M_3$). If $g_{m5} \to \infty$ the load is a pure resistance $1/g_{m3}$. (With finite $r_{O3}$, $Z = r_{O3} \parallel Z(s)$ is inductive from $\omega_z$ up to about $(1 + g_{m3}r_{O3})\,g_{m5}/C_{GS3}$.)

Derivation:
- The source of $M_3$ is at $V_{DD}$ (ac ground), so $C_{GS3}$ hangs from the follower output to ground. KCL at that node (ideal current source): $g_{m5}(V_X - V_G) = sC_{GS3}V_G$ → $V_G = V_X/(1 + sC_{GS3}/g_{m5})$.
- The current drawn from X is only the drain current of $M_3$, $g_{m3}V_G$ (the current of $C_{GS3}$ is supplied by $M_5$, not by node X), so $Z = V_X/(g_{m3}V_G)$ as above: a zero at $g_{m5}/C_{GS3}$, $|Z|$ rising and phase positive above it.
- By contrast, a diode-connected PMOS gives $Z = 1/(g_{m3} + sC_{GS3})$, which is capacitive.

## Grading notes

+2: $Z = (1 + sC_{GS3}/g_{m5})/g_{m3}$ (or an equivalent form, e.g., with $g_{m5} + g_{mb5}$), identified as $1/g_{m3}$ in series with $L = C_{GS3}/(g_{m3}g_{m5})$, and the condition tied to the follower's output resistance: inductive whenever $1/g_{m5}$ is not negligible, noticeably so at or above $\omega \approx g_{m5}/C_{GS3}$ ("always inductive in this model, more so for small $g_{m5}$" is equivalent). +1: correct impedance with the condition only vaguely stated, or the correct condition with a minor slip in the impedance. 0: the right qualitative idea (follower output resistance with $C_{GS3}$ creates a zero / lag) without the impedance. -2 (asserted as fact): load concluded to be capacitive or purely resistive (e.g., $C_{GS3}$ current taken from node X, giving $1/(g_{m3} + sC_{GS3})$-like behavior), or an invented condition such as "inductive only if $g_{m5} < g_{m3}$" presented as the answer.
