# Detailed solution - R343

**Approach.** A noisy circuit is represented by two input-referred sources in front of a noiseless copy: a voltage $\overline{V_{n,in}^2}$ in series with the input and a current $\overline{I_{n,in}^2}$ in parallel with it. They are found by two thought experiments. **Short the input:** the output noise divided by the squared voltage gain gives $\overline{V_{n,in}^2}$. **Open the input:** the output noise divided by the squared transimpedance gives $\overline{I_{n,in}^2}$. Both are needed for a common-gate stage, whose low input impedance makes the source impedance matter.

### Step 1 — Small-signal model

**Nodes:** the input (the source of $M_1$), the gate node G, and the output (drain).

- **$M_1$**: a current $g_m(v_G - v_{in})$ from the output to the source, with channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel. $\lambda = 0$ and no body effect, so there is no $r_O$ or $g_{mb}$.
- **$R_G$**: from G to the bias $V_b$ (ac ground), in series with its noise voltage $V_{nG}$ ($\overline{V_{nG}^2} = 4kTR_G$). Capacitances are neglected, so the gate draws no current, no current flows in $R_G$, and therefore
$$v_G = V_{nG}.$$
The gate simply sits at the noise voltage of $R_G$.
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise current $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$).

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Voltage gain of the common-gate stage

Drive the source with an ideal voltage $v_{in}$ (noise off, so $v_G = 0$). The current from the output to the source through $M_1$ is $g_m(0 - v_{in}) = -g_mv_{in}$. That is, $M_1$ draws $-g_mv_{in}$ from the output node, and this current comes through $R_D$: $(0 - v_{out})/R_D = -g_mv_{in}$. Hence

$$A_v = \frac{v_{out}}{v_{in}} = g_mR_D .$$

(The common-gate stage is non-inverting.)

### Step 3 — Input-referred noise voltage (input shorted)

With the source at ac ground, the stage behaves like a common-source device whose "input" is the gate. Each source in turn:

- **$M_1$:** $I_{n1}$ flows from the output to ground, so $v_{out} = -R_DI_{n1}$ and $\overline{V_{n,out}^2} = 4kT\gamma g_mR_D^2$. Referred:
$$\frac{4kT\gamma g_mR_D^2}{g_m^2R_D^2} = \frac{4kT\gamma}{g_m}.$$
- **$R_D$:** $v_{out} = R_DI_{nD}$, so $\overline{V_{n,out}^2} = 4kTR_D$. Referred:
$$\frac{4kTR_D}{g_m^2R_D^2} = \frac{4kT}{g_m^2R_D}.$$
- **$R_G$:** the gate sits at $V_{nG}$ and the source at 0, so $v_{GS} = V_{nG}$. The drain current is $g_mV_{nG}$, giving $v_{out} = -g_mR_DV_{nG}$ and $\overline{V_{n,out}^2} = g_m^2R_D^2\cdot4kTR_G$. Referred:
$$\frac{g_m^2R_D^2\cdot4kTR_G}{g_m^2R_D^2} = 4kTR_G .$$

$R_G$ is referred **one-to-one**. The transistor responds only to $v_{GS} = v_G - v_S$, so a voltage at the gate has the same effect as a voltage of opposite sign at the source (the input).

The sources are uncorrelated, so the powers add:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + 4kTR_G + \frac{4kT}{g_m^2R_D}.$$

### Step 4 — Input-referred noise current (input open)

Now leave the input (source) **open**. The only element connected to the source node is $M_1$ itself. KCL at the source therefore requires the **total current through $M_1$**, transconductance current plus noise, to be zero:

$$g_m(v_G - v_S) + I_{n1} = 0 .$$

Consequences:

- No current flows from the output into $M_1$, so **neither $I_{n1}$ nor $V_{nG}$ affects the output**. Their only effect is to move the floating source voltage: $v_S = V_{nG} + I_{n1}/g_m$.
- The output noise comes from $R_D$ alone: $v_{out} = R_DI_{nD}$, so
$$\overline{V_{n,out}^2}\Big|_{open} = 4kTR_D .$$

**Transimpedance.** Inject a signal current $i_{in}$ into the source node (input open otherwise). By KCL at the source, all of it must flow through $M_1$ to the drain and then through $R_D$:

$$|v_{out}| = R_D\,|i_{in}| \quad\Longrightarrow\quad |R_T| = R_D .$$

**Input-referred current:**

$$\overline{I_{n,in}^2} = \frac{\overline{V_{n,out}^2}|_{open}}{R_T^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D}.$$

### Step 5 — Interpretation

- The voltage source $\overline{V_{n,in}^2}$ dominates when the stage is driven from a low source impedance; the current source $\overline{I_{n,in}^2}$ matters when it is driven from a high one. That is why both must be computed: a common-gate stage, with input impedance $1/g_m$, is often driven by a source of comparable impedance.
- $R_G$ appears in the voltage but **not** in the current. With the input open, the source simply follows the gate, so the gate-resistor noise moves both terminals together and no current results.
- Only $R_D$ appears in the current: the load's noise current is indistinguishable from an input current, because every input current is passed through $M_1$ to the load unchanged.
- The two sources are, in general, correlated (both contain $R_D$'s noise, for example). That matters only when the source impedance is finite and both are used together.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + 4kTR_G + \frac{4kT}{g_m^2R_D},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- Voltage (input shorted, gain $g_mR_D$): $M_1$ gives $4kT\gamma/g_m$, $R_D$ gives $4kT/(g_m^2R_D)$, and $R_G$, whose noise voltage sits directly at the gate, gives $4kTR_G$.
- Current (input open): the total current in $M_1$ must be zero, so $M_1$ and $R_G$ cannot reach the output. Output noise $4kTR_D$, transimpedance $R_D$, giving $4kT/R_D$.

**Common mistake.** Leaving $R_G$ out of the noise voltage because "the gate draws no current". It is true that no current flows in $R_G$, but its *noise voltage* still appears at the gate and changes $v_{GS}$ exactly as an input voltage does. It contributes $4kTR_G$ to $\overline{V_{n,in}^2}$.

**Common mistake.** Keeping $M_1$'s or $R_G$'s noise in the input-referred current, for example by dividing the input-*shorted* output noise by $R_D^2$, which gives $4kT(\gamma g_m + g_m^2R_G + 1/R_D)$. The current must be computed with the input *open*, and then $M_1$ carries no net current at all.

**Common mistake.** Treating the stage as a common-source amplifier when computing the gain or the transimpedance. The input is the *source*: the voltage gain is $+g_mR_D$, and an input current is passed through $M_1$ to the load with unity current gain.
