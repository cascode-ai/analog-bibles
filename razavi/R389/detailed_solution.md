# Detailed solution - R389

**Approach.** Each feedback stage trades gain for bandwidth with a constant gain–bandwidth product of $100\times10\ \mathrm{MHz} = 1$ GHz. Cascading $n$ identical single-pole stages multiplies the gains but shrinks the bandwidth by the factor $\sqrt{2^{1/n} - 1}$. Requiring a total gain of 500, we write the overall bandwidth as a function of $n$ and find the $n$ that maximizes it.

### Step 1 — One feedback stage: constant gain–bandwidth product

The open-loop amplifier has one pole:

$$A(s) = \frac{A_0}{1 + s/\omega_0}, \qquad A_0 = 100, \quad f_0 = \frac{\omega_0}{2\pi} = 10\ \mathrm{MHz}.$$

With feedback factor $\beta$ the closed-loop gain is $A/(1 + \beta A)$:

$$
\begin{aligned}
A_{cl}(s) &= \frac{\dfrac{A_0}{1 + s/\omega_0}}{1 + \dfrac{\beta A_0}{1 + s/\omega_0}} = \frac{A_0}{1 + s/\omega_0 + \beta A_0}\\
&= \frac{A_0/(1 + \beta A_0)}{1 + \dfrac{s}{(1 + \beta A_0)\,\omega_0}}.
\end{aligned}
$$

So each feedback stage is still single-pole, with

$$a = \frac{A_0}{1 + \beta A_0}, \qquad f_s = (1 + \beta A_0)\,f_0, \qquad a\,f_s = A_0f_0 = 100\times10\ \mathrm{MHz} = 1\ \mathrm{GHz}.$$

The gain–bandwidth product of every stage is fixed at 1 GHz, so a stage of gain $a$ has bandwidth $f_s = 1\ \mathrm{GHz}/a$. A stage cannot have more gain than the open-loop value, $a \le 100$; hence a single stage cannot provide the gain of 500.

### Step 2 — Bandwidth of a cascade of $n$ identical stages

With no loading between stages, the transfer functions multiply. For $n$ identical stages, the magnitude is

$$|H(f)| = \frac{a^n}{\left[1 + (f/f_s)^2\right]^{n/2}}.$$

The 3-dB bandwidth $f_{3dB}$ is where $|H|$ has dropped to $a^n/\sqrt2$:

$$
\begin{aligned}
\left[1 + (f_{3dB}/f_s)^2\right]^{n/2} &= \sqrt2 = 2^{1/2}\\
1 + (f_{3dB}/f_s)^2 &= 2^{1/n}\\
f_{3dB} &= f_s\sqrt{2^{1/n} - 1}.
\end{aligned}
$$

The factor $\sqrt{2^{1/n} - 1}$ is 1 for $n = 1$, 0.644 for $n = 2$, 0.510 for $n = 3$, and keeps falling: every stage contributes some roll-off at the edge of the band, so the cascade is narrower than any one stage.

### Step 3 — Overall bandwidth versus number of stages

The total gain must be 500, so each stage has

$$a = 500^{1/n}, \qquad f_s = \frac{1\ \mathrm{GHz}}{500^{1/n}}.$$

Substituting into Step 2:

$$f_{3dB}(n) = (1\ \mathrm{GHz})\cdot500^{-1/n}\cdot\sqrt{2^{1/n} - 1}.$$

**The trade-off.** More stages means less gain per stage, so each stage is wider ($500^{-1/n}$ grows toward 1). But more stages also means more shrinkage ($\sqrt{2^{1/n} - 1}$ falls toward 0). The product has a maximum.

**Example, $n = 12$:**

$$
\begin{aligned}
a &= 500^{1/12} = e^{6.2146/12} = e^{0.5179} = 1.678,\\
f_s &= 1\ \mathrm{GHz}/1.678 = 595.8\ \mathrm{MHz},\\
2^{1/12} - 1 &= 1.05946 - 1 = 0.05946, \qquad \sqrt{0.05946} = 0.2439,\\
f_{3dB} &= 595.8\ \mathrm{MHz}\times0.2439 = 145.3\ \mathrm{MHz}.
\end{aligned}
$$

