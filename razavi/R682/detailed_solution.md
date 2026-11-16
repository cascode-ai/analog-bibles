# Detailed solution - R682

**Approach.** The circuit is a common-source (CS) stage $M_1$ with a diode-connected PMOS load $M_2$. Express the gain and the input-referred thermal noise in terms of $g_{m1}$ and $g_{m2}$, then write each $g_m$ at constant bias current as $\sqrt{2\mu C_{ox}(W/L)I}$. Each corner simply scales $\mu_nC_{ox}$ and/or $\mu_pC_{ox}$, so the trends follow directly. Notation: corners FF, SS, FS (fast NMOS, slow PMOS) and SF (slow NMOS, fast PMOS).

### Step 1 — Transconductance at constant current

In saturation (square law), with drain current $I$ and overdrive $V_{ov}$,

$$I = \frac12\,\mu C_{ox}\frac{W}{L}V_{ov}^2 \quad\Rightarrow\quad g_m = \mu C_{ox}\frac{W}{L}V_{ov} = \sqrt{2\,\mu C_{ox}\frac{W}{L}\,I}.$$

Both transistors carry the same current $I$, which is held constant. Define $K_n = \mu_nC_{ox}(W/L)_1$ and $K_p = \mu_pC_{ox}(W/L)_2$. Then

$$g_{m1} = \sqrt{2K_nI} \propto \sqrt{\mu_nC_{ox}}, \qquad g_{m2} = \sqrt{2K_pI} \propto \sqrt{\mu_pC_{ox}} .$$

The output resistances $r_O = 1/(\lambda I)$ do not change, since neither $\lambda$ nor $I$ changes. At a fast corner the larger $\mu C_{ox}$ lets the device carry the same current with a smaller overdrive, and $g_m$ rises by the square root of the $\mu C_{ox}$ ratio.

### Step 2 — Voltage gain

**Small-signal model.** At the output node: $M_1$'s controlled source $g_{m1}v_{in}$ (from the output to ground), $r_{O1}$, and the diode-connected $M_2$, whose gate is tied to its drain so that it behaves as a resistance $1/g_{m2}$ (in parallel with $r_{O2}$). $V_{DD}$ is AC ground. KCL at the output gives

$$A_v = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right) \approx -\frac{g_{m1}}{g_{m2}},$$

because $1/g_{m2} \ll r_{O1}, r_{O2}$. Substituting Step 1:

$$|A_v| = \frac{\sqrt{2K_nI}}{\sqrt{2K_pI}} = \sqrt{\frac{K_n}{K_p}} = \sqrt{\frac{\mu_nC_{ox}(W/L)_1}{\mu_pC_{ox}(W/L)_2}} .$$

The current cancels, and the gain depends on the **ratio** of the NMOS and PMOS $\mu C_{ox}$:

- **FF, SS:** both $\mu C_{ox}$ move in the same direction, so the ratio and the gain stay about nominal (exactly nominal if the fractional shifts are equal).
- **FS:** $K_n$ up and $K_p$ down: **highest gain**.
- **SF:** $K_n$ down and $K_p$ up: **lowest gain**.

### Step 3 — Input-referred thermal noise

Each transistor's channel thermal noise is a current $\overline{I_n^2} = 4kT\gamma g_m$ (per unit bandwidth) between drain and source, where $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the noise coefficient (taken the same for both devices). Both noise currents flow into the output node, whose resistance is $R_{out} \approx 1/g_{m2}$.

<!-- diagram: diagram-01.cir -->

The two sources are uncorrelated, so their powers add:

$$\overline{V_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2})\,R_{out}^2 .$$

Dividing by the squared gain $(g_{m1}R_{out})^2$ refers it to the input:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma\,(g_{m1} + g_{m2})R_{out}^2}{g_{m1}^2R_{out}^2}\\
&= \frac{4kT\gamma}{g_{m1}} + \frac{4kT\gamma\,g_{m2}}{g_{m1}^2}\\
&= \frac{4kT\gamma}{g_{m1}}\left(1 + \frac{g_{m2}}{g_{m1}}\right) = \frac{4kT\gamma}{g_{m1}}\left(1 + \frac{1}{|A_v|}\right).
\end{aligned}
$$

