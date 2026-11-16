# Detailed solution - R350

**Approach.** Represent the noise by an input-referred voltage and current. $M_1$ is a source follower whose output node is also fed by $M_2$; $M_2$, with its gate at a fixed bias, takes current from the input node and delivers it to the output. KCL at the output (where the ideal $I_1$ is open) gives $v_{out}$ in terms of $v_{in}$ and the noise. **Input driven by a voltage source:** this gives $\overline{V_{n,in}^2}$ directly. **Input open:** add KCL at the input node (with $R_G$), solve, and divide by the transimpedance.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$, drain of $M_2$, bottom of $R_G$) and the output (source of $M_1$, source of $M_2$, top of $I_1$).

- **$M_1$** (drain at $V_{DD}$ = ac ground, gate at the input, source at the output): it delivers into the output the current $g_{m1}(v_{in} - v_{out}) + I_{n1}$, with $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$.
- **$M_2$** (gate at $V_b$ = ac ground, drain at the input, source at the output): its drain-to-source current is $g_{m2}(0 - v_{out}) + I_{n2} = -g_{m2}v_{out} + I_{n2}$, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$. It **draws this current from the input node and delivers it to the output**.
- **$R_G$**: from the input to $V_{DD}$ (ac ground), with Norton noise $I_{nG}$ ($\overline{I_{nG}^2} = 4kT/R_G$), taken as flowing from $V_{DD}$ into the input node.
- **$I_1$**: ideal and noiseless, an open circuit for ac.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output

Since $I_1$ carries no ac current, the currents delivered by $M_1$ and $M_2$ must sum to zero:

$$g_{m1}(v_{in} - v_{out}) + I_{n1} - g_{m2}v_{out} + I_{n2} = 0 .$$

Solve for $v_{out}$:

$$v_{out} = \frac{g_{m1}v_{in} + I_{n1} + I_{n2}}{g_{m1} + g_{m2}}. \tag{1}$$

Seen from the output, $M_2$ is a resistance $1/g_{m2}$ to ac ground (it looks into its source with the gate fixed) plus a noise current. It acts like a resistive load on the follower.

### Step 3 — Input-referred noise voltage (input driven)

With an ideal voltage source at the input, $R_G$ and the drain current of $M_2$ are absorbed by that source and do not affect anything. But $M_2$ is still connected to the output through its source, so equation (1) holds as written:

- gain: $A_v = \dfrac{g_{m1}}{g_{m1} + g_{m2}}$;
- noise: $\dfrac{I_{n1} + I_{n2}}{g_{m1} + g_{m2}}$ at the output.

Divide by the gain: $v_{n,in} = (I_{n1} + I_{n2})/g_{m1}$. With uncorrelated sources:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m2}}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right).$$

This is the same as a source follower with a current-source load whose noise current is that of $M_2$.

### Step 4 — Output noise with the input open

**KCL at the input node.** Current arrives through the $R_G$ branch and leaves through $M_2$'s drain (the gate of $M_1$ draws nothing):

$$-\frac{v_{in}}{R_G} + I_{nG} = -g_{m2}v_{out} + I_{n2}\quad\Longrightarrow\quad v_{in} = R_G\left(I_{nG} + g_{m2}v_{out} - I_{n2}\right). \tag{2}$$

Substitute (2) into (1) multiplied by $(g_{m1} + g_{m2})$:

$$
\begin{aligned}
v_{out}(g_{m1} + g_{m2}) &= g_{m1}R_G\left(I_{nG} + g_{m2}v_{out} - I_{n2}\right) + I_{n1} + I_{n2}\\
v_{out}\left(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G\right) &= g_{m1}R_G\,I_{nG} + I_{n1} + (1 - g_{m1}R_G)\,I_{n2}.
\end{aligned}
$$

