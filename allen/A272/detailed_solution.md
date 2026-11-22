# Detailed solution - A272

In a Miller-compensated two-stage op amp, $C_c$ dominates the first-stage output node, so above the dominant pole the output current of the input stage, $g_{m1}v_{id}$, flows through $C_c$ and the gain falls as $g_{m1}/(\omega C_c)$. Setting this to unity gives $GB=g_{m1}/C_c$ in rad/s.

### Step 1 — Input transconductance

Each input transistor carries half the tail current, $I_5/2=22.8$ µA, in saturation:

$$
g_{m1}=\sqrt{2K'_N\left(\frac WL\right)_1\frac{I_5}{2}}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(22.8\ \mu\mathrm A)}=224\ \mu\mathrm S .
$$

### Step 2 — Unity-gain bandwidth

$$
GB=\frac{g_{m1}}{C_c}=\frac{224\ \mu\mathrm S}{5\ \mathrm{pF}}=4.48\times10^7\ \mathrm{rad/s},\qquad
f_{GB}=\frac{4.48\times10^7\ \mathrm{rad/s}}{2\pi}=7.1\ \mathrm{MHz}.
$$
