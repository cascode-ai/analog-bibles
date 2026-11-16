# Detailed solution - R212

**Approach.** The load gates are tied to the tail node P, so the loads' gate drive $V_{SG} = V_{DD} - V_P$ follows the **input common-mode level**. Part 1: the $V_{SG}$ that gives $R_{on} = 2\ \mathrm{k}\Omega$ fixes $V_P$, and adding $V_{GS1}$ gives $V_{in,CM}$. Part 2: the sweep holds the input common mode at 1.5 V, far below that value, so the loads are strongly on and the outputs stay near $V_{DD}$ except at the two ends of the sweep, where the regions of operation must be tracked.

### Step 1 — Device parameters

Call the common source node of $M_1$, $M_2$ (and the load gates) P. $M_5$ is treated as an ideal 20-µA source. With $W/L = 50/0.5 = 100$:

$$
\begin{aligned}
k_n &= \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
k_p &= \mu_pC_{ox}\frac WL = (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2}.
\end{aligned}
$$

### Step 2 — Part 1: the gate drive that gives $R_{on} = 2\ \mathrm{k}\Omega$

In deep triode $R_{on} = 1/[k_p(V_{SG} - |V_{THP}|)]$, so

$$V_{SG} - |V_{THP}| = \frac{1}{k_pR_{on}} = \frac{1}{(3.84\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega)} = \frac{1}{7.68\ \mathrm{V^{-1}}} = 0.130\ \mathrm{V},$$

$$V_{SG3} = 0.8 + 0.130 = 0.930\ \mathrm{V}, \qquad V_P = V_{DD} - V_{SG3} = 3 - 0.930 = 2.070\ \mathrm{V}.$$

### Step 3 — Part 1: the input common-mode level

