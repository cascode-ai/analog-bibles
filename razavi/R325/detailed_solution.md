# Detailed solution - R325

**Approach.** The zero-value time-constant (ZVTC) method estimates $\omega_{-3dB}\approx1/\sum_jR_jC_j$, where $R_j$ is the resistance seen by $C_j$ with the input zeroed and all other capacitors **open**. The sum equals the $s$ coefficient $b_1$ of the denominator, $b_1 = \sum_k 1/|\omega_{pk}|$, which is dominated by the lowest pole when that pole is dominant. Find $R_{GS}$, $R_{GD}$, $R_{CL}$ with a test current across each capacitor, now with $r_O$ and $g_{mb}$, and check the limit $r_O\to\infty$, $g_{mb} = 0$.

### Step 1 — Small-signal model with $r_O$ and $g_{mb}$

<!-- diagram: diagram-01.cir -->

Call the gate, source and drain (output) G, S and D. With the input zeroed, $R_G$, $R_S$ and $R_D$ run from G, S and D to ac ground, and with the bulk grounded ($v_{bs} = -V_S$) the drain-to-source current is

$$i_{DS} = g_m(V_G - V_S) - g_{mb}V_S + \frac{V_D - V_S}{r_O}.$$

**The degenerated transistor seen from the drain.** With $V_S = i_{DS}R_S$:

$$
\begin{aligned}
i_{DS}\left[1 + (g_m + g_{mb})R_S + \frac{R_S}{r_O}\right] &= g_mV_G + \frac{V_D}{r_O}\\
i_{DS} &= G_mV_G + \frac{V_D}{R_{deg}},
\end{aligned}
$$

$$R_{deg} = r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S, \qquad G_m = \frac{g_mr_O}{R_{deg}} = \frac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S},$$

the output resistance and the transconductance of the degenerated stage.

### Step 2 — Resistance seen by $C_L$

With $C_{GS}$ and $C_{GD}$ open, no current flows in $R_G$, so $V_G = 0$ and the transistor draws $V_D/R_{deg}$:

$$R_{CL} = R_{out} = R_D\parallel R_{deg} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}.$$

### Step 3 — Resistance seen by $C_{GD}$

Open $C_{GS}$ and $C_L$, and put a test current $I_X$ in place of $C_{GD}$, into G and out of D. At the gate, $I_X$ can only flow through $R_G$, so $V_G = I_XR_G$. At the drain, the currents leaving through $R_D$, the transistor and the test source sum to zero:

$$
\begin{aligned}
\frac{V_D}{R_D} + G_mV_G + \frac{V_D}{R_{deg}} + I_X &= 0\\
V_D &= -R_{out}\left(I_X + G_mV_G\right) = -R_{out}I_X(1 + G_mR_G).
\end{aligned}
$$

With $V_X = V_G - V_D$:

$$R_{GD} = \frac{V_X}{I_X} = R_G + R_{out}(1 + G_mR_G).$$

The term $R_{out}G_mR_G$ is the Miller effect: the gate voltage $I_XR_G$ is amplified to the drain by the stage gain $G_mR_{out}$.

### Step 4 — Resistance seen by $C_{GS}$

<!-- diagram: diagram-02.cir -->

Open $C_{GD}$ and $C_L$, and put $I_X$ in place of $C_{GS}$, into G and out of S. Again $V_G = I_XR_G$. At the drain the only current is the transistor's, supplied through $R_D$, so $V_D = -R_Di_{DS}$, and the transistor equation becomes

$$
\begin{aligned}
i_{DS} &= g_m(V_G - V_S) - g_{mb}V_S - \frac{R_Di_{DS} + V_S}{r_O}\\
i_{DS}\,\frac{r_O + R_D}{r_O} &= g_mV_G - \left(g_m + g_{mb} + \frac{1}{r_O}\right)V_S\\
i_{DS} &= \frac{g_mr_OV_G - \left[1 + (g_m + g_{mb})r_O\right]V_S}{r_O + R_D}.
\end{aligned}
$$

At the source, $i_{DS}$ leaves through $R_S$ and the test source: $i_{DS} = V_S/R_S + I_X$. Inserting $i_{DS}$ and multiplying by $R_S(r_O + R_D)$:

