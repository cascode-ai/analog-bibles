# Detailed solution - R428

**Approach.** This is a design problem with many valid answers. The plan: (1) split the power budget into branch currents; (2) turn the swing specification into a budget for the overdrive voltages of the four stacked output transistors; (3) size every device with the square law; (4) choose the bias voltages; (5) compute the gain with the folded-cascode formula; (6) check whether the input common-mode level can reach 0 V. The free choices are pointed out along the way.

### Step 1 — The circuit and the current budget

Reading the figure:

- $M_1$, $M_2$: PMOS input pair, tail current $I_{SS}$ from $V_{DD}$ into their common source P. $M_1$'s drain goes to node X, $M_2$'s to node Y.
- $M_5$, $M_6$: NMOS current sources (gate $V_{b4}$) from X and Y to ground.
- $M_3$, $M_4$: NMOS cascodes (gate $V_{b1}$), sources at X and Y, drains at the two outputs.
- $M_7$, $M_8$: PMOS cascodes (gate $V_{b2}$); $M_9$, $M_{10}$: PMOS current sources (gate $V_{b3}$) from $V_{DD}$.

**Power.** $P = 6$ mW at $V_{DD} = 3$ V allows a total supply current of $6\ \mathrm{mW}/3\ \mathrm{V} = 2$ mA. Current is drawn from $V_{DD}$ by the tail and by $M_9$, $M_{10}$. **Choice:** $I_{SS} = 1$ mA (0.5 mA per input device) and $|I_{D9}| = |I_{D10}| = 0.5$ mA:

$$I_{SS} + |I_{D9}| + |I_{D10}| = 1 + 0.5 + 0.5 = 2\ \mathrm{mA}.$$

**Folding.** At X, $M_5$ must sink both the input device's current and the cascode branch's current:

$$I_{D5} = I_{D6} = 0.5 + 0.5 = 1\ \mathrm{mA},\qquad I_{D3} = I_{D4} = |I_{D7}| = |I_{D8}| = 0.5\ \mathrm{mA}.$$

### Step 2 — Swing budget

A differential swing of 2.4 V peak-to-peak means each output swings $2.4/2 = 1.2$ V peak-to-peak, because the two outputs move in opposite directions.

Each output is the top of an NMOS stack ($M_5$ under $M_3$) and the bottom of a PMOS stack ($M_9$ over $M_7$). With all four in saturation, an output can go down to $V_{OD5} + V_{OD3}$ and up to $V_{DD} - |V_{OD9}| - |V_{OD7}|$. The available range must be at least 1.2 V:

$$V_{DD} - \big(V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}|\big) \ge 1.2\ \mathrm{V}\ \Longrightarrow\ V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}| \le 1.8\ \mathrm{V}.$$

**Choice** (using the whole budget; smaller values would give margin but larger devices):

$$V_{OD5} = 0.5\ \mathrm{V}\ (\text{it carries 1 mA}),\quad V_{OD3} = 0.4\ \mathrm{V},\quad |V_{OD7}| = |V_{OD9}| = 0.45\ \mathrm{V}.$$

Then each output can swing between $0.5 + 0.4 = 0.9$ V and $3 - 0.45 - 0.45 = 2.1$ V, i.e. 1.2 V peak-to-peak, around an output common-mode level of 1.5 V (set by common-mode feedback).

The input pair and tail are not in the output stack, so their overdrives are free. **Choice:** $|V_{OD1,2}| = 0.3$ V (for a good $g_m$) and $|V_{OD,tail}| = 0.4$ V.

### Step 3 — Device sizes ($L = 0.5\ \mu$m)

From the square law, $W/L = 2|I_D|/(\mu C_{ox}V_{OD}^2)$, with $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$ for NMOS and $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ for PMOS:

$$
\begin{aligned}
\left(\frac WL\right)_{5,6} &= \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2} = \frac{2\times10^{-3}}{33.5\times10^{-6}} = 60,\\
\left(\frac WL\right)_{3,4} &= \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{1\times10^{-3}}{21.4\times10^{-6}} = 47,\\
\left(\frac WL\right)_{7\text{–}10} &= \frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.45\ \mathrm{V})^2} = \frac{1\times10^{-3}}{7.78\times10^{-6}} = 129,\\
\left(\frac WL\right)_{1,2} &= \frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{1\times10^{-3}}{3.46\times10^{-6}} = 289,\\
\left(\frac WL\right)_{tail} &= \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{2\times10^{-3}}{6.14\times10^{-6}} = 326 .
\end{aligned}
$$

