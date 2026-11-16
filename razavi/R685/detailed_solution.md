# Detailed solution - R685

**Approach.** Both transistors now have fixed gate–source voltages, so each one "wants" a current set by its own $\mu C_{ox}$. Because they are in series, the two currents must be equal, and the only free variable that can reconcile them is the output voltage, acting through channel-length modulation. First treat FF and SS, where both currents scale together and nothing moves. Then treat FS and SF, where the currents conflict, the output level shifts strongly, and the small-signal behaviour depends on whether both devices stay saturated. Throughout, $V_{TH}$ and $\lambda$ are unchanged, so the overdrives $V_{ov1}$ and $V_{ov2}$ are fixed.

### Step 1 — The two currents and their small-signal parameters

With the square law and channel-length modulation (output voltage $V_{out}$, supply $V_{DD}$):

$$I_1 = \frac12K_nV_{ov1}^2\,(1 + \lambda_nV_{out}), \qquad I_2 = \frac12K_pV_{ov2}^2\,\bigl[1 + \lambda_p(V_{DD} - V_{out})\bigr],$$

with $K_n = \mu_nC_{ox}(W/L)_1$, $K_p = \mu_pC_{ox}(W/L)_2$. In the circuit $I_1 = I_2 \equiv I$.

Small-signal parameters at fixed overdrive:

- transconductances: $g_{m1} = \partial I_1/\partial V_{GS1} = K_nV_{ov1}(1 + \lambda_nV_{out}) = 2I/V_{ov1}$, and likewise $g_{m2} = 2I/V_{ov2}$;
- output conductances: $g_{ds1} = \partial I_1/\partial V_{out} = \lambda_n\cdot\frac12K_nV_{ov1}^2 \approx \lambda_nI$, and $g_{ds2} \approx \lambda_pI$, i.e. $r_O \approx 1/(\lambda I)$.

**Gain.** $M_2$'s gate is at the fixed $V_b$, so it acts as a current source with output resistance $r_{O2}$. KCL at the output gives

$$|A_v| = g_{m1}(r_{O1}\|r_{O2}) = \frac{g_{m1}}{g_{ds1} + g_{ds2}} \approx \frac{2I/V_{ov1}}{(\lambda_n + \lambda_p)\,I} = \frac{2}{(\lambda_n + \lambda_p)\,V_{ov1}} .$$

**Noise.** Both channel-noise currents ($4kT\gamma g_m$ each; $k$: Boltzmann's constant, $T$: absolute temperature, $\gamma$: noise coefficient) flow into the output node, so

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}}\left(1 + \frac{g_{m2}}{g_{m1}}\right) = \frac{4kT\gamma\,V_{ov1}}{2I}\left(1 + \frac{V_{ov1}}{V_{ov2}}\right) \;\propto\; \frac{1}{I}.$$

With fixed overdrives, the gain is set by $\lambda$ and $V_{ov1}$ alone, and the noise only by the current that actually flows.

### Step 2 — FF and SS corners

Let both $\mu C_{ox}$ change by the same factor $(1 + \delta)$ ($\delta > 0$ for FF, $< 0$ for SS). Both "wanted" currents scale by $(1 + \delta)$ at the *same* $V_{out}$, so the output level does not move and

$$I \to (1 + \delta)\,I \;\propto\; \mu C_{ox}.$$

- $g_{m1} = 2I/V_{ov1}$ rises in proportion to $\mu C_{ox}$ (linearly, not as a square root, because the overdrive is fixed).
- $r_{O1}$ and $r_{O2} \approx 1/(\lambda I)$ fall in proportion to $1/\mu C_{ox}$.
- **Gain unchanged:** $|A_v| = 2/[(\lambda_n + \lambda_p)V_{ov1}]$ contains no $\mu C_{ox}$. The increase in $g_{m1}$ is exactly offset by the decrease in $r_O$.
- **Noise $\propto 1/\mu C_{ox}$:** lower at FF, higher at SS, and more strongly so than with constant-current bias (where it went as $1/\sqrt{\mu C_{ox}}$).
- **Power** $\propto \mu C_{ox}$.