$$
\begin{aligned}
g_mr_OR_SV_G - \left[1 + (g_m + g_{mb})r_O\right]R_SV_S &= (r_O + R_D)V_S + (r_O + R_D)R_SI_X\\
V_S\,\underbrace{\left\{r_O + R_D + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}}_{\equiv\,N} &= g_mr_OR_SV_G - (r_O + R_D)R_SI_X .
\end{aligned}
$$

With $V_X = V_G - V_S$,

$$V_X = \frac{V_G\left(N - g_mr_OR_S\right) + (r_O + R_D)R_SI_X}{N},$$

where $N - g_mr_OR_S = r_O + R_D + R_S(1 + g_{mb}r_O)$. With $V_G = I_XR_G$:

$$R_{GS} = \frac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]}.$$

Dividing numerator and denominator by $(1 + g_{mb}r_O)(R_S + R_{x})$, with $R_x = (r_O + R_D)/(1 + g_{mb}r_O)$, gives the equivalent form

$$R_{GS} = \frac{R_G + R_S'}{1 + g_m'R_S'},\qquad R_S' = R_S\,\Big\|\,\frac{r_O + R_D}{1 + g_{mb}r_O},\qquad g_m' = \frac{g_mr_O}{r_O + R_D}.$$

It has the structure of the ideal result $(R_G + R_S)/(1 + g_mR_S)$, but $r_O$ and the body effect **weaken the bootstrapping** of $C_{GS}$: $g_m' < g_m$, and the source sees a smaller resistance $R_S'$.

### Step 5 — The bandwidth estimate

$$\omega_{-3dB}\approx\frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$

with

$$
\begin{aligned}
R_{CL} &= R_{out} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\},\\
R_{GD} &= R_G + R_{out}\left(1 + G_mR_G\right),\qquad G_m = \frac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S},\\
R_{GS} &= \frac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]}.
\end{aligned}
$$

### Step 6 — Check: $\lambda = \gamma = 0$

Let $r_O\to\infty$ and $g_{mb} = 0$.

- $R_{deg}\to\infty$, so $R_{CL}\to R_D$.
- $G_m\to\dfrac{g_m r_O}{r_O(1 + g_mR_S)} = \dfrac{g_m}{1 + g_mR_S}$, so $R_{GD}\to R_G + R_D\left(1 + \dfrac{g_mR_G}{1 + g_mR_S}\right) = R_D + \left(1 + \dfrac{g_mR_D}{1 + g_mR_S}\right)R_G$.
- Dividing numerator and denominator of $R_{GS}$ by $r_O$: $R_{GS}\to\dfrac{R_G + R_S}{1 + g_mR_S}$.

These are the familiar results for the ideal degenerated CS stage.

### Result

$$\omega_{-3dB}\approx\frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$

- $R_{CL} = R_{out} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}$
- $R_{GD} = R_G + R_{out}(1 + G_mR_G)$, with $G_m = \dfrac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S}$
- $R_{GS} = \dfrac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]} = \dfrac{R_G + R_S'}{1 + g_m'R_S'}$, with $R_S' = R_S\parallel\dfrac{r_O + R_D}{1 + g_{mb}r_O}$, $g_m' = \dfrac{g_mr_O}{r_O + R_D}$

For $r_O\to\infty$, $g_{mb} = 0$: $R_{GS} = (R_G + R_S)/(1 + g_mR_S)$, $R_{GD} = R_D + [1 + g_mR_D/(1 + g_mR_S)]R_G$, $R_{CL} = R_D$.

**Common mistake.** Shorting the other capacitors while computing each $R_j$. In the zero-value method they are set to *zero value*, i.e. **opened**; shorting them belongs to the infinite-value method used for low-frequency corners.

**Common mistake.** Adding the individual bandwidths, $\omega\approx\sum_j1/(R_jC_j)$. The method adds *time constants*, $b_1 = \sum_jR_jC_j$, and the bandwidth is the reciprocal of that sum.

**Common mistake.** Keeping $R_{CL} = R_D$ with $r_O$ present. The degenerated transistor presents $r_O + [1 + (g_m + g_{mb})r_O]R_S$ at the drain, in parallel with $R_D$: large, but not infinite. Likewise, forgetting $g_{mb}$ in $R_{GS}$ overstates the bootstrapping of $C_{GS}$.