**Table** (computed the same way):

| $n$ | gain per stage $a$ | $f_s$ (MHz) | $\sqrt{2^{1/n} - 1}$ | $f_{3dB}$ (MHz) |
|---|---|---|---|---|
| 1 | 500 (> 100, impossible) | — | 1 | — |
| 2 | 22.36 | 44.7 | 0.644 | 28.8 |
| 3 | 7.94 | 126.0 | 0.510 | 64.2 |
| 4 | 4.73 | 211.5 | 0.435 | 92.0 |
| 6 | 2.82 | 355.0 | 0.350 | 124.2 |
| 8 | 2.17 | 459.9 | 0.301 | 138.4 |
| 10 | 1.86 | 537.2 | 0.268 | 143.9 |
| 11 | 1.76 | 568.4 | 0.255 | 145.0 |
| **12** | **1.68** | **595.8** | **0.244** | **145.3** |
| 13 | 1.61 | 620.0 | 0.234 | 145.1 |
| 14 | 1.56 | 641.5 | 0.225 | 144.5 |
| 16 | 1.47 | 678.1 | 0.210 | 142.7 |

The maximum is at $n = 12$ (145.3 MHz), with $n = 13$ practically identical (145.1 MHz).

### Step 4 — Analytic estimate of the optimum

For large $n$, $2^{1/n} = e^{\ln2/n} \approx 1 + \ln2/n$, so $\sqrt{2^{1/n} - 1} \approx \sqrt{\ln2/n}$. Express everything in terms of the per-stage gain $a$, using $n = \ln500/\ln a$:

$$f_{3dB} \approx \frac{1\ \mathrm{GHz}}{a}\sqrt{\frac{\ln2\,\ln a}{\ln500}} \;\propto\; \sqrt{\frac{\ln a}{a^2}} .$$

Maximize $g(a) = \ln a/a^2$:

$$g'(a) = \frac{(1/a)\,a^2 - 2a\ln a}{a^4} = \frac{1 - 2\ln a}{a^3} = 0 \quad\Longrightarrow\quad \ln a = \frac12, \quad a = \sqrt{e} \approx 1.65 .$$

Then $n = \ln500/\ln a = 2\ln500 = 2\times6.215 \approx 12.4$, which agrees with the table.

**Practical note.** The optimum is very flat: 8 stages already give 138 MHz, 95 % of the maximum, with a third fewer amplifiers. In practice one might accept slightly less bandwidth for a much simpler chain.

### Result

Use about **12 stages** (13 is practically the same), each with a closed-loop gain of $500^{1/12} \approx 1.68$ (1.61 for 13 stages) and a bandwidth of $1\ \mathrm{GHz}/1.68 \approx 596$ MHz. The overall bandwidth is

$$f_{3dB} = \frac{1\ \mathrm{GHz}}{500^{1/n}}\sqrt{2^{1/n} - 1}\bigg|_{n = 12} \approx 145\ \mathrm{MHz}.$$

The governing relations are the constant gain–bandwidth product per stage ($a f_s = 1$ GHz) and the cascade shrinkage $f_{3dB} = f_s\sqrt{2^{1/n} - 1}$; for large $n$ the optimum per-stage gain is $\sqrt e \approx 1.65$.

**Common mistake.** Taking the bandwidth of the cascade equal to that of one stage. Each single-pole stage is already 3 dB down at $f_s$, so $n$ of them together are $3n$ dB down there; the cascade bandwidth is only $\sqrt{2^{1/n} - 1}$ times $f_s$.

**Common mistake.** Choosing two stages of gain $\sqrt{500} \approx 22.4$, or one stage of gain 500. One stage is impossible (its gain cannot exceed the open-loop 100), and two stages give only about 29 MHz, five times less than the optimum.

**Common mistake.** Concluding that "more stages are always better" because each stage gets wider. Beyond about 12 stages, the extra shrinkage from cascading outweighs the gain in per-stage bandwidth, and the overall bandwidth falls again.