At balance each input device carries $I_{D5}/2 = 10\ \mu$A in saturation:

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2I_{D1}}{k_n}} = \sqrt{\frac{2(10\ \mu\mathrm{A})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{1.49\times10^{-3}}\ \mathrm{V} = 0.039\ \mathrm{V},\\
V_{GS1} &= V_{THN} + V_{ov1} = 0.7 + 0.039 = 0.739\ \mathrm{V},\\
V_{in,CM} &= V_P + V_{GS1} = 2.070 + 0.739 = 2.81\ \mathrm{V}.
\end{aligned}
$$

**Checks.** The drop across each load, $(10\ \mu\mathrm{A})(2\ \mathrm{k}\Omega) = 20$ mV, is much smaller than the 0.13-V overdrive, so the loads are in deep triode and the outputs sit at 2.98 V. $M_1$ is saturated ($V_{DS1} = 2.98 - 2.07 = 0.91\ \mathrm{V} > V_{ov1} = 0.039$ V ✓), and $M_5$ has $V_P = 2.07$ V across it, plenty for saturation.

### Step 4 — Part 2, region A: $0 \le V_{in1} \lesssim 0.15$ V ($M_4$ limits the current, $M_2$ in triode)

During the sweep $V_{in2} = 3\ \mathrm{V} - V_{in1}$, so the input common mode is 1.5 V. The conducting input device sets $V_P \approx V_{in} - V_{GS}$: low in the middle of the sweep, where the loads become small resistors, and high only near the ends, where the conducting input is near 3 V. Analyse $0 \le V_{in1} \le 1.5$ V; the rest is the mirror image ($V_{out1}$ and $V_{out2}$ swapped).

$M_1$ is off ($V_{in1}$ is far below $V_P + 0.7$). $M_3$ is on ($V_{SG} = 3 - V_P > 0.8$) but carries no current, so $V_{SD3} = 0$:

$$V_{out1} = V_{DD} = 3\ \mathrm{V}.$$

$M_2$ (gate near 3 V) must carry all 20 µA. If it were saturated, $V_P = 3 - 0.754 = 2.246$ V and $M_4$ would have $V_{SG4} = 0.754\ \mathrm{V} < 0.8$ V, i.e. be **off**, a contradiction. So $V_P$ drops until $M_4$, in **saturation**, delivers 20 µA:

$$
\begin{aligned}
20\ \mu\mathrm{A} &= \tfrac12k_p(V_{DD} - V_P - 0.8)^2\\
V_{DD} - V_P - 0.8 &= \sqrt{\frac{2(20\ \mu\mathrm{A})}{3.84\ \mathrm{mA/V^2}}} = 0.102\ \mathrm{V}\\
V_P &= 3 - 0.8 - 0.102 = 2.098\ \mathrm{V}.
\end{aligned}
$$

$M_2$, with the large overdrive $V_{ov2} = V_{in2} - V_P - 0.7$, is then in triode carrying 20 µA at a small $V_{DS2}$. At $V_{in1} = 0$ ($V_{in2} = 3$ V), $V_{ov2} = 3 - 2.098 - 0.7 = 0.202$ V:

$$
\begin{aligned}
V_{DS2} &= V_{ov2} - \sqrt{V_{ov2}^2 - \frac{2I_D}{k_n}} = 0.202 - \sqrt{0.0408 - 0.00299} = 0.202 - 0.1945 = 0.0075\ \mathrm{V},\\
V_{out2} &= V_P + V_{DS2} = 2.098 + 0.0075 = 2.105\ \mathrm{V}.
\end{aligned}
$$

$M_4$ is saturated: $V_{SD4} = 3 - 2.105 = 0.895\ \mathrm{V} \ge 0.102$ V ✓.

As $V_{in1}$ rises, $V_{ov2}$ shrinks, $V_{DS2}$ grows and $V_{out2}$ creeps up (2.114 V at $V_{in1} = 0.1$ V). $M_2$ reaches its saturation edge when $V_{ov2} = \sqrt{2(20\ \mu\mathrm{A})/k_n} = 0.0546$ V:

$$V_{in2} = 2.098 + 0.7 + 0.0546 = 2.853\ \mathrm{V}\quad\Rightarrow\quad V_{in1} = 0.147\ \mathrm{V}, \qquad V_{out2} = 2.098 + 0.055 = 2.153\ \mathrm{V}.$$

### Step 5 — The step at $V_{in1} \approx 0.15$ V

For $V_{in1} > 0.147$ V, $M_2$ is saturated and sets $V_P = V_{in2} - 0.755$ V, now **below** 2.098 V. $M_4$'s gate drive is then larger than needed (saturated, it would deliver more than 20 µA), so it must enter **triode**, which needs $V_{SD4} < V_{SG4} - 0.8 \approx 0.102$ V, i.e. $V_{out2} > 2.898$ V. Exactly at the boundary $M_2$ and $M_4$ are two saturated 20-µA sources in series, and with $\lambda = 0$ nothing fixes $V_{out2}$ between 2.153 V and 2.898 V: the curve has a **vertical step** from about 2.15 V to about 2.90 V at $V_{in1} \approx 0.15$ V.

### Step 6 — Region B: $0.15\ \mathrm{V} < V_{in1} < 1.47$ V ($M_2$ saturated, $M_4$ in triode)

Now $V_P = V_{in2} - V_{GS2}(20\ \mu\mathrm{A}) = 3 - V_{in1} - 0.755$, and $M_4$ is in triode carrying 20 µA with overdrive $V_{ov4} = 3 - V_P - 0.8$:

$$V_{out2} = V_{DD} - V_{SD4}, \qquad V_{SD4} = V_{ov4} - \sqrt{V_{ov4}^2 - \frac{2(20\ \mu\mathrm{A})}{k_p}} .$$

- $V_{in1} = 0.2$ V: $V_P = 2.045$ V, $V_{ov4} = 0.155$ V, $V_{SD4} = 0.155 - \sqrt{0.0239 - 0.0104} = 0.038$ V, so $V_{out2} = 2.962$ V.
- $V_{in1} = 0.5$ V: $V_P = 1.745$ V, $V_{ov4} = 0.455$ V, $V_{SD4} = 0.012$ V, so $V_{out2} = 2.988$ V.
- $V_{in1} = 1.0$ V: $V_P = 1.245$ V, $V_{ov4} = 0.955$ V, $V_{SD4} = 0.0055$ V, so $V_{out2} = 2.994$ V.

As $V_P$ falls the load turns on harder and $V_{out2}$ creeps toward $V_{DD}$. $M_1$ stays off ($V_{GS1} = V_{in1} - V_P = 2V_{in1} - 2.245 < 0.7$ for $V_{in1} < 1.473$ V), so $V_{out1} = 3$ V.

### Step 7 — Region C: current switching around $V_{in1} = 1.5$ V

The pair steers its current within $|V_{in1} - V_{in2}| \le \sqrt{2I_{D5}/k_n} = \sqrt{2(20\ \mu\mathrm{A})/(13.4\ \mathrm{mA/V^2})} = 0.055$ V, i.e. for $1.473\ \mathrm{V} \le V_{in1} \le 1.527$ V. At balance $V_P = 1.5 - 0.739 = 0.761$ V, so the loads have

$$
\begin{aligned}
V_{SG} - |V_{THP}| &= 3 - 0.761 - 0.8 = 1.439\ \mathrm{V},\\
R_{on} &= \frac{1}{(3.84\ \mathrm{mA/V^2})(1.439\ \mathrm{V})} = 181\ \Omega,\\
V_{out1} = V_{out2} &= 3 - (10\ \mu\mathrm{A})(181\ \Omega) = 2.998\ \mathrm{V}.
\end{aligned}
$$

The differential gain here is only about $g_{m1}R_{on} = \sqrt{2(13.4\ \mathrm{mA/V^2})(10\ \mu\mathrm{A})}\times181\ \Omega = (0.52\ \mathrm{mS})(181\ \Omega) \approx 0.1$: both outputs move by just 2–4 mV as the current switches sides ($V_{out2}$ rises from 2.996 V to 3.000 V and $V_{out1}$ falls from 3.000 V to 2.996 V).

### Step 8 — Upper half and summary table

For $V_{in1} > 1.527$ V the picture is mirrored: $V_{out2} = V_{DD}$ ($M_2$ off), and $V_{out1}$ follows region B in reverse (2.994 V at 2.0 V, 2.988 V at 2.5 V, 2.962 V at 2.8 V), drops abruptly at $V_{in1} \approx 2.853$ V from about 2.90 V to about 2.15 V, and reaches 2.105 V at $V_{in1} = 3$ V.

| $V_{in1}$ (V) | $V_{out1}$ (V) | $V_{out2}$ (V) | Notes |
|---|---|---|---|
| 0 | 3.000 | 2.105 | $M_4$ saturated limits current, $M_2$ triode |
| 0.10 | 3.000 | 2.114 | |
| 0.147 | 3.000 | 2.153 → 2.898 | vertical step |
| 0.2 | 3.000 | 2.962 | $M_2$ saturated, $M_4$ triode |
| 0.5 | 3.000 | 2.988 | |
| 1.0 | 3.000 | 2.994 | |
| 1.50 | 2.998 | 2.998 | current switching, $R_{on} \approx 181\ \Omega$ |
| 2.0 | 2.994 | 3.000 | mirror |
| 2.5 | 2.988 | 3.000 | |
| 2.8 | 2.962 | 3.000 | |
| 2.853 | 2.898 → 2.153 | 3.000 | vertical step |
| 3.0 | 2.105 | 3.000 | |

### Result

**Input common-mode level:**

$$V_{in,CM} = V_{DD} - |V_{THP}| - \frac{1}{k_pR_{on}} + V_{THN} + \sqrt{\frac{I_{D5}}{k_n}} = 2.070 + 0.739 \approx 2.81\ \mathrm{V}.$$

**Sketch.** During the sweep both outputs stay essentially at $V_{DD}$, except near the two ends, where the output on the side carrying the current drops to about 2.1 V.

- **Middle of the sweep.** The loads' gates follow the low tail node ($V_P \approx 0.76$ V), so $R_{on} \approx 180\ \Omega$, and the current switching around $V_{in1} = 1.5$ V (window ±27 mV) moves the outputs by only a few millivolts.
- **Ends of the sweep.** For $V_{in1} \lesssim 0.15$ V, $V_P$ is high (≈ 2.1 V), $M_4$ becomes the current-limiting device and $V_{out2} \approx 2.1$ V. At $V_{in1} \approx 0.15$ V, $V_{out2}$ steps up to ≈ 2.9 V and then creeps toward $V_{DD}$.
- **Symmetry.** $V_{out1}$ is the mirror image: it steps down near $V_{in1} \approx 2.85$ V and ends at 2.105 V.

**Common mistake.** Treating the loads as fixed 2-kΩ resistors throughout the sweep, with outputs swinging by about ±20 mV around a fixed level. $R_{on}$ depends on $V_P$, which follows the input level, so during this sweep the loads are much stronger (about 180 Ω near the middle).

**Common mistake.** Errors in the bias calculation: using $\mu_nC_{ox}$ for the PMOS, writing $V_{SG} = |V_{THP}| + (2\ \mathrm{k}\Omega)(20\ \mu\mathrm{A})$, or confusing the PMOS gate voltage $V_P$ with $V_{in,CM}$. $R_{on}$ fixes the PMOS *overdrive*, $1/(k_pR_{on}) = 0.13$ V, which gives $V_P$; $V_{GS1}$ must then be added.

**Common mistake.** Drawing rail-to-rail swings around $V_{in1} = 1.5$ V, as for a high-gain pair. With the load gates tied to the low tail node, the gain there is only about 0.1.
