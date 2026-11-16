# Detailed solution - R559

**Approach.** Derive the phase-2 output for an arbitrary current ratio, using charge conservation at the op amp's inverting input. Then substitute the actual ratio $I_2/I_1 = r + \epsilon$ and expand the logarithms to first order in $\epsilon$, which separates the nominal output from the error.

### Step 1 — Phase 1: what is stored

Call the op amp's inverting input node N. It connects to ground through $C_2$, to $V_{out}$ through $C_1$, and to $V_{out}$ through $S_1$.

With $S_1$ on and $S_2$ off:

- $Q_1$ carries only $I_1$. From the bipolar law $I_C = I_S\exp(V_{EB}/V_T)$, with the base grounded and base current neglected,
$$V_X = V_{EB}(I_1) = V_T\ln\frac{I_1}{I_S}.$$
- $S_1$ makes the op amp a unity-gain follower: $V_N = V_{out} = V_{EB}(I_1)$.
- $C_1$ is shorted (zero voltage). $C_2$ stores $V_{EB}(I_1)$, so node N holds the charge $Q_N = C_2V_{EB}(I_1)$.

### Step 2 — Phase 2: the new voltage at X

With $S_1$ off and $S_2$ on, $Q_1$ carries $I_1 + I_2$:

$$V_X' = V_{EB}(I_1 + I_2) = V_T\ln\frac{I_1 + I_2}{I_S}.$$

The step of $V_X$ is

$$V_X' - V_{EB}(I_1) = V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S} = V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

$I_S$ cancels, but the current *ratio* does not. Any error in $I_2/I_1$ goes straight into this PTAT step.

### Step 3 — Phase 2: charge conservation gives the output

The ideal op amp (feedback now through $C_1$) holds $V_N' = V_X'$. With $S_1$ open, N has no dc path, so its charge is conserved:

$$C_2V_X' + C_1\left(V_X' - V_{out}'\right) = C_2V_{EB}(I_1).$$

Solve for $V_{out}'$:

$$
\begin{aligned}
C_1V_{out}' &= C_2V_X' + C_1V_X' - C_2V_{EB}(I_1)\\
V_{out}' &= V_X' + \frac{C_2}{C_1}\left[V_X' - V_{EB}(I_1)\right]\\
&= V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).
\end{aligned}
$$

### Step 4 — Insert the actual current ratio

Now $I_2 = (r + \epsilon)I_1$, so $I_1 + I_2 = I_1(1 + r + \epsilon)$ and $1 + I_2/I_1 = 1 + r + \epsilon$. The exact output is

$$V_{out} = V_T\ln\frac{I_1(1 + r + \epsilon)}{I_S} + \frac{C_2}{C_1}V_T\ln(1 + r + \epsilon).$$

The ratio error appears **twice**: in the junction voltage (the transistor now carries a slightly different current) and in the amplified PTAT term.

### Step 5 — First-order expansion in $\epsilon$

Factor out the nominal value inside the logarithm:

$$\ln(1 + r + \epsilon) = \ln\left[(1 + r)\left(1 + \frac{\epsilon}{1 + r}\right)\right] = \ln(1 + r) + \ln\left(1 + \frac{\epsilon}{1 + r}\right).$$

For a small error, $|\epsilon| \ll 1 + r$, use $\ln(1 + x) \approx x$:

$$\ln(1 + r + \epsilon) \approx \ln(1 + r) + \frac{\epsilon}{1 + r}.$$

Apply this to both terms of $V_{out}$:

$$
\begin{aligned}
V_{out} &\approx \left[V_T\ln\frac{I_1(1 + r)}{I_S} + V_T\frac{\epsilon}{1 + r}\right] + \frac{C_2}{C_1}\left[V_T\ln(1 + r) + V_T\frac{\epsilon}{1 + r}\right]\\
&= \underbrace{V_{EB}[I_1(1 + r)] + \frac{C_2}{C_1}V_T\ln(1 + r)}_{V_{out,nom}} + \underbrace{V_T\frac{\epsilon}{1 + r}}_{\text{change of }V_{EB}} + \underbrace{\frac{C_2}{C_1}V_T\frac{\epsilon}{1 + r}}_{\text{change of PTAT term}}.
\end{aligned}
$$

