# Detailed solution - R173

**Approach.** With $P$ a virtual ground, the gain is that of the half circuit $M_1$ driving the diode load $M_3$: $|A_v| = g_{m1}(1/g_{m3}\parallel r_{ds1}\parallel r_{O3})$. As $V_{DD}$ rises, the circuit passes through three regimes: no current (diode loads off), all devices in triode with a tiny gain, and $M_1$, $M_2$ saturated with a constant gain $g_{m1}/g_{m3}$. Find the break points and the gain in each region.

### Step 1 — Device constants and the gain expression

$$\beta_1 = \mu_nC_{ox}(W/L)_1 = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_3 = \mu_pC_{ox}(W/L)_3 = (38.4\ \mu\mathrm{A/V^2})(20) = 0.768\ \mathrm{mA/V^2}.$$

**Tail gate voltage**, set for 0.5 mA in the saturated $50/0.5$ tail device:

$$V_{GS,SS} = V_{TH0} + \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.7 + 0.273 = 0.973\ \mathrm{V}.$$

**Half circuit.** With $P$ at ac ground, $M_1$ (transconductance $g_{m1}$, channel resistance $r_{ds1}$) drives the diode $M_3$, which presents $1/g_{m3}\parallel r_{O3}$:

$$|A_v| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{ds1}\parallel r_{O3}\right).$$

In saturation $g_{m1} = \beta_1V_{ov1}$ and $r_{ds1} = r_{O1} = 1/(\lambda I_D)$; in triode $g_{m1} = \beta_1V_{DS1}$ and $1/r_{ds1} = \beta_1(V_{ov1} - V_{DS1})$. The diode load is saturated whenever it conducts ($V_{SD} = V_{SG}$), with $g_{m3} = \sqrt{2\beta_3I_D}$.

### Step 2 — Region 1: $V_{DD} < 0.8$ V, no current

The diode-connected PMOS conducts only if $V_{SG3} = V_{DD} - V_X > |V_{THP}| = 0.8$ V, impossible for $V_{DD} < 0.8$ V since $V_X \ge 0$. So no current flows anywhere, even though the input gates (1.2 V) and the tail gate (0.973 V) are above the NMOS threshold. Then $V_X = V_P = 0$, $V_{DS1} = 0$ and $g_{m1} = \beta_1V_{DS1} = 0$: **the gain is zero.**

### Step 3 — Bias with all devices saturated, and the tail slightly in triode

Suppose first that the tail is saturated, with 0.25 mA in each input device:

$$V_{ov1} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.193\ \mathrm{V}, \qquad V_P = V_{in,CM} - V_{TH1} - V_{ov1},$$

with $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - \sqrt{0.9})$. Iterating, $V_P = 1.2 - 0.193 - 0.756 = 0.251$ V, *below* the tail's overdrive of 0.273 V: at $V_{in,CM} = 1.2$ V (just under the minimum common-mode level of about 1.23 V) the tail is slightly in triode. Solving the triode tail equation together with the input devices gives

$$V_P = 0.2515\ \mathrm{V}, \qquad I_{SS} = 0.497\ \mathrm{mA}\ (0.248\ \mathrm{mA\ per\ side}), \qquad V_{TH1} = 0.756\ \mathrm{V}, \qquad V_{ov1} = 0.193\ \mathrm{V},$$

only 0.6 % below the nominal current, a negligible effect. The diode drop at this current is

$$|V_{GS3}| = |V_{THP}| + \sqrt{\frac{2I_{D3}}{\beta_3}} = 0.8 + \sqrt{\frac{2(0.248\ \mathrm{mA})}{0.768\ \mathrm{mA/V^2}}} = 0.8 + 0.804 = 1.604\ \mathrm{V}.$$

### Step 4 — Break point: $M_1$, $M_2$ reach saturation

$M_1$ is saturated when $V_X - V_P \ge V_{in,CM} - V_P - V_{TH1}$, i.e. $V_X \ge V_{in,CM} - V_{TH1}$. With $V_X = V_{DD} - |V_{GS3}|$:

$$
\begin{aligned}
V_{DD} &\ge V_{in,CM} - V_{TH1} + |V_{GS3}|\\
&= 1.2 - 0.756 + 1.604 = 2.05\ \mathrm{V}.
\end{aligned}
$$

(Without body effect: $1.2 - 0.7 + 1.607 = 2.11$ V.)

### Step 5 — Region 2: $0.8\ \mathrm{V} < V_{DD} < 2.05$ V, triode operation

Current flows above 0.8 V, but the large diode drop uses up most of the supply, so $X$ sits only tens to a few hundred millivolts above ground and $M_1$, $M_2$ and the tail are all in triode. Solving the three device equations together gives the operating point; for example, at $V_{DD} = 1.5$ V:

$$V_P = 0.086\ \mathrm{V},\quad V_X = 0.112\ \mathrm{V},\quad I_{D1} = 0.133\ \mathrm{mA},\quad V_{TH1} = 0.720\ \mathrm{V},$$

