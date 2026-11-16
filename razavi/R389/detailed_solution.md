# Detailed solution - R389

**Approach.** Each feedback stage trades gain for bandwidth at a constant gain–bandwidth product of $100\times10\ \mathrm{MHz} = 1$ GHz. Cascading $n$ identical single-pole stages multiplies the gains but shrinks the bandwidth by $\sqrt{2^{1/n} - 1}$. With a total gain of 500, write the overall bandwidth as a function of $n$ and maximize it.

### Step 1 — One feedback stage: constant gain–bandwidth product

With $A_0 = 100$ and $f_0 = 10$ MHz, closing the loop keeps a single pole and scales gain down and bandwidth up by $1 + \beta A_0$:

$$a = \frac{A_0}{1 + \beta A_0}, \qquad f_s = (1 + \beta A_0)\,f_0, \qquad a\,f_s = A_0f_0 = 100\times10\ \mathrm{MHz} = 1\ \mathrm{GHz}.$$

So a stage of gain $a$ has bandwidth $f_s = 1\ \mathrm{GHz}/a$, and $a \le 100$: a single stage cannot provide the gain of 500.

### Step 2 — Bandwidth of a cascade of $n$ identical stages

With no loading, the transfer functions multiply:

$$|H(f)| = \frac{a^n}{\left[1 + (f/f_s)^2\right]^{n/2}}.$$

At $f_{3dB}$, $|H| = a^n/\sqrt2$:

$$
\begin{aligned}
\left[1 + (f_{3dB}/f_s)^2\right]^{n/2} &= \sqrt2 = 2^{1/2}\\
1 + (f_{3dB}/f_s)^2 &= 2^{1/n}\\
f_{3dB} &= f_s\sqrt{2^{1/n} - 1}.
\end{aligned}
$$

The factor $\sqrt{2^{1/n} - 1}$ is 1 for $n = 1$, 0.644 for $n = 2$, 0.510 for $n = 3$, and keeps falling, since every stage adds roll-off at the band edge.

### Step 3 — Overall bandwidth versus number of stages

A total gain of 500 requires

$$a = 500^{1/n}, \qquad f_s = \frac{1\ \mathrm{GHz}}{500^{1/n}},$$

so

$$f_{3dB}(n) = (1\ \mathrm{GHz})\cdot500^{-1/n}\cdot\sqrt{2^{1/n} - 1}.$$

More stages make each stage wider ($500^{-1/n} \to 1$) but shrink the cascade more ($\sqrt{2^{1/n} - 1} \to 0$), so the product has a maximum.

**Example, $n = 12$:**

$$
\begin{aligned}
a &= 500^{1/12} = e^{6.2146/12} = e^{0.5179} = 1.678,\\
f_s &= 1\ \mathrm{GHz}/1.678 = 595.8\ \mathrm{MHz},\\
2^{1/12} - 1 &= 1.05946 - 1 = 0.05946, \qquad \sqrt{0.05946} = 0.2439,\\
f_{3dB} &= 595.8\ \mathrm{MHz}\times0.2439 = 145.3\ \mathrm{MHz}.
\end{aligned}
$$

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

For large $n$, $2^{1/n} = e^{\ln2/n} \approx 1 + \ln2/n$, so $\sqrt{2^{1/n} - 1} \approx \sqrt{\ln2/n}$. With $n = \ln500/\ln a$:

$$f_{3dB} \approx \frac{1\ \mathrm{GHz}}{a}\sqrt{\frac{\ln2\,\ln a}{\ln500}} \;\propto\; \sqrt{\frac{\ln a}{a^2}} .$$

Maximizing $g(a) = \ln a/a^2$:

$$g'(a) = \frac{(1/a)\,a^2 - 2a\ln a}{a^4} = \frac{1 - 2\ln a}{a^3} = 0 \quad\Longrightarrow\quad \ln a = \frac12, \quad a = \sqrt{e} \approx 1.65 .$$

Then $n = \ln500/\ln a = 2\ln500 = 2\times6.215 \approx 12.4$, in agreement with the table.

The optimum is very flat: 8 stages already give 138 MHz, 95 % of the maximum, with a third fewer amplifiers.

### Result

Use about **12 stages** (13 is practically the same), each with a closed-loop gain of $500^{1/12} \approx 1.68$ (1.61 for 13 stages) and a bandwidth of $1\ \mathrm{GHz}/1.68 \approx 596$ MHz. The overall bandwidth is

$$f_{3dB} = \frac{1\ \mathrm{GHz}}{500^{1/n}}\sqrt{2^{1/n} - 1}\bigg|_{n = 12} \approx 145\ \mathrm{MHz}.$$

The governing relations are the constant gain–bandwidth product per stage ($a f_s = 1$ GHz) and the cascade shrinkage $f_{3dB} = f_s\sqrt{2^{1/n} - 1}$; for large $n$ the optimum per-stage gain is $\sqrt e \approx 1.65$.

**Common mistake.** Taking the cascade bandwidth equal to that of one stage. $n$ single-pole stages are $3n$ dB down at $f_s$, so the cascade bandwidth is only $\sqrt{2^{1/n} - 1}$ times $f_s$.

**Common mistake.** Choosing two stages of gain $\sqrt{500} \approx 22.4$, or one stage of gain 500. One stage is impossible (gain above the open-loop 100), and two stages give only about 29 MHz, five times less than the optimum.

**Common mistake.** Concluding that "more stages are always better". Beyond about 12 stages the extra cascade shrinkage outweighs the wider stages, and the overall bandwidth falls again.
