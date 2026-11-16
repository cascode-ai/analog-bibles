# Detailed solution - R475

**Approach.** A closed-loop gain of 4 corresponds to a feedback factor $\beta = 1/4$. The loop gain is $\beta A_0/(1 + j\omega/\omega_p)^2$. A 60° phase margin fixes the crossover frequency, and requiring unit loop-gain magnitude there limits the product $\beta A_0$; dividing by $\beta$ gives the largest allowed $A_0$.

### Step 1 — Feedback factor for a closed-loop gain of 4

For a feedback amplifier with forward gain $A$ and feedback factor $\beta$ (the fraction of the output returned to the input), the closed-loop gain is

$$A_{CL} = \frac{A}{1 + \beta A} \approx \frac{1}{\beta}\quad\text{when } \beta A \gg 1 .$$

The nominal closed-loop gain is $1/\beta$, so a closed-loop gain of 4 means

$$\beta = \frac14 .$$

(For example, a non-inverting amplifier whose output is divided by a resistive divider with ratio 1/4 before being fed back.)

### Step 2 — Loop gain, magnitude and phase

The amplifier has gain $A_0$ and two poles at the same frequency $\omega_p$:

$$\beta H(j\omega) = \frac{\beta A_0}{\left(1 + j\omega/\omega_p\right)^2}.$$

Magnitude and phase:

$$
\begin{aligned}
|\beta H(j\omega)| &= \frac{\beta A_0}{\left|1 + j\omega/\omega_p\right|^2} = \frac{\beta A_0}{1 + \omega^2/\omega_p^2},\\
\angle\beta H(j\omega) &= -2\tan^{-1}\frac{\omega}{\omega_p}.
\end{aligned}
$$

### Step 3 — Phase condition: the crossover frequency

The *gain-crossover frequency* $\omega_u$ is where $|\beta H| = 1$, and the *phase margin* is $\mathrm{PM} = 180° + \angle\beta H(j\omega_u)$. For PM = 60°:

$$
\begin{aligned}
180° - 2\tan^{-1}\frac{\omega_u}{\omega_p} &= 60°\\
\tan^{-1}\frac{\omega_u}{\omega_p} &= 60°\\
\omega_u &= \omega_p\tan60° = \sqrt3\,\omega_p .
\end{aligned}
$$

Each of the two identical poles contributes 60°, for a total of 120°.

This step does not depend on $\beta$: the phase of the loop gain is set only by the poles, so the crossover must sit at $\sqrt3\,\omega_p$ whatever the closed-loop gain.

### Step 4 — Magnitude condition: the loop gain

Unit magnitude at $\omega_u$:

$$
\begin{aligned}
\frac{\beta A_0}{1 + (\sqrt3)^2} &= 1\\
\frac{\beta A_0}{4} &= 1\\
\beta A_0 &= 4 .
\end{aligned}
$$

A larger $\beta A_0$ would move the crossover above $\sqrt3\,\omega_p$, where the phase is more negative, and the phase margin would fall below 60°. Hence the requirement is

$$\beta A_0 \le 4 .$$

### Step 5 — Maximum $A_0$ for $\beta = 1/4$

$$A_{0,max} = \frac{4}{\beta} = \frac{4}{1/4} = 16 .$$

**Intuition.** Only the *loop* gain $\beta A_0$ matters for stability. A closed-loop gain of 4 returns only a quarter of the output, so the amplifier itself may have four times more gain than in the unity-gain case ($A_0 = 4$) before the loop runs out of phase margin. Higher closed-loop gain means less feedback, which is easier to stabilize.

**Actual closed-loop gain.** With $A_0 = 16$ and $\beta = 1/4$:

$$A_{CL} = \frac{A_0}{1 + \beta A_0} = \frac{16}{1 + 4} = 3.2,$$

which is the "4" of Step 1 reduced by the finite loop gain of 4 (gain error $1/(1 + \beta A_0) = 20\,\%$).

### Step 6 — If the actual closed-loop gain must be exactly 4

If the requirement is that $A_0/(1 + \beta A_0)$ equal exactly 4, then $\beta$ is no longer $1/4$:

$$
\begin{aligned}
\frac{A_0}{1 + \beta A_0} &= 4\\
1 + \beta A_0 &= \frac{A_0}{4}\\
\beta A_0 &= \frac{A_0}{4} - 1 .
\end{aligned}
$$

The stability limit $\beta A_0 \le 4$ becomes

$$\frac{A_0}{4} - 1 \le 4 \quad\Longrightarrow\quad A_0 \le 20,$$

and at the limit $\beta = 4/20 = 0.2$. Check: $20/(1 + 0.2\times20) = 20/5 = 4$. ✓

### Result

The 60° phase margin requires $\omega_u = \sqrt3\,\omega_p$ and a loop gain $\beta A_0 \le 4$. For a closed-loop gain of 4 ($\beta = 1/4$):

$$A_{0,max} = 16 .$$

(If the actual closed-loop gain $A_0/(1 + \beta A_0)$ must be exactly 4, then $\beta = 0.2$ and $A_{0,max} = 20$.)

**Common mistake.** Reusing the unity-gain result $A_0 = 4$. The stability condition limits the *loop* gain $\beta A_0$, not $A_0$ itself; with $\beta = 1/4$ the amplifier gain may be four times larger.

**Common mistake.** Taking $\beta = 4$ instead of $1/4$. The feedback factor is a fraction of the output (at most 1 for a passive network); the closed-loop gain is its reciprocal.

**Common mistake.** Using a wrong phase condition, for example putting the crossover at $\omega_p$ (which gives $\beta A_0 = 2$ and $A_0 = 8$) or giving each pole 30° instead of 60°. With PM = 60° the total phase at crossover is $-120°$, i.e. 60° per pole, which places the crossover at $\sqrt3\,\omega_p$.
