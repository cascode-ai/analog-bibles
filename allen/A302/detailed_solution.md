# Detailed solution - A302

Design in the usual order: the slew rate gives $I$, GB gives the input pair, the output limits give the devices in series with the output (with the extra threshold of the M8–M11 cascode mirror at the lower limit), $V_{ic}(\min)$ gives the tail M5, $V_{ic}(\max)$ is checked, and the bias devices M12–M15 follow from the mirror ratios. Then compute $R_{out}$ and the gain. All $L=1$ µm, $S=W/L$, square law $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$, with $\lambda$ used only for $r_{ds}$.

### Step 1 — Bias current from the slew rate

With the input overdriven the output can source or sink $I$: for example, if M2 takes all of $I$, M7 carries $1.5I-I=0.5I$ while M11 mirrors $1.5I$ from the M6 branch, a net $-I$ at the output. Hence

$$
I=SR\cdot C_L=(10\ \mathrm{V/\mu s})(10\ \mathrm{pF})=100\ \mu\mathrm A,
$$

so M3 and M4 carry 150 µA, and the cascode branches carry 100 µA at rest and up to 150 µA when slewing.

### Step 2 — Input pair from GB

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(10\ \mathrm{pF})=628\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_N(0.5I)}=\frac{(628\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=35.9\;\Rightarrow\;W_1=W_2=36\ \mu\mathrm m .
$$

### Step 3 — Upper output limit: M3, M4, M6, M7

$V_{out}(\max)=+2$ V leaves 1 V across M4 and M7, 0.5 V each. M4 carries 150 µA:

$$
S_3=S_4=\frac{2(150\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=24 .
$$

M7 can carry up to 150 µA when slewing, so $S_6=S_7=24$ as well (16 if sized for 100 µA).

### Step 4 — Lower output limit: M8–M11

In the cascode mirror M8 and M10 are diode-connected, so the gate of M9 is at $V_{SS}+V_{GS10}+V_{GS8}$ and its source at $V_{SS}+V_{GS10}$. The output can fall to

$$
V_{out}(\min)=V_{SS}+V_{GS10}+V_{ov9}=V_{SS}+V_{TN}+2V_{ov}=-2\ \mathrm V\;\Rightarrow\;V_{ov}=\frac{1-0.7}{2}=0.15\ \mathrm V,
$$

splitting the headroom left after the extra $V_{TN}$ equally. At the worst-case 150 µA:

$$
S_8=S_9=S_{10}=S_{11}=\frac{2(150\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.15\ \mathrm V)^2}=121 .
$$

### Step 5 — Common-mode range: M5 and the check of $V_{ic}(\max)$

$V_{GS1}=0.7+\sqrt{2(50\ \mu\mathrm A)/(110\ \mu\mathrm{A/V^2}\cdot36)}=0.859$ V, so

$$
V_{ic}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}=-1\ \mathrm V\;\Rightarrow\;V_{DS5}(\mathrm{sat})=1.14\ \mathrm V,\qquad
S_5=\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(1.14\ \mathrm V)^2}=1.4 .
$$

M12 and M13 carry the same current $I$ at the same $V_{GS}$, so $S_{12}=S_{13}=1.4$. For the upper limit, M1's drain is the folding node at $V_{G6}+V_{SG6}$; with $V_{G6}=1.3$ V (Step 6) and $V_{SG6}=0.7+\sqrt{2(100)/(50\cdot24)}=1.11$ V it sits at 2.41 V, so M1 stays saturated up to $V_{ic}\approx2.41+0.7=3.1$ V, above the required +2 V.

### Step 6 — Bias devices M14, M15

M14 (diode, $I$) mirrors to M3, M4 ($1.5I$): $S_{14}=24/1.5=16$. M15 (diode, $I$) sets the M6/M7 gates so that M4 is at the edge of saturation when M7 carries 150 µA:

$$
V_{SG15}=V_{SD4}(\mathrm{sat})+V_{SG7}=0.5+(0.7+0.5)=1.7\ \mathrm V\;\Rightarrow\;
S_{15}=\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(1.0\ \mathrm V)^2}=4,
$$

placing $V_{G6}=V_{G7}=3-1.7=1.3$ V. The supply current is $I$ (M14) $+I$ (M15) $+3I$ (M3, M4) $=5I$, so $P_{diss}=(6\ \mathrm V)(500\ \mu\mathrm A)=3.0$ mW.

| $W_1=W_2$ | $W_3=W_4$ | $W_6=W_7$ | $W_8$–$W_{11}$ | $W_5=W_{12}=W_{13}$ | $W_{14}$ | $W_{15}$ |
|---|---|---|---|---|---|---|
| 36 µm | 24 µm | 24 µm | 121 µm | 1.4 µm | 16 µm | 4 µm |

### Step 7 — Output resistance and gain

At the quiescent currents: $g_{m9}=\sqrt{2(110\ \mu)(121)(100\ \mu)}=1.63$ mS, $r_{ds9}=r_{ds11}=250$ kΩ; $g_{m7}=\sqrt{2(50\ \mu)(24)(100\ \mu)}=490\ \mu$S, $r_{ds7}=200$ kΩ, $r_{ds2}\parallel r_{ds4}=500\parallel133=105$ kΩ:

$$
R_{out}=(g_{m9}r_{ds9}r_{ds11})\parallel\left[g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds4})\right]=(102\ \mathrm{M\Omega})\parallel(10.3\ \mathrm{M\Omega})=9.4\ \mathrm{M\Omega}.
$$

With the output shorted, M1's signal current reaches it through M6 and the M8–M11 mirror, and M2's through M7 (whose source, about $1/g_{m7}$, is far below $r_{ds2}\parallel r_{ds4}$), so the short-circuit transconductance is $g_{m1}$:

$$
A_{vd}=\frac{v_{out}}{v_1-v_2}=g_{m1}R_{out}=(628\ \mu\mathrm S)(9.4\ \mathrm{M\Omega})=5.9\times10^3\ \mathrm{V/V},
$$

in phase with $v_{id}$: a rise of $v_1$ lowers the M6 current through the folding node, and the mirror M8–M11 then sinks less from the output.
