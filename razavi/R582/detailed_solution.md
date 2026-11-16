# Detailed solution - R582

**Approach.** Model each closed switch as a resistor with thermal noise. $M_1$ leaves a kT/C sample on $C_1$. While $M_2$ is on, its noise can only move charge *between* $C_1$ and $C_2$, so we split the two capacitor voltages into their average (untouched by $M_2$) and their difference (re-randomized by $M_2$). Adding the uncorrelated variances gives a recursion for the output noise from one transfer to the next, which we solve for the first transfer and for the steady state.

### Step 1 — Noise model of a switch and the basic kT/C result

A switch that is on behaves as a resistor $R_{on}$. Its thermal noise is a voltage source in series with it, with one-sided power spectral density (PSD)

$$\overline{V_R^2} = 4kTR_{on}\quad(\mathrm{V^2/Hz}),$$

where $k$ is Boltzmann's constant and $T$ the absolute temperature.

**Single RC.** If the switch connects a source to a capacitor $C_x$, the noise is low-pass filtered by $H(f) = 1/(1 + j2\pi fR_{on}C_x)$. The total mean-square voltage on the capacitor is

$$
\begin{aligned}
\overline{V_{n}^2} &= \int_0^\infty 4kTR_{on}\,\frac{df}{1 + (2\pi fR_{on}C_x)^2}\\
&= 4kTR_{on}\cdot\frac{1}{2\pi R_{on}C_x}\cdot\frac{\pi}{2}\\
&= 4kTR_{on}\cdot\frac{1}{4R_{on}C_x} = \frac{kT}{C_x}.
\end{aligned}
$$

$R_{on}$ cancels: a larger resistance makes more noise but filters it to a narrower bandwidth. When the switch opens, the capacitor keeps (samples) one random value of this noise, with variance $kT/C_x$.

All noise sources are zero-mean and uncorrelated, so we track **variances** (mean-square values), which add.

### Step 2 — Noise on $C_1$ when $M_1$ turns off

While CK is high, $M_1$ connects $C_1$ to $V_{in}$ and every phase settles fully. Two consequences:

- whatever was on $C_1$ before (its old charge) is completely erased;
- when $M_1$ opens, $C_1$ holds $V_1 = V_{in} + n_1$ with

$$\overline{n_1^2} = \frac{kT}{C_1} = \frac{kT}{C}.$$

Because $C_1$ is fully reset each cycle, $n_1$ is a fresh random value every cycle, uncorrelated with all earlier noise. (The input $V_{in}$ is treated as noiseless, so only the switch noise matters.)

### Step 3 — What $M_2$'s noise can and cannot change

Just before $M_2$ turns on, $C_1$ holds $V_1 = V_{in} + n_1$ and $C_2$ holds the previous output $V_{2,old}$, whose noise $n_{2,old}$ has variance $\sigma_{old}^2$. $M_1$ is off (non-overlapping clocks), so while $M_2$ is on the circuit is just $C_1$ and $C_2$ connected by $M_2$'s on-resistance $R_{on2}$, with its noise source in series. All three elements form a single loop through ground.

<!-- diagram: diagram-01.cir -->

Rewrite the two capacitor voltages as an **average** and a **difference**:

$$\bar V = \frac{V_1 + V_2}{2}, \qquad V_d = V_1 - V_2, \qquad\text{so}\qquad V_2 = \bar V - \frac{V_d}{2}.$$

**The average is fixed.** Any current $i$ in the loop leaves $C_1$ and enters $C_2$, so $dQ_1 = -dQ_2$. With $C_1 = C_2 = C$ the total charge $C(V_1 + V_2)$, and hence $\bar V$, cannot change. Therefore

$$\bar V = \frac{V_1 + V_{2,old}}{2} = V_{in}\text{-dependent signal} + \frac{n_1 + n_{2,old}}{2}.$$

$M_2$'s noise does not enter $\bar V$ at all.

**The difference is re-randomized.** Going around the loop, $V_d$ is the voltage across $C_1$ and $C_2$ in series, i.e. across

$$C_s = \frac{C_1C_2}{C_1 + C_2} = \frac{C\cdot C}{2C} = \frac{C}{2}.$$

The loop is therefore a single resistor $R_{on2}$ driving a single capacitor $C_s$, exactly the RC of Step 1. With full settling, the old value of $V_d$ decays away, and at the instant $M_2$ opens $V_d$ is pure noise:

$$\overline{V_d^2} = \frac{kT}{C_s} = \frac{kT}{C/2} = \frac{2kT}{C}.$$

It is generated only by $R_{on2}$ during this phase, so it is uncorrelated with $n_1$ and $n_{2,old}$.

### Step 4 — Output noise after $M_2$ turns off

When $M_2$ opens, the output is held at

$$V_{out} = V_2 = \bar V - \frac{V_d}{2} = (\text{signal}) + \frac{n_1}{2} + \frac{n_{2,old}}{2} - \frac{V_d}{2}.$$

The three noise terms are uncorrelated, so their variances add. A noise term multiplied by a constant $a$ has its variance multiplied by $a^2$:

$$
\begin{aligned}
\overline{\left(\tfrac{n_1}{2}\right)^2} &= \frac14\cdot\frac{kT}{C} = \frac{kT}{4C} &&\text{(from } M_1\text{)},\\
\overline{\left(\tfrac{n_{2,old}}{2}\right)^2} &= \frac14\,\sigma_{old}^2 &&\text{(memory of earlier cycles)},\\
\overline{\left(\tfrac{V_d}{2}\right)^2} &= \frac14\cdot\frac{2kT}{C} = \frac{kT}{2C} &&\text{(from } M_2\text{)}.
\end{aligned}
$$

Sum:

$$\sigma_{out}^2 = \frac{\sigma_{old}^2}{4} + \frac{kT}{4C} + \frac{kT}{2C} = \frac{\sigma_{old}^2}{4} + \frac{3kT}{4C}.$$

### Step 5 — First transfer

If $C_2$ starts noise-free ($\sigma_{old}^2 = 0$), the first transfer gives

$$\overline{v_{n,out}^2}\Big|_{1st} = 0 + \frac{kT}{4C} + \frac{kT}{2C} = \frac{3kT}{4C}.$$

### Step 6 — Steady state after many cycles

Write the recursion with $\sigma_k^2$ the output variance after the $k$-th transfer:

$$\sigma_k^2 = \frac{\sigma_{k-1}^2}{4} + \frac{3kT}{4C}.$$

**Fixed point.** In steady state $\sigma_k^2 = \sigma_{k-1}^2 = \sigma^2$:

$$
\begin{aligned}
\sigma^2 &= \frac{\sigma^2}{4} + \frac{3kT}{4C}\\
\frac34\,\sigma^2 &= \frac34\cdot\frac{kT}{C}\\
\sigma^2 &= \frac{kT}{C}.
\end{aligned}
$$

**Approach to it.** Subtracting the fixed point, $\sigma_k^2 - kT/C = \tfrac14(\sigma_{k-1}^2 - kT/C)$. Starting from $\sigma_0^2 = 0$:

$$\sigma_k^2 = \frac{kT}{C}\left(1 - 4^{-k}\right):$$

| transfer $k$ | 1 | 2 | 3 | $\to\infty$ |
|---|---|---|---|---|
| $\sigma_k^2$ | $0.75\,kT/C$ | $0.9375\,kT/C$ | $0.984\,kT/C$ | $kT/C$ |

The memory term decays by a factor of 4 per cycle, so the output reaches steady state within a few cycles.

**Breakdown of the steady-state value.** Summing the geometric series $1 + \tfrac14 + \tfrac1{16} + \dots = \tfrac43$:

- from $M_1$: $\dfrac{kT}{4C}\cdot\dfrac43 = \dfrac{kT}{3C}$;
- from $M_2$: $\dfrac{kT}{2C}\cdot\dfrac43 = \dfrac{2kT}{3C}$;
- total: $\dfrac{kT}{3C} + \dfrac{2kT}{3C} = \dfrac{kT}{C}$.

### Step 7 — Physical check (equipartition)

In steady state the average $\bar V$ has variance

$$\frac{kT}{4C} + \frac{1}{4}\cdot\frac{kT}{C} = \frac{kT}{2C} = \frac{kT}{C_1 + C_2},$$

and the difference has variance $2kT/C = kT/C_s$. So at the moment $M_2$ opens, the pair of capacitors is in thermal equilibrium: each independent "mode" carries its $\tfrac12 kT$ of energy, and each capacitor separately holds $\overline{V^2} = \tfrac{kT}{2C} + \tfrac14\cdot\tfrac{2kT}{C} = \tfrac{kT}{C}$. The answer kT/C is exactly what a capacitor $C$ in equilibrium at temperature $T$ must hold, which confirms the bookkeeping.

### Result

The sampled noise held on $C_2$ after $M_2$ turns off obeys $\sigma_{out}^2 = \sigma_{old}^2/4 + 3kT/(4C)$, so

$$\overline{v_{n,out}^2} = \frac{kT}{C}\quad\text{(steady state, after many cycles; rms } \sqrt{kT/C}\text{)},$$

and $\overline{v_{n,out}^2} = 3kT/(4C)$ for the first transfer (with $C_2$ initially noise-free). The two contributions per transfer are $M_1$'s $kT/C$ on $C_1$, reduced to $kT/(4C)$ by the sharing, and $M_2$'s $2kT/C$ on the difference $V_1 - V_2$, which appears as $kT/(2C)$ at the output.

**Common mistake.** Treating the shared charge as a single capacitor of value $C_1 + C_2 = 2C$ and answering $kT/(2C)$. $M_2$ does not sample onto $2C$; it is in series between the two capacitors, so it sees $C_1$ and $C_2$ in series ($C/2$) and randomizes the *difference* with variance $2kT/C$, while the *average* keeps the noise already sampled by $M_1$.

**Common mistake.** Counting only one switch: $kT/(4C)$ from $M_1$ alone, or $kT/(2C)$ from $M_2$ alone. Both switches sample thermal noise every cycle, and the old output noise is also carried forward through the averaging.

**Common mistake.** Adding rms voltages, e.g. $\tfrac12\sqrt{kT/C} + \sqrt{kT/(2C)}$. Independent noise sources add in **power** (variance), never in amplitude.
