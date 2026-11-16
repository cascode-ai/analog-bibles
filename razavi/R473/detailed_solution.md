# Detailed solution - R473

**Approach.** With $\beta = 1$ the loop gain is the amplifier's transfer function. The 60° phase margin fixes the phase at the gain crossover, which gives the crossover frequency $f_u$; requiring the loop-gain magnitude to be 1 at $f_u$ then gives $A_0$.

### Step 1 — Loop gain of the unity-gain loop

With $f_{p1} = 10$ MHz, $f_{p2} = 500$ MHz and $\beta = 1$, the loop gain is

$$H(jf) = \frac{A_0}{\left(1 + j\dfrac{f}{f_{p1}}\right)\left(1 + j\dfrac{f}{f_{p2}}\right)} ,$$

with

$$
\begin{aligned}
|H(jf)| &= \frac{A_0}{\sqrt{1 + (f/f_{p1})^2}\,\sqrt{1 + (f/f_{p2})^2}},\\
\angle H(jf) &= -\tan^{-1}\frac{f}{f_{p1}} - \tan^{-1}\frac{f}{f_{p2}} .
\end{aligned}
$$

At the gain crossover $f_u$, $|H(jf_u)| = 1$, and $\mathrm{PM} = 180° + \angle H(jf_u)$.

### Step 2 — Phase condition: find the crossover frequency

PM = 60° means

$$
\begin{aligned}
180° + \angle H(jf_u) &= 60°\\
\angle H(jf_u) &= -120°\\
\tan^{-1}\frac{f_u}{f_{p1}} + \tan^{-1}\frac{f_u}{f_{p2}} &= 120° .
\end{aligned}
$$

With $x = f_u/f_{p1} = f_u/10$ and $y = f_u/f_{p2} = f_u/500$ ($f_u$ in MHz), take the tangent of both sides, using $\tan(a + b) = (\tan a + \tan b)/(1 - \tan a\tan b)$ and $\tan 120° = -\sqrt3$:

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

The positive root is

$$f_u = \frac{294.45 + \sqrt{294.45^2 + 4\times5000}}{2} = \frac{294.45 + \sqrt{86\,700 + 20\,000}}{2} = \frac{294.45 + 326.65}{2} = 310.5\ \mathrm{MHz}.$$

**Check.** With $x = 31.05$ and $y = 0.621$:

$$\tan^{-1}(31.05) = 88.16°, \qquad \tan^{-1}(0.621) = 31.84°, \qquad \text{sum} = 120.00°.\ \checkmark$$

Since $xy = 19.3 > 1$, the angle sum lies between 90° and 180°, so this root is the 120° solution and not $-60°$, which has the same tangent.

The first pole, 31 times below $f_u$, already contributes almost its full 90°, so the 60° margin mainly limits the second pole to about 30° (here 31.8°), which keeps $f_u$ well below 500 MHz.

### Step 3 — Magnitude condition: find $A_0$

$$\frac{A_0}{\sqrt{1 + x^2}\,\sqrt{1 + y^2}} = 1 \quad\Longrightarrow\quad A_0 = \sqrt{1 + x^2}\,\sqrt{1 + y^2},$$

with

$$
\begin{aligned}
\sqrt{1 + x^2} &= \sqrt{1 + 31.05^2} = \sqrt{1 + 964.4} = \sqrt{965.4} = 31.07,\\
\sqrt{1 + y^2} &= \sqrt{1 + 0.621^2} = \sqrt{1 + 0.386} = \sqrt{1.386} = 1.177 .
\end{aligned}
$$

Therefore

$$A_0 = 31.07\times1.177 = 36.6 .$$

A larger $A_0$ would push the crossover above 310.5 MHz, where the phase is more negative, and the phase margin would drop below 60°. The closed-loop gain is then $A_0/(1 + A_0) = 36.6/37.6 = 0.973$, close to the intended value of 1.

### Step 4 — The common quick approximation

Assuming the first pole contributes exactly 90° at $f_u$ ($f_u \gg f_{p1}$) and $\sqrt{1 + x^2} \approx x$, the second pole must contribute exactly 30°:

$$f_u \approx f_{p2}\tan30° = 500\ \mathrm{MHz}\times0.5774 = 288.7\ \mathrm{MHz},$$

$$A_0 \approx \frac{f_u}{f_{p1}}\sqrt{1 + \left(\frac{f_u}{f_{p2}}\right)^2} = 28.87\times\sqrt{1 + \tfrac13} = 28.87\times1.155 = 33.3 .$$

This is about 10 % low: the first pole actually contributes 88.2°, not 90°, so the second pole is allowed 31.8° instead of 30°, which moves the crossover up to 310.5 MHz and raises $A_0$.

### Result

$$A_0 \approx 36.6,$$

with the gain crossover at $f_u \approx 310.5$ MHz, where the two poles contribute $88.2° + 31.8° = 120°$ of phase shift (PM = 60°). The cruder approximation that the first pole contributes exactly 90° gives $f_u \approx 289$ MHz and $A_0 \approx 33$.

**Common mistake.** Reading "PM = 60°" as "the loop phase is $-60°$ at crossover". The phase at $f_u$ must be $-120°$; the wrong condition puts the crossover near 16 MHz and gives $A_0 \approx 1.9$, far too small.

**Common mistake.** Approximating the crossover as $f_u \approx 289$ MHz and then also dropping the second pole's magnitude factor, i.e. $A_0 \approx f_u/f_{p1} = 28.9$. At $f_u$ the second pole already reduces the loop gain by a factor of 1.15–1.18, which must be included.