| device | type | $\lvert I_D\rvert$ | $\lvert V_{OD}\rvert$ | $W/L$ | $W$ ($L = 0.5\ \mu$m) |
|---|---|---|---|---|---|
| $M_1$, $M_2$ | PMOS | 0.5 mA | 0.30 V | 289 | 145 μm |
| tail | PMOS | 1 mA | 0.40 V | 326 | 163 μm |
| $M_3$, $M_4$ | NMOS | 0.5 mA | 0.40 V | 47 | 23 μm |
| $M_5$, $M_6$ | NMOS | 1 mA | 0.50 V | 60 | 30 μm |
| $M_7$–$M_{10}$ | PMOS | 0.5 mA | 0.45 V | 129 | 64 μm |

### Step 4 — Bias voltages (one consistent set)

- **$V_{b4}$** (gate of $M_5$/$M_6$, source at ground): $V_{TH} + V_{OD5} = 0.7 + 0.5 = 1.2$ V.
- **$V_{b1}$** (gate of $M_3$/$M_4$): to give the outputs their full low range, place X at $V_{OD5} = 0.5$ V. $M_3$'s source is then 0.5 V above its grounded bulk, so its threshold rises:
$$V_{TH3} = 0.7 + 0.45\left(\sqrt{0.9 + 0.5} - \sqrt{0.9}\right) = 0.7 + 0.45(1.1832 - 0.9487) = 0.806\ \mathrm{V},$$
$$V_{b1} = V_X + V_{TH3} + V_{OD3} = 0.5 + 0.806 + 0.4 = 1.71\ \mathrm{V}.$$
- **$V_{b3}$** (gate of $M_9$/$M_{10}$, source at $V_{DD}$): $V_{DD} - |V_{THP}| - |V_{OD9}| = 3 - 0.8 - 0.45 = 1.75$ V.
- **$V_{b2}$** (gate of $M_7$/$M_8$): place the source of $M_7$ at $V_{DD} - |V_{OD9}| = 2.55$ V. Its bulk is at $V_{DD}$, so $|V_{SB}| = 0.45$ V and
$$|V_{TH7}| = 0.8 + 0.4\left(\sqrt{0.8 + 0.45} - \sqrt{0.8}\right) = 0.8 + 0.4(1.1180 - 0.8944) = 0.889\ \mathrm{V},$$
$$V_{b2} = 2.55 - 0.889 - 0.45 = 1.21\ \mathrm{V}.$$
- **Tail gate:** $V_{DD} - 0.8 - 0.4 = 1.8$ V.

### Step 5 — Voltage gain

**Small-signal parameters** ($g_m = 2|I_D|/|V_{OD}|$, $r_O = 1/(\lambda|I_D|)$):

