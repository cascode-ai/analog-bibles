# Detailed solution - R347

**Approach.** With the input shorted, an ideal source holds the input node fixed, so $R_G$ and $M_2$, which only inject current into that node, have no effect and the result is that of a plain common-source stage. With the input open, write KCL at the input node (with $M_2$'s feedback current and $R_G$) and at the output, solve for $v_{out}$, and divide by the transimpedance; the feedback factor cancels.

### Step 1 — Small-signal model

- **$M_1$:** a current $g_{m1}v_{in}$ from the output to ground, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.
- **$R_G$:** from the input to ground, with its Norton noise $I_{nG}$ ($\overline{I_{nG}^2} = 4kT/R_G$) flowing from the input to ground.
- **$M_2$** (source at ac ground, gate at the output, drain at the input, $\lambda = 0$): it delivers $g_{m2}v_{sg2} = g_{m2}(0 - v_{out}) = -g_{m2}v_{out}$ into the input node, and its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) also flows into the input.

<!-- diagram: diagram-01.cir -->

If $v_{out}$ rises, $M_2$ delivers less current into the input, the input falls, $M_1$ draws less current and $v_{out}$ rises further: **positive feedback** with loop gain $g_{m1}g_{m2}R_DR_G < 1$, so the circuit is stable.

### Step 2 — Input-referred noise voltage (input shorted)

With the input held by an ideal source, the currents of $R_G$ and $M_2$ (signal and noise) flow into that source and change nothing else; the feedback loop is broken. KCL at the output:

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1}\quad\Longrightarrow\quad v_{out} = -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}.$$

Dividing the noise terms by the gain $-g_{m1}R_D$:

$$\overline{V_{n,in}^2} = \frac{R_D^2\left(4kT\gamma g_{m1} + 4kT/R_D\right)}{g_{m1}^2R_D^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### Step 3 — Output noise with the input open

At the (now floating) input node, the current delivered by $M_2$ leaves through $R_G$ and its noise source, since the gate of $M_1$ takes no current:

$$-g_{m2}v_{out} + I_{n2} = \frac{v_{in}}{R_G} + I_{nG}\quad\Longrightarrow\quad v_{in} = R_G\left(-g_{m2}v_{out} + I_{n2} - I_{nG}\right).$$

Substituting into the output equation of Step 2, $v_{out} = -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}$:

$$
\begin{aligned}
v_{out} &= -g_{m1}R_DR_G\left(-g_{m2}v_{out} + I_{n2} - I_{nG}\right) - R_DI_{n1} + R_DI_{nD}\\
&= g_{m1}g_{m2}R_DR_G\,v_{out} - g_{m1}R_DR_G\,(I_{n2} - I_{nG}) - R_DI_{n1} + R_DI_{nD},
\end{aligned}
$$

$$v_{out}\left(1 - g_{m1}g_{m2}R_DR_G\right) = -g_{m1}R_DR_G\,(I_{n2} - I_{nG}) - R_D\,(I_{n1} - I_{nD}),$$

where $1 - g_{m1}g_{m2}R_DR_G$ is one minus the (positive) loop gain.

### Step 4 — Transimpedance and input-referred noise current

A signal current $i_{in}$ injected into the input node adds to $M_2$'s current there, exactly as $I_{n2}$ does, so from Step 3 with $I_{n2} \to i_{in}$:

$$v_{out}\left(1 - g_{m1}g_{m2}R_DR_G\right) = -g_{m1}R_DR_G\,i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = -\frac{g_{m1}R_DR_G}{1 - g_{m1}g_{m2}R_DR_G}.$$

Dividing the noise part of $v_{out}$ by $R_T$, the factor $1 - g_{m1}g_{m2}R_DR_G$ cancels:

$$I_{n,eq} = \frac{-g_{m1}R_DR_G(I_{n2} - I_{nG}) - R_D(I_{n1} - I_{nD})}{-g_{m1}R_DR_G} = (I_{n2} - I_{nG}) + \frac{I_{n1} - I_{nD}}{g_{m1}R_G}.$$

The four sources are uncorrelated, so

$$
\begin{aligned}
\overline{I_{n,in}^2} &= 4kT\gamma g_{m2} + \frac{4kT}{R_G} + \frac{4kT\gamma g_{m1} + 4kT/R_D}{g_{m1}^2R_G^2}\\
&= \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### Step 5 — Interpretation

$R_G$ and $M_2$ inject their noise exactly where an input current enters, so they appear one-to-one in $\overline{I_{n,in}^2}$ and not at all in $\overline{V_{n,in}^2}$. $M_1$ and $R_D$, represented by $\overline{V_{n,in}^2}$, appear in the current as $\overline{V_{n,in}^2}/R_G^2$, the current that would create that voltage across $R_G$. The positive feedback multiplies signal and noise by the same $1/(1 - g_{m1}g_{m2}R_DR_G)$, so it changes the gain but not the input-referred noise.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- Voltage (input shorted): $R_G$ and $M_2$ only inject current into the ideal input source, so the result is that of a simple common-source stage.
- Current (input open): $I_{n,eq} = I_{n2} - I_{nG} + (I_{n1} - I_{nD})/(g_{m1}R_G)$; the loop-gain factor cancels.

**Common mistake.** Computing the voltage with the input open, which brings in $R_G$, $M_2$ and the factor $1/(1 - g_{m1}g_{m2}R_DR_G)^2$. With the input shorted, the input node cannot move, the feedback through $M_2$ is broken, and only $M_1$ and $R_D$ remain.

**Common mistake.** Quoting $\overline{I_{n,in}^2} = 4kT/R_G$ (or $4kT/R_G + 4kT\gamma g_{m2}$) only. With the input open, the noise of $M_1$ and $R_D$ also reaches the output, which adds the term $\overline{V_{n,in}^2}/R_G^2$.

**Common mistake.** Treating $M_2$ as a load on the output. Its *gate* is at the output and draws no current; its *drain* current flows into the input node, so it is a feedback transconductor from the output to the input.
