# Detailed solution - R443

**Approach.** The output node is the drain of the cascode device $M_2$ (below) and of the PMOS current source $I_2$ (above). The output can swing as long as both stay in saturation. The lower limit depends on the DC voltage at X, which in this regulated cascode is fixed by the feedback through $M_3$. So we first find $V_X$, then the overdrives, then the two limits.

### Step 1 — Currents and the voltage at X

Reading the figure: $M_1$ (gate at $V_{in}$) is the input device with its drain at X; $M_2$ is the cascode device from X to $V_{out}$; $M_3$ (gate at X, source grounded) drives the gate of $M_2$ and is loaded by $I_1$; $I_2$ is the load of the output.

**Currents** (KCL; gates draw no current):

- all of $I_1$ flows through $M_3$: $I_{D3} = 100\ \mu$A;
- all of $I_2$ flows through $M_2$ and then $M_1$: $I_{D2} = I_{D1} = 0.5$ mA.

**Voltage at X.** The loop $X \to M_3 \to M_2 \to X$ is a negative-feedback loop that settles where $M_3$ carries exactly $I_1$. Since the gate of $M_3$ is X itself and its source is grounded, $V_X = V_{GS3}$. With $(W/L)_{1-3} = 100/0.5 = 200$ and no body effect on $M_3$:

$$
\begin{aligned}
V_{ov3} &= \sqrt{\frac{2I_{D3}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{7.46\times10^{-3}}\ \mathrm{V} = 0.086\ \mathrm{V},\\
V_X &= V_{GS3} = V_{TH0} + V_{ov3} = 0.7\ \mathrm{V} + 0.086\ \mathrm{V} = 0.786\ \mathrm{V}.
\end{aligned}
$$

Here $V_{ov} = V_{GS} - V_{TH}$ is the overdrive voltage, from the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$.

### Step 2 — Lower limit: $M_2$ must stay saturated

An NMOS is saturated while $V_{DS} \ge V_{GS} - V_{TH}$, i.e. while its drain is no lower than its gate minus one threshold:

$$V_{out} \ge V_{G2} - V_{TH2} .$$

The gate of $M_2$ is one gate-source voltage above X, $V_{G2} = V_X + V_{TH2} + V_{ov2}$. Substituting:

$$
\begin{aligned}
V_{out} &\ge (V_X + V_{TH2} + V_{ov2}) - V_{TH2}\\
V_{out} &\ge V_X + V_{ov2} .
\end{aligned}
$$

The threshold of $M_2$ cancels, so its body effect (which raises both $V_{G2}$ and $V_{TH2}$ by the same amount) does not matter here. The overdrive of $M_2$ for 0.5 mA:

$$
V_{ov2} = \sqrt{\frac{2I_{D2}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373}\ \mathrm{V} = 0.193\ \mathrm{V}.
$$

Hence

$$V_{out,min} = V_{GS3} + V_{ov2} = 0.786\ \mathrm{V} + 0.193\ \mathrm{V} = 0.98\ \mathrm{V}.$$

**Is $M_1$ also saturated?** $M_1$ carries 0.5 mA with the same $W/L$, so $V_{ov1} = 0.193$ V, and $V_{DS1} = V_X = 0.786\ \mathrm{V} > 0.193$ V. ✓ $M_1$ has about 0.6 V more than it needs. That is the price of the regulated cascode: X is pinned at $V_{GS3}$, a full threshold plus overdrive, rather than at the minimum $V_{ov1}$.

### Step 3 — Upper limit: the PMOS current source $I_2$ must stay saturated

$I_2$ is a PMOS with its source at $V_{DD}$ and $(W/L)_P = 50/0.5 = 100$. It stays saturated while $V_{SD} \ge |V_{ov,P2}|$, i.e.

$$V_{out} \le V_{DD} - |V_{ov,P2}| .$$

Its overdrive for 0.5 mA:

$$
\begin{aligned}
|V_{ov,P2}| &= \sqrt{\frac{2I_2}{\mu_pC_{ox}(W/L)_P}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}}\\
&= \sqrt{\frac{1\times10^{-3}}{3.84\times10^{-3}}}\ \mathrm{V} = \sqrt{0.260}\ \mathrm{V} = 0.510\ \mathrm{V},
\end{aligned}
$$

so

$$V_{out,max} = 3\ \mathrm{V} - 0.510\ \mathrm{V} = 2.49\ \mathrm{V}.$$

### Step 4 — The allowable swing

$$
\begin{aligned}
\Delta V_{out} &= V_{out,max} - V_{out,min}\\
&= \left(V_{DD} - |V_{ov,P2}|\right) - \left(V_{GS3} + V_{ov2}\right)\\
&= 2.49\ \mathrm{V} - 0.98\ \mathrm{V}\\
&= 1.51\ \mathrm{V}.
\end{aligned}
$$

For comparison, an ordinary cascode with a fixed gate bias chosen to put $M_1$ at the edge of saturation would allow the output down to $V_{ov1} + V_{ov2} = 0.39$ V, about 0.6 V lower. The gain boosting costs roughly one threshold voltage of swing.

| Limit | Set by | Expression | Value |
|---|---|---|---|
| Lowest $V_{out}$ | $M_2$ entering triode | $V_{GS3} + V_{ov2}$ | 0.98 V |
| Highest $V_{out}$ | PMOS $I_2$ entering triode | $V_{DD} - \lvert V_{ov,P2}\rvert$ | 2.49 V |

### Result

$V_{out}$ can range from about 0.98 V to about 2.49 V, so the maximum allowable swing is

$$V_{DD} - |V_{ov,P2}| - V_{GS3} - V_{ov2} = 3 - 0.510 - 0.786 - 0.193 \approx 1.51\ \mathrm{V_{pp}} .$$

**Common mistake.** Taking the lower limit as $V_{ov1} + V_{ov2} \approx 0.39$ V, as for a plain cascode in which the designer may put X anywhere. In this circuit X is forced to $V_{GS3} = 0.786$ V by the feedback through $M_3$.

**Common mistake.** Writing the upper limit as $V_{DD} - |V_{GS,P}|$. The output is the *drain* of the PMOS source, which only needs $|V_{ov}| = 0.51$ V across it, not a full gate-source voltage.

**Common mistake.** Using $W/L = 100$ for $M_1$–$M_3$ (they are $100/0.5 = 200$). That raises $V_{GS3}$ to 0.82 V and $V_{ov2}$ to 0.27 V, giving a swing of only about 1.39 V.
