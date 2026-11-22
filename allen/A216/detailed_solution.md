# Detailed solution - A216

Compute the small-signal parameters of M1 and M2 at the given bias, including the body transconductance of M1 (its source sits 5 V above its bulk), then write KCL at the output node to get the gain and the output resistance.

### Step 1 — Bias and regions

With $v_{OUT}=0$ and $I_D=200\ \mu\mathrm A$ in both devices:

- M1: $V_{DS1}=5-0=5$ V, $V_{SB1}=0-(-5)=5$ V.
- M2: $V_{DS2}=0-(-5)=5$ V; its gate is at a fixed bias, so for small signals it is a current sink with only $g_{ds2}$.

Both drain–source voltages far exceed the overdrive (about 0.6 V, Step 2), so both devices are saturated.

### Step 2 — Small-signal parameters

Square-law transconductance, body transconductance and output conductance:

$$
g_{m1}=\sqrt{2K'_N\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(200\ \mu\mathrm A)}=663.3\ \mu\mathrm S,
$$

$$
g_{mbs1}=\frac{\gamma\,g_{m1}}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(0.4\ \mathrm{V^{1/2}})(663.3\ \mu\mathrm S)}{2\sqrt{0.7\ \mathrm V+5\ \mathrm V}}=55.6\ \mu\mathrm S,
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=(0.04\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=8\ \mu\mathrm S .
$$

The overdrive is $V_{ov}=2I_D/g_{m1}=0.603$ V.

### Step 3 — Voltage gain

In the small-signal model of M1, the gate is at $v_{in}$, the source at $v_{out}$, the drain at ac ground (+5 V) and the bulk at ac ground (−5 V), so $v_{gs1}=v_{in}-v_{out}$ and $v_{bs1}=-v_{out}$. KCL at the output (unloaded) collects the controlled current of M1 and the currents in $g_{ds1}$ and $g_{ds2}$:

$$
g_{m1}(v_{in}-v_{out})-g_{mbs1}v_{out}-g_{ds1}v_{out}-g_{ds2}v_{out}=0 ,
$$

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}
=\frac{663.3}{663.3+55.6+8+8}=\frac{663.3}{734.9}=0.903\ \mathrm{V/V}.
$$

The body effect is the main loss: without $g_{mbs1}$ the gain would be 0.977.

### Step 4 — Output resistance

With $v_{in}=0$ and a test voltage $v_t$ at the output, the same four conductances carry the test current, $i_t=(g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2})v_t$:

$$
R_{out}=\frac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}=\frac{1}{734.9\ \mu\mathrm S}=1.36\ \mathrm{k\Omega}.
$$

If the bias current is instead written with the $(1+\lambda V_{DS})$ factor, $V_{ov1}=\sqrt{2I_D/[\beta(1+\lambda V_{DS1})]}=0.550$ V and $g_{m1}=2I_D/V_{ov1}=726.6\ \mu\mathrm S$; then $g_{mbs1}=60.9\ \mu\mathrm S$, $A_v\approx0.904$ and $R_{out}\approx1.24$ kΩ. Both readings of the first-order model are consistent; the conclusion $A_v\approx0.90$, $R_{out}\approx1.2$–$1.4$ kΩ is unchanged.
