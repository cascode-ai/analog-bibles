# Detailed solution - R684

**Approach.** The circuit is a common-source stage $M_1$ with a diode-connected PMOS load $M_2$. Now $M_1$'s overdrive $V_{ov1}$ is fixed, so its current, and hence everything else, follows $\mu_nC_{ox}$. Compute the current, $g_{m1}$ and $g_{m2}$ as functions of $K_n = \mu_nC_{ox}(W/L)_1$ and $K_p = \mu_pC_{ox}(W/L)_2$, then the gain $\approx g_{m1}/g_{m2}$ and the input-referred noise $\frac{4kT\gamma}{g_{m1}}(1 + g_{m2}/g_{m1})$, and compare with the constant-current case. Notation: corners FF, SS, FS (fast NMOS, slow PMOS) and SF (slow NMOS, fast PMOS).

### Step 1 — Bias current and transconductances

**Current.** $M_1$ is in saturation with a fixed overdrive $V_{ov1} = V_{GS1} - V_{TH1}$ ($V_{TH}$ does not change between corners):

$$I = \frac12\,K_nV_{ov1}^2 \;\propto\; \mu_nC_{ox}.$$

The current (and the power) now changes with the NMOS corner: up at FF and FS, down at SS and SF. The diode-connected $M_2$ simply carries whatever current $M_1$ sets; its $V_{SG2}$ adjusts.

**Transconductance of $M_1$** (square law, fixed overdrive):

$$g_{m1} = K_nV_{ov1} \;\propto\; \mu_nC_{ox}\quad\text{(linear, not square root)}.$$

**Transconductance of $M_2$.** $M_2$ carries the current $I$, so

$$g_{m2} = \sqrt{2K_pI} = \sqrt{2K_p\cdot\tfrac12K_nV_{ov1}^2} = V_{ov1}\sqrt{K_pK_n}.$$

### Step 2 — Voltage gain

**Small-signal model.** At the output node: $M_1$'s controlled source $g_{m1}v_{in}$, its $r_{O1}$, and the diode-connected $M_2$, which behaves as a resistance $1/g_{m2}$ (in parallel with $r_{O2}$); $V_{DD}$ is AC ground. KCL at the output gives

$$A_v = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right) \approx -\frac{g_{m1}}{g_{m2}},$$

since $1/g_{m2}$ is much smaller than the $r_O$'s. Substituting Step 1:

$$|A_v| = \frac{K_nV_{ov1}}{V_{ov1}\sqrt{K_pK_n}} = \sqrt{\frac{K_n}{K_p}} .$$

The bias current cancels: the gain has exactly the same dependence as with constant-current bias, set by the **ratio** of the NMOS and PMOS $\mu C_{ox}$:

- **FF, SS:** about nominal (exactly, for equal fractional shifts);
- **FS:** highest;
- **SF:** lowest.

### Step 3 — Input-referred thermal noise

Each transistor contributes a channel-noise current $4kT\gamma g_m$ ($k$: Boltzmann's constant, $T$: absolute temperature, $\gamma$: noise coefficient) into the output node. Their powers add, and dividing the output noise $4kT\gamma(g_{m1} + g_{m2})R_{out}^2$ by the squared gain $(g_{m1}R_{out})^2$ gives

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}}\left(1 + \frac{g_{m2}}{g_{m1}}\right).$$

Substitute $g_{m1} = K_nV_{ov1}$ and $g_{m2}/g_{m1} = \sqrt{K_p/K_n}$:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{K_nV_{ov1}}\left(1 + \sqrt{\frac{K_p}{K_n}}\right).$$

The leading factor now goes as $1/\mu_nC_{ox}$, instead of $1/\sqrt{\mu_nC_{ox}}$ at constant current: the noise varies **more strongly** across the corners.

- **FF:** $g_{m1}$ up in proportion to $\mu C_{ox}$, ratio unchanged: noise power falls $\propto 1/\mu C_{ox}$.
- **SS:** noise rises by the same proportion.
- **FS:** $g_{m1}$ up and the load term $\sqrt{K_p/K_n}$ down: **lowest**.
- **SF:** $g_{m1}$ down and the load term up: **highest**.

### Step 4 — Numerical illustration

