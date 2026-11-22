# Detailed solution - G208

The bleed resistor $R_B$ changes the Darlington in two ways: it raises $I_{C1}$ (lowering $r_{\pi1}$), and in the small-signal circuit it sits in parallel with $r_{\pi2}$, diverting part of $Q_1$'s emitter current away from $Q_2$'s base. Find the input resistance and base current, then add both collector currents at the output.

### Step 1 — Small-signal parameters

$$
r_{\pi1}=\frac{\beta V_T}{I_{C1}}=\frac{100(26\ \mathrm{mV})}{50\ \mu\mathrm A}=52\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{100(26\ \mathrm{mV})}{1\ \mathrm{mA}}=2.6\ \mathrm{k\Omega},\qquad
r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

### Step 2 — Input resistance and base current

$Q_1$'s emitter current $(\beta+1)i_{b1}$ flows into $r_{\pi2}\parallel R_B$, so

$$
R_i=r_{\pi1}+(\beta+1)(r_{\pi2}\parallel R_B)=52\ \mathrm{k\Omega}+101(2.22\ \mathrm{k\Omega})=275.8\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{375.8\ \mathrm{k\Omega}}.
$$

### Step 3 — Output current and gain

$R_B$ and $r_{\pi2}$ divide the emitter current, so only part of it becomes $Q_2$'s base current:

$$
i_{b2}=(\beta+1)i_{b1}\,\frac{R_B}{R_B+r_{\pi2}}=101\cdot\frac{15}{17.6}\,i_{b1}=86.1\,i_{b1}.
$$

Both collectors feed $R_L$:

$$
i_{c1}+i_{c2}=\beta i_{b1}+\beta i_{b2}=(100+8608)\,i_{b1}=8708\,i_{b1},
$$
$$
\frac{v_o}{v_i}=-\frac{(8708)(3\ \mathrm{k\Omega})}{375.8\ \mathrm{k\Omega}}=-69.5 .
$$

The gain rises from −49.1 without $R_B$ because the much smaller $R_i$ lets more of $v_i$ across $R_S$ reach the transistors; the current lost in $R_B$ costs less than this gain at the input.