At constant current, $1/g_{m1} \propto 1/\sqrt{\mu_nC_{ox}}$ and $g_{m2}/g_{m1} \propto \sqrt{\mu_pC_{ox}/\mu_nC_{ox}}$. Corner by corner:

- **FF:** $g_{m1}$ and $g_{m2}$ both rise by the same factor (equal shifts); the ratio stays, and $1/g_{m1}$ falls. Noise power **below** nominal, $\propto 1/\sqrt{\mu C_{ox}}$.
- **SS:** the opposite: noise **above** nominal.
- **FS:** $g_{m1}$ up *and* the load term $g_{m2}/g_{m1}$ down: **lowest noise**.
- **SF:** $g_{m1}$ down *and* the load term up: **highest noise**.

### Step 4 — Numerical illustration

Take $\pm20\ \%$ shifts in $\mu C_{ox}$ (fast = 1.2×, slow = 0.8×) and a nominal gain of $|A_v| = 3$ (so $g_{m2}/g_{m1} = 1/3$ nominally). Relative to nominal:

- gain: $3\sqrt{n/p}$, where $n$ and $p$ are the NMOS and PMOS multipliers;
- noise power: $\dfrac{(1/\sqrt n)\,[1 + \frac13\sqrt{p/n}]}{1 + \frac13}$.

| Corner | $n$, $p$ | $\lvert A_v\rvert$ | Noise power (rel.) |
|---|---|---|---|
| nominal | 1, 1 | 3.00 | 1.000 |
| FF | 1.2, 1.2 | 3.00 | 0.913 (−0.40 dB) |
| SS | 0.8, 0.8 | 3.00 | 1.118 (+0.48 dB) |
| FS | 1.2, 0.8 | 3.67 | 0.871 (−0.60 dB) |
| SF | 0.8, 1.2 | 2.45 | 1.181 (+0.72 dB) |

For example, at FS: gain $= 3\sqrt{1.2/0.8} = 3\times1.225 = 3.67$; noise $= (1/\sqrt{1.2})(1 + \tfrac13\sqrt{0.8/1.2})/(4/3) = 0.913\times1.272/1.333 = 0.871$.

So the ordering of the noise is **FS < FF < nominal < SS < SF**. (If the NMOS and PMOS shifts at FF or SS are very unequal, those two corners partly behave like FS or SF, and their order can change; FS and SF always remain the extremes.)

**Side effect.** At constant current the overdrives shrink at fast corners. The output dc level, $V_{DD} - |V_{GS2}| = V_{DD} - |V_{TH2}| - V_{ov2}$, therefore moves **up** at fast-PMOS corners and **down** at slow-PMOS corners, which matters for the headroom of $M_1$ and of the next stage.

### Result

- **Gain:** $A_v \approx -g_{m1}/g_{m2} = -\sqrt{\mu_nC_{ox}(W/L)_1/[\mu_pC_{ox}(W/L)_2]}$ at constant current. It stays about nominal at FF and SS (both shift together), is highest at FS and lowest at SF.
- **Input-referred noise:** $\overline{V_{n,in}^2} = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m2}}{g_{m1}}\right)$, with $g_{m1} \propto \sqrt{\mu_nC_{ox}}$ and $g_{m2}/g_{m1} \propto \sqrt{\mu_pC_{ox}/\mu_nC_{ox}}$. Lowest at FS, then FF (below nominal), then SS (above nominal), highest at SF.

**Common mistake.** Claiming that the gain follows $\mu_nC_{ox}$ alone, as for a CS stage with a resistor or current-source load. With a diode-connected load the gain is a ratio of two transconductances, so it depends on the *ratio* of the NMOS and PMOS $\mu C_{ox}$ and is nearly unchanged when both move together.

**Common mistake.** Swapping FS and SF. Fast NMOS raises $g_{m1}$ (more gain, less input noise); slow PMOS lowers $g_{m2}$ (more gain, less load noise referred to the input). Both effects favour FS.

**Common mistake.** Concluding that the noise is lower at the slow corners because "slower devices are quieter". The noise current $4kT\gamma g_m$ does fall, but the gain falls as well, and the input-referred noise $\propto 1/g_{m1}$ rises.
