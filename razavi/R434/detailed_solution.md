# Detailed solution - R434

**Approach.** This is an open design problem. The power budget fixes the tail current; a 2.4-V single-ended swing from a 3-V supply leaves only 0.6 V for the overdrives of the five devices stacked at the output. Allocate these overdrives, size each device with the square law, set the bias voltages (with the body effect) so that the limiting devices sit exactly at the edge of saturation, and compute the open-loop gain. The free choices are marked.

### Step 1 — Current budget

The tail $I_{SS}$ is implemented with an NMOS current-source transistor, so it needs some headroom. The gate of $M_2$ is a normal input, so the input common-mode level is a free bias choice. $P = 6\ \mathrm{mW}$ at $V_{DD} = 3$ V allows 2 mA in total, all through the tail (bias generation neglected):

$$I_{SS} = 2\ \mathrm{mA},\qquad I_D = 1\ \mathrm{mA}\ \text{in each branch}.$$

### Step 2 — The swing budget

The output is the top of the NMOS stack (tail, $M_2$, $M_4$) and the bottom of the PMOS stack ($M_8$, $M_6$). With every device just saturated:

$$V_{out,min} = V_{OD,SS} + V_{OD2} + V_{OD4},\qquad V_{out,max} = V_{DD} - |V_{OD8}| - |V_{OD6}| ,$$

and $V_{out,max} - V_{out,min} \ge 2.4$ V requires

$$V_{OD,SS} + V_{OD2} + V_{OD4} + |V_{OD6}| + |V_{OD8}| \le 3 - 2.4 = 0.6\ \mathrm{V}.$$

**Choice** (the whole budget):

$$V_{OD,SS} = 0.15\ \mathrm{V},\quad V_{OD1\text{–}4} = 0.10\ \mathrm{V},\quad |V_{OD5\text{–}8}| = 0.125\ \mathrm{V}\qquad(\text{sum } 0.15 + 0.1 + 0.1 + 0.125 + 0.125 = 0.6\ \mathrm{V}).$$

The tail gets more because it carries twice the current, and the PMOS devices more than the NMOS ones because of their lower mobility. Other splits are equally valid.

### Step 3 — Device sizes ($L = 0.5\ \mu$m)

With $W/L = 2I_D/(\mu C_{ox}V_{OD}^2)$:

$$
\begin{aligned}
\left(\frac WL\right)_{SS} &= \frac{2(2\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.15\ \mathrm{V})^2} = \frac{4\times10^{-3}}{3.015\times10^{-6}} \approx 1330,\\
\left(\frac WL\right)_{1\text{–}4} &= \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.10\ \mathrm{V})^2} = \frac{2\times10^{-3}}{1.34\times10^{-6}} \approx 1490,\\
\left(\frac WL\right)_{5\text{–}8} &= \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.125\ \mathrm{V})^2} = \frac{2\times10^{-3}}{0.600\times10^{-6}} \approx 3330 .
\end{aligned}
$$

| device | type | $\lvert I_D\rvert$ | $\lvert V_{OD}\rvert$ | $W/L$ | $W$ |
|---|---|---|---|---|---|
| tail | NMOS | 2 mA | 0.15 V | 1330 | 663 μm |
| $M_1$–$M_4$ | NMOS | 1 mA | 0.10 V | 1490 | 746 μm |
| $M_5$–$M_8$ | PMOS | 1 mA | 0.125 V | 3330 | 1667 μm |

With overdrives of only 0.1 V these very wide devices operate near weak inversion, where the square law overestimates the current; a designer might trade some swing for smaller devices.

### Step 4 — Bias voltages

**Tail gate:** $V_{GS,SS} = 0.7 + 0.15 = 0.85$ V, with its drain (node P, the sources of $M_1$/$M_2$) at the edge, $V_P = 0.15$ V.

**Input common-mode level.** $M_1$'s source is 0.15 V above its grounded bulk:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.15} - \sqrt{0.9}\right) = 0.7 + 0.45(1.0247 - 0.9487) = 0.734\ \mathrm{V},\\
V_{in,CM} &= V_P + V_{TH1} + V_{OD1} = 0.15 + 0.734 + 0.10 = 0.98\ \mathrm{V}.
\end{aligned}
$$

**$V_{b1}$.** Put the drains of $M_1$/$M_2$ at $V_P + V_{OD1} = 0.25$ V (input devices at the edge); the cascodes' sources are then 0.25 V above ground:

$$
\begin{aligned}
V_{TH3} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.25} - \sqrt{0.9}\right) = 0.7 + 0.45(1.0724 - 0.9487) = 0.756\ \mathrm{V},\\
V_{b1} &= 0.25 + V_{TH3} + V_{OD3} = 0.25 + 0.756 + 0.10 = 1.11\ \mathrm{V}.
\end{aligned}
$$

Check: $V_{out,min} = V_{b1} - V_{TH4} = 1.106 - 0.756 = 0.35$ V $= 0.15 + 0.1 + 0.1$. ✓

