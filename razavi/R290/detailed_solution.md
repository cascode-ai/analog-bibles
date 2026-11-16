# Detailed solution - R290

**Approach.** The output can rise only until the PMOS current source leaves saturation, and fall only until $M_1$ leaves saturation. The upper limit fixes the PMOS overdrive, and through the square law at $I_D = 1$ mA it fixes the PMOS aspect ratio. The lower limit is the overdrive of $M_1$. The difference between the two limits is the maximum peak-to-peak swing.

### Step 1 — The circuit and the two saturation conditions

From the figure: $M_1$ (NMOS, source grounded) is driven at its gate (node X) through $R_S$. Its drain is the output, loaded by the current source $I_1$, which is a PMOS transistor with its source at $V_{DD} = 3$ V and its gate at a fixed bias. Both transistors carry $I_{D1} = 1$ mA. ($R_S$ and the capacitances do not affect the dc levels.)

- **PMOS saturated** requires $V_{SD} \ge V_{SG} - |V_{THP}|$, i.e. $V_{DD} - V_{out} \ge |V_{ov,P}|$, where $|V_{ov,P}| = V_{SG} - |V_{THP}|$ is its overdrive. So
$$V_{out} \le V_{DD} - |V_{ov,P}|.$$
- **$M_1$ saturated** requires $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e.
$$V_{out} \ge V_{ov1} = V_{GS1} - V_{TH1}.$$

### Step 2 — PMOS overdrive from the upper limit

The maximum allowable output is 2.6 V, so

$$|V_{ov,P}| = V_{DD} - V_{out,max} = 3\ \mathrm{V} - 2.6\ \mathrm{V} = 0.4\ \mathrm{V}.$$

Note that the threshold voltage does not enter this condition: the edge of saturation depends only on the overdrive. The threshold only determines where the PMOS gate must be biased:

$$V_{G,P} = V_{DD} - |V_{THP}| - |V_{ov,P}| = 3 - 0.8 - 0.4 = 1.8\ \mathrm{V}.$$

### Step 3 — PMOS aspect ratio

Square-law saturation current (λ neglected):

$$I_D = \frac12\mu_pC_{ox}\left(\frac{W}{L}\right)_P|V_{ov,P}|^2 .$$

Solve for the aspect ratio:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_P &= \frac{2I_D}{\mu_pC_{ox}|V_{ov,P}|^2} = \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2}\\
&= \frac{2\times10^{-3}\ \mathrm{A}}{(38.4\times10^{-6}\ \mathrm{A/V^2})(0.16\ \mathrm{V^2})} = \frac{2\times10^{-3}}{6.144\times10^{-6}} = 325.5 .
\end{aligned}
$$

With $L = 0.5\ \mu\mathrm{m}$ this is $W \approx 163\ \mu\mathrm{m}$, i.e. $(W/L)_P \approx 163/0.5$. The PMOS is large because holes have about 3.5 times lower mobility than electrons and because a small overdrive was demanded.

(If channel-length modulation were included with $\lambda_P = 0.2\ \mathrm{V^{-1}}$ at $V_{SD} = 0.4$ V, the current would be larger by $1 + 0.08$, and the required ratio would drop to about $325.5/1.08 \approx 301$.)

### Step 4 — Lower output limit from $M_1$

$M_1$ carries 1 mA with $(W/L)_1 = 50/0.5 = 100$, so its overdrive is

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(100)}}\\
&= \sqrt{\frac{2\times10^{-3}}{1.34\times10^{-2}}}\ \mathrm{V} = \sqrt{0.149}\ \mathrm{V} = 0.386\ \mathrm{V}.
\end{aligned}
$$

For small input signals (the stage has high gain, so the output swings over its full range for a tiny change in $V_{GS1}$), $V_{GS1}$ stays essentially at its bias value. $M_1$ remains saturated as long as

$$V_{out} \ge V_{ov1} = 0.386\ \mathrm{V}.$$

### Step 5 — Maximum peak-to-peak swing

The output can move between the two limits while both devices stay saturated:

$$V_{out,max} - V_{out,min} = 2.6\ \mathrm{V} - 0.386\ \mathrm{V} = 2.21\ \mathrm{V}\ \text{peak-to-peak}.$$

To use the whole range symmetrically, the quiescent output should sit at the midpoint, $(2.6 + 0.386)/2 \approx 1.49$ V.

| Limit | Set by | Value |
|---|---|---|
| upper | PMOS edge of saturation: $V_{DD} - \lvert V_{ov,P}\rvert$ | 2.6 V |
| lower | $M_1$ edge of saturation: $V_{ov1}$ | 0.386 V |
| swing | difference | 2.21 V p-p |

### Result

- **PMOS aspect ratio:** $(W/L)_P \approx 326$ (e.g. $163\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$). It follows from a PMOS overdrive of $|V_{ov,P}| = V_{DD} - 2.6\ \mathrm{V} = 0.4$ V and $1\ \mathrm{mA} = \tfrac12(38.4\ \mu\mathrm{A/V^2})(W/L)_P(0.4\ \mathrm{V})^2$. The PMOS gate is biased at about 1.8 V.
- **Lower limit:** $M_1$ saturated requires $V_{out} \ge V_{GS1} - V_{TH1} = \sqrt{2I_D/[\mu_nC_{ox}(W/L)_1]} = 0.386$ V.
- **Maximum swing:** $2.6 - 0.386 \approx 2.2$ V peak-to-peak (output between ≈ 0.39 V and 2.6 V).

**Common mistake.** Including the threshold in the headroom, e.g. taking the PMOS overdrive as $V_{DD} - 2.6\ \mathrm{V} - |V_{THP}|$. The edge of saturation is $V_{SD} = V_{SG} - |V_{TH}|$, i.e. the drain may come within one *overdrive*, not one threshold, of the supply. Including $V_{TH}$ would give a negative overdrive here.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS. The current source is a p-channel device, so $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ must be used, which makes it about 3.5 times wider than an NMOS of the same overdrive.

**Common mistake.** Taking the lower limit as 0 V or as $V_{TH}$. $M_1$ leaves saturation when its drain falls below $V_{GS1} - V_{TH1}$, its overdrive (0.386 V), not when it reaches ground or one threshold.