The $-g_{m1}g_{m2}R_G$ term shows the **positive feedback**. If $v_{out}$ rises, $M_2$ conducts less, so less current is drawn from the input node; $v_{in}$ rises, and the follower pushes $v_{out}$ further up. The loop gain is $L = g_{m1}g_{m2}R_G/(g_{m1} + g_{m2})$, which the problem states is below 1, so the denominator is positive and the circuit is stable.

### Step 5 — Transimpedance and input-referred noise current

An input current $i_{in}$ injected into the input node enters exactly like $I_{nG}$, so

$$R_T = \frac{v_{out}}{i_{in}} = \frac{g_{m1}R_G}{g_{m1} + g_{m2} - g_{m1}g_{m2}R_G}.$$

Divide the noise part of $v_{out}$ by $R_T$; the denominator cancels:

$$I_{n,eq} = \frac{g_{m1}R_GI_{nG} + I_{n1} + (1 - g_{m1}R_G)I_{n2}}{g_{m1}R_G} = I_{nG} + \frac{I_{n1}}{g_{m1}R_G} + \frac{1 - g_{m1}R_G}{g_{m1}R_G}\,I_{n2}.$$

The three sources are uncorrelated:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= \frac{4kT}{R_G} + \frac{4kT\gamma g_{m1}}{g_{m1}^2R_G^2} + 4kT\gamma g_{m2}\left(\frac{1 - g_{m1}R_G}{g_{m1}R_G}\right)^2\\
&= \frac{4kT}{R_G} + \frac{4kT\gamma}{g_{m1}R_G^2} + 4kT\gamma g_{m2}\left(1 - \frac{1}{g_{m1}R_G}\right)^2 .
\end{aligned}
$$

(We used $\left(\frac{1 - x}{x}\right)^2 = \left(\frac1x - 1\right)^2 = \left(1 - \frac1x\right)^2$ with $x = g_{m1}R_G$.)

### Step 6 — Interpretation

- **$R_G$** injects its noise current directly into the input node, like an input current: weight 1.
- **$M_1$**: its gate-referred noise $I_{n1}/g_{m1}$ must be produced, with the input open, by a current through $R_G$: weight $1/(g_{m1}R_G)$.
- **$M_2$** acts in two places with opposite effects. It *removes* $I_{n2}$ from the input node (weight $-1$) and *adds* it to the output node (weight $+1/(g_{m1}R_G)$, like $M_1$'s noise). The two paths are fully correlated and partially cancel, giving $(1 - 1/(g_{m1}R_G))^2$. For $g_{m1}R_G = 1$ the cancellation would be complete.

### Result

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + \frac{4kT\gamma}{g_{m1}R_G^2} + 4kT\gamma g_{m2}\left(1 - \frac{1}{g_{m1}R_G}\right)^2$$

- Voltage (input driven): gain $g_{m1}/(g_{m1} + g_{m2})$; $M_2$ acts like a noisy load of the follower, and $R_G$ only loads the input source.
- Current (input open): transimpedance $g_{m1}R_G/(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G)$; $I_{n,eq} = I_{nG} + I_{n1}/(g_{m1}R_G) + I_{n2}(1 - g_{m1}R_G)/(g_{m1}R_G)$.

**Common mistake.** Computing the voltage with the input open, so that $R_G$ or the loop-gain factor appears in it. The input-referred voltage is found with the input driven by an ideal voltage source (shorted for noise): the feedback through $M_2$'s drain is then broken, and only $M_1$ and $M_2$'s output-side noise remain.

**Common mistake.** Ignoring $M_2$ at the output, i.e. taking the follower gain as 1 and leaving $M_2$'s noise out of the voltage. $M_2$'s source is at the output: it loads the follower with $1/g_{m2}$ (gain $g_{m1}/(g_{m1} + g_{m2})$) and injects $I_{n2}$ there.

**Common mistake.** Adding $M_2$'s two contributions to the current as powers, or with the same sign. The noise current leaves the input node and enters the output node; it is one physical source, so the two effects are added as amplitudes with opposite signs, $(1 - 1/(g_{m1}R_G))$.
