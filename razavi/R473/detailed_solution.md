# Detailed solution - R473

**Approach.** In unity-gain feedback the feedback factor is $\beta = 1$, so the loop gain equals the amplifier's transfer function. A phase margin of 60° fixes the phase at the gain-crossover frequency; we first solve that phase condition for the crossover frequency $f_u$, and then require the loop-gain magnitude to be exactly 1 at $f_u$, which gives $A_0$.

### Step 1 — Loop gain of the unity-gain loop

The amplifier has a low-frequency gain $A_0$ and two real poles, $f_{p1} = 10$ MHz and $f_{p2} = 500$ MHz:

$$H(jf) = \frac{A_0}{\left(1 + j\dfrac{f}{f_{p1}}\right)\left(1 + j\dfrac{f}{f_{p2}}\right)} .$$

In a unity-gain feedback loop the whole output is fed back to the input, so $\beta = 1$ and the loop gain is $\beta H = H$.

Its magnitude and phase are

$$
\begin{aligned}
|H(jf)| &= \frac{A_0}{\sqrt{1 + (f/f_{p1})^2}\,\sqrt{1 + (f/f_{p2})^2}},\\
\angle H(jf) &= -\tan^{-1}\frac{f}{f_{p1}} - \tan^{-1}\frac{f}{f_{p2}} .
\end{aligned}
$$

**Definitions.** The *gain-crossover frequency* $f_u$ is the frequency at which $|\beta H| = 1$. The *phase margin* (PM) is how far the loop phase at $f_u$ is from $-180°$:

$$\mathrm{PM} = 180° + \angle \beta H(jf_u).$$

### Step 2 — Phase condition: find the crossover frequency

PM = 60° means

$$
\begin{aligned}
180° + \angle H(jf_u) &= 60°\\
\angle H(jf_u) &= -120°\\
\tan^{-1}\frac{f_u}{f_{p1}} + \tan^{-1}\frac{f_u}{f_{p2}} &= 120° .
\end{aligned}
$$

Write $x = f_u/f_{p1} = f_u/10$ and $y = f_u/f_{p2} = f_u/500$, with $f_u$ in MHz. Take the tangent of both sides using $\tan(a + b) = (\tan a + \tan b)/(1 - \tan a\tan b)$ and $\tan 120° = -\sqrt3$:

$$\frac{x + y}{1 - xy} = -\sqrt3 .$$

Substitute $x + y = f_u\left(\tfrac{1}{10} + \tfrac{1}{500}\right) = 0.102\,f_u$ and $xy = f_u^2/5000$:

$$
\begin{aligned}
0.102\,f_u &= -\sqrt3\left(1 - \frac{f_u^2}{5000}\right)\\
0.102\,f_u &= -\sqrt3 + \frac{\sqrt3}{5000}f_u^2\\
f_u^2 - \frac{0.102\times5000}{\sqrt3}f_u - 5000 &= 0\\
f_u^2 - 294.45\,f_u - 5000 &= 0 .
\end{aligned}
$$

Quadratic formula, keeping the positive root (a frequency is positive):

$$f_u = \frac{294.45 + \sqrt{294.45^2 + 4\times5000}}{2} = \frac{294.45 + \sqrt{86\,700 + 20\,000}}{2} = \frac{294.45 + 326.65}{2} = 310.5\ \mathrm{MHz}.$$

**Check (and branch check).** $x = 31.05$ and $y = 0.621$:

$$\tan^{-1}(31.05) = 88.16°, \qquad \tan^{-1}(0.621) = 31.84°, \qquad \text{sum} = 120.00°.\ \checkmark$$

Because $xy = 19.3 > 1$, the angle sum lies between 90° and 180°, so this root really is the 120° solution (and not $-60°$, which has the same tangent).

**Intuition.** The first pole is 31 times below $f_u$, so it already contributes almost its full 90°. The 60° margin is then mostly a statement about the *second* pole: it may add only about 30° (here 31.8°), which forces $f_u$ to lie well below 500 MHz.

### Step 3 — Magnitude condition: find $A_0$

At $f_u$ the loop-gain magnitude must equal 1:

$$\frac{A_0}{\sqrt{1 + x^2}\,\sqrt{1 + y^2}} = 1 \quad\Longrightarrow\quad A_0 = \sqrt{1 + x^2}\,\sqrt{1 + y^2}.$$

Each factor:

$$
\begin{aligned}
\sqrt{1 + x^2} &= \sqrt{1 + 31.05^2} = \sqrt{1 + 964.4} = \sqrt{965.4} = 31.07,\\
\sqrt{1 + y^2} &= \sqrt{1 + 0.621^2} = \sqrt{1 + 0.386} = \sqrt{1.386} = 1.177 .
\end{aligned}
$$

Therefore

$$A_0 = 31.07\times1.177 = 36.6 .$$

Any larger $A_0$ would push the crossover above 310.5 MHz, where the phase is more negative, and the phase margin would drop below 60°.

### Step 4 — The common quick approximation

A frequently used shortcut assumes the first pole contributes exactly 90° at $f_u$ (since $f_u \gg f_{p1}$) and that $\sqrt{1 + x^2} \approx x$. The second pole must then contribute exactly 30°:

$$f_u \approx f_{p2}\tan30° = 500\ \mathrm{MHz}\times0.5774 = 288.7\ \mathrm{MHz},$$

$$A_0 \approx \frac{f_u}{f_{p1}}\sqrt{1 + \left(\frac{f_u}{f_{p2}}\right)^2} = 28.87\times\sqrt{1 + \tfrac13} = 28.87\times1.155 = 33.3 .$$

This is about 10 % low. The first pole actually contributes 88.2°, not 90°, so the second pole is allowed 31.8° instead of 30°, which moves the crossover up to 310.5 MHz and raises $A_0$. The exact phase condition of Step 2 should be preferred when the problem asks to "calculate".

**Side note.** With $A_0 = 36.6$ the closed-loop gain is $A_0/(1 + A_0) = 36.6/37.6 = 0.973$, close to the intended value of 1.

### Result

$$A_0 \approx 36.6,$$

with the gain crossover at $f_u \approx 310.5$ MHz, where the two poles contribute $88.2° + 31.8° = 120°$ of phase shift (PM = 60°). The cruder approximation that the first pole contributes exactly 90° gives $f_u \approx 289$ MHz and $A_0 \approx 33$.

**Common mistake.** Reading "PM = 60°" as "the loop phase is $-60°$ at crossover". The phase margin is the distance *from* $-180°$, so the phase at $f_u$ must be $-120°$. The wrong condition puts the crossover near 16 MHz and gives $A_0 \approx 1.9$, far too small.

**Common mistake.** Approximating the crossover as $f_u \approx 289$ MHz and then also dropping the second pole's magnitude factor, i.e. $A_0 \approx f_u/f_{p1} = 28.9$. At $f_u$ the second pole already reduces the loop gain by a factor of 1.15–1.18, which must be included.

**Common mistake.** Using a feedback factor other than 1. In a unity-gain (voltage-follower) configuration the entire output is fed back, so $\beta = 1$ and the loop gain is the amplifier gain itself.
