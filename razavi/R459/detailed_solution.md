# Detailed solution - R459

**Approach.** The gain of the output stage is $g_{m5}$ times the resistance at the output node. When $M_6$ is saturated it presents $r_{O6} = 1/(\lambda_pI_D) = 5\ \mathrm{k}\Omega$. Once it enters the triode region its small-signal drain-source resistance is set by the triode equation instead, and it is much smaller. We compute that resistance for $|V_{DS6}| = |V_{ov6}| - 50$ mV, check that the bias current (and so $g_{m5}$) barely changes, and recompute the gain.

### Step 1 — The stage when both devices are saturated (reference point)

From the figure: $M_5$ (NMOS, source grounded, gate at Y) is the amplifying device; $M_6$ (PMOS, source at $V_{DD}$, gate at the fixed bias $V_b$) is its current-source load; the output is their common drain.

With $I_D = 1$ mA and overdrives $V_{ov5} = |V_{ov6}| = 1/3$ V (the overdrive is $V_{ov} = |V_{GS}| - |V_{TH}|$):

$$
\begin{aligned}
g_{m5} &= \frac{2I_D}{V_{ov5}} = \frac{2\,(1\ \mathrm{mA})}{0.333\ \mathrm{V}} = 6\ \mathrm{mS},\\
r_{O5} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega, \qquad r_{O6} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
A_2 &= g_{m5}(r_{O5}\parallel r_{O6}) = (6\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 20 .
\end{aligned}
$$

### Step 2 — Operating point of $M_6$ in triode

"Driven into the triode region by 50 mV" means the source-drain voltage of $M_6$ is 50 mV less than its overdrive:

$$|V_{DS6}| = |V_{ov6}| - 0.05\ \mathrm{V} = 0.333\ \mathrm{V} - 0.050\ \mathrm{V} = 0.283\ \mathrm{V}.$$

The gate-source voltage of $M_6$ is unchanged (its gate is at $V_b$, its source at $V_{DD}$), so $|V_{ov6}|$ is still 1/3 V. The device constant is

$$\beta_6 = \mu_pC_{ox}\left(\frac{W}{L}\right)_6 = (38.4\ \mu\mathrm{A/V^2})(469) = 0.018\ \mathrm{A/V^2}.$$

### Step 3 — Small-signal resistance of a triode device

In the triode region the square-law model gives

$$|I_{D6}| = \beta_6\left[|V_{ov6}|\,|V_{DS6}| - \frac{|V_{DS6}|^2}{2}\right].$$

(Channel-length modulation, described by $\lambda$, is a saturation-region effect; in triode we use this equation as it stands.) The small-signal resistance between drain and source is the inverse of the slope of $I_D$ versus $V_{DS}$ at fixed $V_{GS}$:

$$
\begin{aligned}
\frac{\partial|I_{D6}|}{\partial|V_{DS6}|} &= \beta_6\left(|V_{ov6}| - |V_{DS6}|\right)\\
R_{on6} &= \frac{1}{\beta_6\left(|V_{ov6}| - |V_{DS6}|\right)} .
\end{aligned}
$$

Note that $|V_{ov6}| - |V_{DS6}|$ is just the 50 mV by which the device is in triode:

$$R_{on6} = \frac{1}{(0.018\ \mathrm{A/V^2})(0.05\ \mathrm{V})} = \frac{1}{9\times10^{-4}\ \mathrm{S}} = 1.11\ \mathrm{k}\Omega .$$

**Intuition.** At the edge of saturation the $I_D$–$V_{DS}$ curve is flat (slope zero in the square law). Moving into triode, the slope grows linearly with the distance from the edge. Even 50 mV into triode gives a resistance well below the saturated $r_{O6}$ (1.11 kΩ versus 5 kΩ).

### Step 4 — Does the bias current change?

$$|I_{D6}| = (0.018\ \mathrm{A/V^2})\left[(0.333)(0.283) - \frac{(0.283)^2}{2}\right]\mathrm{V^2} = (0.018)(0.0943 - 0.0401)\ \mathrm{A} = 0.98\ \mathrm{mA}.$$

The current drops by only about 2 %. $M_5$ carries the same current, so its transconductance is essentially unchanged:

$$g_{m5} = \sqrt{2\mu_nC_{ox}(W/L)_5I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(134)(0.98\ \mathrm{mA})} \approx 5.9\ \mathrm{mS} \approx 6\ \mathrm{mS},$$

and $r_{O5} = 1/(0.1 \times 0.98\ \mathrm{mA}) \approx 10\ \mathrm{k}\Omega$.

### Step 5 — The new gain

The small-signal model is unchanged except that $r_{O6}$ is replaced by $R_{on6}$. KCL at the output gives

$$A_2 = g_{m5}(r_{O5}\parallel R_{on6}).$$

Numerically:

$$
\begin{aligned}
r_{O5}\parallel R_{on6} &= \frac{(10\ \mathrm{k}\Omega)(1.11\ \mathrm{k}\Omega)}{10\ \mathrm{k}\Omega + 1.11\ \mathrm{k}\Omega} = 1.00\ \mathrm{k}\Omega,\\
A_2 &= (6\ \mathrm{mS})(1.00\ \mathrm{k}\Omega) \approx 6.0 .
\end{aligned}
$$

(With the slightly lower current, $5.93\ \mathrm{mS}\times1.00\ \mathrm{k}\Omega = 5.9$; the answer is about 6 either way.)

### Step 6 — Interpretation

| $M_6$ state | Load resistance of $M_6$ | Output resistance | Gain $A_2$ |
|---|---|---|---|
| Saturated | $r_{O6} = 5\ \mathrm{k}\Omega$ | 3.33 kΩ | 20 |
| 50 mV into triode | $R_{on6} = 1.11\ \mathrm{k}\Omega$ | 1.00 kΩ | ≈ 6 |

A 50-mV excursion into triode cuts the gain by more than a factor of three. This is why the output swing of an op amp is defined by the saturation limits of the output devices: beyond them the gain, and with it the accuracy of any feedback loop, collapses rapidly.

### Result

$$R_{on6} = \frac{1}{\mu_pC_{ox}(W/L)_6\,(|V_{ov6}| - |V_{DS6}|)} = \frac{1}{(38.4\ \mu\mathrm{A/V^2})(469)(0.05\ \mathrm{V})} \approx 1.11\ \mathrm{k}\Omega,$$

$$A_2 = g_{m5}(r_{O5}\parallel R_{on6}) \approx 6\ \mathrm{mS}\times(10\ \mathrm{k}\Omega\parallel1.11\ \mathrm{k}\Omega) \approx 6,$$

i.e. the gain falls from 20 to about 6.

**Common mistake.** Keeping $r_{O6} = 1/(\lambda_pI_D) = 5\ \mathrm{k}\Omega$ and concluding that the gain is still 20. The formula $1/(\lambda I_D)$ applies only in saturation; in triode the drain-source resistance follows from the triode equation.

**Common mistake.** Using the deep-triode on-resistance with the full overdrive, $1/[\beta_6|V_{ov6}|] \approx 167\ \Omega$. That formula holds only for $|V_{DS}| \to 0$. Here $|V_{DS6}|$ is close to the overdrive, and the correct small-signal resistance is $1/[\beta_6(|V_{ov6}| - |V_{DS6}|)]$.

**Common mistake.** Approximating the gain as $g_{m5}R_{on6} \approx 6.7$ by dropping $r_{O5}$. With $R_{on6}$ only nine times smaller than $r_{O5}$, the parallel combination (1.00 kΩ) should be used.
