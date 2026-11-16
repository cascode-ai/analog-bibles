# Detailed solution - R349

**Approach.** Represent the noise by an input-referred voltage and current. **Input shorted:** the source follower $M_2$ only delivers current into the ideal input source, so the result is that of a plain common-source stage. **Input open:** the input node is connected only to $M_2$'s source and to the ideal (open) current source $I_1$, so $M_2$ must carry zero total current. That pins the gate-to-output voltage, and with KCL at the output we find $v_{out}$, which we divide by the transimpedance.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$, source of $M_2$, top of $I_1$) and the output (drain of $M_1$, gate of $M_2$, bottom of $R_D$).

- **$M_1$** (source grounded): current $g_{m1}v_{in}$ from the output to ground, with noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$).
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$), taken as flowing from $V_{DD}$ into the output.
- **$M_2$** (NMOS, drain at $V_{DD}$ = ac ground, gate at the output, source at the input): it delivers into the input node the current $g_{m2}v_{gs2} + I_{n2} = g_{m2}(v_{out} - v_{in}) + I_{n2}$, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$. Its gate draws no current from the output.
- **$I_1$**: an ideal, noiseless current source, i.e. an open circuit for ac.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Input-referred noise voltage (input shorted)

With the input driven by an ideal voltage source, whatever current $M_2$ delivers into the input node is absorbed by that source, and the input voltage does not change. $M_2$ draws nothing from the output (only its gate is there). So **$M_2$ has no effect** on the output, and the circuit reduces to a common-source stage.

KCL at the output (current from the $R_D$ branch = current through $M_1$):

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1}\quad\Longrightarrow\quad v_{out} = -g_{m1}R_D\,v_{in} - R_D\,(I_{n1} - I_{nD}).$$

Gain $-g_{m1}R_D$; dividing the noise by it and adding uncorrelated powers:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + 4kT/R_D}{g_{m1}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### Step 3 — Output noise with the input open

**KCL at the input node.** With the input open, the only ac path into or out of this node is $M_2$ ($I_1$ is open and the gate of $M_1$ draws nothing). So $M_2$'s total current is zero:

$$g_{m2}(v_{out} - v_{in}) + I_{n2} = 0\quad\Longrightarrow\quad v_{in} = v_{out} + \frac{I_{n2}}{g_{m2}}.$$

The follower forces the input to track the output, offset by $M_2$'s noise referred to its gate.

**KCL at the output** (as in Step 2):

$$v_{out} = -g_{m1}R_D\,v_{in} - R_D(I_{n1} - I_{nD}).$$

Substitute $v_{in}$:

$$
\begin{aligned}
v_{out} &= -g_{m1}R_D\,v_{out} - \frac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD})\\
v_{out}(1 + g_{m1}R_D) &= -\frac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD}).
\end{aligned}
$$

The factor $1 + g_{m1}R_D$ shows the negative feedback around the loop $M_1 \to$ output $\to M_2 \to$ input.

### Step 4 — Transimpedance and input-referred noise current

Inject a signal current $i_{in}$ into the input node (noise off). It must flow through $M_2$, so KCL at the input becomes $g_{m2}(v_{out} - v_{in}) + i_{in} = 0$, i.e. $v_{in} = v_{out} + i_{in}/g_{m2}$. This has the same form as with $I_{n2}$, so

$$v_{out}(1 + g_{m1}R_D) = -\frac{g_{m1}R_D}{g_{m2}}\,i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = -\frac{g_{m1}R_D}{g_{m2}(1 + g_{m1}R_D)}.$$

Divide the noise part of $v_{out}$ by $R_T$; the factor $(1 + g_{m1}R_D)$ cancels:

$$I_{n,eq} = \frac{-\dfrac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD})}{-\dfrac{g_{m1}R_D}{g_{m2}}} = I_{n2} + \frac{g_{m2}}{g_{m1}}\left(I_{n1} - I_{nD}\right).$$

The three sources are uncorrelated:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= 4kT\gamma g_{m2} + \frac{g_{m2}^2}{g_{m1}^2}\left(4kT\gamma g_{m1} + \frac{4kT}{R_D}\right)\\
&= 4kT\gamma g_{m2} + g_{m2}^2\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### Step 5 — Interpretation

Write $v_{in} - v_{out} = u$. With the input open, KCL at the input gives $u = (I_{n2} + i_{in})/g_{m2}$, and the output depends only on the sum $u + (I_{n1} - I_{nD})/g_{m1}$, i.e. $u$ plus the gate-referred noise of $M_1$ and $R_D$. Therefore:

- $M_2$'s noise current and an input current enter in exactly the same way, so $M_2$ contributes $4kT\gamma g_{m2}$ one-to-one.
- A gate-referred noise voltage $V_n$ of the CS stage is equivalent to a current $g_{m2}V_n$ through $M_2$. Hence the term $g_{m2}^2\overline{V_{n,in}^2}$, which is of the same order as $M_2$'s own term when $g_{m1} \approx g_{m2}$ and cannot be neglected.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2} + g_{m2}^2\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- Voltage (input shorted): $M_2$'s current goes into the input source and does not affect the output; simple common-source result.
- Current (input open): $M_2$'s current is forced to zero, giving $I_{n,eq} = I_{n2} + (g_{m2}/g_{m1})(I_{n1} - I_{nD})$, with transimpedance $-g_{m1}R_D/[g_{m2}(1 + g_{m1}R_D)]$.

**Common mistake.** Giving only $4kT\gamma g_{m2}$ for the input-referred current. With the input open, the noise of $M_1$ and $R_D$ still reaches the output, and the equivalent input current must reproduce it; that is the term $g_{m2}^2\overline{V_{n,in}^2}$, which is comparable in size to $M_2$'s own term.

**Common mistake.** Setting the input-referred current to zero because "the input impedance is low". A low input impedance makes the current *less important* when the stage is driven from a low-impedance source, but it does not make it zero; the voltage and current generators are defined independently of the source impedance.

**Common mistake.** Including $M_2$'s noise in the input-referred voltage. With the input shorted, $M_2$'s noise current flows into the ideal input source and never reaches the output.
