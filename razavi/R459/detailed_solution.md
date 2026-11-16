# Detailed solution - R459

**Approach.** The gain is $g_{m5}$ times the resistance at the output. Saturated, $M_6$ presents $r_{O6} = 1/(\lambda_pI_D) = 5\ \mathrm{k}\Omega$; in triode its drain-source resistance follows from the triode equation and is much smaller. Compute it for $|V_{DS6}| = |V_{ov6}| - 50$ mV, check that the bias current (and $g_{m5}$) barely changes, and recompute the gain.

### Step 1 — The stage when both devices are saturated (reference point)

With $I_D = 1$ mA and $V_{ov5} = |V_{ov6}| = 1/3$ V:

$$
\begin{aligned}
g_{m5} &= \frac{2I_D}{V_{ov5}} = \frac{2\,(1\ \mathrm{mA})}{0.333\ \mathrm{V}} = 6\ \mathrm{mS},\\
r_{O5} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega, \qquad r_{O6} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
A_2 &= g_{m5}(r_{O5}\parallel r_{O6}) = (6\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 20 .
\end{aligned}
$$

### Step 2 — Operating point of $M_6$ in triode

"Driven into the triode region by 50 mV" means

$$|V_{DS6}| = |V_{ov6}| - 0.05\ \mathrm{V} = 0.333\ \mathrm{V} - 0.050\ \mathrm{V} = 0.283\ \mathrm{V}.$$

The gate (at $V_b$) and source (at $V_{DD}$) of $M_6$ are unchanged, so $|V_{ov6}|$ is still 1/3 V. Let

$$\beta_6 = \mu_pC_{ox}\left(\frac{W}{L}\right)_6 = (38.4\ \mu\mathrm{A/V^2})(469) = 0.018\ \mathrm{A/V^2}.$$

### Step 3 — Small-signal resistance of a triode device

In triode ($\lambda$ applies only in saturation),

$$|I_{D6}| = \beta_6\left[|V_{ov6}|\,|V_{DS6}| - \frac{|V_{DS6}|^2}{2}\right],$$

and the drain-source resistance is the inverse slope at fixed $V_{GS}$:

$$
\begin{aligned}
\frac{\partial|I_{D6}|}{\partial|V_{DS6}|} &= \beta_6\left(|V_{ov6}| - |V_{DS6}|\right)\\
R_{on6} &= \frac{1}{\beta_6\left(|V_{ov6}| - |V_{DS6}|\right)} .
\end{aligned}
$$

$|V_{ov6}| - |V_{DS6}|$ is just the 50 mV by which the device is in triode:

$$R_{on6} = \frac{1}{(0.018\ \mathrm{A/V^2})(0.05\ \mathrm{V})} = \frac{1}{9\times10^{-4}\ \mathrm{S}} = 1.11\ \mathrm{k}\Omega ,$$

well below the saturated $r_{O6}$ (1.11 kΩ versus 5 kΩ): the $I_D$–$V_{DS}$ slope, zero at the edge of saturation, grows linearly with the distance into triode.

### Step 4 — Does the bias current change?

$$|I_{D6}| = (0.018\ \mathrm{A/V^2})\left[(0.333)(0.283) - \frac{(0.283)^2}{2}\right]\mathrm{V^2} = (0.018)(0.0943 - 0.0401)\ \mathrm{A} = 0.98\ \mathrm{mA}.$$

The current drops by only about 2 %, and $M_5$ carries the same current, so

$$g_{m5} = \sqrt{2\mu_nC_{ox}(W/L)_5I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(134)(0.98\ \mathrm{mA})} \approx 5.9\ \mathrm{mS} \approx 6\ \mathrm{mS},$$

and $r_{O5} = 1/(0.1 \times 0.98\ \mathrm{mA}) \approx 10\ \mathrm{k}\Omega$.

### Step 5 — The new gain

With $r_{O6}$ replaced by $R_{on6}$,

$$A_2 = g_{m5}(r_{O5}\parallel R_{on6}),$$

$$
\begin{aligned}
r_{O5}\parallel R_{on6} &= \frac{(10\ \mathrm{k}\Omega)(1.11\ \mathrm{k}\Omega)}{10\ \mathrm{k}\Omega + 1.11\ \mathrm{k}\Omega} = 1.00\ \mathrm{k}\Omega,\\
A_2 &= (6\ \mathrm{mS})(1.00\ \mathrm{k}\Omega) \approx 6.0 .
\end{aligned}
$$

(With the slightly lower current, $5.93\ \mathrm{mS}\times1.00\ \mathrm{k}\Omega = 5.9$; about 6 either way.)

### Step 6 — Interpretation

| $M_6$ state | Load resistance of $M_6$ | Output resistance | Gain $A_2$ |
|---|---|---|---|
| Saturated | $r_{O6} = 5\ \mathrm{k}\Omega$ | 3.33 kΩ | 20 |
| 50 mV into triode | $R_{on6} = 1.11\ \mathrm{k}\Omega$ | 1.00 kΩ | ≈ 6 |

A 50-mV excursion into triode cuts the gain by more than a factor of three, which is why an op amp's output swing is defined by the saturation limits of its output devices.

### Result

$$R_{on6} = \frac{1}{\mu_pC_{ox}(W/L)_6\,(|V_{ov6}| - |V_{DS6}|)} = \frac{1}{(38.4\ \mu\mathrm{A/V^2})(469)(0.05\ \mathrm{V})} \approx 1.11\ \mathrm{k}\Omega,$$

$$A_2 = g_{m5}(r_{O5}\parallel R_{on6}) \approx 6\ \mathrm{mS}\times(10\ \mathrm{k}\Omega\parallel1.11\ \mathrm{k}\Omega) \approx 6,$$

i.e. the gain falls from 20 to about 6.

**Common mistake.** Keeping $r_{O6} = 1/(\lambda_pI_D) = 5\ \mathrm{k}\Omega$ and concluding that the gain is still 20. That formula applies only in saturation.

**Common mistake.** Using the deep-triode on-resistance with the full overdrive, $1/[\beta_6|V_{ov6}|] \approx 167\ \Omega$. It holds only for $|V_{DS}| \to 0$; here the correct value is $1/[\beta_6(|V_{ov6}| - |V_{DS6}|)]$.

**Common mistake.** Approximating the gain as $g_{m5}R_{on6} \approx 6.7$ by dropping $r_{O5}$. With $R_{on6}$ only nine times smaller than $r_{O5}$, the parallel combination (1.00 kΩ) should be used.
