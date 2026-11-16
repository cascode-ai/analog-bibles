# Detailed solution - R347

**Approach.** Represent the noise by an input-referred voltage and current. **Input shorted:** an ideal voltage source holds the input node fixed, so $R_G$ and $M_2$, which only inject current into that node, have no effect. The result is that of a plain common-source stage. **Input open:** write KCL at the input node (with $M_2$'s feedback current and $R_G$) and at the output, solve for $v_{out}$, and divide by the transimpedance. The feedback factor cancels in the ratio.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$, which is also the drain of $M_2$ and the top of $R_G$) and the output.

- **$M_1$** (source grounded): current $g_{m1}v_{in}$ from the output to ground, with channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$), taken as flowing from $V_{DD}$ into the output.
- **$R_G$**: from the input to ground, with Norton noise $I_{nG}$ ($\overline{I_{nG}^2} = 4kT/R_G$), taken as flowing from the input to ground.
- **$M_2$** (PMOS, source at $V_{DD}$ = ac ground, gate at the output, drain at the input): it delivers into the input node the current $g_{m2}v_{sg2} = g_{m2}(0 - v_{out}) = -g_{m2}v_{out}$. Its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) also flows into the input. $\lambda = 0$, so it has no output resistance.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

**Feedback loop.** If $v_{out}$ rises, $M_2$ delivers less current into the input, so the input voltage falls, $M_1$ draws less current, and $v_{out}$ rises further. This is **positive feedback**, with loop gain $g_{m1}g_{m2}R_DR_G$, which the problem states is below 1, so the circuit is stable.

### Step 2 — Input-referred noise voltage (input shorted)

With the input driven by an ideal voltage source (shorted for noise), the input voltage is fixed. The currents of $R_G$ and of $M_2$ (signal and noise) flow into that source and change nothing else. So **neither $R_G$ nor $M_2$ affects the output**, and the feedback loop is broken.

KCL at the output (current from $R_D$ branch = current through $M_1$):

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1}\quad\Longrightarrow\quad v_{out} = -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}.$$

The gain with an ideal voltage drive is $-g_{m1}R_D$. Dividing the noise terms by it:

$$\overline{V_{n,in}^2} = \frac{R_D^2\left(4kT\gamma g_{m1} + 4kT/R_D\right)}{g_{m1}^2R_D^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### Step 3 — Output noise with the input open

**KCL at the input node** (current delivered by $M_2$ leaves through $R_G$ and its noise source; the gate of $M_1$ takes no current):

$$-g_{m2}v_{out} + I_{n2} = \frac{v_{in}}{R_G} + I_{nG}\quad\Longrightarrow\quad v_{in} = R_G\left(-g_{m2}v_{out} + I_{n2} - I_{nG}\right).$$

Here $v_{in}$ denotes the voltage of the floating input node.

**KCL at the output**, as in Step 2:

$$v_{out} = -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}.$$

Substitute $v_{in}$:

$$
\begin{aligned}
v_{out} &= -g_{m1}R_DR_G\left(-g_{m2}v_{out} + I_{n2} - I_{nG}\right) - R_DI_{n1} + R_DI_{nD}\\
&= g_{m1}g_{m2}R_DR_G\,v_{out} - g_{m1}R_DR_G\,(I_{n2} - I_{nG}) - R_DI_{n1} + R_DI_{nD}.
\end{aligned}
$$

Move the $v_{out}$ term to the left:

$$v_{out}\left(1 - g_{m1}g_{m2}R_DR_G\right) = -g_{m1}R_DR_G\,(I_{n2} - I_{nG}) - R_D\,(I_{n1} - I_{nD}).$$

The factor $1 - g_{m1}g_{m2}R_DR_G$ (one minus the loop gain) shows the positive feedback.

### Step 4 — Transimpedance and input-referred noise current

Inject a signal current $i_{in}$ into the input node (noise off). It adds to $M_2$'s current at the input, exactly as $I_{n2}$ does, so we can read the result from Step 3 with $I_{n2}$ replaced by $i_{in}$:

$$v_{out}\left(1 - g_{m1}g_{m2}R_DR_G\right) = -g_{m1}R_DR_G\,i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = -\frac{g_{m1}R_DR_G}{1 - g_{m1}g_{m2}R_DR_G}.$$

Divide the noise part of $v_{out}$ (Step 3) by $R_T$; the factor $1 - g_{m1}g_{m2}R_DR_G$ cancels:

$$I_{n,eq} = \frac{-g_{m1}R_DR_G(I_{n2} - I_{nG}) - R_D(I_{n1} - I_{nD})}{-g_{m1}R_DR_G} = (I_{n2} - I_{nG}) + \frac{I_{n1} - I_{nD}}{g_{m1}R_G}.$$

The four sources are uncorrelated, so

$$
\begin{aligned}
\overline{I_{n,in}^2} &= 4kT\gamma g_{m2} + \frac{4kT}{R_G} + \frac{4kT\gamma g_{m1} + 4kT/R_D}{g_{m1}^2R_G^2}\\
&= \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### Step 5 — Interpretation

- **$R_G$ and $M_2$** inject their noise currents directly into the input node, exactly where an input current would enter, so they appear one-to-one in $\overline{I_{n,in}^2}$ (and not at all in $\overline{V_{n,in}^2}$).
- **$M_1$ and $R_D$** are represented in the voltage by $\overline{V_{n,in}^2}$. With the input open, an equivalent input *current* must create that voltage across $R_G$, so they appear in the current as $\overline{V_{n,in}^2}/R_G^2$.
- **The positive feedback** through $M_2$ changes the gain (and the transimpedance) but not the input-referred noise: it multiplies signal and noise by the same factor $1/(1 - g_{m1}g_{m2}R_DR_G)$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- Voltage (input shorted): $R_G$ and $M_2$ only inject current into the ideal input source, so the result is that of a simple common-source stage.
- Current (input open): $I_{n,eq} = I_{n2} - I_{nG} + (I_{n1} - I_{nD})/(g_{m1}R_G)$; the loop-gain factor cancels.

**Common mistake.** Computing the voltage with the input open, which brings in $R_G$, $M_2$ and the loop-gain factor $1/(1 - g_{m1}g_{m2}R_DR_G)^2$. The input-referred voltage is defined with the input shorted; then the input node cannot move, the feedback through $M_2$ is broken, and only $M_1$ and $R_D$ remain.

**Common mistake.** Quoting $\overline{I_{n,in}^2} = 4kT/R_G$ (or $4kT/R_G + 4kT\gamma g_{m2}$) only. With the input open, the noise of $M_1$ and $R_D$ also reaches the output, and the equivalent input current must account for it; that is the term $\overline{V_{n,in}^2}/R_G^2$.

**Common mistake.** Treating $M_2$ as a load on the output node. Its *gate* is at the output, so it draws no current from there; its *drain* current flows into the input node. It is a feedback transconductor from the output to the input.
