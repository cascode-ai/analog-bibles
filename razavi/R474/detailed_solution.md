# Detailed solution - R474

**Approach.** A closed-loop gain of unity means $\beta = 1$, so the loop gain is $A_0/(1 + j\omega/\omega_p)^2$. The 60° phase margin fixes the phase, and hence the frequency, of the gain crossover; requiring unit loop-gain magnitude there gives the largest allowed $A_0$.

### Step 1 — Loop gain

With a feedback factor $\beta$ (unity closed-loop gain means $\beta = 1$, the voltage-follower connection), the loop gain is

$$\beta H(j\omega) = \frac{\beta A_0}{\left(1 + j\omega/\omega_p\right)^2},$$

with

$$
\begin{aligned}
|\beta H(j\omega)| &= \frac{\beta A_0}{\left|1 + j\omega/\omega_p\right|^2} = \frac{\beta A_0}{1 + \omega^2/\omega_p^2},\\
\angle\beta H(j\omega) &= -2\tan^{-1}\frac{\omega}{\omega_p}.
\end{aligned}
$$

### Step 2 — Phase condition: the crossover frequency

At the gain crossover $\omega_u$, $\mathrm{PM} = 180° + \angle\beta H(j\omega_u) = 60°$:

$$
\begin{aligned}
180° - 2\tan^{-1}\frac{\omega_u}{\omega_p} &= 60°\\
2\tan^{-1}\frac{\omega_u}{\omega_p} &= 120°\\
\tan^{-1}\frac{\omega_u}{\omega_p} &= 60° .
\end{aligned}
$$

Each of the two identical poles contributes exactly 60°, so

$$\frac{\omega_u}{\omega_p} = \tan60° = \sqrt3 \quad\Longrightarrow\quad \omega_u = \sqrt3\,\omega_p \approx 1.73\,\omega_p .$$

### Step 3 — Magnitude condition: the loop gain

At $\omega_u$ the loop gain has unit magnitude:

$$
\begin{aligned}
\frac{\beta A_0}{1 + (\omega_u/\omega_p)^2} &= 1\\
\frac{\beta A_0}{1 + (\sqrt3)^2} &= 1\\
\frac{\beta A_0}{1 + 3} &= 1\\
\beta A_0 &= 4 .
\end{aligned}
$$

### Step 4 — Why this is a maximum

The magnitude $\beta A_0/(1 + \omega^2/\omega_p^2)$ falls steadily with $\omega$, so a larger $\beta A_0$ moves the crossover *up*, where $-2\tan^{-1}(\omega_u/\omega_p)$ is more negative and the phase margin is *smaller*:

$$\mathrm{PM} \ge 60° \quad\Longleftrightarrow\quad \beta A_0 \le 4 .$$

For example, $\beta A_0 = 8$ gives $1 + (\omega_u/\omega_p)^2 = 8$, so $\omega_u = \sqrt7\,\omega_p$, a phase of $-2\tan^{-1}\sqrt7 = -138.6°$, and PM = 41.4°.

### Step 5 — Apply $\beta = 1$

$$A_{0,max} = \frac{4}{\beta} = \frac{4}{1} = 4 .$$

**Comment on "unity".** With $A_0 = 4$ the actual closed-loop gain is

$$\frac{A_0}{1 + \beta A_0} = \frac{4}{1 + 4} = 0.8,$$

so "unity" refers to the nominal gain $1/\beta$. If the actual closed-loop gain must equal exactly 1, then $A_0/(1 + \beta A_0) = 1$, i.e. $\beta = 1 - 1/A_0$ and $\beta A_0 = A_0 - 1$; the condition $\beta A_0 \le 4$ becomes $A_0 - 1 \le 4$, i.e. $A_0 \le 5$ (with $\beta = 0.8$). The standard reading is $\beta = 1$.

Two coincident poles already reach 120° of phase shift at $\sqrt3\,\omega_p$, where the magnitude has fallen only by a factor of 4, so such an amplifier needs frequency compensation (pole splitting) to combine a usable phase margin with a large gain.

### Result

$$\omega_u = \sqrt3\,\omega_p, \qquad \beta A_0 = 4, \qquad A_{0,max} = 4 \quad(\beta = 1).$$

(If the actual closed-loop gain $A_0/(1 + \beta A_0)$ must be exactly 1, then $\beta = 0.8$ and $A_{0,max} = 5$.)

**Common mistake.** Giving each pole 30° instead of 60°: the total phase at crossover is $-120°$, so each identical pole supplies 60°. Splitting the 60° *margin* between the poles puts the crossover at $\omega_p/\sqrt3$ and gives the wrong value $A_0 = 1 + 1/3 \approx 1.33$.

**Common mistake.** Placing the crossover at $\omega_p$, where the two poles contribute only $45° + 45° = 90°$ (PM = 90°); the resulting $A_0 = 2$ is not the maximum for a 60° margin.

**Common mistake.** Using $\sqrt{1 + 3}$ (or $(1 + 3)^2$) as the magnitude factor. Each of the two poles contributes $\sqrt{1 + (\omega/\omega_p)^2}$, so the product is $1 + 3 = 4$.