$$
\begin{aligned}
g_{m1} &= \frac{2(0.5\ \mathrm{mA})}{0.3\ \mathrm{V}} = 3.33\ \mathrm{mS}, & r_{O1} &= \frac{1}{(0.2)(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
g_{m3} &= \frac{2(0.5\ \mathrm{mA})}{0.4\ \mathrm{V}} = 2.5\ \mathrm{mS}, & r_{O3} &= \frac{1}{(0.1)(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\\
r_{O5} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k\Omega}, & g_{m7} &= \frac{2(0.5\ \mathrm{mA})}{0.45\ \mathrm{V}} = 2.22\ \mathrm{mS},\\
r_{O7} = r_{O9} &= \frac{1}{(0.2)(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

**Transconductance.** In the differential half circuit, $M_1$'s signal current $g_{m1}v_d/2$ is injected into X. X sees the low resistance of $M_3$'s source (about $1/g_{m3} = 400\ \Omega$) in parallel with $r_{O1}\parallel r_{O5} = 5\ \mathrm{k\Omega}$, so nearly all of the current is "folded" up through $M_3$ to the output: $G_m \approx g_{m1}$.

**Output resistance per side.** Looking down, $M_3$ is a cascode degenerated by $r_{O1}\parallel r_{O5}$ (both connect X to ac ground):

$$R_{down} \approx g_{m3}r_{O3}(r_{O1}\parallel r_{O5}) = (2.5\ \mathrm{mS})(20\ \mathrm{k\Omega})(5\ \mathrm{k\Omega}) = 250\ \mathrm{k\Omega}.$$

Looking up, $M_7$ is a cascode degenerated by $r_{O9}$:

$$R_{up} \approx g_{m7}r_{O7}r_{O9} = (2.22\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 222\ \mathrm{k\Omega}.$$

$$R_{out} = R_{down}\parallel R_{up} = \frac{250\times222}{250 + 222}\ \mathrm{k\Omega} = 118\ \mathrm{k\Omega}.$$

**Differential gain:**

$$A_v \approx g_{m1}\Big\{\big[g_{m3}r_{O3}(r_{O1}\parallel r_{O5})\big]\parallel\big[g_{m7}r_{O7}r_{O9}\big]\Big\} = (3.33\ \mathrm{mS})(118\ \mathrm{k\Omega}) \approx 390 .$$

**With the body effect of the cascodes**, $g_m \to g_m + g_{mb} = g_m(1 + \eta)$: for $M_3$, $\eta_3 = 0.45/(2\sqrt{0.9 + 0.5}) = 0.19$; for $M_7$, $\eta_7 = 0.4/(2\sqrt{0.8 + 0.45}) = 0.18$. Then $R_{down} = 298\ \mathrm{k\Omega}$, $R_{up} = 262\ \mathrm{k\Omega}$, $R_{out} = 139\ \mathrm{k\Omega}$ and $A_v \approx 460$. Any reasonable design of this kind gives a gain of a few hundred.

### Step 6 — Can the input common-mode level be 0 V?

The input devices are PMOS, so their sources sit **above** their gates: $V_P = V_{in,CM} + |V_{GS1}|$.

**At $V_{in,CM} = 0$.** The bulk of $M_1$ is at $V_{DD}$, so $|V_{SB1}| = V_{DD} - V_P$, and $|V_{TH1}| = 0.8 + 0.4(\sqrt{0.8 + 3 - V_P} - \sqrt{0.8})$. Solving $V_P = |V_{TH1}| + 0.3$ by iteration (start with $V_P = 1.4$ V: $|V_{TH1}| = 0.8 + 0.4(\sqrt{2.4} - 0.894) = 1.062$ V, so $V_P = 1.362$ V; once more: $|V_{TH1}| = 0.8 + 0.4(\sqrt{2.438} - 0.894) = 1.067$ V) gives

$$|V_{TH1}| \approx 1.07\ \mathrm{V},\qquad V_P \approx 1.37\ \mathrm{V}.$$

**Tail headroom.** The tail source needs $|V_{DS}| \ge 0.4$ V; it has $3 - 1.37 = 1.63$ V. ✓

**Input devices saturated.** A PMOS is saturated while its drain is no higher than one threshold above its gate:

$$V_X \le V_{in,CM} + |V_{TH1}| = 0 + 1.07 = 1.07\ \mathrm{V}.$$

**$M_5$ saturated** requires $V_X \ge V_{OD5} = 0.5$ V. With $V_{b1}$ chosen so that $V_X = 0.5$ V (Step 4), both conditions hold:

$$0.5\ \mathrm{V} \le V_X = 0.5\ \mathrm{V} \le 1.07\ \mathrm{V}.\ \checkmark$$

So **yes**, the input common-mode level can be 0 V. It can even go somewhat negative (down to about $V_X - |V_{TH1}| \approx -0.6$ V), because a PMOS input stage whose drains feed a low node X only needs its gate to stay within one threshold below its drain. This is a key advantage of the PMOS-input folded cascode.

### Result

One consistent design: total current 2 mA ($I_{SS} = 1$ mA, 0.5 mA in each cascode branch, 1 mA in $M_5$/$M_6$); overdrive budget $V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}| = 0.4 + 0.5 + 0.45 + 0.45 = 1.8$ V, giving 1.2 V peak-to-peak per output (2.4 V differential); $(W/L)_{5,6} \approx 60$, $(W/L)_{3,4} \approx 47$, $(W/L)_{7\text{–}10} \approx 129$, $(W/L)_{1,2} \approx 290$ (0.3-V overdrive), tail $\approx 326$, all with $L = 0.5\ \mu$m.

$$A_v \approx g_{m1}\Big\{\big[g_{m3}r_{O3}(r_{O1}\parallel r_{O5})\big]\parallel\big[g_{m7}r_{O7}r_{O9}\big]\Big\} \approx 390\quad(\approx 460\ \text{with the body effect of the cascodes}).$$

Yes, the input common-mode level can be zero: with PMOS inputs, $V_P \approx 1.37$ V leaves ample room for the tail, and the input devices stay saturated as long as $V_X \le V_{in,CM} + |V_{TH1}| \approx 1.07$ V, while $M_5$ only needs $V_X \ge 0.5$ V.

**Common mistake.** Reading the 2.4-V specification as the swing of each output. A differential swing of 2.4 V peak-to-peak needs only 1.2 V peak-to-peak per output, which sets the overdrive budget at 1.8 V, not 0.6 V.

**Common mistake.** Sizing $M_5$/$M_6$ for the cascode branch current alone (0.5 mA). The folding node X must sink both the input device's current and the cascode's current, 1 mA in total.

**Common mistake.** Computing the gain as $g_{m1}(r_{O1}\parallel r_{O5})$, or claiming that an input level of 0 V is impossible because "the input devices need $V_{GS}$ above ground". The output is a cascode node with resistance about $g_mr_O^2$; and a PMOS pair sits *above* its gates, so a 0-V input simply puts P near 1.4 V.
