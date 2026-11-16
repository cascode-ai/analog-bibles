# Detailed solution - R343

**Approach.** Find the input-referred noise voltage with the input shorted (output noise divided by the squared voltage gain) and the input-referred noise current with the input open (output noise divided by the squared transimpedance). Both matter for a common-gate stage, whose low input impedance makes the source impedance important.

### Step 1 — Small-signal model

- **$M_1$:** a current $g_m(v_G - v_{in})$ from the output to the source (the input), with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel; with $\lambda = 0$ and no body effect there is no $r_O$ or $g_{mb}$.
- **$R_G$:** from the gate node G to ac ground ($V_b$), in series with its noise voltage $V_{nG}$ ($\overline{V_{nG}^2} = 4kTR_G$). With capacitances neglected, no gate current flows in $R_G$, so
$$v_G = V_{nG}.$$
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing into the output.

<!-- diagram: diagram-01.cir -->

### Step 2 — Voltage gain of the common-gate stage

With the noise off ($v_G = 0$) and an ideal $v_{in}$ at the source, $M_1$ draws $g_m(0 - v_{in}) = -g_mv_{in}$ from the output, which comes through $R_D$: $(0 - v_{out})/R_D = -g_mv_{in}$. Hence the (non-inverting) gain is

$$A_v = \frac{v_{out}}{v_{in}} = g_mR_D .$$

### Step 3 — Input-referred noise voltage (input shorted)

With the source at ac ground:

- **$M_1$:** $I_{n1}$ flows from the output to ground, so $v_{out} = -R_DI_{n1}$ and $\overline{V_{n,out}^2} = 4kT\gamma g_mR_D^2$. Referred:
$$\frac{4kT\gamma g_mR_D^2}{g_m^2R_D^2} = \frac{4kT\gamma}{g_m}.$$
- **$R_D$:** $v_{out} = R_DI_{nD}$, so $\overline{V_{n,out}^2} = 4kTR_D$. Referred:
$$\frac{4kTR_D}{g_m^2R_D^2} = \frac{4kT}{g_m^2R_D}.$$
- **$R_G$:** $v_{GS} = V_{nG}$, so the drain current is $g_mV_{nG}$, $v_{out} = -g_mR_DV_{nG}$ and $\overline{V_{n,out}^2} = g_m^2R_D^2\cdot4kTR_G$. Referred:
$$\frac{g_m^2R_D^2\cdot4kTR_G}{g_m^2R_D^2} = 4kTR_G .$$

$R_G$ is referred **one-to-one**: the transistor responds only to $v_{GS}$, so a voltage at the gate acts like one of opposite sign at the source. Adding the uncorrelated powers:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + 4kTR_G + \frac{4kT}{g_m^2R_D}.$$

### Step 4 — Input-referred noise current (input open)

With the input open, only $M_1$ connects to the source node, so KCL there forces the **total current through $M_1$** to zero:

$$g_m(v_G - v_S) + I_{n1} = 0 .$$

So **neither $I_{n1}$ nor $V_{nG}$ reaches the output**; they only move the floating source voltage, $v_S = V_{nG} + I_{n1}/g_m$. The output noise comes from $R_D$ alone, $v_{out} = R_DI_{nD}$:

$$\overline{V_{n,out}^2}\Big|_{open} = 4kTR_D .$$

A signal current $i_{in}$ injected into the source must all flow through $M_1$ and then $R_D$:

$$|v_{out}| = R_D\,|i_{in}| \quad\Longrightarrow\quad |R_T| = R_D ,$$

$$\overline{I_{n,in}^2} = \frac{\overline{V_{n,out}^2}|_{open}}{R_T^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D}.$$

### Step 5 — Interpretation

$R_G$ appears in the voltage but **not** in the current: with the input open, the source simply follows the gate. Only $R_D$ appears in the current, because every input current passes through $M_1$ to the load unchanged, making the load's noise current indistinguishable from an input current. The two sources are in general correlated (both contain $R_D$'s noise), which matters only when they are used together with a finite source impedance.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + 4kTR_G + \frac{4kT}{g_m^2R_D},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- Voltage (input shorted, gain $g_mR_D$): $M_1$ gives $4kT\gamma/g_m$, $R_D$ gives $4kT/(g_m^2R_D)$, and $R_G$, whose noise voltage sits directly at the gate, gives $4kTR_G$.
- Current (input open): the total current in $M_1$ must be zero, so $M_1$ and $R_G$ cannot reach the output. Output noise $4kTR_D$, transimpedance $R_D$, giving $4kT/R_D$.

**Common mistake.** Leaving $R_G$ out of the noise voltage because the gate draws no current. No current flows in $R_G$, but its noise *voltage* still appears at the gate and changes $v_{GS}$, contributing $4kTR_G$.

**Common mistake.** Keeping $M_1$'s or $R_G$'s noise in the input-referred current, for example by dividing the input-*shorted* output noise by $R_D^2$, which gives $4kT(\gamma g_m + g_m^2R_G + 1/R_D)$. With the input *open*, $M_1$ carries no net current at all.

**Common mistake.** Treating the stage as common-source when finding the gain or transimpedance. The input is the *source*: the gain is $+g_mR_D$, and an input current reaches the load with unity current gain.
