# Detailed solution - R337

**Approach.** Follow the current. With $\lambda = 0$, $M_1$ is an ideal current source set only by its own gate voltage and noise, and every bit of current flowing from the output down through $M_2$ and $R_F$ must end up in $M_1$. So the current in $R_D$, and hence $v_{out}$, is fixed by $M_1$ alone, whatever $M_2$ and $R_F$ do.

### Step 1 — Small-signal model

Call X the node between $M_1$ and $M_2$ (drain of $M_1$, source of $M_2$, lower end of $R_F$).

- **$M_1$:** a current source $g_{m1}v_{in}$ from X to ground, independent of $v_X$, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$M_2$** (gate at ac ground): a current source $g_{m2}(0 - v_X)$ from the output to X, with its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) in parallel.
- **$R_F$:** from the output to X, with its Norton noise $I_{nF}$ ($\overline{I_{nF}^2} = 4kT/R_F$) in parallel.
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.

So four parallel branches connect the output to X, and only $M_1$ connects X to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X

The total current $i_{OX}$ flowing from the output to X through the four upper branches must leave X through $M_1$:

$$i_{OX} = \underbrace{g_{m2}(0 - v_X) + I_{n2}}_{M_2} + \underbrace{\frac{v_{out} - v_X}{R_F} + I_{nF}}_{R_F} = g_{m1}v_{in} + I_{n1}.$$

The right-hand side contains no node voltage, because $M_1$ is an ideal current source. Hence

$$i_{OX} = g_{m1}v_{in} + I_{n1},$$

**independent of $I_{n2}$, $I_{nF}$, $g_{m2}$ and $R_F$**, which only set how $i_{OX}$ divides between $M_2$ and $R_F$, and the voltage $v_X$.

### Step 3 — KCL at the output node

The current arriving from $V_{DD}$ through the $R_D$ branch equals the current leaving toward X:

$$\frac{0 - v_{out}}{R_D} + I_{nD} = i_{OX} = g_{m1}v_{in} + I_{n1},$$

$$
\begin{aligned}
-\frac{v_{out}}{R_D} &= g_{m1}v_{in} + I_{n1} - I_{nD}\\
v_{out} &= -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}.
\end{aligned}
$$

Neither $I_{n2}$ nor $I_{nF}$ appears, and neither does $R_F$ or $g_{m2}$.

### Step 4 — Where the noise currents of $M_2$ and $R_F$ go

With $v_{in} = 0$, $I_{n1} = 0$ and $I_{nD} = 0$, we have $v_{out} = 0$ and $i_{OX} = 0$, and KCL at X gives

$$
\begin{aligned}
-g_{m2}v_X + I_{n2} - \frac{v_X}{R_F} + I_{nF} &= 0\\
v_X &= \frac{I_{n2} + I_{nF}}{g_{m2} + 1/R_F}.
\end{aligned}
$$

So $I_{n2}$ and $I_{nF}$ **circulate inside the $M_2$–$R_F$ loop**: they raise $v_X$ until $M_2$ and $R_F$ carry an exactly opposite current back. They only make node X noisy; nothing reaches $R_D$.

### Step 5 — Gain and input-referred noise

From Step 3, the signal gain is that of a simple common-source stage:

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_D .$$

The two remaining uncorrelated sources give

$$\overline{V_{n,out}^2} = R_D^2\left(\overline{I_{n1}^2} + \overline{I_{nD}^2}\right) = R_D^2\left(4kT\gamma g_{m1} + \frac{4kT}{R_D}\right),$$

and dividing by $A_v^2 = g_{m1}^2R_D^2$,

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{R_D^2\left(4kT\gamma g_{m1} + 4kT/R_D\right)}{g_{m1}^2R_D^2}\\
&= \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_D}\\
&= 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### Step 6 — How robust is this cancellation?

The argument uses only the fact that everything between the output and X is in series with an ideal current source, so any element there cancels, including $g_{mb2}$ and $r_{O2}$; neglecting the body effect is not essential. The cancellation breaks only if X gets another path to ground, such as a finite $r_{O1}$ or capacitance at X at high frequencies, through which part of the circulating noise current can leak and then be drawn from $R_D$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

$M_2$ and $R_F$ contribute **nothing**. With $\lambda = 0$, $M_1$ is an ideal current source, so the current through $R_D$ is exactly $g_{m1}v_{in} + I_{n1}$ (plus $R_D$'s own noise). The noise currents of $M_2$ and $R_F$ circulate in the $M_2$–$R_F$ loop and only move the voltage at the intermediate node. The gain is $-g_{m1}R_D$, and the result is that of a simple common-source stage.

**Common mistake.** Treating $R_F$ as a resistor from the output to ac ground, in parallel with $R_D$, which changes both the gain and the noise. $R_F$ connects the output to X, and every current through it must return through $M_1$.

**Common mistake.** Adding a noise term for $M_2$ (for example $4kT\gamma g_{m2}/g_{m1}^2$, as if its noise current were injected into the output). A cascode device on top of an ideal current source cannot change the current delivered to the load.

**Common mistake.** Attributing the cancellation to the neglect of the body effect. $g_{mb2}$ and $r_{O2}$ also act between the output and X and cancel in the same way; only a finite $r_{O1}$ or capacitance at X breaks it.