### Step 3 — FS and SF corners: the current conflict

Now $\mu_nC_{ox}$ and $\mu_pC_{ox}$ move in opposite directions. At the old output voltage, $M_1$ would conduct $(1 + \delta_n)I$ and $M_2$ would conduct $(1 + \delta_p)I$, which is impossible for two devices in series. $V_{out}$ moves until the channel-length-modulation factors reconcile them.

**Linearize** the logarithms of the two currents (with $\lambda' = \lambda/(1 + \lambda V_{DS}) \approx \lambda$):

$$\Delta\ln I_1 = \delta_n + \lambda_n'\,\Delta V_{out}, \qquad \Delta\ln I_2 = \delta_p - \lambda_p'\,\Delta V_{out}.$$

Setting them equal:

$$
\begin{aligned}
\delta_n + \lambda_n'\Delta V_{out} &= \delta_p - \lambda_p'\Delta V_{out}\\
\Delta V_{out} &= \frac{\delta_p - \delta_n}{\lambda_n' + \lambda_p'} \approx \frac{\delta_p - \delta_n}{\lambda_n + \lambda_p}.
\end{aligned}
$$

**Example:** a $\pm10\ \%$ skew with $\lambda_n = 0.1\ \mathrm{V^{-1}}$ and $\lambda_p = 0.2\ \mathrm{V^{-1}}$:

$$\Delta V_{out} \approx \frac{-0.1 - 0.1}{0.3\ \mathrm{V^{-1}}} = -0.67\ \mathrm{V}\ \text{(FS)}, \qquad +0.67\ \mathrm{V}\ \text{(SF)}.$$

(An exact solution of the equations above, with $V_{DD} = 3$ V and $V_{out} = 1.5$ V nominally, gives $-0.85$ V and $+0.81$ V.) The shift is large because the currents depend on $V_{DS}$ only weakly: a 20 % current conflict must be absorbed by a $\lambda$ of a few tenths per volt.

- **FS** pulls $V_{out}$ **down**, squeezing $M_1$'s $V_{DS}$ toward triode.
- **SF** pulls $V_{out}$ **up**, squeezing $M_2$'s $V_{SD}$ toward triode.

### Step 4 — Consequence with realistic headroom: gain collapse

With $V_{DD} = 1.8$ V, $V_{out} = 0.9$ V nominally and $V_{ov1} = V_{ov2} = 0.2$ V, solving the same equations (with the triode law where needed) gives:

- **FS:** $V_{out} = 0.17$ V $< V_{ov1}$, so $M_1$ is in triode; the gain falls to about 15 % of nominal, and the stage's input-referred noise rises (about +18 %), because $g_{m1}$ collapses.
- **SF:** $V_{SD2} = 0.18$ V $< V_{ov2}$, so $M_2$ is in triode; the gain falls to about 23 % of nominal.

So fixed-$V_{GS}$ biasing of this stage is not robust at the skewed corners: the output operating point is undefined to within a large fraction of the supply. In practice the output level must be defined by feedback (e.g. common-mode feedback in a differential version) or the stage must be biased with currents.

### Step 5 — If both devices remain saturated (ample headroom)

**Current.** Substituting $\Delta V_{out}$ back,

$$\Delta\ln I = \delta_n + \lambda_n'\,\frac{\delta_p - \delta_n}{\lambda_n' + \lambda_p'} = \frac{\lambda_p'\,\delta_n + \lambda_n'\,\delta_p}{\lambda_n' + \lambda_p'},$$

a weighted average of the two shifts. The device with the smaller $\lambda$ (the "stiffer" current source) has the larger weight and largely sets the current. For $\pm10\ \%$ and $\lambda_p = 2\lambda_n$: $\Delta\ln I \approx (2\times0.1 - 0.1)/3 = +3.3\ \%$ at FS and $-3.3\ \%$ at SF (the exact example gives $+1.8\ \%$ and $-3.7\ \%$).

**Noise.** From Step 1, $\overline{V_{n,in}^2} \propto 1/I$ with $g_{m2}/g_{m1} = V_{ov1}/V_{ov2}$ fixed. So at FS and SF the noise changes only by this small current change: slightly below nominal at FS and slightly above at SF (for $\lambda_p > \lambda_n$), and always between the FF and SS values.

**Gain.** With $g_{ds} = \lambda I/(1 + \lambda V_{DS})$, $|A_v| = (2/V_{ov1})/(\lambda_n' + \lambda_p')$; the shifted $V_{DS}$ values change the $\lambda'$ slightly. In the $V_{DD} = 3$ V example the gain is about 5 % higher at FS and 6 % lower at SF: a second-order effect.

| Corner ($\pm10\ \%$, $V_{DD} = 3$ V) | $V_{out}$ | Current | Gain | Noise power |
|---|---|---|---|---|
| nominal | 1.50 V | 1.000 | 1.000 | 1.000 |
| FF | 1.50 V | 1.100 | 1.000 | 0.909 |
| SS | 1.50 V | 0.900 | 1.000 | 1.111 |
| FS | 0.65 V | 1.018 | 1.047 | 0.982 |
| SF | 2.31 V | 0.963 | 0.937 | 1.038 |

(A cruder estimate that sets $g_{m1} \propto \mu_nC_{ox}$ and $g_{m2} \propto \mu_pC_{ox}$ independently would make FS the quietest corner. It ignores that the two series devices must carry the *same* current; at the skewed corners the output shift changes the $(1 + \lambda V_{DS})$ factors by an amount comparable to the $\mu C_{ox}$ skew itself, so those factors cannot be neglected.)

### Result

- **FF and SS:** both currents scale with $\mu C_{ox}$ and the output level stays put. $g_{m1} \propto \mu C_{ox}$ and $r_{O1}, r_{O2} \propto 1/\mu C_{ox}$, so the gain $|A_v| = 2/[(\lambda_n + \lambda_p)V_{ov1}]$ is **unchanged**; the input-referred noise power goes as $1/\mu C_{ox}$ (lower at FF, higher at SS, a stronger dependence than at constant current); the power goes as $\mu C_{ox}$.
- **FS and SF:** the two fixed-$V_{GS}$ devices demand different currents. The output dc level moves by about $(\delta_p - \delta_n)/(\lambda_n + \lambda_p)$, roughly 0.7 V for a $\pm10\ \%$ skew: down at FS ($M_1$ toward triode), up at SF ($M_2$ toward triode). With realistic headroom one device leaves saturation and the gain collapses (at FS, where $M_1$ enters triode and $g_{m1}$ drops, the input-referred noise also rises). If both stay saturated, the current settles at a $\lambda$-weighted compromise; the gain changes only slightly (about +5 % at FS, −6 % at SF in the example) and the noise, which goes as $1/I$, moves only slightly (a little lower at FS, a little higher at SF, both between FF and SS).

**Common mistake.** Keeping $r_O$ constant while $g_m$ rises at FF, and concluding that the gain grows with $\mu C_{ox}$. With fixed $V_{GS}$ the current grows with $\mu C_{ox}$, so $r_O = 1/(\lambda I)$ falls by the same factor and the gain is unchanged.

**Common mistake.** Analysing the skewed corners as if each transistor could carry its own current. Two devices in series carry one current; the conflict is resolved by a large shift of the output voltage, which is the dominant effect at FS and SF.

**Common mistake.** Claiming that the noise rises at the fast corners. A larger current with a fixed overdrive gives a larger $g_m = 2I/V_{ov}$, and the input-referred noise falls as $1/g_{m1}$.
