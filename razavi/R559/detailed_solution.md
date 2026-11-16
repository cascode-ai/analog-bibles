# Detailed solution - R559

**Approach.** Derive the phase-2 output for an arbitrary current ratio by charge conservation at the op amp's inverting input. Then substitute the actual ratio $I_2/I_1 = r + \epsilon$ and expand the logarithms to first order in $\epsilon$, which separates the nominal output from the error.

### Step 1 — Phase-2 output for an arbitrary current ratio

Call the op amp's inverting-input node N; it connects to ground through $C_2$ and to $V_{out}$ through both $C_1$ and $S_1$.

In phase 1, $Q_1$ carries only $I_1$, so $V_X = V_{EB}(I_1) = V_T\ln(I_1/I_S)$, and the follower gives $V_N = V_{out} = V_{EB}(I_1)$. $C_1$ is shorted and $C_2$ stores $V_{EB}(I_1)$, so N holds the charge $Q_N = C_2V_{EB}(I_1)$.

In phase 2, $Q_1$ carries $I_1 + I_2$:

$$V_X' = V_{EB}(I_1 + I_2) = V_T\ln\frac{I_1 + I_2}{I_S},$$

$$V_X' - V_{EB}(I_1) = V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S} = V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

$I_S$ cancels, but the current *ratio* does not, so any error in $I_2/I_1$ goes straight into this PTAT step. The op amp holds $V_N' = V_X'$, and with $S_1$ open N has no dc path, so its charge is conserved:

$$C_2V_X' + C_1\left(V_X' - V_{out}'\right) = C_2V_{EB}(I_1),$$

$$
\begin{aligned}
C_1V_{out}' &= C_2V_X' + C_1V_X' - C_2V_{EB}(I_1)\\
V_{out}' &= V_X' + \frac{C_2}{C_1}\left[V_X' - V_{EB}(I_1)\right]\\
&= V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).
\end{aligned}
$$

### Step 2 — Insert the actual current ratio

With $I_2 = (r + \epsilon)I_1$, $I_1 + I_2 = I_1(1 + r + \epsilon)$ and $1 + I_2/I_1 = 1 + r + \epsilon$, so exactly

$$V_{out} = V_T\ln\frac{I_1(1 + r + \epsilon)}{I_S} + \frac{C_2}{C_1}V_T\ln(1 + r + \epsilon).$$

The ratio error appears **twice**: in the junction voltage (the transistor carries a slightly different current) and in the amplified PTAT term.

### Step 3 — First-order expansion in $\epsilon$

$$\ln(1 + r + \epsilon) = \ln\left[(1 + r)\left(1 + \frac{\epsilon}{1 + r}\right)\right] = \ln(1 + r) + \ln\left(1 + \frac{\epsilon}{1 + r}\right) \approx \ln(1 + r) + \frac{\epsilon}{1 + r}$$

for $|\epsilon| \ll 1 + r$. Applying this to both terms:

$$
\begin{aligned}
V_{out} &\approx \left[V_T\ln\frac{I_1(1 + r)}{I_S} + V_T\frac{\epsilon}{1 + r}\right] + \frac{C_2}{C_1}\left[V_T\ln(1 + r) + V_T\frac{\epsilon}{1 + r}\right]\\
&= \underbrace{V_{EB}[I_1(1 + r)] + \frac{C_2}{C_1}V_T\ln(1 + r)}_{V_{out,nom}} + \underbrace{V_T\frac{\epsilon}{1 + r}}_{\text{change of }V_{EB}} + \underbrace{\frac{C_2}{C_1}V_T\frac{\epsilon}{1 + r}}_{\text{change of PTAT term}},
\end{aligned}
$$

$$V_{out} \approx V_{out,nom} + \left(1 + \frac{C_2}{C_1}\right)\frac{V_T\,\epsilon}{1 + r}.$$

The step $\Delta V_{EB}$ at X changes by $V_T\epsilon/(1 + r)$, and the switched-capacitor stage amplifies that step by $1 + C_2/C_1$. Since $C_2/C_1$ is large (about 8 for a zero-TC design), the PTAT part dominates the error.

### Step 4 — Size and temperature behaviour of the error

**Example.** $r = 7$, the zero-TC ratio $C_2/C_1 \approx 17.4/\ln 8 \approx 8.4$, a 1 % absolute error $\epsilon = 0.01$ and $T = 300$ K ($V_T = 25.85$ mV):

$$
\begin{aligned}
\frac{V_T\,\epsilon}{1 + r} &= \frac{(25.85\ \mathrm{mV})(0.01)}{8} = 0.0323\ \mathrm{mV},\\
\Delta V_{out} &= (1 + 8.4)(0.0323\ \mathrm{mV}) = 0.30\ \mathrm{mV}.
\end{aligned}
$$

Of this, 0.27 mV comes from the amplified PTAT term and 0.03 mV from the change of $V_{EB}$: about 250 ppm of a 1.2-V reference.

**Effect on the TC.** The error is proportional to $V_T$ (PTAT), so it adds

$$\frac{\partial(\Delta V_{out})}{\partial T} = \left(1 + \frac{C_2}{C_1}\right)\frac{k}{q}\cdot\frac{\epsilon}{1 + r} = 9.4\times(86.17\ \mu\mathrm{V/K})\times\frac{0.01}{8} \approx 1.0\ \mu\mathrm{V/K}.$$

This residual slope shifts the zero-TC temperature by roughly 1–2 K, given the bandgap's curvature of about −0.7 μV/K² near room temperature.

### Result

$$V_{out} = V_T\ln\frac{I_1(1 + r + \epsilon)}{I_S} + \frac{C_2}{C_1}V_T\ln(1 + r + \epsilon) \approx V_{out,nom} + \left(1 + \frac{C_2}{C_1}\right)\frac{V_T\,\epsilon}{1 + r},$$

with $V_{out,nom} = V_{EB}[I_1(1 + r)] + (C_2/C_1)V_T\ln(1 + r)$.

The error is dominated by the term amplified by $C_2/C_1$; for example $r = 7$, $C_2/C_1 \approx 8.4$ and $\epsilon = 0.01$ give about 0.3 mV. The error is PTAT, so it also adds a TC of $(1 + C_2/C_1)(k/q)\epsilon/(1 + r)$ and shifts the zero-TC temperature.

**Common mistake.** Claiming that the ratio error cancels because the same junction is used in both phases. One transistor removes the *area* mismatch of a two-transistor bandgap ($I_S$ cancels), but the PTAT voltage is set by the *current ratio*, so an error in $I_2/I_1$ passes directly into $\Delta V_{EB}$ and is amplified.

**Common mistake.** Keeping only the $C_2/C_1$-amplified part and forgetting that $V_{EB}(I_1 + I_2)$ itself also changes, by $V_T\epsilon/(1 + r)$. The total factor is $1 + C_2/C_1$.

**Common mistake.** Linearizing with the wrong denominator, for example $\ln(1 + r + \epsilon) \approx \ln(1 + r) + \epsilon/r$, or adding $\epsilon$ or $V_T\epsilon$ directly to $V_{out}$. The argument is $1 + r + \epsilon$, so the fractional change is $\epsilon/(1 + r)$.
