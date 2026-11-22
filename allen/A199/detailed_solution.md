# Detailed solution - A199

The input node is the common source of the n-channel M1 and the p-channel M2, whose gates are held by the diodes M3 and M4. The input current changes the currents of M1 and M2 in opposite directions; the diodes M5 and M6 carry these currents and the 10:1 mirrors M7 and M8 copy them to the output. Find the bias, then the input resistance, the current gain and the output resistance. Dc currents use the square law with λ neglected, as usual in hand analysis.

### Step 1 — Bias currents

The diode M3 carries the upper 50-µA reference with its source at ground, so its gate–source voltage is the one that carries 50 µA. M1 has the same $W/L=10$ and its gate tied to M3's, so with the input node at 0 V M1 also carries 50 µA; likewise M4 sets M2 at 50 µA. M1's current flows through the p-channel diode M5 and M2's through the n-channel diode M6. M7 and M8 ($W/L=100$) mirror them with a ratio of $100/10=10$, so each carries 500 µA.

### Step 2 — Input resistance

With M1's and M2's gates fixed, the input node is the source of both transistors, and each presents $1/g_m$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=332\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=224\ \mu\mathrm S,
$$

$$
R_{in}=\frac{1}{g_{m1}+g_{m2}}=\frac{1}{556\ \mu\mathrm S}=1.80\ \mathrm{k\Omega}.
$$

### Step 3 — Current gain

The input current raises the input node by $v_{in}=i_{in}R_{in}$. M1's $v_{GS}$ falls, so its current, and M5's, falls by $g_{m1}v_{in}$; M2's $v_{SG}$ rises, so its current, and M6's, rises by $g_{m2}v_{in}$. Through the 10:1 mirrors, M7 sources $10g_{m1}v_{in}$ less into the output and M8 sinks $10g_{m2}v_{in}$ more from it. Taking $i_{out}$ in the arrow direction, out of the amplifier into the short,

$$
i_{out}=-10(g_{m1}+g_{m2})v_{in}=-10\,i_{in},\qquad A_i=\frac{i_{out}}{i_{in}}=-10\ \mathrm{A/A}.
$$

Both halves contribute, so the gain is the full mirror ratio.

### Step 4 — Output resistance

The output node connects only to the drains of M7 and M8. Their gates sit on the diode nodes of M5 and M6, which an output voltage change does not disturb, so each device appears as its $r_{ds}$ at 500 µA:

$$
R_{out}=r_{ds7}\parallel r_{ds8}=\frac{1}{(\lambda_P+\lambda_N)(500\ \mu\mathrm A)}=\frac{1}{(0.09\ \mathrm{V^{-1}})(500\ \mu\mathrm A)}=22.2\ \mathrm{k\Omega}.
$$

The stated condition $g_{ds2}/g_{m6}=g_{ds1}/g_{m5}$ is therefore not needed. The results are $A_i=-10$ A/A, $R_{in}\approx1.8$ kΩ and $R_{out}\approx22.2$ kΩ; keeping the $(1+\lambda V_{DS})$ factors in the bias shifts these by a few percent.