Take $\pm20\ \%$ shifts ($n$, $p$: multipliers of $\mu_nC_{ox}$, $\mu_pC_{ox}$), a nominal gain of 3 ($\sqrt{K_p/K_n} = 1/3$), $V_{ov1} = 0.15$ V, and hence a nominal $V_{ov2} = \sqrt{2I/K_p} = V_{ov1}\sqrt{K_n/K_p} = 0.45$ V. Relative values: current $n$; gain $3\sqrt{n/p}$; noise $(1/n)\left[1 + \tfrac13\sqrt{p/n}\right]/\tfrac43$.

| Corner | $n$, $p$ | Current | $\lvert A_v\rvert$ | Noise power (rel.) | Constant-current noise (for comparison) | $V_{ov2}$ |
|---|---|---|---|---|---|---|
| nominal | 1, 1 | 1.0 | 3.00 | 1.000 | 1.000 | 0.45 V |
| FF | 1.2, 1.2 | 1.2 | 3.00 | 0.833 (−0.79 dB) | 0.913 | 0.45 V |
| SS | 0.8, 0.8 | 0.8 | 3.00 | 1.250 (+0.97 dB) | 1.118 | 0.45 V |
| FS | 1.2, 0.8 | 1.2 | 3.67 | 0.795 (−1.00 dB) | 0.871 | 0.55 V |
| SF | 0.8, 1.2 | 0.8 | 2.45 | 1.320 (+1.21 dB) | 1.181 | 0.37 V |

For example, at SF: noise $= (1/0.8)(1 + \tfrac13\sqrt{1.2/0.8})/\tfrac43 = 1.25\times1.408/1.333 = 1.320$. The ordering is **FS < FF < nominal < SS < SF**, with a wider spread (about 2.2 dB from best to worst) than at constant current (about 1.3 dB). If the NMOS and PMOS shifts are very unequal, the positions of FF and SS can move; FS and SF stay the extremes.

### Step 5 — Output dc level

$$V_{out} = V_{DD} - |V_{GS2}| = V_{DD} - |V_{TH2}| - V_{ov2}, \qquad V_{ov2} = \sqrt{\frac{2I}{K_p}} = V_{ov1}\sqrt{\frac{K_n}{K_p}} .$$

- **FF, SS:** $K_n/K_p$ unchanged, so $V_{ov2}$ and $V_{out}$ are unchanged.
- **FS:** $V_{ov2}$ rises (0.45 → 0.55 V in the example), so $V_{out}$ drops by about 0.1 V, eating into the $V_{DS}$ margin of $M_1$ and possibly pushing it toward triode.
- **SF:** $V_{ov2}$ falls, so $V_{out}$ rises (by about 0.08 V in the example).

### Result

- **Bias current:** $I = \frac12\mu_nC_{ox}(W/L)_1V_{ov1}^2 \propto \mu_nC_{ox}$ (higher at FF and FS, lower at SS and SF; the power follows).
- **Gain:** $|A_v| \approx g_{m1}/g_{m2} = \sqrt{K_n/K_p}$, independent of the current, so the same corner behaviour as with constant-current bias: about nominal at FF and SS (comparable shifts), highest at FS, lowest at SF.
- **Input-referred noise:** $\overline{V_{n,in}^2} = \dfrac{4kT\gamma}{K_nV_{ov1}}\left(1 + \sqrt{K_p/K_n}\right)$, varying as $1/\mu_nC_{ox}$ rather than $1/\sqrt{\mu_nC_{ox}}$: lower at FF, higher at SS, lowest at FS, highest at SF (FS < FF < nominal < SS < SF for comparable shifts), with a larger spread than at constant current.
- **Output level:** unchanged at FF and SS, lower at FS, higher at SF.

**Common mistake.** Treating $M_2$'s $V_{GS}$ as fixed too, which gives $g_{m2} \propto \mu_pC_{ox}$ and a gain $\propto K_n/K_p$. $M_2$ is diode-connected: it carries the current set by $M_1$, and its $V_{GS}$ adjusts, so $g_{m2} = \sqrt{2K_pI}$.

**Common mistake.** Claiming that the gain of this stage scales with the bias current. With a diode-connected load both $g_{m1}$ and $g_{m2}$ depend on the operating point, and the current cancels in their ratio.

**Common mistake.** Using a gain expression such as $-g_{m1}/(g_{m1} + g_{m2})$ (a gain below 1) from misreading the output node. The output is the drain of $M_1$, loaded by the impedance $1/g_{m2}$ seen looking into the diode-connected device; the gain is $-g_{m1}/g_{m2}$.
