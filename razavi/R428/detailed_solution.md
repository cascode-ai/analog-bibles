# Detailed solution - R428

**Approach.** This design problem has many valid answers. Split the power budget into branch currents, turn the swing specification into an overdrive budget for the four stacked output transistors, size every device with the square law, choose the bias voltages, compute the gain with the folded-cascode formula, and check whether the input common-mode level can reach 0 V. The free choices are marked.

### Step 1 — Current budget

Call the drains of $M_1$, $M_2$ (the folding nodes) X and Y. $P = 6$ mW at $V_{DD} = 3$ V allows $6\ \mathrm{mW}/3\ \mathrm{V} = 2$ mA, drawn from $V_{DD}$ by the tail and by $M_9$, $M_{10}$. **Choice:** $I_{SS} = 1$ mA (0.5 mA per input device) and $|I_{D9}| = |I_{D10}| = 0.5$ mA:

$$I_{SS} + |I_{D9}| + |I_{D10}| = 1 + 0.5 + 0.5 = 2\ \mathrm{mA}.$$

At X, $M_5$ must sink both the input device's and the cascode branch's current:

$$I_{D5} = I_{D6} = 0.5 + 0.5 = 1\ \mathrm{mA},\qquad I_{D3} = I_{D4} = |I_{D7}| = |I_{D8}| = 0.5\ \mathrm{mA}.$$

### Step 2 — Swing budget

A 2.4-V peak-to-peak differential swing means $2.4/2 = 1.2$ V peak-to-peak per output. Each output can go down to $V_{OD5} + V_{OD3}$ and up to $V_{DD} - |V_{OD9}| - |V_{OD7}|$, so

$$V_{DD} - \big(V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}|\big) \ge 1.2\ \mathrm{V}\ \Longrightarrow\ V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}| \le 1.8\ \mathrm{V}.$$

**Choice** (the whole budget; smaller values give margin but larger devices):

$$V_{OD5} = 0.5\ \mathrm{V}\ (\text{it carries 1 mA}),\quad V_{OD3} = 0.4\ \mathrm{V},\quad |V_{OD7}| = |V_{OD9}| = 0.45\ \mathrm{V}.$$

Each output then swings between $0.5 + 0.4 = 0.9$ V and $3 - 0.45 - 0.45 = 2.1$ V, i.e. 1.2 V peak-to-peak around an output common-mode level of 1.5 V (set by common-mode feedback). The input pair and tail are outside the output stack. **Choice:** $|V_{OD1,2}| = 0.3$ V (for a good $g_m$) and $|V_{OD,tail}| = 0.4$ V.

### Step 3 — Device sizes ($L = 0.5\ \mu$m)

With $W/L = 2|I_D|/(\mu C_{ox}V_{OD}^2)$:

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

- **$V_{b4}$** (gate of $M_5$/$M_6$): $V_{TH} + V_{OD5} = 0.7 + 0.5 = 1.2$ V.
- **$V_{b1}$** (gate of $M_3$/$M_4$): place X at $V_{OD5} = 0.5$ V for the full low range. $M_3$'s source is then 0.5 V above its grounded bulk:
$$V_{TH3} = 0.7 + 0.45\left(\sqrt{0.9 + 0.5} - \sqrt{0.9}\right) = 0.7 + 0.45(1.1832 - 0.9487) = 0.806\ \mathrm{V},$$
$$V_{b1} = V_X + V_{TH3} + V_{OD3} = 0.5 + 0.806 + 0.4 = 1.71\ \mathrm{V}.$$
- **$V_{b3}$** (gate of $M_9$/$M_{10}$): $V_{DD} - |V_{THP}| - |V_{OD9}| = 3 - 0.8 - 0.45 = 1.75$ V.
- **$V_{b2}$** (gate of $M_7$/$M_8$): the source of $M_7$ is at $V_{DD} - |V_{OD9}| = 2.55$ V, with $|V_{SB}| = 0.45$ V:
$$|V_{TH7}| = 0.8 + 0.4\left(\sqrt{0.8 + 0.45} - \sqrt{0.8}\right) = 0.8 + 0.4(1.1180 - 0.8944) = 0.889\ \mathrm{V},$$
$$V_{b2} = 2.55 - 0.889 - 0.45 = 1.21\ \mathrm{V}.$$
- **Tail gate:** $V_{DD} - 0.8 - 0.4 = 1.8$ V.

### Step 5 — Voltage gain

With $g_m = 2|I_D|/|V_{OD}|$ and $r_O = 1/(\lambda|I_D|)$:

