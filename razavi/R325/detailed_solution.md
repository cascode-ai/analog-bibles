# Detailed solution - R325

**Approach.** The zero-value time-constant (ZVTC) method estimates the −3-dB bandwidth as $\omega_{-3dB}\approx1/\sum_jR_jC_j$, where $R_j$ is the resistance seen by capacitor $C_j$ with the input set to zero and all other capacitors **open** (zero value). We find the three resistances $R_{GS}$, $R_{GD}$, $R_{CL}$ by applying a test current across each capacitor, now with $r_O$ between drain and source and the body effect $g_{mb}$ included, and check the limit $r_O\to\infty$, $g_{mb} = 0$.

### Step 1 — Why the ZVTC estimate works

The transfer function's denominator can be written $1 + b_1s + b_2s^2 + \dots$, and a general result of circuit theory is that

$$b_1 = \sum_jR_jC_j$$

with $R_j$ defined as above. Since $b_1$ is also the sum of the reciprocal pole magnitudes, $b_1 = \sum_k 1/|\omega_{pk}|$, it is dominated by the lowest pole when that pole is dominant. Hence $\omega_{-3dB}\approx\omega_{p1}\approx1/b_1$. (For this circuit, the identity $b_1 = R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L$ can be confirmed by solving the full three-node circuit.)

### Step 2 — Small-signal model with $r_O$ and $g_{mb}$

<!-- diagram: diagram-01.cir -->

Nodes: gate **G**, source **S**, drain **D** (output). With the input zeroed:

- $R_G$ from G to ground; $R_S$ from S to ground; $R_D$ from D to ground ($V_{DD}$ is an ac ground);
- the drain-to-source current of $M_1$, with the bulk grounded ($v_{bs} = -V_S$):
$$i_{DS} = g_m(V_G - V_S) - g_{mb}V_S + \frac{V_D - V_S}{r_O}.$$

**A useful sub-result: the degenerated transistor seen from the drain.** With the source current flowing into $R_S$ ($V_S = i_{DS}R_S$), substitute into $i_{DS}$:

$$
\begin{aligned}
i_{DS}\left[1 + (g_m + g_{mb})R_S + \frac{R_S}{r_O}\right] &= g_mV_G + \frac{V_D}{r_O}\\
i_{DS} &= G_mV_G + \frac{V_D}{R_{deg}},
\end{aligned}
$$

with

$$R_{deg} = r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S, \qquad G_m = \frac{g_mr_O}{R_{deg}} = \frac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S}.$$

$R_{deg}$ is the output resistance of a degenerated transistor, and $G_m$ is the transconductance of the degenerated stage.

### Step 3 — Resistance seen by $C_L$

Open $C_{GS}$ and $C_{GD}$. The gate draws no current, so no current flows in $R_G$ and $V_G = 0$. Looking into D we see $R_D$ in parallel with the transistor's drain resistance; from Step 2 with $V_G = 0$, the transistor draws $V_D/R_{deg}$:

$$R_{CL} = R_{out} = R_D\parallel R_{deg} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}.$$

### Step 4 — Resistance seen by $C_{GD}$

Open $C_{GS}$ and $C_L$, and connect a test current source $I_X$ in place of $C_{GD}$, flowing into G and out of D.

**Gate.** $I_X$ can only flow through $R_G$:

$$V_G = I_XR_G .$$

**Drain (KCL).** Currents leaving D: through $R_D$ ($V_D/R_D$), through the transistor ($G_mV_G + V_D/R_{deg}$), and into the test source ($I_X$):

$$
\begin{aligned}
\frac{V_D}{R_D} + G_mV_G + \frac{V_D}{R_{deg}} + I_X &= 0\\
V_D &= -R_{out}\left(I_X + G_mV_G\right) = -R_{out}I_X(1 + G_mR_G).
\end{aligned}
$$

**Test voltage.** $V_X = V_G - V_D$:

$$R_{GD} = \frac{V_X}{I_X} = R_G + R_{out}(1 + G_mR_G).$$

The term $R_{out}G_mR_G$ is the Miller effect in disguise: the gate voltage $I_XR_G$ is amplified to the drain by the stage's gain $G_mR_{out}$.

### Step 5 — Resistance seen by $C_{GS}$

<!-- diagram: diagram-02.cir -->

Open $C_{GD}$ and $C_L$, and connect $I_X$ in place of $C_{GS}$, flowing into G and out of S.

**Gate.** $V_G = I_XR_G$.

**Drain (KCL).** The only current at D is the transistor current, supplied through $R_D$: $-V_D/R_D = i_{DS}$, so $V_D = -R_Di_{DS}$.

**Transistor equation** with $V_D = -R_Di_{DS}$:

