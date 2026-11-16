# Detailed solution - R439

**Approach.** The DC level of X and Y is fixed by the second stage ($V_{DD} - |V_{GS9}|$). The required 200-mV swing around that level gives a lowest and a highest allowed voltage at X. The NMOS stack below X and the PMOS cascode load above X must stay saturated at these extremes, which yields an overdrive budget for each stack. "Minimum dimensions" means using the largest overdrives the budgets allow, split so that the total width is smallest. Then the square law gives $W/L$.

### Step 1 — The common-mode level at X and Y

X drives the gate of the PMOS $M_9$, whose source (and n-well) is at $V_{DD}$, so it has no body effect. For $M_9$ to carry 0.5 mA with $(W/L)_9 = 100/0.5 = 200$, the square law $I_D = \tfrac12\mu_pC_{ox}(W/L)|V_{ov}|^2$ gives an overdrive

$$
\begin{aligned}
|V_{ov9}| &= \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{0.1302\ \mathrm{V^2}} = 0.361\ \mathrm{V}.
\end{aligned}
$$

So $|V_{GS9}| = |V_{TH,p}| + |V_{ov9}| = 0.8 + 0.361 = 1.161$ V, and

$$V_{X,CM} = V_{DD} - |V_{GS9}| = 3\ \mathrm{V} - 1.161\ \mathrm{V} = 1.839\ \mathrm{V}.$$

### Step 2 — The voltage range X must cover

A peak-to-peak swing of 200 mV centred on the CM level means $\pm100$ mV:

$$
\begin{aligned}
V_{X,min} &= 1.839\ \mathrm{V} - 0.100\ \mathrm{V} = 1.739\ \mathrm{V},\\
V_{X,max} &= 1.839\ \mathrm{V} + 0.100\ \mathrm{V} = 1.939\ \mathrm{V}.
\end{aligned}
$$

Each branch of the first stage carries half the tail current:

$$I_{D1} = I_{D3} = I_{D5} = I_{D7} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

### Step 3 — Lowest X: budget for the NMOS stack ($M_1$, $M_3$)

Below X there are three elements in series: the tail current source (needs at least 400 mV), the input transistor $M_1$, and the cascode transistor $M_3$. An NMOS stays saturated as long as its drain is no lower than its gate minus its threshold, i.e. $V_D \ge V_G - V_{TH}$, which is the same as $V_{DS} \ge V_{ov}$.

Choose the free voltages (input common-mode level and $V_{b1}$) so that every device reaches the edge of saturation at the same time, when X is at its minimum:

- **Tail source:** $V_P = 0.4$ V (its minimum).
- **$M_1$:** its gate is at $V_{in,CM} = V_P + V_{GS1}$, so its drain may go down to $V_{in,CM} - V_{TH1} = V_P + V_{ov1}$. Set $V_{D1} = V_P + V_{ov1}$ (this is the source of $M_3$).
- **$M_3$:** its gate is at $V_{b1} = V_{D1} + V_{GS3}$, so X may go down to $V_{b1} - V_{TH3} = V_{D1} + V_{ov3}$.

Putting the three lines together:

$$V_{X,min} = 0.4\ \mathrm{V} + V_{ov1} + V_{ov3} .$$

(Only overdrives appear: thresholds cancel in each "$V_G - V_{TH}$" step, so body effect does not change this result.) The swing requirement $V_{X,min} \le 1.739$ V then gives

$$
\begin{aligned}
0.4\ \mathrm{V} + V_{ov1} + V_{ov3} &\le 1.739\ \mathrm{V}\\
V_{ov1} + V_{ov3} &\le 1.339\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Highest X: budget for the PMOS cascode load ($M_5$, $M_7$)

Above X there are two PMOS devices in series up to $V_{DD}$. A PMOS stays saturated when $V_{SD} \ge |V_{ov}|$. With $V_{b3}$ and $V_{b2}$ chosen so that both reach the edge together:

- **$M_7$:** source at $V_{DD}$; its drain (the source of $M_5$) may rise to $V_{DD} - |V_{ov7}|$.
- **$M_5$:** its drain X may rise to (source of $M_5$) $- |V_{ov5}|$.

So

$$V_{X,max} = V_{DD} - |V_{ov7}| - |V_{ov5}| ,$$

and the requirement $V_{X,max} \ge 1.939$ V gives

$$
\begin{aligned}
3\ \mathrm{V} - |V_{ov5}| - |V_{ov7}| &\ge 1.939\ \mathrm{V}\\
|V_{ov5}| + |V_{ov7}| &\le 1.061\ \mathrm{V}.
\end{aligned}
$$

### Step 5 — Why "minimum dimensions" means the full budget split equally

For a fixed current, the square law gives

$$\frac{W}{L} = \frac{2I_D}{\mu C_{ox}V_{ov}^2},$$

so a *larger* overdrive means a *smaller* transistor. The smallest devices are therefore obtained by using each budget completely.

How should a budget $B$ be shared between two devices of the same type carrying the same current? Their total width is proportional to

$$f(V_{ov1}) = \frac{1}{V_{ov1}^2} + \frac{1}{(B - V_{ov1})^2}.$$

Set the derivative to zero:

