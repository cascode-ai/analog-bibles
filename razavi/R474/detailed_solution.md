# Detailed solution - R474

**Approach.** For a closed-loop gain of unity the whole output is fed back, so the feedback factor is $\beta = 1$ and the loop gain is $A_0/(1 + j\omega/\omega_p)^2$. A 60° phase margin fixes the phase at the gain crossover, which fixes the crossover frequency; requiring the loop-gain magnitude to be 1 there gives the largest allowed $A_0$.

### Step 1 — Loop gain

The amplifier has a low-frequency gain $A_0$ and two poles at the same frequency $\omega_p$:

$$H(j\omega) = \frac{A_0}{\left(1 + j\omega/\omega_p\right)^2}.$$

With a feedback factor $\beta$ (the fraction of the output fed back to the input), the loop gain is

$$\beta H(j\omega) = \frac{\beta A_0}{\left(1 + j\omega/\omega_p\right)^2}.$$

A closed-loop gain of unity means $\beta = 1$ (the voltage-follower connection, closed-loop gain $\approx 1/\beta = 1$).

Magnitude and phase of the loop gain:

$$
\begin{aligned}
|\beta H(j\omega)| &= \frac{\beta A_0}{\left|1 + j\omega/\omega_p\right|^2} = \frac{\beta A_0}{1 + \omega^2/\omega_p^2},\\
\angle\beta H(j\omega) &= -2\tan^{-1}\frac{\omega}{\omega_p}.
\end{aligned}
$$

Note that $|(1 + jx)^2| = |1 + jx|^2 = 1 + x^2$; the square of the factor gives $1 + x^2$, not $(1 + x^2)^2$ and not $\sqrt{1 + x^2}$.

### Step 2 — Phase condition: the crossover frequency

The *gain-crossover frequency* $\omega_u$ is where $|\beta H| = 1$. The *phase margin* is $\mathrm{PM} = 180° + \angle\beta H(j\omega_u)$. For PM = 60°:

$$
\begin{aligned}
180° - 2\tan^{-1}\frac{\omega_u}{\omega_p} &= 60°\\
2\tan^{-1}\frac{\omega_u}{\omega_p} &= 120°\\
\tan^{-1}\frac{\omega_u}{\omega_p} &= 60° .
\end{aligned}
$$

Each of the two identical poles must contribute exactly 60°. Taking the tangent:

$$\frac{\omega_u}{\omega_p} = \tan60° = \sqrt3 \quad\Longrightarrow\quad \omega_u = \sqrt3\,\omega_p \approx 1.73\,\omega_p .$$

### Step 3 — Magnitude condition: the loop gain

At $\omega_u$ the loop gain must have unit magnitude:

$$
\begin{aligned}
\frac{\beta A_0}{1 + (\omega_u/\omega_p)^2} &= 1\\
\frac{\beta A_0}{1 + (\sqrt3)^2} &= 1\\
\frac{\beta A_0}{1 + 3} &= 1\\
\beta A_0 &= 4 .
\end{aligned}
$$

### Step 4 — Why this is a maximum

The magnitude $\beta A_0/(1 + \omega^2/\omega_p^2)$ decreases steadily with $\omega$, so a larger $\beta A_0$ moves the crossover frequency *up*. At a higher $\omega_u$ the phase $-2\tan^{-1}(\omega_u/\omega_p)$ is more negative, so the phase margin is *smaller*. Hence

$$\mathrm{PM} \ge 60° \quad\Longleftrightarrow\quad \beta A_0 \le 4 .$$

For example, $\beta A_0 = 8$ gives $1 + (\omega_u/\omega_p)^2 = 8$, so $\omega_u = \sqrt7\,\omega_p$, a phase of $-2\tan^{-1}\sqrt7 = -138.6°$, and PM = 41.4°.

### Step 5 — Apply $\beta = 1$

With unity feedback, $\beta = 1$:

$$A_{0,max} = \frac{4}{\beta} = \frac{4}{1} = 4 .$$

**Comment on "unity".** With $A_0 = 4$ the actual closed-loop gain is

$$\frac{A_0}{1 + \beta A_0} = \frac{4}{1 + 4} = 0.8,$$

so "unity" refers to the nominal gain $1/\beta$. If instead one insists that the actual closed-loop gain equal exactly 1, then $A_0/(1 + \beta A_0) = 1$, i.e. $\beta = 1 - 1/A_0$ and $\beta A_0 = A_0 - 1$. The stability condition $\beta A_0 \le 4$ then becomes $A_0 - 1 \le 4$, i.e. $A_0 \le 5$ (with $\beta = 0.8$). The standard reading is $\beta = 1$.

**Intuition.** Two coincident poles give up to 180° of phase shift, and they reach 120° already at $\sqrt3\,\omega_p$. Because the magnitude has only fallen by a factor of 4 at that frequency, the loop gain cannot be larger than 4 without the crossover sliding into the region of excessive phase shift. A two-pole amplifier with coincident poles is therefore a poor op amp: a usable phase margin forces a very small gain, which is why such amplifiers need frequency compensation (pole splitting).

### Result

$$\omega_u = \sqrt3\,\omega_p, \qquad \beta A_0 = 4, \qquad A_{0,max} = 4 \quad(\beta = 1).$$

(If the actual closed-loop gain $A_0/(1 + \beta A_0)$ must be exactly 1, then $\beta = 0.8$ and $A_{0,max} = 5$.)

**Common mistake.** Giving each pole 30° instead of 60°. The phase margin is 60°, so the total phase at crossover is $-120°$ and each identical pole supplies half of that, 60°. Splitting the 60° *margin* between the poles puts the crossover at $\omega_p/\sqrt3$ and gives the wrong value $A_0 = 1 + 1/3 \approx 1.33$.

**Common mistake.** Placing the crossover at $\omega_p$. At $\omega_p$ the two poles contribute only $45° + 45° = 90°$ (PM = 90°), and the resulting $A_0 = 2$ is not the maximum for a 60° margin.

**Common mistake.** Using $\sqrt{1 + 3}$ (or $(1 + 3)^2$) as the magnitude factor. Each pole contributes $\sqrt{1 + (\omega/\omega_p)^2}$, and there are two of them, so the product is $1 + 3 = 4$.