Collect the two error terms:

$$V_{out} \approx V_{out,nom} + \left(1 + \frac{C_2}{C_1}\right)\frac{V_T\,\epsilon}{1 + r}.$$

**Why the error is amplified.** The step $\Delta V_{EB}$ at X is changed by $V_T\epsilon/(1 + r)$, and the switched-capacitor stage is a noninverting amplifier of gain $1 + C_2/C_1$ for that step. Since $C_2/C_1$ is large (about 8 for a zero-TC design), the PTAT part dominates the error.

### Step 6 — Size and temperature behaviour of the error

**Example.** Take $r = 7$, and the zero-TC capacitor ratio $C_2/C_1 \approx 17.4/\ln 8 \approx 8.4$. Take a 1 % absolute error $\epsilon = 0.01$ and $T = 300$ K ($V_T = 25.85$ mV):

$$
\begin{aligned}
\frac{V_T\,\epsilon}{1 + r} &= \frac{(25.85\ \mathrm{mV})(0.01)}{8} = 0.0323\ \mathrm{mV},\\
\Delta V_{out} &= (1 + 8.4)(0.0323\ \mathrm{mV}) = 0.30\ \mathrm{mV}.
\end{aligned}
$$

Of this, 0.27 mV comes from the amplified PTAT term and 0.03 mV from the change of $V_{EB}$. That is about 250 ppm of a 1.2-V reference.

**Effect on the TC.** The error is proportional to $V_T$, i.e. it is PTAT, so it also adds a temperature coefficient:

$$\frac{\partial(\Delta V_{out})}{\partial T} = \left(1 + \frac{C_2}{C_1}\right)\frac{k}{q}\cdot\frac{\epsilon}{1 + r} = 9.4\times(86.17\ \mu\mathrm{V/K})\times\frac{0.01}{8} \approx 1.0\ \mu\mathrm{V/K}.$$

This small residual slope shifts the temperature at which the output has zero TC (by roughly 1–2 K, given the bandgap's curvature of about −0.7 μV/K² near room temperature).

### Result

$$V_{out} = V_T\ln\frac{I_1(1 + r + \epsilon)}{I_S} + \frac{C_2}{C_1}V_T\ln(1 + r + \epsilon) \approx V_{out,nom} + \left(1 + \frac{C_2}{C_1}\right)\frac{V_T\,\epsilon}{1 + r},$$

with $V_{out,nom} = V_{EB}[I_1(1 + r)] + (C_2/C_1)V_T\ln(1 + r)$.

The error is dominated by the term amplified by $C_2/C_1$; for example $r = 7$, $C_2/C_1 \approx 8.4$ and $\epsilon = 0.01$ give about 0.3 mV. The error is PTAT, so it also adds a TC of $(1 + C_2/C_1)(k/q)\epsilon/(1 + r)$ and shifts the zero-TC temperature.

**Common mistake.** Claiming that the ratio error cancels because the same junction is used in both phases. Using one transistor does remove the *area* mismatch of a two-transistor bandgap ($I_S$ cancels in Step 2). The PTAT voltage, however, is set by the *current ratio*, so an error in $I_2/I_1$ passes directly into $\Delta V_{EB}$ and is then amplified.

**Common mistake.** Keeping only the $C_2/C_1$-amplified part, $(C_2/C_1)V_T\epsilon/(1 + r)$, and forgetting that the junction voltage $V_{EB}(I_1 + I_2)$ itself also changes, by $V_T\epsilon/(1 + r)$. The total factor is $1 + C_2/C_1$.

**Common mistake.** Linearizing with the wrong denominator, for example writing $\ln(1 + r + \epsilon) \approx \ln(1 + r) + \epsilon/r$, or adding $\epsilon$ or $V_T\epsilon$ directly to $V_{out}$. The argument of the logarithm is $1 + r + \epsilon$, so the fractional change is $\epsilon/(1 + r)$, which gives the $V_T\epsilon/(1 + r)$ factor.
