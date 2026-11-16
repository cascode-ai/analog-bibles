# Detailed solution - R350

**Approach.** $M_1$ is a source follower whose output is also fed by $M_2$, which (gate at a fixed bias) takes current from the input node and delivers it to the output. KCL at the output, where the ideal $I_1$ is open, gives $v_{out}$ in terms of $v_{in}$ and the noise, and hence $\overline{V_{n,in}^2}$ with the input driven. For $\overline{I_{n,in}^2}$, add KCL at the open input node (with $R_G$), solve, and divide by the transimpedance.

### Step 1 — Small-signal model

- **$M_1$** (drain at ac ground): it delivers $g_{m1}(v_{in} - v_{out}) + I_{n1}$ into the output, with $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$.
- **$M_2$** (gate at ac ground, drain at the input, source at the output): its drain-to-source current $g_{m2}(0 - v_{out}) + I_{n2} = -g_{m2}v_{out} + I_{n2}$, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, is **drawn from the input node and delivered to the output**.
- **$R_G$:** from the input to ac ground, with its Norton noise $I_{nG}$ ($\overline{I_{nG}^2} = 4kT/R_G$) flowing from $V_{DD}$ into the input node.
- **$I_1$:** ideal and noiseless, an ac open circuit.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output

$I_1$ carries no ac current, so the currents delivered by $M_1$ and $M_2$ sum to zero:

$$g_{m1}(v_{in} - v_{out}) + I_{n1} - g_{m2}v_{out} + I_{n2} = 0 ,$$

$$v_{out} = \frac{g_{m1}v_{in} + I_{n1} + I_{n2}}{g_{m1} + g_{m2}}. \tag{1}$$

Seen from the output, $M_2$ is a resistance $1/g_{m2}$ to ac ground plus a noise current: a resistive load on the follower.

### Step 3 — Input-referred noise voltage (input driven)

An ideal source at the input absorbs the current of $R_G$ and $M_2$'s drain current, but $M_2$'s source still sits at the output, so (1) holds as written: the gain is $A_v = \dfrac{g_{m1}}{g_{m1} + g_{m2}}$ and the output noise is $\dfrac{I_{n1} + I_{n2}}{g_{m1} + g_{m2}}$. Dividing, $v_{n,in} = (I_{n1} + I_{n2})/g_{m1}$, and with uncorrelated sources

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m2}}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right),$$

as for a source follower with a current-source load carrying $M_2$'s noise.

### Step 4 — Output noise with the input open

At the input node, current arrives through the $R_G$ branch and leaves through $M_2$'s drain:

$$-\frac{v_{in}}{R_G} + I_{nG} = -g_{m2}v_{out} + I_{n2}\quad\Longrightarrow\quad v_{in} = R_G\left(I_{nG} + g_{m2}v_{out} - I_{n2}\right). \tag{2}$$

Substituting (2) into (1) multiplied by $(g_{m1} + g_{m2})$:

$$
\begin{aligned}
v_{out}(g_{m1} + g_{m2}) &= g_{m1}R_G\left(I_{nG} + g_{m2}v_{out} - I_{n2}\right) + I_{n1} + I_{n2}\\
v_{out}\left(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G\right) &= g_{m1}R_G\,I_{nG} + I_{n1} + (1 - g_{m1}R_G)\,I_{n2}.
\end{aligned}
$$

The $-g_{m1}g_{m2}R_G$ term is **positive feedback**: if $v_{out}$ rises, $M_2$ draws less from the input node, $v_{in}$ rises, and the follower pushes $v_{out}$ further up. The loop gain $L = g_{m1}g_{m2}R_G/(g_{m1} + g_{m2})$ is below 1, so the denominator is positive and the circuit is stable.

### Step 5 — Transimpedance and input-referred noise current

An input current $i_{in}$ enters the input node exactly like $I_{nG}$, so

$$R_T = \frac{v_{out}}{i_{in}} = \frac{g_{m1}R_G}{g_{m1} + g_{m2} - g_{m1}g_{m2}R_G}.$$

Dividing the noise part of $v_{out}$ by $R_T$, the denominator cancels:

$$I_{n,eq} = \frac{g_{m1}R_GI_{nG} + I_{n1} + (1 - g_{m1}R_G)I_{n2}}{g_{m1}R_G} = I_{nG} + \frac{I_{n1}}{g_{m1}R_G} + \frac{1 - g_{m1}R_G}{g_{m1}R_G}\,I_{n2}.$$

The three sources are uncorrelated, and $\left(\frac{1 - x}{x}\right)^2 = \left(1 - \frac1x\right)^2$ with $x = g_{m1}R_G$:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= \frac{4kT}{R_G} + \frac{4kT\gamma g_{m1}}{g_{m1}^2R_G^2} + 4kT\gamma g_{m2}\left(\frac{1 - g_{m1}R_G}{g_{m1}R_G}\right)^2\\
&= \frac{4kT}{R_G} + \frac{4kT\gamma}{g_{m1}R_G^2} + 4kT\gamma g_{m2}\left(1 - \frac{1}{g_{m1}R_G}\right)^2 .
\end{aligned}
$$

### Step 6 — Interpretation

- **$R_G$** injects its noise directly into the input node, like an input current: weight 1.
- **$M_1$:** with the input open, its gate-referred noise $I_{n1}/g_{m1}$ must be produced by a current through $R_G$: weight $1/(g_{m1}R_G)$.
- **$M_2$** *removes* $I_{n2}$ from the input node (weight $-1$) and *adds* it to the output (weight $+1/(g_{m1}R_G)$). The two effects are fully correlated and partly cancel, giving $(1 - 1/(g_{m1}R_G))^2$, which vanishes for $g_{m1}R_G = 1$.

### Result

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + \frac{4kT\gamma}{g_{m1}R_G^2} + 4kT\gamma g_{m2}\left(1 - \frac{1}{g_{m1}R_G}\right)^2$$

- Voltage (input driven): gain $g_{m1}/(g_{m1} + g_{m2})$; $M_2$ acts like a noisy load of the follower, and $R_G$ only loads the input source.
- Current (input open): transimpedance $g_{m1}R_G/(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G)$; $I_{n,eq} = I_{nG} + I_{n1}/(g_{m1}R_G) + I_{n2}(1 - g_{m1}R_G)/(g_{m1}R_G)$.

**Common mistake.** Computing the voltage with the input open, so that $R_G$ or the loop-gain factor appears in it. With the input driven by an ideal source, the feedback through $M_2$'s drain is broken, and only $M_1$ and $M_2$'s output-side noise remain.

**Common mistake.** Taking the follower gain as 1 and leaving $M_2$'s noise out of the voltage. $M_2$'s source is at the output: it loads the follower with $1/g_{m2}$ (gain $g_{m1}/(g_{m1} + g_{m2})$) and injects $I_{n2}$ there.

**Common mistake.** Adding $M_2$'s two contributions to the current as powers, or with the same sign. The noise current leaves the input node and enters the output node, so the two effects add as amplitudes with opposite signs, $(1 - 1/(g_{m1}R_G))$.
