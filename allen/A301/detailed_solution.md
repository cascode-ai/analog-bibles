# Detailed solution - A301

The complementary folded cascode is designed in the same order as the original: the slew rate fixes the tail current $I_3$ (and the folding currents), the output range fixes the four series devices at the output, GB fixes the input pair (now p-channel, so $K'_P$ is used), the upper common-mode limit fixes the p-channel tail M3, and the lower limit, gain and power are checked. All $L=0.5$ µm, $S=W/L$, $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$ with channel-length modulation only in $g_{ds}=\lambda I_D$.

### Step 1 — Currents from the slew rate

The output slews when all of $I_3$ is steered to one side, so

$$
I_3=SR\cdot C_L=(10\ \mathrm{V/\mu s})(10\ \mathrm{pF})=100\ \mu\mathrm A .
$$

Choose the folding sinks $I_4=I_5=1.25I_3=125\ \mu$A so that the cascode branches never cut off: they carry 75 µA at rest and 25–125 µA during slewing. ($I_4=I_5=I_3$ would also give $SR=I_3/C_L$, but one cascode branch would reach zero current under full steering.)

### Step 2 — Output devices from the output range

The output may go from $V_{SS}+0.5$ V to $V_{DD}-0.5$ V, so each of the two series devices on each side gets 0.25 V at the worst-case current of 125 µA:

$$
\begin{aligned}
V_{out}(\min)=-2\ \mathrm V:\quad& S_4=S_5=S_6=S_7=\frac{2(125\ \mu\mathrm A)}{(120\ \mu\mathrm{A/V^2})(0.25\ \mathrm V)^2}=33.3,\\
V_{out}(\max)=-0.5\ \mathrm V:\quad& S_8=S_9=S_{10}=S_{11}=\frac{2(125\ \mu\mathrm A)}{(25\ \mu\mathrm{A/V^2})(0.25\ \mathrm V)^2}=160 .
\end{aligned}
$$

(Sizing the p-channel cascodes for the 75-µA quiescent current would give 96.)

### Step 3 — Input pair from GB

The output is the only high-impedance node, so $GB=g_{m1}/C_L$ (rad/s), with each p-channel input device at $I_3/2=50$ µA:

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(10\ \mathrm{pF})=628\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_P(50\ \mu\mathrm A)}=\frac{(628\ \mu\mathrm S)^2}{2(25\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=158 .
$$

### Step 4 — Tail device from $V_{ic}(\max)$

For a p-channel pair, raising $V_{ic}$ raises the common source toward $V_{DD}$ until M3 leaves saturation. With $V_{SG1}=|V_{TP}|+\sqrt{2(50\ \mu\mathrm A)/(25\ \mu\mathrm{A/V^2}\cdot158)}=0.5+0.159$ V:

$$
V_{SD3}(\mathrm{sat})=V_{DD}-V_{ic}(\max)-V_{SG1}=0-(-1)-0.659=0.341\ \mathrm V,\qquad
S_3=\frac{2(100\ \mu\mathrm A)}{(25\ \mu\mathrm{A/V^2})(0.341\ \mathrm V)^2}=69 .
$$

### Step 5 — Check $V_{ic}(\min)$

M1's drain is the folding node at $V_{SS}+V_{DS4}$; M1 stays saturated while $V_{SS}+V_{DS4}\le V_{ic}+|V_{TP}|$. With $V_{DS4}=0.25$ V this holds down to $V_{ic}=-2.5+0.25-0.5=-2.75$ V, below the required −2.5 V. (Only $S_4\ge2I_4/[K'_N(0.5\ \mathrm V)^2]=8.3$ is needed, which $S_4=33.3$ satisfies.)

### Step 6 — Gain and power

At the quiescent 75 µA in the cascodes:

$$
\begin{aligned}
R_{up}&=g_{m9}r_{ds9}r_{ds11},\quad g_{m9}=\sqrt{2(25\ \mu)(160)(75\ \mu)}=775\ \mu\mathrm S,\ g_{ds9}=g_{ds11}=6\ \mu\mathrm S\;\Rightarrow\;R_{up}=21.5\ \mathrm{M\Omega},\\
R_{down}&=g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds5}),\quad g_{m7}=774\ \mu\mathrm S,\ g_{ds7}=4.5\ \mu\mathrm S,\ g_{ds2}+g_{ds5}=(4+7.5)\ \mu\mathrm S\;\Rightarrow\;R_{down}=15.0\ \mathrm{M\Omega},
\end{aligned}
$$
$$
R_{out}=21.5\parallel15.0=8.8\ \mathrm{M\Omega},\qquad A_{vd}=g_{m1}R_{out}=(628\ \mu\mathrm S)(8.8\ \mathrm{M\Omega})=5.5\times10^3>3000 .
$$

Both input half-currents reach a shorted output because the folding nodes are low impedance, so the short-circuit transconductance is $g_{m1}$. The power, excluding bias circuitry, is

$$
P_{diss}=(V_{DD}-V_{SS})(I_4+I_5)=(2.5\ \mathrm V)(250\ \mu\mathrm A)=0.63\ \mathrm{mW}<5\ \mathrm{mW}.
$$

| $S_1=S_2$ | $S_3$ | $S_4=S_5$ | $S_6=S_7$ | $S_8$–$S_{11}$ | $I_3$ | $I_4=I_5$ | $A_{vd}$ | $P_{diss}$ |
|---|---|---|---|---|---|---|---|---|
| 158 | 69 | 33 | 33 | 160 | 100 µA | 125 µA | $5.5\times10^3$ | 0.63 mW |

With $L=0.5$ µm, $W=S\times0.5$ µm (for example $W_1=79$ µm).
