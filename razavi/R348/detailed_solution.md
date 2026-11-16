# Detailed solution - R348

**Approach.** Represent the noise by an input-referred voltage and current. Here the PMOS $M_2$ (gate at a fixed bias) acts as a common-gate device. It takes a current out of the output node and delivers it to the input node, so its noise appears at **both** nodes. **Input shorted:** $M_2$ loads the output and its noise leaves the output node, while $R_G$ is irrelevant. **Input open:** KCL at the input and at the output gives $v_{out}$, which we divide by the transimpedance.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$, drain of $M_2$, top of $R_G$) and the output (drain of $M_1$, source of $M_2$, bottom of $R_D$).

- **$M_1$** (source grounded): current $g_{m1}v_{in}$ from the output to ground, with noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$).
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$), taken as flowing from $V_{DD}$ into the output.
- **$R_G$**: from the input to ground, with Norton noise $I_{nG}$ ($\overline{I_{nG}^2} = 4kT/R_G$), taken as flowing from the input to ground.
- **$M_2$** (PMOS, source at the output, gate at $V_b$ = ac ground, drain at the input, $\lambda = 0$): its current from source to drain is $g_{m2}v_{sg2} = g_{m2}(v_{out} - 0) = g_{m2}v_{out}$. Together with its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$), it **draws $g_{m2}v_{out} + I_{n2}$ from the output and delivers it to the input**.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Input-referred noise voltage (input shorted)

With the input held at ac ground by an ideal source, $R_G$ is shorted out, and $M_2$'s current flows into the source. But $M_2$ still draws $g_{m2}v_{out} + I_{n2}$ **from the output**: seen from the output, $M_2$ is a resistance $1/g_{m2}$ to ac ground (its source impedance as a common-gate device) plus a noise current.

KCL at the output (current from the $R_D$ branch = current through $M_1$ + current through $M_2$):

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1} + g_{m2}v_{out} + I_{n2}.$$

Solve for $v_{out}$:

$$v_{out}\left(\frac{1}{R_D} + g_{m2}\right) = -g_{m1}v_{in} - I_{n1} - I_{n2} + I_{nD}.$$

Gain: $A_v = -g_{m1}/(1/R_D + g_{m2}) = -g_{m1}\left(R_D\parallel\frac{1}{g_{m2}}\right)$. The noise currents have the same factor, so dividing by $g_{m1}$ refers them to the input:

$$v_{n,in} = \frac{I_{n1} + I_{n2} - I_{nD}}{g_{m1}}.$$

The three sources are uncorrelated:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m2} + 4kT/R_D}{g_{m1}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right).$$

### Step 3 — Output noise with the input open

**KCL at the input node.** The current delivered by $M_2$ leaves through $R_G$ and its noise source:

$$g_{m2}v_{out} + I_{n2} = \frac{v_{in}}{R_G} + I_{nG}\quad\Longrightarrow\quad v_{in} = R_G\left(g_{m2}v_{out} + I_{n2} - I_{nG}\right).$$

**KCL at the output**, from Step 2:

$$v_{out}\left(\frac{1}{R_D} + g_{m2}\right) = -g_{m1}v_{in} - I_{n1} - I_{n2} + I_{nD}.$$

Substitute $v_{in}$:

$$
\begin{aligned}
v_{out}\left(\frac{1}{R_D} + g_{m2}\right) &= -g_{m1}R_G\left(g_{m2}v_{out} + I_{n2} - I_{nG}\right) - I_{n1} - I_{n2} + I_{nD}\\
v_{out}\left(\frac{1}{R_D} + g_{m2} + g_{m1}g_{m2}R_G\right) &= -(1 + g_{m1}R_G)\,I_{n2} + g_{m1}R_G\,I_{nG} - I_{n1} + I_{nD}.
\end{aligned}
$$

Note that $I_{n2}$ appears with the coefficient $1 + g_{m1}R_G$: the "1" is its direct effect at the output, and $g_{m1}R_G$ is its effect through the input node (where it develops a voltage across $R_G$ that $M_1$ amplifies). The two paths come from the same physical source, so they add as amplitudes.

### Step 4 — Transimpedance and input-referred noise current

Inject a signal current $i_{in}$ into the input node (noise off). From the input KCL, $v_{in} = R_G(g_{m2}v_{out} + i_{in})$, and from the output KCL, $v_{out}(1/R_D + g_{m2}) = -g_{m1}v_{in}$. Combining:

$$
\begin{aligned}
v_{out}\left(\frac{1}{R_D} + g_{m2}\right) &= -g_{m1}R_G\,g_{m2}v_{out} - g_{m1}R_G\,i_{in}\\
R_T = \frac{v_{out}}{i_{in}} &= -\frac{g_{m1}R_G}{\dfrac{1}{R_D} + g_{m2} + g_{m1}g_{m2}R_G}.
\end{aligned}
$$

Divide the noise part of $v_{out}$ by $R_T$; the denominator $\frac{1}{R_D} + g_{m2} + g_{m1}g_{m2}R_G$ cancels:

$$I_{n,eq} = \frac{-(1 + g_{m1}R_G)I_{n2} + g_{m1}R_GI_{nG} - I_{n1} + I_{nD}}{-g_{m1}R_G} = \left(1 + \frac{1}{g_{m1}R_G}\right)I_{n2} - I_{nG} + \frac{I_{n1} - I_{nD}}{g_{m1}R_G}.$$

The four sources are uncorrelated, so

$$\overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2}\left(1 + \frac{1}{g_{m1}R_G}\right)^2 + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### Step 5 — Interpretation

- **$R_G$**: its noise current sits directly at the input, so it is referred one-to-one: $4kT/R_G$.
- **$M_1$ and $R_D$**: with the input open, an equivalent input current must produce the gate voltage $(I_{n1} - I_{nD})/g_{m1}$ across $R_G$, which needs $(I_{n1} - I_{nD})/(g_{m1}R_G)$.
- **$M_2$**: its noise is injected into the input node (weight 1, like an input current) *and* drawn from the output node (weight $1/(g_{m1}R_G)$, like $M_1$'s noise). These are perfectly correlated, so the weights add before squaring: $(1 + 1/(g_{m1}R_G))^2$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right)$$

$$\overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2}\left(1 + \frac{1}{g_{m1}R_G}\right)^2 + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- Voltage (input shorted): gain $-g_{m1}(R_D\parallel 1/g_{m2})$; $M_2$'s noise leaves the output node like a load noise.
- Current (input open): transimpedance $-g_{m1}R_G/(1/R_D + g_{m2} + g_{m1}g_{m2}R_G)$; $I_{n,eq} = (1 + 1/(g_{m1}R_G))I_{n2} - I_{nG} + (I_{n1} - I_{nD})/(g_{m1}R_G)$.

**Common mistake.** Keeping only the input-node sources in the current, $4kT(\gamma g_{m2} + 1/R_G)$. With the input open, the noise of $M_1$, $R_D$ and the output-side part of $M_2$'s noise also reach the output, and the equivalent input current must reproduce them. That gives the $1/(g_{m1}R_G)$ terms.

**Common mistake.** Including $R_G$ in the voltage, or leaving out $M_2$. With the input shorted, $R_G$ is shorted out; but $M_2$ is still connected to the output (its source), where it draws its noise current $I_{n2}$ and loads the node with $1/g_{m2}$.

**Common mistake.** Adding $M_2$'s two contributions as powers, $1 + 1/(g_{m1}R_G)^2$, instead of $\left(1 + 1/(g_{m1}R_G)\right)^2$. The current leaving the output and the current entering the input are the same physical noise current of $M_2$, so they are fully correlated.