$$
\begin{aligned}
\frac{df}{dV_{ov1}} &= -\frac{2}{V_{ov1}^3} + \frac{2}{(B - V_{ov1})^3} = 0\\
(B - V_{ov1})^3 &= V_{ov1}^3\\
V_{ov1} &= \frac{B}{2}.
\end{aligned}
$$

The equal split is the minimum (for example, with $B = 1.339$ V, a 0.6/0.74 V split gives $f = 4.61\ \mathrm{V^{-2}}$ against $4.46\ \mathrm{V^{-2}}$ for the equal split). It also makes the two devices identical in size. Hence

$$
\begin{aligned}
V_{ov1} = V_{ov3} &= \frac{1.339\ \mathrm{V}}{2} = 0.670\ \mathrm{V},\\
|V_{ov5}| = |V_{ov7}| &= \frac{1.061\ \mathrm{V}}{2} = 0.530\ \mathrm{V}.
\end{aligned}
$$

### Step 6 — Aspect ratios and widths

**NMOS $M_1$–$M_4$** (0.5 mA, $V_{ov} = 0.670$ V, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$):

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{1-4} &= \frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.670\ \mathrm{V})^2}\\
&= \frac{1.0\times10^{-3}}{(134\times10^{-6})(0.4483)} = \frac{1.0\times10^{-3}}{6.007\times10^{-5}}\\
&= 16.6 ,
\end{aligned}
$$

so $W_{1-4} = 16.6\times0.5\ \mu\mathrm{m} \approx 8.3\ \mu\mathrm{m}$.

**PMOS $M_5$–$M_8$** (0.5 mA, $|V_{ov}| = 0.530$ V, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$):

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{5-8} &= \frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.530\ \mathrm{V})^2}\\
&= \frac{1.0\times10^{-3}}{(38.4\times10^{-6})(0.2814)} = \frac{1.0\times10^{-3}}{1.080\times10^{-5}}\\
&= 92.6 ,
\end{aligned}
$$

so $W_{5-8} = 92.6\times0.5\ \mu\mathrm{m} \approx 46\ \mu\mathrm{m}$. The PMOS devices are much wider because their mobility is lower and their budget is tighter.

### Step 7 — The bias voltages that go with these sizes

With $V_{TH,n} = 0.7$ V and $|V_{TH,p}| = 0.8$ V (body effect neglected):

| Quantity | Expression | Value |
|---|---|---|
| Input CM level | $0.4 + V_{TH,n} + V_{ov1}$ | 1.77 V |
| Drain of $M_1$ | $0.4 + V_{ov1}$ | 1.07 V |
| $V_{b1}$ | $0.4 + V_{ov1} + V_{TH,n} + V_{ov3}$ | 2.44 V |
| $V_{b3}$ (gate of $M_7$) | $V_{DD} - \lvert V_{TH,p}\rvert - \lvert V_{ov7}\rvert$ | 1.67 V |
| Source of $M_5$ | $V_{DD} - \lvert V_{ov7}\rvert$ | 2.47 V |
| $V_{b2}$ (gate of $M_5$) | $V_{DD} - \lvert V_{ov7}\rvert - \lvert V_{TH,p}\rvert - \lvert V_{ov5}\rvert$ | 1.14 V |

Check: $M_3$ reaches the edge of saturation at $X = V_{b1} - V_{TH,n} = 2.44 - 0.7 = 1.74$ V, and $M_5$ reaches it at $X = V_{b2} + |V_{TH,p}| = 1.14 + 0.8 = 1.94$ V. These are exactly the swing limits of Step 2. ✓

### Result

- CM level of X and Y: $V_{DD} - |V_{GS9}| = 1.839$ V, so X must swing between 1.739 V and 1.939 V.
- Budgets: $V_{ov1} + V_{ov3} \le 1.739 - 0.4 = 1.339$ V and $|V_{ov5}| + |V_{ov7}| \le 3 - 1.939 = 1.061$ V.
- Minimum sizes (full budgets, equal split, 0.5 mA per branch):
  - $(W/L)_{1-4} \approx 16.6$, i.e. $W \approx 8.3\ \mu\mathrm{m}$ with $V_{ov} \approx 0.67$ V;
  - $(W/L)_{5-8} \approx 93$, i.e. $W \approx 46\ \mu\mathrm{m}$ with $|V_{ov}| \approx 0.53$ V.
- Bias voltages, for example $V_{b1} = 0.4 + 0.67 + V_{GS3} \approx 2.44$ V, $V_{b2} \approx 1.14$ V, $V_{b3} \approx 1.67$ V.

**Common mistake.** Reading "200 mV peak-to-peak" as $\pm200$ mV. That doubles the excursion and shrinks the budgets to 1.24 V and 0.96 V, giving needlessly large devices. Peak-to-peak means the total excursion, $\pm100$ mV.

**Common mistake.** Forgetting the 400 mV needed by the tail current source when writing the lower limit. The NMOS stack is tail source + $M_1$ + $M_3$, so the budget for the two transistors is $1.739 - 0.4$ V, not 1.739 V.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS load devices (or vice versa). The PMOS mobility is about 3.5 times lower, which is why $M_5$–$M_8$ end up roughly 5.6 times wider than $M_1$–$M_4$.
