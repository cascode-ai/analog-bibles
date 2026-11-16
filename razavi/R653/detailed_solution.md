# Detailed solution - R653

**Approach.** Use the linear phase-domain model of the locked PLL, treat $V_{ex}$ as a second input added at the VCO control node, set the input phase to zero, write one loop equation and solve it for $\Phi_{out}/V_{ex}$.

### Step 1 — Linear model of each block

With $\Phi_{in} = 0$ (clean input), the blocks give

$$V_{PD} = K_{PD}\,(\Phi_{in} - \Phi_{out}) = -K_{PD}\,\Phi_{out}, \qquad V_{LPF} = \frac{V_{PD}}{1 + s/\omega_{LPF}} .$$

From the figure, $V_{ex}$ is added *after* the filter, $V_{cont} = V_{LPF} + V_{ex}$. The VCO's excess frequency is $K_{VCO}V_{cont}$, and phase is its integral:

$$\Phi_{out} = \frac{K_{VCO}}{s}\,V_{cont}.$$

### Step 2 — Write the loop equation

Substituting the adder, then the filter and the phase detector:

$$\Phi_{out} = \frac{K_{VCO}}{s}\left(V_{LPF} + V_{ex}\right) = \frac{K_{VCO}}{s}\left(V_{ex} - \frac{K_{PD}}{1 + s/\omega_{LPF}}\,\Phi_{out}\right).$$

### Step 3 — Solve for $\Phi_{out}/V_{ex}$

Expanding and collecting the $\Phi_{out}$ terms:

$$
\begin{aligned}
\Phi_{out} &= \frac{K_{VCO}}{s}\,V_{ex} - \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})}\,\Phi_{out}\\
\Phi_{out}\left[1 + \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})}\right] &= \frac{K_{VCO}}{s}\,V_{ex}.
\end{aligned}
$$

Multiplying both sides by $s\,(1 + s/\omega_{LPF})$:

$$\Phi_{out}\left[s\left(1 + \frac{s}{\omega_{LPF}}\right) + K_{PD}K_{VCO}\right] = K_{VCO}\left(1 + \frac{s}{\omega_{LPF}}\right)V_{ex},$$

so, with $s(1 + s/\omega_{LPF}) = s + s^2/\omega_{LPF}$,

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\left(1 + \dfrac{s}{\omega_{LPF}}\right)}{\dfrac{s^2}{\omega_{LPF}} + s + K_{PD}K_{VCO}} .$$

Multiplying the numerator and denominator by $\omega_{LPF}$ gives the polynomial form

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} .$$

**Units check.** $K_{VCO}$ is in rad/(s·V) and $(s + \omega_{LPF})/(s^2 + \dots)$ is in s, so the result is in rad/V.

### Step 4 — Poles and zero in standard PLL notation

The denominator is that of the usual closed-loop response $\Phi_{out}/\Phi_{in}$ of this type I PLL, since the poles belong to the loop, not to the injection point. Comparing with $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$
\begin{aligned}
\omega_n^2 &= \omega_{LPF}K_{PD}K_{VCO} &&\Rightarrow\quad \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}},\\
2\zeta\omega_n &= \omega_{LPF} &&\Rightarrow\quad \zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}}.
\end{aligned}
$$

So

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,(s + 2\zeta\omega_n)}{s^2 + 2\zeta\omega_ns + \omega_n^2}.$$

The **zero at $s = -\omega_{LPF}$** appears because $V_{ex}$ enters *after* the filter: the filter acts only on the fed-back signal. ($\Phi_{out}/\Phi_{in} = \omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$ has no such zero.)

### Step 5 — Low- and high-frequency limits

**Low frequencies ($s \to 0$):**

$$\frac{\Phi_{out}}{V_{ex}}\bigg|_{s\to0} = \frac{K_{VCO}\,\omega_{LPF}}{\omega_{LPF}K_{PD}K_{VCO}} = \frac{1}{K_{PD}}.$$

By the final-value theorem, a step $\Delta V$ in $V_{ex}$ (transform $\Delta V/s$) gives a final excess phase

$$\phi_{out}(\infty) = \lim_{s\to0} s\cdot\frac{\Delta V}{s}\cdot\frac{\Phi_{out}}{V_{ex}}(s) = \frac{\Delta V}{K_{PD}}.$$

**Physical check.** In lock $\omega_{out}$ returns to $\omega_{in}$, so $V_{cont}$ returns to its original value; since $V_{ex}$ rose by $\Delta V$, the filter output (at dc, the detector output) must fall by $\Delta V$:

$$K_{PD}\,\Delta(\Phi_{in} - \Phi_{out}) = -\Delta V \quad\Rightarrow\quad \Delta\Phi_{out} = \frac{\Delta V}{K_{PD}} .$$

A slow change in $V_{ex}$ leaves the frequency unchanged and only shifts the static phase.

**High frequencies ($s \to \infty$):**

$$\frac{\Phi_{out}}{V_{ex}}\bigg|_{s\to\infty} \approx \frac{K_{VCO}\,s}{s^2} = \frac{K_{VCO}}{s}.$$

Fast changes of $V_{ex}$ modulate the VCO as if the loop were open: the filter blocks the correction.

**In terms of frequency.** With $\Omega_{out} = s\Phi_{out}$,

$$\frac{\Omega_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}},$$

which is high-pass with a zero at dc: the loop rejects slow frequency changes caused by $V_{ex}$ but passes fast ones. This is why such an injection point is used, for example, to frequency-modulate a PLL above its loop bandwidth.

### Result

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\left(1 + s/\omega_{LPF}\right)}{s^2/\omega_{LPF} + s + K_{PD}K_{VCO}} = \frac{K_{VCO}\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}}$$

- Poles: those of the type I PLL, $\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}$, $2\zeta\omega_n = \omega_{LPF}$; zero at $s = -\omega_{LPF}$.
- Low-frequency limit $1/K_{PD}$ (a step $\Delta V$ shifts the output phase by $\Delta V/K_{PD}$); high-frequency limit $K_{VCO}/s$ (open-loop VCO modulation).

**Common mistake.** Letting $V_{ex}$ enter *before* the filter. The filter then multiplies $V_{ex}$ too and the numerator becomes just $K_{VCO}$, losing the zero at $-\omega_{LPF}$; in the figure the adder sits between the LPF and the VCO.

**Common mistake.** Modelling the VCO as a plain gain $K_{VCO}$ instead of the integrator $K_{VCO}/s$. Without the $1/s$ the denominator loses its $s^2$ term and the loop dynamics are wrong.

**Common mistake.** Dropping the minus sign of the phase detector, which gives the unstable denominator $s^2 + \omega_{LPF}s - \omega_{LPF}K_{PD}K_{VCO}$. A quick check: at high frequency the answer must reduce to $+K_{VCO}/s$.
