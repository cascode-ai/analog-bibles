# Detailed solution - R582

**Approach.** Model each closed switch as a noisy resistor. $M_1$ leaves a kT/C sample on $C_1$. While $M_2$ is on, its noise can only move charge *between* $C_1$ and $C_2$, so split the two capacitor voltages into their average (untouched by $M_2$) and their difference (re-randomized by $M_2$). Adding the uncorrelated variances gives a recursion for the output noise from one transfer to the next, solved for the first transfer and for the steady state.

### Step 1 — Noise on $C_1$ when $M_1$ turns off

A closed switch is a resistor $R_{on}$ with noise PSD $4kTR_{on}$; when it opens, the capacitor $C_x$ it drives holds one sample of variance $kT/C_x$, independent of $R_{on}$. All noise sources are zero-mean and uncorrelated, so variances add.

While CK is high, $M_1$ connects $C_1$ to $V_{in}$ (treated as noiseless), and full settling erases $C_1$'s old charge. When $M_1$ opens, $C_1$ holds $V_1 = V_{in} + n_1$ with

$$\overline{n_1^2} = \frac{kT}{C_1} = \frac{kT}{C},$$

a fresh value every cycle, uncorrelated with all earlier noise.

### Step 2 — What $M_2$'s noise can and cannot change

Just before $M_2$ turns on, $C_2$ holds the previous output $V_{2,old}$, whose noise $n_{2,old}$ has variance $\sigma_{old}^2$. With $M_1$ off (non-overlapping clocks), the circuit is a single loop through ground: $C_1$, $M_2$'s on-resistance $R_{on2}$ with its noise source, and $C_2$.

<!-- diagram: diagram-01.cir -->

Use the **average** and the **difference** of the capacitor voltages:

$$\bar V = \frac{V_1 + V_2}{2}, \qquad V_d = V_1 - V_2, \qquad\text{so}\qquad V_2 = \bar V - \frac{V_d}{2}.$$

**The average is fixed.** Any loop current leaves $C_1$ and enters $C_2$, so $dQ_1 = -dQ_2$, and with $C_1 = C_2 = C$ the total charge $C(V_1 + V_2)$, hence $\bar V$, cannot change:

$$\bar V = \frac{V_1 + V_{2,old}}{2} = V_{in}\text{-dependent signal} + \frac{n_1 + n_{2,old}}{2}.$$

$M_2$'s noise does not enter $\bar V$ at all.

**The difference is re-randomized.** Around the loop, $V_d$ is the voltage across $C_1$ and $C_2$ in series,

$$C_s = \frac{C_1C_2}{C_1 + C_2} = \frac{C\cdot C}{2C} = \frac{C}{2},$$

so the loop is a single $R_{on2}$ driving a single $C_s$. With full settling, the old value of $V_d$ decays away, and when $M_2$ opens $V_d$ is pure noise,

$$\overline{V_d^2} = \frac{kT}{C_s} = \frac{kT}{C/2} = \frac{2kT}{C},$$

generated only by $R_{on2}$ during this phase and therefore uncorrelated with $n_1$ and $n_{2,old}$.

### Step 3 — Output noise after $M_2$ turns off

When $M_2$ opens, the output is held at

$$V_{out} = V_2 = \bar V - \frac{V_d}{2} = (\text{signal}) + \frac{n_1}{2} + \frac{n_{2,old}}{2} - \frac{V_d}{2}.$$

The three noise terms are uncorrelated, and scaling by $a$ scales a variance by $a^2$:

$$
\begin{aligned}
\overline{\left(\tfrac{n_1}{2}\right)^2} &= \frac14\cdot\frac{kT}{C} = \frac{kT}{4C} &&\text{(from } M_1\text{)},\\
\overline{\left(\tfrac{n_{2,old}}{2}\right)^2} &= \frac14\,\sigma_{old}^2 &&\text{(memory of earlier cycles)},\\
\overline{\left(\tfrac{V_d}{2}\right)^2} &= \frac14\cdot\frac{2kT}{C} = \frac{kT}{2C} &&\text{(from } M_2\text{)}.
\end{aligned}
$$

Sum:

$$\sigma_{out}^2 = \frac{\sigma_{old}^2}{4} + \frac{kT}{4C} + \frac{kT}{2C} = \frac{\sigma_{old}^2}{4} + \frac{3kT}{4C}.$$

