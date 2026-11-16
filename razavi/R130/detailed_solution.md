# Detailed solution - R130

**Approach.** Compute $g_m$, $r_O$ and $g_{mb}$ at $I_D = 0.5$ mA (the source sits $I_DR_S = 0.1$ V above the grounded bulk, so the body effect is present), derive the gain of a degenerated common-source (CS) stage with both $r_O$ and $g_{mb}$, and evaluate it. Comparing with the simplified formulas shows how much each effect matters.

### Step 1 — Bias point and small-signal parameters

$$
\begin{aligned}
V_S &= I_DR_S = (0.5\ \mathrm{mA})(200\ \Omega) = 0.1\ \mathrm{V} = V_{SB},\\
V_{out} &= V_{DD} - I_DR_D = 3 - (0.5\ \mathrm{mA})(2\ \mathrm{k\Omega}) = 2\ \mathrm{V}.
\end{aligned}
$$

With $(W/L) = 50/0.5 = 100$ (and $\lambda$ used only for $r_O$, as usual in hand calculations):

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$r_O = \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega}.$$

**Body effect**, $g_{mb} = \eta g_m$ with $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$:

$$
\begin{aligned}
\eta &= \frac{0.45}{2\sqrt{0.9 + 0.1}} = \frac{0.45}{2\times1} = 0.225,\\
g_{mb} &= 0.225\times3.66\ \mathrm{mS} = 0.824\ \mathrm{mS},\\
g_m + g_{mb} &= 3.66 + 0.824 = 4.484\ \mathrm{mS}.
\end{aligned}
$$

**Region check.** $V_{TH} = 0.7 + 0.45(\sqrt{1.0} - \sqrt{0.9}) = 0.7 + 0.45(1 - 0.9487) = 0.723$ V and $V_{ov} = \sqrt{2(0.5\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.273$ V; $V_{DS} = 2 - 0.1 = 1.9$ V $> V_{ov}$, so $M_1$ is saturated ✓. (The input dc level is $V_{GS} + V_S = 0.723 + 0.273 + 0.1 = 1.10$ V.)

### Step 2 — Small-signal model

With $v_{gs} = v_{in} - v_S$ and $v_{bs} = -v_S$, $M_1$ has two sources from drain to source, $g_m(v_{in} - v_S)$ and $g_{mb}(-v_S)$, with $r_O$ between drain and source; $R_D$ goes from out to ac ground and $R_S$ from source to ground.

<!-- diagram: diagram-01.cir -->

One signal current $i$ flows from the output down through $M_1$ into $R_S$.

### Step 3 — Deriving the gain

$$v_S = iR_S, \qquad v_{out} = -iR_D, \qquad i = g_m(v_{in} - v_S) - g_{mb}v_S + \frac{v_{out} - v_S}{r_O}.$$

Substituting $v_S$ and $v_{out}$:

$$i = g_mv_{in} - (g_m + g_{mb})R_S\,i + \frac{-iR_D - iR_S}{r_O}.$$

Collecting the $i$ terms and multiplying by $r_O$:

$$i\left[1 + (g_m + g_{mb})R_S + \frac{R_D + R_S}{r_O}\right] = g_mv_{in},$$

$$i\left[r_O + (g_m + g_{mb})R_Sr_O + R_D + R_S\right] = g_mr_O\,v_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mr_OR_D}{R_D + r_O + R_S + (g_m + g_{mb})R_Sr_O}.$$

**Check.** For $r_O \to \infty$, $A_v \to -g_mR_D/[1 + (g_m + g_{mb})R_S]$, the familiar degenerated-CS result with body effect ✓.

### Step 4 — Numerical evaluation

$$g_mr_OR_D = (3.66\ \mathrm{mS})(20\ \mathrm{k\Omega})(2\ \mathrm{k\Omega}) = 73.2\times2\ \mathrm{k\Omega} = 146.4\ \mathrm{k\Omega},$$

$$
\begin{aligned}
R_D + r_O + R_S &= 2 + 20 + 0.2 = 22.2\ \mathrm{k\Omega},\\
(g_m + g_{mb})R_Sr_O &= (4.484\ \mathrm{mS})(200\ \Omega)(20\ \mathrm{k\Omega}) = 0.897\times20\ \mathrm{k\Omega} = 17.94\ \mathrm{k\Omega},\\
\text{denominator} &= 22.2 + 17.94 = 40.14\ \mathrm{k\Omega},
\end{aligned}
$$

$$A_v = -\frac{146.4\ \mathrm{k\Omega}}{40.14\ \mathrm{k\Omega}} \approx -3.65 .$$

### Step 5 — How much each effect matters

| Model | Formula | $A_v$ |
|---|---|---|
| neither $r_O$ nor body effect | $-g_mR_D/(1 + g_mR_S)$ | $-7.32/1.732 = -4.23$ |
| body effect only | $-g_mR_D/[1 + (g_m + g_{mb})R_S]$ | $-7.32/1.897 = -3.86$ |
| $r_O$ only | $-g_mr_OR_D/(R_D + r_O + R_S + g_mR_Sr_O)$ | $-146.4/36.84 = -3.97$ |
| both (this problem) | Step 3 | $-3.65$ |

- **Body effect.** A rising $v_S$ also raises the threshold, so the degeneration factor becomes $1 + (g_m + g_{mb})R_S$ instead of $1 + g_mR_S$.
- **Channel-length modulation.** $r_O$ connects drain and source, so the output swing feeds back to the source; with $R_D/r_O = 0.1$ it costs about 6 %.
- Together they reduce the gain by about 14 % from $-4.23$. The ideal "$-R_D/R_S$" limit ($-10$) is far off, because $g_mR_S = 0.73$ is not much larger than 1.

### Result

$$A_v = -\frac{g_mr_OR_D}{R_D + r_O + R_S + (g_m + g_{mb})R_Sr_O} \approx -3.65,$$

with $g_m = 3.66$ mS, $r_O = 20$ kΩ, $V_{SB} = 0.1$ V, $\eta = 0.225$ and $g_{mb} = 0.824$ mS.

**Common mistake.** Ignoring the degeneration, $A_v = -g_mR_D = -7.3$, or using the large-degeneration limit $-R_D/R_S = -10$, which needs $g_mR_S \gg 1$ while here $g_mR_S = 0.73$.

**Common mistake.** Computing $g_{mb}$ with $V_{SB} = 0$ ($\eta = 0.237$). The source sits $I_DR_S = 0.1$ V above the grounded bulk, so $\eta = 0.45/(2\sqrt{1.0}) = 0.225$ (the gain changes only slightly here).

**Common mistake.** Putting $r_O$ in parallel with $R_D$: $-g_m(R_D\parallel r_O)/[1 + (g_m + g_{mb})R_S] = -3.51$. In a degenerated stage $r_O$ connects drain and source, not drain and ground; the exact expression gives $-3.65$.
