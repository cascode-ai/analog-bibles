# Detailed solution - R351

**Approach.** Because $I_1$ is ideal and gates draw no current, two KCL statements hold: at the output, the follower $M_1$ carries zero ac current; at the input node, when the input is open, $M_2$ carries zero ac current. Each removes one transistor's noise from one of the two calculations.

### Step 1 — Small-signal model

With $\lambda = 0$ and no body effect:

- **$M_1$** (drain at ac ground, gate at the input, source at the output): it delivers $g_{m1}(v_{in} - v_{out}) + I_{n1}$ into the output, with $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$.
- **$M_2$** (source grounded, gate at the output, drain at the input): it draws $g_{m2}v_{out} + I_{n2}$ from the input node, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$; its gate draws no current from the output.
- **$I_1$:** ideal and noiseless, an ac open circuit.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output

The output connects only to $M_1$'s source, $M_2$'s gate and $I_1$, so $M_1$'s total ac current is zero:

$$g_{m1}(v_{in} - v_{out}) + I_{n1} = 0\quad\Longrightarrow\quad v_{out} = v_{in} + \frac{I_{n1}}{g_{m1}}. \tag{1}$$

The follower has **unity gain**, with its own noise appearing as a voltage $I_{n1}/g_{m1}$ in series with its input; $M_2$ does **not** load the output.

### Step 3 — Input-referred noise voltage (input driven)

With an ideal voltage source at the input, $M_2$'s drain current (signal and noise) flows into that source and affects neither $v_{in}$ nor $v_{out}$. From (1), $A_v = 1$ and the output noise is $I_{n1}/g_{m1}$:

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

### Step 4 — Output noise with the input open

With the input open, the input node connects only to $M_2$'s drain and $M_1$'s gate, so $M_2$'s total ac current is zero:

$$g_{m2}v_{out} + I_{n2} = 0\quad\Longrightarrow\quad v_{out} = -\frac{I_{n2}}{g_{m2}}. \tag{2}$$

The output is set entirely by $M_2$'s noise. $M_1$'s noise only shifts the floating input voltage, $v_{in} = v_{out} - I_{n1}/g_{m1}$ by (1): the loop output → $M_2$ → input → follower → output settles where $M_2$'s current is zero, whatever happens inside $M_1$.

### Step 5 — Transimpedance and input-referred noise current

A signal current $i_{in}$ injected into the input node can leave only through $M_2$:

$$g_{m2}v_{out} = i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = \frac{1}{g_{m2}}.$$

Dividing (2) by $R_T$:

$$I_{n,eq} = \frac{-I_{n2}/g_{m2}}{1/g_{m2}} = -I_{n2},$$

$$\overline{I_{n,in}^2} = \overline{I_{n2}^2} = 4kT\gamma g_{m2}:$$

$M_2$'s noise is drawn from the input node exactly where an input current enters, so it is referred one-to-one.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}},\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2}$$

- Voltage (input driven): the follower $M_1$ has unity gain ($v_{out} = v_{in} + I_{n1}/g_{m1}$), and $M_2$'s current goes into the input source.
- Current (input open): $M_2$ must carry zero current, so $v_{out} = -I_{n2}/g_{m2}$; the transimpedance is $1/g_{m2}$. $M_1$ does not contribute.

**Common mistake.** Treating $M_2$ as a load of the output and taking the follower gain as $g_{m1}/(g_{m1} + g_{m2})$. Only $M_2$'s *gate* is at the output; the follower, biased by an ideal current source, has unity gain.

**Common mistake.** Including $M_1$'s noise in the input-referred current. With the input open, the loop through $M_2$ forces $v_{out} = -I_{n2}/g_{m2}$ regardless of $I_{n1}$.

**Common mistake.** Including $M_2$'s noise in the input-referred voltage. With the input driven by an ideal source, it flows into that source and never reaches the output.