### Step 4 — First transfer

If $C_2$ starts noise-free ($\sigma_{old}^2 = 0$):

$$\overline{v_{n,out}^2}\Big|_{1st} = 0 + \frac{kT}{4C} + \frac{kT}{2C} = \frac{3kT}{4C}.$$

### Step 5 — Steady state after many cycles

With $\sigma_k^2$ the output variance after the $k$-th transfer,

$$\sigma_k^2 = \frac{\sigma_{k-1}^2}{4} + \frac{3kT}{4C}.$$

In steady state $\sigma_k^2 = \sigma_{k-1}^2 = \sigma^2$:

$$
\begin{aligned}
\sigma^2 &= \frac{\sigma^2}{4} + \frac{3kT}{4C}\\
\frac34\,\sigma^2 &= \frac34\cdot\frac{kT}{C}\\
\sigma^2 &= \frac{kT}{C}.
\end{aligned}
$$

Subtracting the fixed point, $\sigma_k^2 - kT/C = \tfrac14(\sigma_{k-1}^2 - kT/C)$, so starting from $\sigma_0^2 = 0$,

$$\sigma_k^2 = \frac{kT}{C}\left(1 - 4^{-k}\right).$$

| transfer $k$ | 1 | 2 | 3 | $\to\infty$ |
|---|---|---|---|---|
| $\sigma_k^2$ | $0.75\,kT/C$ | $0.9375\,kT/C$ | $0.984\,kT/C$ | $kT/C$ |

The memory term decays by a factor of 4 per cycle, so steady state is reached within a few cycles. Summing the geometric series $1 + \tfrac14 + \tfrac1{16} + \dots = \tfrac43$ splits the steady-state value:

- from $M_1$: $\dfrac{kT}{4C}\cdot\dfrac43 = \dfrac{kT}{3C}$;
- from $M_2$: $\dfrac{kT}{2C}\cdot\dfrac43 = \dfrac{2kT}{3C}$;
- total: $\dfrac{kT}{3C} + \dfrac{2kT}{3C} = \dfrac{kT}{C}$.

### Step 6 — Check: thermal equilibrium

In steady state the average $\bar V$ has variance

$$\frac{kT}{4C} + \frac{1}{4}\cdot\frac{kT}{C} = \frac{kT}{2C} = \frac{kT}{C_1 + C_2},$$

and the difference has variance $2kT/C = kT/C_s$: each independent mode carries $\tfrac12 kT$, and each capacitor holds $\overline{V^2} = \tfrac{kT}{2C} + \tfrac14\cdot\tfrac{2kT}{C} = \tfrac{kT}{C}$, exactly what a capacitor $C$ in equilibrium at temperature $T$ must hold.

### Result

The sampled noise held on $C_2$ after $M_2$ turns off obeys $\sigma_{out}^2 = \sigma_{old}^2/4 + 3kT/(4C)$, so

$$\overline{v_{n,out}^2} = \frac{kT}{C}\quad\text{(steady state, after many cycles; rms } \sqrt{kT/C}\text{)},$$

and $\overline{v_{n,out}^2} = 3kT/(4C)$ for the first transfer (with $C_2$ initially noise-free). The two contributions per transfer are $M_1$'s $kT/C$ on $C_1$, reduced to $kT/(4C)$ by the sharing, and $M_2$'s $2kT/C$ on the difference $V_1 - V_2$, which appears as $kT/(2C)$ at the output.

**Common mistake.** Treating the shared charge as a single capacitor $C_1 + C_2 = 2C$ and answering $kT/(2C)$. $M_2$ sits in series between the capacitors, so it sees $C_1$ and $C_2$ in series ($C/2$) and randomizes only the *difference* (variance $2kT/C$), while the *average* keeps the noise sampled by $M_1$.

**Common mistake.** Counting only one switch: $kT/(4C)$ from $M_1$ alone, or $kT/(2C)$ from $M_2$ alone. Both switches sample noise every cycle, and the old output noise is carried forward through the averaging.

**Common mistake.** Adding rms voltages, e.g. $\tfrac12\sqrt{kT/C} + \sqrt{kT/(2C)}$; independent noise sources add in power (variance), not amplitude.
