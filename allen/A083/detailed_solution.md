# Detailed solution - A083

Compute the small-signal parameters of the transistor at 10 µA, then find the resistance seen looking into the drain by applying a test voltage and writing the source-node relation: the degeneration resistor converts the output current into a gate–source voltage that opposes it, multiplying $r_{ds}$.

### Step 1 — Small-signal parameters at $I_D=10\ \mu$A

The transistor is in saturation (as a current sink must be), so

$$
g_m=\sqrt{2K'\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(10\ \mu\mathrm A)}=66.3\ \mu\mathrm S,
\qquad
r_{ds}\approx\frac{1}{\lambda I_D}=\frac{1}{(0.04\ \mathrm{V^{-1}})(10\ \mu\mathrm A)}=2.5\ \mathrm{M\Omega}.
$$

The degeneration resistor is $r=100\ \mathrm{k\Omega}$, carrying the dc current with a 1 V drop.

### Step 2 — Output resistance from the small-signal circuit

The gate is at a fixed dc voltage $V_{GG}$ (ac ground) and the body effect is ignored. Apply $v_{out}$ at the drain and let $i_{out}$ flow in. The same current flows through $r$, so the source voltage is $v_s=i_{out}r$ and $v_{gs}=-i_{out}r$. The current into the drain is the controlled source plus the current through $r_{ds}$:

$$
i_{out}=g_mv_{gs}+\frac{v_{out}-v_s}{r_{ds}}=-g_mri_{out}+\frac{v_{out}-i_{out}r}{r_{ds}} .
$$

Solving for $v_{out}/i_{out}$:

$$
r_{out}=\frac{v_{out}}{i_{out}}=r+r_{ds}+g_mr_{ds}r=r+r_{ds}(1+g_mr).
$$

### Step 3 — Numerical value

$$
r_{out}=0.1\ \mathrm{M\Omega}+2.5\ \mathrm{M\Omega}+(66.3\ \mu\mathrm S)(2.5\ \mathrm{M\Omega})(100\ \mathrm{k\Omega})
=0.1+2.5+16.6=19.2\ \mathrm{M\Omega}.
$$

The degeneration raises the output resistance from $r_{ds}=2.5\ \mathrm{M\Omega}$ by the factor $1+g_mr=7.6$. The dominant term is $g_mr_{ds}r=16.6\ \mathrm{M\Omega}$: a change in drain voltage changes the current, the resulting change in voltage across $r$ changes $v_{gs}$ in the opposite direction, and this negative feedback holds the current nearly constant.