$$
\begin{aligned}
g_{m1} &= \frac{2(0.5\ \mathrm{mA})}{0.3\ \mathrm{V}} = 3.33\ \mathrm{mS}, & r_{O1} &= \frac{1}{(0.2)(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
g_{m3} &= \frac{2(0.5\ \mathrm{mA})}{0.4\ \mathrm{V}} = 2.5\ \mathrm{mS}, & r_{O3} &= \frac{1}{(0.1)(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\\
r_{O5} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k\Omega}, & g_{m7} &= \frac{2(0.5\ \mathrm{mA})}{0.45\ \mathrm{V}} = 2.22\ \mathrm{mS},\\
r_{O7} = r_{O9} &= \frac{1}{(0.2)(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

**Transconductance.** $M_1$'s signal current enters X, which sees $M_3$'s source (about $1/g_{m3} = 400\ \Omega$) in parallel with $r_{O1}\parallel r_{O5} = 5\ \mathrm{k\Omega}$, so nearly all of it is folded up to the output: $G_m \approx g_{m1}$.

**Output resistance per side.** Looking down, $M_3$ is degenerated by $r_{O1}\parallel r_{O5}$; looking up, $M_7$ by $r_{O9}$:

$$
\begin{aligned}
R_{down} &\approx g_{m3}r_{O3}(r_{O1}\parallel r_{O5}) = (2.5\ \mathrm{mS})(20\ \mathrm{k\Omega})(5\ \mathrm{k\Omega}) = 250\ \mathrm{k\Omega},\\
R_{up} &\approx g_{m7}r_{O7}r_{O9} = (2.22\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 222\ \mathrm{k\Omega},\\
R_{out} &= R_{down}\parallel R_{up} = \frac{250\times222}{250 + 222}\ \mathrm{k\Omega} = 118\ \mathrm{k\Omega}.
\end{aligned}
$$

$$A_v \approx g_{m1}\Big\{\big[g_{m3}r_{O3}(r_{O1}\parallel r_{O5})\big]\parallel\big[g_{m7}r_{O7}r_{O9}\big]\Big\} = (3.33\ \mathrm{mS})(118\ \mathrm{k\Omega}) \approx 390 .$$

**With the body effect of the cascodes**, $g_m \to g_m(1 + \eta)$ with $\eta_3 = 0.45/(2\sqrt{0.9 + 0.5}) = 0.19$ and $\eta_7 = 0.4/(2\sqrt{0.8 + 0.45}) = 0.18$: $R_{down} = 298\ \mathrm{k\Omega}$, $R_{up} = 262\ \mathrm{k\Omega}$, $R_{out} = 139\ \mathrm{k\Omega}$ and $A_v \approx 460$. Any reasonable design of this kind gives a few hundred.

### Step 6 — Can the input common-mode level be 0 V?

The input devices are PMOS, so their sources sit **above** their gates: $V_P = V_{in,CM} + |V_{GS1}|$. At $V_{in,CM} = 0$, with the bulk at $V_{DD}$, $|V_{TH1}| = 0.8 + 0.4(\sqrt{0.8 + 3 - V_P} - \sqrt{0.8})$. Iterating $V_P = |V_{TH1}| + 0.3$ from $V_P = 1.4$ V: $|V_{TH1}| = 0.8 + 0.4(\sqrt{2.4} - 0.894) = 1.062$ V, so $V_P = 1.362$ V; then $|V_{TH1}| = 0.8 + 0.4(\sqrt{2.438} - 0.894) = 1.067$ V:

$$|V_{TH1}| \approx 1.07\ \mathrm{V},\qquad V_P \approx 1.37\ \mathrm{V}.$$

- **Tail headroom:** it needs $|V_{DS}| \ge 0.4$ V and has $3 - 1.37 = 1.63$ V. ✓
- **Input devices saturated:** a PMOS drain may be at most one threshold above its gate:
$$V_X \le V_{in,CM} + |V_{TH1}| = 0 + 1.07 = 1.07\ \mathrm{V}.$$
- **$M_5$ saturated:** $V_X \ge V_{OD5} = 0.5$ V.

With $V_{b1}$ setting $V_X = 0.5$ V (Step 4), both hold:

$$0.5\ \mathrm{V} \le V_X = 0.5\ \mathrm{V} \le 1.07\ \mathrm{V}.\ \checkmark$$

So **yes**, the input common-mode level can be 0 V, and even somewhat negative (down to about $V_X - |V_{TH1}| \approx -0.6$ V): a key advantage of the PMOS-input folded cascode.

### Result

One consistent design: total current 2 mA ($I_{SS} = 1$ mA, 0.5 mA in each cascode branch, 1 mA in $M_5$/$M_6$); overdrive budget $V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}| = 0.4 + 0.5 + 0.45 + 0.45 = 1.8$ V, giving 1.2 V peak-to-peak per output (2.4 V differential); $(W/L)_{5,6} \approx 60$, $(W/L)_{3,4} \approx 47$, $(W/L)_{7\text{–}10} \approx 129$, $(W/L)_{1,2} \approx 290$ (0.3-V overdrive), tail $\approx 326$, all with $L = 0.5\ \mu$m.

$$A_v \approx g_{m1}\Big\{\big[g_{m3}r_{O3}(r_{O1}\parallel r_{O5})\big]\parallel\big[g_{m7}r_{O7}r_{O9}\big]\Big\} \approx 390\quad(\approx 460\ \text{with the body effect of the cascodes}).$$

Yes, the input common-mode level can be zero: with PMOS inputs, $V_P \approx 1.37$ V leaves ample room for the tail, and the input devices stay saturated as long as $V_X \le V_{in,CM} + |V_{TH1}| \approx 1.07$ V, while $M_5$ only needs $V_X \ge 0.5$ V.

**Common mistake.** Reading 2.4 V as the swing of each output. It is differential, so each output needs only 1.2 V peak-to-peak, and the overdrive budget is 1.8 V, not 0.6 V.

**Common mistake.** Sizing $M_5$/$M_6$ for the cascode branch current alone (0.5 mA). The folding node must sink both currents, 1 mA in total.

**Common mistake.** Computing the gain as $g_{m1}(r_{O1}\parallel r_{O5})$, or claiming a 0-V input is impossible. The output is a cascode node (about $g_mr_O^2$), and a PMOS pair sits *above* its gates, so a 0-V input simply puts P near 1.4 V.
