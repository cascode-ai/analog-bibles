# Detailed solution - R351

**Approach.** Represent the noise by an input-referred voltage and current. The key facts are two KCL statements that hold because the bias source $I_1$ is ideal and gates draw no current. At the output, the follower $M_1$ must carry zero ac current. At the input node, when the input is open, $M_2$ must carry zero ac current. Each statement removes one transistor's noise from one of the two calculations.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$, drain of $M_2$) and the output (source of $M_1$, gate of $M_2$, top of $I_1$).

- **$M_1$** (drain at $V_{DD}$ = ac ground, gate at the input, source at the output): it delivers into the output the current $g_{m1}(v_{in} - v_{out}) + I_{n1}$, with $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$.
- **$M_2$** (source grounded, gate at the output, drain at the input): it draws from the input node the current $g_{m2}v_{out} + I_{n2}$, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$. Its gate draws no current from the output.
- **$I_1$**: ideal and noiseless, an open circuit for ac.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. $\lambda = 0$ and there is no body effect, so there are no $r_O$ or $g_{mb}$ terms.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output

The output node is connected to $M_1$'s source, $M_2$'s gate (no current) and $I_1$ (no ac current). Hence $M_1$'s total ac current is zero:

$$g_{m1}(v_{in} - v_{out}) + I_{n1} = 0\quad\Longrightarrow\quad v_{out} = v_{in} + \frac{I_{n1}}{g_{m1}}. \tag{1}$$

The follower has **unity gain** and its own noise appears as a voltage $I_{n1}/g_{m1}$ in series with its input. Note that $M_2$ does **not** load the output: only its gate is connected there.

### Step 3 — Input-referred noise voltage (input driven)

With the input driven by an ideal voltage source, $M_2$'s drain current (signal and noise) flows into that source and has no effect on $v_{in}$ or $v_{out}$. From (1), the gain is $A_v = 1$ and the output noise is $I_{n1}/g_{m1}$. Referred to the input:

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

### Step 4 — Output noise with the input open

With the input open, the input node is connected only to $M_2$'s drain and to $M_1$'s gate (no current). Hence $M_2$'s total ac current is zero:

$$g_{m2}v_{out} + I_{n2} = 0\quad\Longrightarrow\quad v_{out} = -\frac{I_{n2}}{g_{m2}}. \tag{2}$$

The output is set entirely by $M_2$'s noise. $M_1$'s noise does not appear: by (1), it only shifts the floating input voltage, $v_{in} = v_{out} - I_{n1}/g_{m1}$, while the loop through $M_2$ holds $v_{out}$ where (2) requires.

**Physical picture.** The loop is a feedback loop: the output drives $M_2$, whose drain sets the input voltage, which the follower copies to the output. With the input open, the loop settles where $M_2$'s current is zero, which fixes $v_{out}$ regardless of what happens inside $M_1$.

### Step 5 — Transimpedance and input-referred noise current

Inject a signal current $i_{in}$ into the input node (noise off). It can leave only through $M_2$:

$$g_{m2}v_{out} = i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = \frac{1}{g_{m2}}.$$

Divide the open-input output noise (2) by $R_T$:

$$I_{n,eq} = \frac{-I_{n2}/g_{m2}}{1/g_{m2}} = -I_{n2},$$

so

$$\overline{I_{n,in}^2} = \overline{I_{n2}^2} = 4kT\gamma g_{m2}.$$

$M_2$'s noise current is drawn from the input node exactly where an input current would enter, so it is referred one-to-one.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}},\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2}$$

- Voltage (input driven): the follower $M_1$ has unity gain ($v_{out} = v_{in} + I_{n1}/g_{m1}$), and $M_2$'s current goes into the input source.
- Current (input open): $M_2$ must carry zero current, so $v_{out} = -I_{n2}/g_{m2}$; the transimpedance is $1/g_{m2}$. $M_1$ does not contribute.

**Common mistake.** Treating $M_2$ as a load of the output and taking the follower gain as $g_{m1}/(g_{m1} + g_{m2})$. Only $M_2$'s *gate* is connected to the output, and a gate draws no current; the follower, biased by an ideal current source, has unity gain.

**Common mistake.** Including $M_1$'s noise in the input-referred current. With the input open, the loop through $M_2$ forces $v_{out} = -I_{n2}/g_{m2}$ regardless of $I_{n1}$, which only moves the floating input voltage.

**Common mistake.** Including $M_2$'s noise in the input-referred voltage. With the input driven by an ideal voltage source, $M_2$'s noise current flows into that source and never reaches the output.