$$
\begin{aligned}
i_{DS} &= g_m(V_G - V_S) - g_{mb}V_S - \frac{R_Di_{DS} + V_S}{r_O}\\
i_{DS}\,\frac{r_O + R_D}{r_O} &= g_mV_G - \left(g_m + g_{mb} + \frac{1}{r_O}\right)V_S\\
i_{DS} &= \frac{g_mr_OV_G - \left[1 + (g_m + g_{mb})r_O\right]V_S}{r_O + R_D}.
\end{aligned}
$$

**Source (KCL).** $i_{DS}$ arrives; it leaves through $R_S$ and through the test source: $i_{DS} = V_S/R_S + I_X$. Insert $i_{DS}$ and multiply by $R_S(r_O + R_D)$:

$$
\begin{aligned}
g_mr_OR_SV_G - \left[1 + (g_m + g_{mb})r_O\right]R_SV_S &= (r_O + R_D)V_S + (r_O + R_D)R_SI_X\\
V_S\,\underbrace{\left\{r_O + R_D + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}}_{\equiv\,N} &= g_mr_OR_SV_G - (r_O + R_D)R_SI_X .
\end{aligned}
$$

**Test voltage.** $V_X = V_G - V_S$:

$$V_X = \frac{V_G\left(N - g_mr_OR_S\right) + (r_O + R_D)R_SI_X}{N},$$

and $N - g_mr_OR_S = r_O + R_D + R_S(1 + g_{mb}r_O)$. With $V_G = I_XR_G$:

$$R_{GS} = \frac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]}.$$

**Compact form.** Dividing numerator and denominator by $(1 + g_{mb}r_O)(R_S + R_{x})$ with $R_x = (r_O + R_D)/(1 + g_{mb}r_O)$ gives the equivalent expression

$$R_{GS} = \frac{R_G + R_S'}{1 + g_m'R_S'},\qquad R_S' = R_S\,\Big\|\,\frac{r_O + R_D}{1 + g_{mb}r_O},\qquad g_m' = \frac{g_mr_O}{r_O + R_D}.$$

It has the same structure as the ideal result $(R_G + R_S)/(1 + g_mR_S)$, but $r_O$ and the body effect **weaken the bootstrapping** of $C_{GS}$: the effective transconductance $g_m'$ is smaller than $g_m$, and the source sees a smaller resistance $R_S'$.

### Step 6 — The bandwidth estimate

$$\omega_{-3dB}\approx\frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$

with

$$
\begin{aligned}
R_{CL} &= R_{out} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\},\\
R_{GD} &= R_G + R_{out}\left(1 + G_mR_G\right),\qquad G_m = \frac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S},\\
R_{GS} &= \frac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]}.
\end{aligned}
$$

### Step 7 — Check: $\lambda = \gamma = 0$

Let $r_O\to\infty$ and $g_{mb} = 0$.

- $R_{deg}\to\infty$, so $R_{CL}\to R_D$.
- $G_m\to\dfrac{g_m r_O}{r_O(1 + g_mR_S)} = \dfrac{g_m}{1 + g_mR_S}$, so $R_{GD}\to R_G + R_D\left(1 + \dfrac{g_mR_G}{1 + g_mR_S}\right) = R_D + \left(1 + \dfrac{g_mR_D}{1 + g_mR_S}\right)R_G$.
- In $R_{GS}$, divide numerator and denominator by $r_O$: $R_{GS}\to\dfrac{R_G + R_S}{1 + g_mR_S}$.

These are the familiar results for the ideal degenerated CS stage, which confirms the general expressions.

### Result

$$\omega_{-3dB}\approx\frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$

- $R_{CL} = R_{out} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}$
- $R_{GD} = R_G + R_{out}(1 + G_mR_G)$, with $G_m = \dfrac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S}$
- $R_{GS} = \dfrac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]} = \dfrac{R_G + R_S'}{1 + g_m'R_S'}$, with $R_S' = R_S\parallel\dfrac{r_O + R_D}{1 + g_{mb}r_O}$, $g_m' = \dfrac{g_mr_O}{r_O + R_D}$

For $r_O\to\infty$, $g_{mb} = 0$: $R_{GS} = (R_G + R_S)/(1 + g_mR_S)$, $R_{GD} = R_D + [1 + g_mR_D/(1 + g_mR_S)]R_G$, $R_{CL} = R_D$.

**Common mistake.** Shorting the other capacitors while computing each $R_j$. In the zero-value time-constant method the other capacitors are set to *zero value*, i.e. **opened**. (Shorting them belongs to the infinite-value method used for low-frequency corners.)

**Common mistake.** Adding the individual bandwidths, $\omega\approx\sum_j1/(R_jC_j)$. The method adds *time constants*, $b_1 = \sum_jR_jC_j$, and the bandwidth is the reciprocal of that sum.

**Common mistake.** Keeping $R_{CL} = R_D$ with $r_O$ present. The degenerated transistor presents $r_O + [1 + (g_m + g_{mb})r_O]R_S$ at the drain, which appears in parallel with $R_D$; it is large, but it is not infinite. Similarly, forgetting $g_{mb}$ in $R_{GS}$ overstates the bootstrapping of $C_{GS}$.