**$V_{b2}$.** Put the source of $M_6$ at $V_{DD} - |V_{OD8}| = 2.875$ V ($M_8$ at the edge), so $|V_{SB6}| = 0.125$ V:

$$
\begin{aligned}
|V_{TH6}| &= 0.8 + 0.4\left(\sqrt{0.8 + 0.125} - \sqrt{0.8}\right) = 0.8 + 0.4(0.9618 - 0.8944) = 0.827\ \mathrm{V},\\
V_{b2} &= 2.875 - |V_{TH6}| - |V_{OD6}| = 2.875 - 0.827 - 0.125 = 1.92\ \mathrm{V}
\end{aligned}
$$

(1.95 V if the body effect is ignored). Check: $V_{out,max} = V_{b2} + |V_{TH6}| = 1.923 + 0.827 = 2.75$ V $= 3 - 0.125 - 0.125$. ✓ The same $V_{b2}$ puts $M_7$ at the edge on the left side.

**Node X** (drain of $M_3$/$M_5$, gate of $M_7$): $V_X = V_{DD} - |V_{GS7}| = 3 - (0.8 + 0.125) = 2.075$ V. $M_5$ needs $V_X \le V_{b2} + |V_{TH5}| = 2.75$ V ✓, and $M_3$ needs $V_X \ge V_{b1} - V_{TH3} = 0.35$ V ✓.

**Output range:** 0.35 V to 2.75 V, i.e. 2.4 V peak-to-peak around a mid-level of 1.55 V.

### Step 5 — Open-loop gain

$$
\begin{aligned}
g_{m1\text{–}4} &= \frac{2I_D}{V_{OD}} = \frac{2(1\ \mathrm{mA})}{0.1\ \mathrm{V}} = 20\ \mathrm{mS}, & r_{O1\text{–}4} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
g_{m5\text{–}8} &= \frac{2(1\ \mathrm{mA})}{0.125\ \mathrm{V}} = 16\ \mathrm{mS}, & r_{O5\text{–}8} &= \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k\Omega}.
\end{aligned}
$$

$$
\begin{aligned}
R_{down} &\approx g_{m4}r_{O4}r_{O2} = (20\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 2\ \mathrm{M\Omega},\\
R_{up} &\approx g_{m6}r_{O6}r_{O8} = (16\ \mathrm{mS})(5\ \mathrm{k\Omega})(5\ \mathrm{k\Omega}) = 0.4\ \mathrm{M\Omega},\\
R_{out} &= 2\parallel0.4\ \mathrm{M\Omega} = 0.333\ \mathrm{M\Omega}.
\end{aligned}
$$

With the mirror, the short-circuit transconductance is $\approx g_{m1}$:

$$A_v \approx g_{m1}\Big\{\big[g_{m4}r_{O4}r_{O2}\big]\parallel\big[g_{m6}r_{O6}r_{O8}\big]\Big\} = (20\ \mathrm{mS})(333\ \mathrm{k\Omega}) \approx 6700 .$$

With the body effect of the NMOS cascode ($\eta_4 = 0.45/(2\sqrt{1.15}) = 0.21$, $R_{down} \to 2.42\ \mathrm{M\Omega}$) the gain is about 6900; adding that of the PMOS cascode ($\eta_6 = 0.21$) gives about 8000.

### Result

One consistent design: $I_{SS} = 2$ mA (6 mW), 1 mA per branch; overdrives tail 0.15 V, $M_1$–$M_4$ 0.10 V, $M_5$–$M_8$ 0.125 V (sum 0.6 V, giving an output range of 0.35–2.75 V = 2.4 V peak-to-peak); $(W/L)_{SS} \approx 1330$, $(W/L)_{1\text{–}4} \approx 1490$, $(W/L)_{5\text{–}8} \approx 3330$ with $L = 0.5\ \mu$m. Bias: tail gate 0.85 V, $V_{in,CM} \approx 0.98$ V, $V_{b1} \approx 1.11$ V, $V_{b2} \approx 1.92$ V (1.95 V without body effect), giving $V_X \approx 2.08$ V. Open-loop gain

$$A_v \approx g_{m1}\big[(g_{m4}r_{O4}r_{O2})\parallel(g_{m6}r_{O6}r_{O8})\big] = 20\ \mathrm{mS}\times(2\ \mathrm{M\Omega}\parallel0.4\ \mathrm{M\Omega}) \approx 6700$$

(about 6900–8000 with the cascodes' body effect). The price of the large swing is very wide transistors operating near weak inversion.

**Common mistake.** Leaving the tail source out of the swing budget without saying so. A real tail transistor needs its overdrive too, so five overdrives must share the 0.6 V.

**Common mistake.** Reading the PMOS load as a two-diode cascode mirror, $V_X = V_{DD} - |V_{GS5}| - |V_{GS7}|$. X drives the gate of $M_7$ directly, so $V_X = V_{DD} - |V_{GS7}|$, and $V_{b2}$ must be generated separately.

**Common mistake.** Computing the gain as $g_{m1}(r_{O2}\parallel r_{O4})$. Both sides are cascodes, so the output resistance is of order $g_mr_O^2$ and the gain is in the thousands.
