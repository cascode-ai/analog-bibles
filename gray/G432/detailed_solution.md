# Detailed solution - G432

Refer the thermal noise of each device to the DM input through the DM half circuit, exactly as for flicker noise: short the output, add the noise currents delivered to it, divide by $g_{m1}^2$, and double for the two uncorrelated halves. Doubling $W/L$ of the input pair at fixed current raises $g_{m1}$ by $\sqrt2$, which both reduces $M_1$'s own noise and reduces the weight of the load devices' noise.

### Step 1 — New input-pair transconductance

In saturation $g_m=\sqrt{2k'(W/L)I_D}$, with $W/L=133.3m$:

$$
g_{m1}=\sqrt{2(170\ \mu\mathrm{A/V^2})(20\times133.3)(2.0\ \mathrm{mA})}=42.6\ \mathrm{mA/V},
$$

$\sqrt2$ times the original 30 mA/V. $g_{m3}=36$ mA/V and $g_{m11}=48$ mA/V are unchanged.

### Step 2 — Output noise current of the DM half circuit

With the output shorted and $r_o\to\infty$, only $M_1$, $M_{11}$ and $M_3$ deliver noise current to the output: the cascodes $M_{1A}$, $M_{3A}$ only pass their source currents, and the tail noise is common mode. A gate noise voltage with $\overline{v_i^2}/\Delta f=4kT\cdot\tfrac23/g_{mi}$ produces a drain noise current $g_{mi}^2\overline{v_i^2}=4kT\cdot\tfrac23g_{mi}$, so

$$
\frac{\overline{i_o^2}}{\Delta f}=4kT\cdot\tfrac23\left(g_{m1}+g_{m11}+g_{m3}\right)
=(1.107\times10^{-20}\ \mathrm J)(42.6+48+36)\ \mathrm{mA/V}=1.40\times10^{-21}\ \mathrm{A^2/Hz}.
$$

### Step 3 — Input-referred noise

Dividing by $g_{m1}^2$ gives the half-circuit value, and the two uncorrelated halves add in the DM input:

$$
\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{1.40\times10^{-21}\ \mathrm{A^2/Hz}}{(42.6\ \mathrm{mA/V})^2}=7.7\times10^{-19}\ \mathrm{V^2/Hz},
\qquad
\frac{\overline{v_{eq}^2}}{\Delta f}=2\,\frac{\overline{v_{eqH}^2}}{\Delta f}=1.55\times10^{-18}\ \mathrm{V^2/Hz},
$$

i.e. $\sqrt{1.55\times10^{-18}}=1.25\ \mathrm{nV/\sqrt{Hz}}$.

### Step 4 — Comparison with the original design

With $g_{m1}=30$ mA/V the same steps give $2.8\times10^{-18}$ V²/Hz (1.67 nV/√Hz). Equivalently,

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\cdot\frac{4kT\cdot\tfrac23}{g_{m1}}\left(1+\frac{g_{m11}+g_{m3}}{g_{m1}}\right),
$$

and the bracket falls from 3.8 to 2.97 while the prefactor falls by $\sqrt2$. Widening the input pair therefore reduces the thermal noise by a factor of 1.8 in power.