$$
\begin{aligned}
V_{ov1} &= 1.2 - 0.086 - 0.720 = 0.394\ \mathrm{V}, \qquad V_{DS1} = 0.112 - 0.086 = 0.026\ \mathrm{V}\ \ (\ll V_{ov1}:\ \text{triode}),\\
g_{m1} &= \beta_1V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.026\ \mathrm{V}) = 0.348\ \mathrm{mS},\\
r_{ds1} &= \frac{1}{\beta_1(V_{ov1} - V_{DS1})} = \frac{1}{(13.4\ \mathrm{mA/V^2})(0.368\ \mathrm{V})} = 203\ \Omega,\\
g_{m3} &= \sqrt{2\beta_3I_{D1}} = \sqrt{2(0.768\ \mathrm{mA/V^2})(0.133\ \mathrm{mA})} = 0.452\ \mathrm{mS}\ \ (1/g_{m3} = 2.21\ \mathrm{k}\Omega),\\
|A_v| &= g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{ds1}\right) = (0.348\ \mathrm{mS})(2.21\ \mathrm{k}\Omega\parallel 203\ \Omega) = (0.348\ \mathrm{mS})(186\ \Omega) = 0.065 .
\end{aligned}
$$

For other supplies:

| $V_{DD}$ (V) | $I_{D1}$ (mA) | $V_X$ (V) | $M_1$ | $\lvert A_v\rvert$ |
|---|---|---|---|---|
| < 0.8 | 0 | 0 | — | 0 |
| 1.0 | 0.014 | 0.010 | triode | 0.004 |
| 1.5 | 0.133 | 0.112 | triode | 0.065 |
| 1.6 | 0.163 | 0.148 | triode | 0.10 |
| 1.8 | 0.220 | 0.244 | triode | 0.25 |
| 1.9 | 0.239 | 0.311 | triode | 0.51 |
| 2.0 | 0.248 | 0.397 | triode | 1.6 |
| ≥ 2.05 | 0.248 | $V_{DD} - 1.604$ | saturation | 4.18 |

The gain stays far below 1 up to about 1.9 V, then rises steeply in the last ~0.15 V as $V_{DS1}$ approaches $V_{ov1}$ and $r_{ds1}$ grows toward infinity, joining the plateau continuously.

### Step 6 — Region 3: $V_{DD} \ge 2.05$ V, the plateau

All devices (except the marginal tail) are saturated, the currents are fixed by the tail, and a higher $V_{DD}$ only raises $V_X$ and $V_Y$. With $\lambda = 0$:

$$|A_v| = \frac{g_{m1}}{g_{m3}} = \frac{\sqrt{2\mu_nC_{ox}(W/L)_1I_D}}{\sqrt{2\mu_pC_{ox}(W/L)_3I_D}} = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_3}} = \sqrt{\frac{13.4}{0.768}} = \sqrt{17.45} = 4.18 .$$

Both devices carry the same current, which cancels, so the plateau depends neither on $V_{DD}$ nor on the slight current reduction caused by the triode tail. Numerically, $g_{m1} = 2.58$ mS and $g_{m3} = 0.618$ mS.

**With channel-length modulation:** $r_{O1} = 1/(0.1\times 0.248\ \mathrm{mA}) = 40$ kΩ and $r_{O3} = 1/(0.2\times 0.248\ \mathrm{mA}) = 20$ kΩ, so

$$|A_v| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\right) = (2.58\ \mathrm{mS})(1.62\ \mathrm{k}\Omega\parallel 40\ \mathrm{k}\Omega\parallel 20\ \mathrm{k}\Omega) = (2.58\ \mathrm{mS})(1.44\ \mathrm{k}\Omega) \approx 3.7 .$$

### Result

Sketch of $|A_v|$ versus $V_{DD}$:

- **$0 \le V_{DD} < 0.8$ V:** gain = 0. The diode-connected loads cannot turn on, so no current flows.
- **$0.8\ \mathrm{V} < V_{DD} \lesssim 1.9$ V:** current flows, but the drains sit near ground, $M_1$, $M_2$ and the tail are in triode, and the gain is $\ll 1$ (≈ 0.004 at 1.0 V, 0.065 at 1.5 V, 0.10 at 1.6 V, 0.25 at 1.8 V).
- **Near 2 V:** a steep rise, reaching the plateau at $V_{DD} = V_{in,CM} - V_{TH1} + |V_{GS3}| \approx 0.44 + 1.60 \approx 2.05$ V (2.11 V without body effect).
- **$2.05\ \mathrm{V} \le V_{DD} \le 3$ V:** flat at
$$|A_v| = \frac{g_{m1}}{g_{m3}} = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_3}} \approx 4.2,$$
or about 3.7 including $r_{O1} = 40$ kΩ and $r_{O3} = 20$ kΩ.

**Common mistake.** Letting the gain keep rising with $V_{DD}$ above the break point, as for resistive loads. With diode loads the gain is $g_{m1}/g_{m3}$, a ratio of device parameters; extra supply voltage only lifts the drains.

**Common mistake.** Swapping the mobilities in the plateau formula, giving $\sqrt{\mu_p(W/L)_3/(\mu_n(W/L)_1)} \approx 0.24$. The input device, whose $g_m$ is in the numerator, is the NMOS with the larger $\mu C_{ox}(W/L)$.

**Common mistake.** Drawing a nonzero gain below $V_{DD} = 0.8$ V, or a gain that starts rising linearly from $V_{DD} = 0$. Nothing conducts until the PMOS diodes turn on, and the input pair stays in triode until $V_{DD}$ exceeds about 2 V, because the diodes absorb about 1.6 V.
