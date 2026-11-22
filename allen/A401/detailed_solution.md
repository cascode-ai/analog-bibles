# Detailed solution - A401

The circuit is symmetric and driven differentially, so the response is antisymmetric: the tail node is an ac ground and one KCL equation at an output node is enough. The cross-coupled loads feed each output with a current proportional to the opposite output, which is positive feedback; it appears in the result as a negative conductance $-g_{m3}$ in parallel with $G$.

### Step 1 — Differential variables

Write the antisymmetric signals as

$$
v_{i1}=-v_{i2}=\frac{\Delta V_i}2,\qquad v_{o1}=-\frac{\Delta v_{out}}2,\qquad v_{o2}=+\frac{\Delta v_{out}}2 .
$$

With the sources of M1 and M2 moving equally and oppositely, the tail node has no signal, so $v_{gs1}=\Delta V_i/2$.

### Step 2 — KCL at $v_{o1}$

Currents leaving node $v_{o1}$: through $C$ and $G$, and into the drain of M1, $g_{m1}v_{gs1}$. Current entering it: from M3, whose gate is at $v_{o2}$ and source at ac ground, so it sources $g_{m3}v_{sg3}=-g_{m3}v_{o2}$. Hence

$$
(sC+G)\,v_{o1}+g_{m1}\frac{\Delta V_i}2=-g_{m3}v_{o2}.
$$

Substituting the differential variables and multiplying by $-2$:

$$
(sC+G)\Delta v_{out}-g_{m1}\Delta V_i=g_{m3}\Delta v_{out}
\quad\Rightarrow\quad
(sC+G-g_{m3})\,\Delta v_{out}=g_{m1}\Delta V_i .
$$

The node at $v_{o2}$ gives the same equation by symmetry.

### Step 3 — Transfer function and pole

With $G=1/R$,

$$
\frac{\Delta V_{out}(s)}{\Delta V_i(s)}=\frac{g_{m1}}{G-g_{m3}+sC}
=\frac{g_{m1}R}{1-g_{m3}R+sRC}
=\frac{g_{m1}R/(1-g_{m3}R)}{1+s\,\dfrac{RC}{1-g_{m3}R}},
$$

with a single pole at

$$
p=-\frac{1-g_{m3}R}{RC}=\frac{g_{m3}-G}C .
$$

### Step 4 — Behaviour in the two regimes

**$g_{m3}R<1$.** The pole lies in the left half-plane, so the circuit is a stable amplifier. Its dc gain $g_{m1}R/(1-g_{m3}R)$ is larger than the $g_{m1}R$ of a plain resistive load, because the positive feedback partly cancels $G$; the bandwidth $(1-g_{m3}R)/(RC)$ shrinks by the same factor.

**$g_{m3}R>1$.** The net node conductance $G-g_{m3}$ is negative and the pole moves into the right half-plane at $+(g_{m3}R-1)/(RC)$. The response grows exponentially instead of settling: the circuit regenerates and acts as a latch. For an input step $\Delta V_i$, inverting $\Delta v_{out}(s)=g_{m1}\Delta V_i/[s(sC-(g_{m3}-G))]$ gives

$$
\Delta v_{out}(t)=\frac{g_{m1}R}{g_{m3}R-1}\,\Delta V_i\left(e^{t/\tau_L}-1\right),\qquad
\tau_L=\frac{RC}{g_{m3}R-1}\approx\frac C{g_{m3}}\quad(g_{m3}R\gg1),
$$

and an initial output difference $\Delta V_0$ adds a term $\Delta V_0e^{t/\tau_L}$. The growth continues until the devices leave the small-signal region and the outputs reach their limits.

At $g_{m3}R=1$ the pole is at the origin and the circuit integrates its input; this is the boundary between amplifying and latching.
