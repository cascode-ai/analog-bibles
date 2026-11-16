# Detailed solution - R337

**Approach.** Instead of computing the effect of each noise source blindly, follow the current. With $\lambda = 0$, $M_1$ is an ideal current source whose current is set only by its own gate voltage and noise. Every bit of current that flows from the output down through $M_2$ and $R_F$ must end up in $M_1$. Therefore the current in $R_D$, and hence $v_{out}$, is fixed by $M_1$ alone, whatever $M_2$ and $R_F$ do.

### Step 1 — Small-signal model

Call X the node between $M_1$ and $M_2$ (drain of $M_1$, source of $M_2$, lower end of $R_F$).

- **$M_1$** (gate at $v_{in}$, source grounded): with $\lambda = 0$ it is a current source $g_{m1}v_{in}$ from X to ground, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel. Its current does **not** depend on $v_X$.
- **$M_2$** (gate at the fixed bias $V_b$, i.e. ac ground): a current source $g_{m2}(0 - v_X)$ from the output to X, with its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) in parallel.
- **$R_F$**: from the output to X, with its Norton noise current $I_{nF}$ ($\overline{I_{nF}^2} = 4kT/R_F$) in parallel.
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with its Norton noise current $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) in parallel.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

So between the output and X there are four parallel branches ($M_2$'s transconductance, $I_{n2}$, $R_F$ and $I_{nF}$); between X and ground there is only $M_1$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X

The current flowing from the output to X through all four upper branches, call it $i_{OX}$, must equal the current leaving X through $M_1$:

$$i_{OX} = \underbrace{g_{m2}(0 - v_X) + I_{n2}}_{M_2} + \underbrace{\frac{v_{out} - v_X}{R_F} + I_{nF}}_{R_F} = g_{m1}v_{in} + I_{n1}.$$

The right-hand side contains no node voltage at all, because $M_1$ is an ideal current source. Hence

$$i_{OX} = g_{m1}v_{in} + I_{n1},$$

**independent of $I_{n2}$, $I_{nF}$, $g_{m2}$ and $R_F$**. Those quantities only determine *how* $i_{OX}$ divides between $M_2$ and $R_F$, and the voltage $v_X$ at which that happens.

### Step 3 — KCL at the output node

The output node connects to the $R_D$ branch (resistor plus $I_{nD}$) and to the upper branches toward X. Take $I_{nD}$ as flowing from $V_{DD}$ into the output. The current arriving from $V_{DD}$ equals the current leaving toward X:

$$\frac{0 - v_{out}}{R_D} + I_{nD} = i_{OX} = g_{m1}v_{in} + I_{n1}.$$

Solve for $v_{out}$:

$$
\begin{aligned}
-\frac{v_{out}}{R_D} &= g_{m1}v_{in} + I_{n1} - I_{nD}\\
v_{out} &= -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}.
\end{aligned}
$$

Neither $I_{n2}$ nor $I_{nF}$ appears, and neither does $R_F$ or $g_{m2}$.

### Step 4 — Where do the noise currents of $M_2$ and $R_F$ go?

Set $v_{in} = 0$, $I_{n1} = 0$ and $I_{nD} = 0$, so that $v_{out} = 0$ and $i_{OX} = 0$. The KCL equation at X becomes

$$
\begin{aligned}
-g_{m2}v_X + I_{n2} - \frac{v_X}{R_F} + I_{nF} &= 0\\
v_X &= \frac{I_{n2} + I_{nF}}{g_{m2} + 1/R_F}.
\end{aligned}
$$

So $I_{n2}$ and $I_{nF}$ **circulate inside the loop formed by $M_2$ and $R_F$**. Each noise current pushes charge into X, the voltage at X rises, and the rise makes $M_2$ and $R_F$ carry an exactly opposite current back. The net current from the output to X stays zero. These sources only make node X noisy; nothing reaches $R_D$, so the output is not disturbed.

### Step 5 — Gain and input-referred noise

From Step 3, the signal gain is

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_D ,$$

exactly that of a simple common-source stage. (The cascode device and $R_F$ do not change it either, for the same reason.)

The output noise, from the remaining two uncorrelated sources:

$$\overline{V_{n,out}^2} = R_D^2\left(\overline{I_{n1}^2} + \overline{I_{nD}^2}\right) = R_D^2\left(4kT\gamma g_{m1} + \frac{4kT}{R_D}\right).$$

Divide by $A_v^2 = g_{m1}^2R_D^2$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{R_D^2\left(4kT\gamma g_{m1} + 4kT/R_D\right)}{g_{m1}^2R_D^2}\\
&= \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_D}\\
&= 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### Step 6 — How robust is this cancellation?

The argument used only one fact: everything between the output and X is in series with an ideal current source ($M_1$ with $\lambda = 0$). Any element connected between the output and X, and any noise source inside it, therefore cancels. That includes $M_2$'s body transconductance $g_{mb2}$ and its output resistance $r_{O2}$, which also sit between the output and X. Neglecting the body effect is thus not essential. What *would* break the cancellation is anything that provides a path from X to ground other than $M_1$'s ideal current source: a finite $r_{O1}$, or capacitance at node X at high frequencies. Through such a path, part of the circulating noise current of $M_2$ and $R_F$ could leak to ground and then be drawn from $R_D$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

$M_2$ and $R_F$ contribute **nothing**. With $\lambda = 0$, $M_1$ is an ideal current source, so the current through $R_D$ is exactly $g_{m1}v_{in} + I_{n1}$ (plus $R_D$'s own noise). The noise currents of $M_2$ and $R_F$ circulate in the $M_2$–$R_F$ loop and only move the voltage at the intermediate node. The gain is $-g_{m1}R_D$, and the result is that of a simple common-source stage.

**Common mistake.** Treating $R_F$ as a resistor in parallel with $R_D$ at the output (to ac ground), which changes both the gain and the noise. $R_F$ connects the output to node X, not to ground, and every current through it must return through $M_1$.

**Common mistake.** Adding a noise term for $M_2$ (for example $4kT\gamma g_{m2}/g_{m1}^2$, as if its noise current were injected into the output node). A cascode device sitting on top of an ideal current source cannot change the current delivered to the load; its noise only modulates the voltage at its own source node.

**Common mistake.** Attributing the cancellation to the neglect of the body effect. The body transconductance $g_{mb2}$ and $r_{O2}$ also act between the output and X and cancel in the same way. Only a finite $r_{O1}$ or capacitance at X (a second path from X to ground) breaks the cancellation.
