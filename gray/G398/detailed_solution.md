# Detailed solution - G398

Without a tail current source the two halves share no node: each side is a separate common-source stage from its input to its output. The differential and common-mode half circuits are therefore the same circuit, and the two gains are equal.

### Step 1 — Small-signal parameters

All devices carry 100 μA with $|V_{ov}|=0.2$ V. In saturation $g_m=2I_D/|V_{ov}|$ and $r_o=|V_A|/|I_D|$:

$$
g_{m1}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o1}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega}.
$$

### Step 2 — The half circuit

The sources of $M_1$ and $M_2$ are tied to the supply $-V_{SS}$, an ac ground, and the gates of $M_3$, $M_4$ are at the fixed $V_{BIAS}$. The left side is thus $M_1$ as a common-source amplifier with grounded source, driving the load $r_{o3}$ in parallel with its own $r_{o1}$:

$$
\frac{v_{o1}}{v_{i1}}=-g_{m1}(r_{o1}\parallel r_{o3})=-(1\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-66.7,
$$

and the right side gives the same for $v_{o2}/v_{i2}$. This gain does not depend on what the other input does.

### Step 3 — Differential and common-mode gains

With $v_{i1}=v_{ic}+v_{id}/2$, $v_{i2}=v_{ic}-v_{id}/2$, $v_{od}=v_{o1}-v_{o2}$ and $v_{oc}=(v_{o1}+v_{o2})/2$, each output is $-66.7$ times its own input, so

$$
\begin{aligned}
a_{dm}&=\frac{v_{od}}{v_{id}}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7,\\
a_{cm}&=\frac{v_{oc}}{v_{ic}}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7.
\end{aligned}
$$

The common-mode rejection ratio is $|a_{dm}/a_{cm}|=1$: a common-mode input is amplified as strongly as a differential one, because there is no tail current source whose high resistance would degenerate the common-mode half circuit.
