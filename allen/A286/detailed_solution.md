# Detailed solution - A286

The two bias questions are KVL problems: $V_{Bias}$ is the voltage between the common-source node and the MC1/MC2 gates, and $R$ sets the difference between the gate voltages of M3 and MC3. The gain follows from the current the pair delivers to $v_{o1}$ times the output resistance of the two cascodes in parallel. All devices are saturated with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$, so for a device carrying $I$, $V_{DS}(\mathrm{sat})=\sqrt{2I/(K'W/L)}$.

### Step 1 — Saturation voltages

Every transistor carries $I=50$ µA:

$$
V_{DS}(\mathrm{sat})_N=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.302\ \mathrm V,\qquad
V_{SD}(\mathrm{sat})_P=\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(5)}}=0.632\ \mathrm V .
$$

### Step 2 — $V_{Bias}$ for $V_{DS1}=V_{DS}(\mathrm{sat})$

The battery connects the common-source node of M1/M2 to the gates of MC1/MC2. Going from the common source up through M1 and MC1:

$$
V_{Bias}=V_{DS1}+V_{GS,C1}=V_{DS}(\mathrm{sat})+\left[V_{TN}+V_{DS}(\mathrm{sat})\right]=V_{TN}+2V_{DS}(\mathrm{sat}),
$$
$$
V_{Bias}=0.7\ \mathrm V+2(0.302\ \mathrm V)=1.30\ \mathrm V .
$$

### Step 3 — Self-biasing resistor $R$

With $R$ between the drains of MC3 and MC1, M3's gate is at the top of $R$ and MC3's gate is $IR$ lower. MC3's source is M3's drain, at $V_{DD}-V_{SD3}$, so

$$
V_{SG,C3}=(V_{DD}-V_{SD3})-(V_{DD}-V_{SG3}-IR)=V_{SG3}-V_{SD3}+IR .
$$

MC3 and M3 are equal devices at equal current, so $V_{SG,C3}=V_{SG3}$ and therefore $V_{SD3}=IR$. For $V_{SD3}=V_{SD}(\mathrm{sat})$:

$$
R=\frac{V_{SD}(\mathrm{sat})_P}{I}=\frac{0.632\ \mathrm V}{50\ \mu\mathrm A}=12.65\ \mathrm{k\Omega}.
$$

MC3 remains saturated: $V_{SD,C3}=V_{SG3}-V_{SD3}=(0.7+0.632)-0.632=0.7$ V exceeds $V_{SD}(\mathrm{sat})_P$. M4 and MC4 copy M3 and MC3.

### Step 4 — Small-signal gain

The input splits as $\pm v_{in}/2$, so the drain currents of M1 and M2 change by $\pm g_{m1}v_{in}/2$; the cascodes pass these currents unchanged. M1's change is mirrored by M3–M4 (through the cascodes) to the $v_{o1}$ node, where it adds to M2's change, giving a short-circuit output current $g_{m1}v_{in}$. The output resistance is the n-channel cascode (MC2 over M2) in parallel with the p-channel cascode (MC4 over M4):

$$
\frac{v_{o1}}{v_{in}}=g_{m1}R_{out},\qquad
R_{out}\approx(g_{mC2}r_{dsC2}r_{ds2})\parallel(g_{mC4}r_{dsC4}r_{ds4}) .
$$

Numerically, $g_{m1}=g_{mC2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S$, $g_{mC4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(50\ \mu\mathrm A)}=158\ \mu\mathrm S$, $r_{dsN}=1/(0.04\ \mathrm{V^{-1}}\cdot50\ \mu\mathrm A)=0.5\ \mathrm{M\Omega}$ and $r_{dsP}=1/(0.05\ \mathrm{V^{-1}}\cdot50\ \mu\mathrm A)=0.4\ \mathrm{M\Omega}$:

$$
R_{out}=(82.9\ \mathrm{M\Omega})\parallel(25.3\ \mathrm{M\Omega})=19.4\ \mathrm{M\Omega},\qquad
\frac{v_{o1}}{v_{in}}=(331.7\ \mu\mathrm S)(19.4\ \mathrm{M\Omega})=6.4\times10^3 .
$$

(Keeping the $r_{ds}$ terms that add to $g_mr_{ds}^2$ gives about $6.6\times10^3$.) With the input polarity of the figure the output is in phase with $v_{in}$: a rise at M1's gate increases the mirrored current pushed into $v_{o1}$ and reduces M2's pull-down.
