# Detailed solution - G403

Write each output as $v_{o1}=v_{oc}+v_{od}/2$, $v_{o2}=v_{oc}-v_{od}/2$ and apply KCL at the sense node. Because the two branches are equal, the DM part cancels and the sense node responds only to $v_{oc}$ through the two branches in parallel. Repeat with each branch impedance changed from $R_{cs}$ to $R_{cs}\parallel 1/(sC_{cs})$.

### Step 1 — Sense-node equation for a general branch impedance $Z$

Let each branch have impedance $Z$, and let the sense node voltage be $v_x$; the ideal unity-gain CM-sense amplifier gives $v_{cms}=v_x$ (relative to the dc reference $V_{CM}$, which is an ac ground). KCL at the sense node:

$$
\frac{v_{o1}-v_x}{Z}+\frac{v_{o2}-v_x}{Z}=sC_1v_x
\;\Rightarrow\;
\frac{2v_{oc}-2v_x}{Z}=sC_1v_x .
$$

$v_{od}$ cancels, so a balanced detector passes no DM signal. Solving,

$$
a_{cms}(s)=\frac{v_{cms}}{v_{oc}}=\frac{1}{1+sC_1Z/2}.
$$

This is the divider formed by $Z/2$ (the two branches in parallel for a CM output) and $C_1$.

### Step 2 — Resistors only

With $Z=R_{cs}$:

$$
a_{cms}(s)=\frac{1}{1+sR_{cs}C_1/2},
$$

a single real pole at $s=-2/(R_{cs}C_1)$, with unity gain at dc and gain falling to 0 at high frequency.

### Step 3 — Resistors with parallel $C_{cs}$

Now $Z=R_{cs}\parallel\dfrac1{sC_{cs}}=\dfrac{R_{cs}}{1+sR_{cs}C_{cs}}$. Substituting into Step 1 and multiplying numerator and denominator by $1+sR_{cs}C_{cs}$:

$$
a_{cms}(s)=\frac{1+sR_{cs}C_{cs}}{1+sR_{cs}C_{cs}+sR_{cs}C_1/2}
=\frac{1+sR_{cs}C_{cs}}{1+sR_{cs}\left(C_{cs}+C_1/2\right)}.
$$

There is a left-half-plane zero at $s=-1/(R_{cs}C_{cs})$ and a pole at $s=-1/[R_{cs}(C_{cs}+C_1/2)]$, just below the zero. As $s\to\infty$, the gain tends to the capacitive-divider ratio

$$
a_{cms}(\infty)=\frac{C_{cs}}{C_{cs}+C_1/2}=\frac{2C_{cs}}{2C_{cs}+C_1}
$$

instead of 0.

### Step 4 — Effect of the $C_{cs}$ capacitors

The LHP zero sits just above the pole in frequency; for $C_{cs}\gg C_1/2$ the two form a closely spaced pole–zero pair and nearly cancel. The detector then behaves as a capacitive divider with gain close to 1 and little phase lag at high frequency. This removes most of the phase lag the sense network would add to the CMFB loop, improving its phase margin.

The cost is extra loading of the op-amp outputs: for DM signals the midpoint of the detector is an ac ground, so each $C_{cs}$ adds directly to the DM load capacitance at its output.
