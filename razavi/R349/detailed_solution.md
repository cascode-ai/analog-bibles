# Detailed solution - R349

**Approach.** With the input shorted, the follower $M_2$ only delivers current into the ideal input source, so the result is that of a plain common-source stage. With the input open, only $M_2$'s source and the ideal (ac-open) $I_1$ connect to the input node, so $M_2$ must carry zero total current; this pins the gate-to-output voltage, and KCL at the output then gives $v_{out}$, which is divided by the transimpedance.

### Step 1 — Small-signal model

- **$M_1$:** a current $g_{m1}v_{in}$ from the output to ground, with its noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$).
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.
- **$M_2$** (drain at ac ground, gate at the output, source at the input): it delivers $g_{m2}v_{gs2} + I_{n2} = g_{m2}(v_{out} - v_{in}) + I_{n2}$ into the input node, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$; its gate draws no current from the output.
- **$I_1$:** ideal and noiseless, an ac open circuit.

<!-- diagram: diagram-01.cir -->

### Step 2 — Input-referred noise voltage (input shorted)

The ideal input source absorbs whatever $M_2$ delivers, and $M_2$ draws nothing from the output, so **$M_2$ has no effect** and the circuit is a common-source stage. KCL at the output:

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1}\quad\Longrightarrow\quad v_{out} = -g_{m1}R_D\,v_{in} - R_D\,(I_{n1} - I_{nD}).$$

Dividing the noise by the gain $-g_{m1}R_D$ and adding the uncorrelated powers:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + 4kT/R_D}{g_{m1}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### Step 3 — Output noise with the input open

With the input open, $M_2$ is the only ac path into the input node, so its total current is zero:

$$g_{m2}(v_{out} - v_{in}) + I_{n2} = 0\quad\Longrightarrow\quad v_{in} = v_{out} + \frac{I_{n2}}{g_{m2}}:$$

the follower makes the input track the output, offset by $M_2$'s gate-referred noise. Substituting into the output equation of Step 2, $v_{out} = -g_{m1}R_D\,v_{in} - R_D(I_{n1} - I_{nD})$:

$$
\begin{aligned}
v_{out} &= -g_{m1}R_D\,v_{out} - \frac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD})\\
v_{out}(1 + g_{m1}R_D) &= -\frac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD}).
\end{aligned}
$$

The factor $1 + g_{m1}R_D$ reflects the negative feedback around the loop $M_1 \to$ output $\to M_2 \to$ input.

### Step 4 — Transimpedance and input-referred noise current

A signal current $i_{in}$ injected into the input node must flow through $M_2$: $g_{m2}(v_{out} - v_{in}) + i_{in} = 0$, the same form as with $I_{n2}$, so

$$v_{out}(1 + g_{m1}R_D) = -\frac{g_{m1}R_D}{g_{m2}}\,i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = -\frac{g_{m1}R_D}{g_{m2}(1 + g_{m1}R_D)}.$$

Dividing the noise part of $v_{out}$ by $R_T$, the factor $(1 + g_{m1}R_D)$ cancels:

$$I_{n,eq} = \frac{-\dfrac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD})}{-\dfrac{g_{m1}R_D}{g_{m2}}} = I_{n2} + \frac{g_{m2}}{g_{m1}}\left(I_{n1} - I_{nD}\right).$$

The three sources are uncorrelated:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= 4kT\gamma g_{m2} + \frac{g_{m2}^2}{g_{m1}^2}\left(4kT\gamma g_{m1} + \frac{4kT}{R_D}\right)\\
&= 4kT\gamma g_{m2} + g_{m2}^2\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### Step 5 — Interpretation

With the input open, $v_{in} - v_{out} = (I_{n2} + i_{in})/g_{m2}$, and the output depends only on this voltage plus the gate-referred noise $(I_{n1} - I_{nD})/g_{m1}$ of $M_1$ and $R_D$. So $M_2$'s noise enters exactly like an input current (one-to-one), while a gate-referred voltage $V_n$ of the common-source stage is equivalent to a current $g_{m2}V_n$ through $M_2$. The resulting term $g_{m2}^2\overline{V_{n,in}^2}$ is of the same order as $M_2$'s own term when $g_{m1} \approx g_{m2}$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2} + g_{m2}^2\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- Voltage (input shorted): $M_2$'s current goes into the input source and does not affect the output; simple common-source result.
- Current (input open): $M_2$'s current is forced to zero, giving $I_{n,eq} = I_{n2} + (g_{m2}/g_{m1})(I_{n1} - I_{nD})$, with transimpedance $-g_{m1}R_D/[g_{m2}(1 + g_{m1}R_D)]$.

**Common mistake.** Giving only $4kT\gamma g_{m2}$ for the input-referred current. With the input open, the noise of $M_1$ and $R_D$ still reaches the output, which adds the term $g_{m2}^2\overline{V_{n,in}^2}$, comparable in size to $M_2$'s own term.

**Common mistake.** Setting the input-referred current to zero because the input impedance is low. A low input impedance makes the current less important for a low-impedance source, but the voltage and current generators are defined independently of the source impedance.

**Common mistake.** Including $M_2$'s noise in the input-referred voltage. With the input shorted, it flows into the ideal input source and never reaches the output.
