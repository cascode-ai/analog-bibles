# Detailed solution - R489

**Approach.** Each output node is the common drain of a PMOS current-source transistor ($M_5$ or $M_6$) above and an NMOS current-source transistor ($M_7$ or $M_8$) below, both carrying a fixed 1 mA. The output can move as long as both devices stay in saturation, i.e. until it comes within one overdrive voltage of either rail. Compute the two overdrives from the square law; their gap from the rails gives the swing.

### Step 1 — What limits the output

Each output branch is a PMOS common-source device on top of an NMOS current source:

- $V_{out1}$ is the drain of $M_5$ (source at $V_{DD}$, $W/L = 60/0.5$) and of $M_7$ (source at ground, $W/L = 50/0.5$).
- Both carry the branch bias current $I_D = 1$ mA.

For the op amp to keep its high gain, every transistor must stay in **saturation**. A MOSFET is saturated when its drain–source voltage is at least its overdrive voltage $V_{ov} = |V_{GS}| - |V_{TH}|$. As $V_{out1}$ moves down, $V_{DS7}$ shrinks; as it moves up, $|V_{DS5}|$ shrinks. The first device to enter the triode region sets each limit.

During the swing the current in each branch stays 1 mA (set by $M_7$), so each overdrive stays fixed at its bias value (λ is not given and is neglected here).

### Step 2 — Lower limit: $M_7$ at the edge of saturation

$M_7$ has its source at ground, so $V_{DS7} = V_{out1}$. Saturation requires

$$V_{out1} \ge V_{GS7} - V_{TH7} = V_{ov7}.$$

From the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$:

$$
\begin{aligned}
V_{ov7} &= \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_7}}\\
&= \sqrt{\frac{2\times1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}}\\
&= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

So $V_{out,min} = 0.386$ V. Note that $V_{TH}$ itself does not appear: the limit is the overdrive, not the threshold.

### Step 3 — Upper limit: $M_5$ at the edge of saturation

$M_5$ has its source at $V_{DD}$, so $|V_{DS5}| = V_{DD} - V_{out1}$. Saturation requires

$$V_{DD} - V_{out1} \ge |V_{GS5}| - |V_{TH5}| = |V_{ov5}| \quad\Longrightarrow\quad V_{out1} \le V_{DD} - |V_{ov5}|.$$

With $(W/L)_5 = 60/0.5 = 120$:

$$
\begin{aligned}
|V_{ov5}| &= \sqrt{\frac{2I_D}{\mu_pC_{ox}(W/L)_5}}\\
&= \sqrt{\frac{2\times1\ \mathrm{mA}}{(38.4\ \mu\mathrm{A/V^2})(120)}}\\
&= \sqrt{\frac{2\ \mathrm{mA}}{4.608\ \mathrm{mA/V^2}}} = \sqrt{0.4340\ \mathrm{V^2}} = 0.659\ \mathrm{V}.
\end{aligned}
$$

$$V_{out,max} = V_{DD} - |V_{ov5}| = 3\ \mathrm{V} - 0.659\ \mathrm{V} = 2.341\ \mathrm{V}.$$

### Step 4 — Single-ended and differential swing

**Each output** can move between

$$0.386\ \mathrm{V} \le V_{out1},\,V_{out2} \le 2.341\ \mathrm{V},$$

a single-ended range of

$$\Delta V_{out1} = 2.341 - 0.386 = 1.955\ \mathrm{V} \approx 1.95\ \mathrm{V}\ \text{(peak-to-peak)}.$$

**Differential output.** In differential operation $V_{out1}$ and $V_{out2}$ move in opposite directions. The differential voltage $V_{out1} - V_{out2}$ is largest when one output is at 2.341 V and the other at 0.386 V, i.e. $+1.955$ V, and most negative in the opposite case, $-1.955$ V. Hence

$$\Delta(V_{out1} - V_{out2}) = 2\times1.955\ \mathrm{V} \approx 3.9\ \mathrm{V}\ \text{(peak-to-peak)}.$$

This doubling of the swing is one of the main advantages of a fully differential op amp, especially with a low supply voltage. For the full swing to be usable symmetrically, the output CM level should sit near the middle of the range, $(0.386 + 2.341)/2 \approx 1.36$ V, which is the job of the CM feedback circuit.

### Result

- Each output: from $V_{ov7} \approx 0.39$ V up to $V_{DD} - |V_{ov5}| \approx 2.34$ V, i.e. **≈ 1.95 V peak-to-peak single-ended**.
- Differential output $V_{out1} - V_{out2}$: **≈ 3.9 V peak-to-peak**.

**Common mistake.** Using threshold or full gate–source voltages for the limits, e.g. $V_{out} \le V_{DD} - |V_{GS5}|$ or $V_{out} \ge V_{TH7}$. Saturation of a transistor whose source is at a rail is lost when its drain comes within one *overdrive* voltage of that rail; $V_{TH}$ does not enter.

**Common mistake.** Using $W/L = 50/0.5$ for $M_5$. The second-stage PMOS devices are wider (60/0.5), which lowers their overdrive to 0.659 V (it would be 0.722 V with 50/0.5).

**Common mistake.** Looking at the first-stage devices to limit the output, or reporting an unlabeled number. The output nodes connect only to $M_5$–$M_8$; and it should be stated whether the swing is per output (≈ 1.95 V) or differential (≈ 3.9 V).
