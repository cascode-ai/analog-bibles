# Detailed solution - R653

**Approach.** Use the linear (locked) phase-domain model of the PLL: phase detector $K_{PD}$, filter $1/(1+s/\omega_{LPF})$, and VCO $K_{VCO}/s$ (an integrator, because phase is the integral of frequency). Treat $V_{ex}$ as a second input added at the VCO control node, set the input phase to zero, write one loop equation, and solve it for $\Phi_{out}/V_{ex}$.

### Step 1 — Linear model of each block

The loop is assumed locked, so only small changes ("excess" quantities) around the operating point are tracked.

- **Excess phase.** If the output is $V_{out}(t) = A\cos[\omega_0 t + \phi_{out}(t)]$, then $\phi_{out}(t)$ is its excess phase, the phase beyond that of an ideal oscillator at $\omega_0$. Its Laplace transform is $\Phi_{out}(s)$. The input is a clean periodic signal, so its excess phase is $\Phi_{in} = 0$.
- **Phase detector.** Output proportional to the phase difference, with gain $K_{PD}$ (V/rad):
$$V_{PD} = K_{PD}\,(\Phi_{in} - \Phi_{out}) = -K_{PD}\,\Phi_{out}\qquad(\Phi_{in} = 0).$$
- **Low-pass filter.** First order:
$$V_{LPF} = \frac{V_{PD}}{1 + s/\omega_{LPF}} .$$
- **Adder.** From the figure, $V_{ex}$ is added *after* the filter:
$$V_{cont} = V_{LPF} + V_{ex}.$$
- **VCO.** The frequency is $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$, so the *excess* frequency is $K_{VCO}V_{cont}$. Phase is the time integral of frequency, $\phi_{out}(t) = \int K_{VCO}V_{cont}\,dt$, and integration becomes division by $s$:
$$\Phi_{out} = \frac{K_{VCO}}{s}\,V_{cont}.$$

The $1/s$ of the VCO is essential: the VCO converts a control *voltage* into a *frequency*, and its output phase is the accumulated frequency.

### Step 2 — Write the loop equation

Start from the VCO and substitute the other blocks one at a time.

Substitute the adder:

$$\Phi_{out} = \frac{K_{VCO}}{s}\left(V_{LPF} + V_{ex}\right).$$

Substitute the filter and the phase detector, $V_{LPF} = -K_{PD}\Phi_{out}/(1 + s/\omega_{LPF})$:

$$\Phi_{out} = \frac{K_{VCO}}{s}\left(V_{ex} - \frac{K_{PD}}{1 + s/\omega_{LPF}}\,\Phi_{out}\right).$$

The minus sign reflects the negative feedback: an increase in output phase lowers the detector output.

### Step 3 — Solve for $\Phi_{out}/V_{ex}$

Expand the right-hand side:

$$\Phi_{out} = \frac{K_{VCO}}{s}\,V_{ex} - \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})}\,\Phi_{out}.$$

Collect the $\Phi_{out}$ terms on the left:

$$\Phi_{out}\left[1 + \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})}\right] = \frac{K_{VCO}}{s}\,V_{ex}.$$

Multiply both sides by $s\,(1 + s/\omega_{LPF})$ to clear the fractions:

$$\Phi_{out}\left[s\left(1 + \frac{s}{\omega_{LPF}}\right) + K_{PD}K_{VCO}\right] = K_{VCO}\left(1 + \frac{s}{\omega_{LPF}}\right)V_{ex}.$$

Expand $s(1 + s/\omega_{LPF}) = s + s^2/\omega_{LPF}$ and divide:

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\left(1 + \dfrac{s}{\omega_{LPF}}\right)}{\dfrac{s^2}{\omega_{LPF}} + s + K_{PD}K_{VCO}} .$$

Multiplying the numerator and denominator by $\omega_{LPF}$ gives the equivalent polynomial form

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} .$$

**Units check.** $K_{VCO}$ is in rad/(s·V). The fraction $(s + \omega_{LPF})/(s^2 + \dots)$ has units of s, so the result is in rad/V, as a phase-per-voltage transfer function must be.

### Step 4 — Poles and zero in standard PLL notation

The denominator is the same as for the usual closed-loop response $\Phi_{out}/\Phi_{in}$ of this type I PLL, because the poles belong to the loop, not to the point where a signal is injected. Compare it with $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$
\begin{aligned}
\omega_n^2 &= \omega_{LPF}K_{PD}K_{VCO} &&\Rightarrow\quad \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}},\\
2\zeta\omega_n &= \omega_{LPF} &&\Rightarrow\quad \zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}}.
\end{aligned}
$$

So the result can also be written

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,(s + 2\zeta\omega_n)}{s^2 + 2\zeta\omega_ns + \omega_n^2}.$$

The numerator contains a **zero at $s = -\omega_{LPF}$**. It appears because $V_{ex}$ enters *after* the filter: the filter does not act on $V_{ex}$ in the forward path, only on the fed-back signal. (The response $\Phi_{out}/\Phi_{in} = \omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$ has no such zero.)

### Step 5 — Low- and high-frequency limits

**Low frequencies ($s \to 0$):**

$$\frac{\Phi_{out}}{V_{ex}}\bigg|_{s\to0} = \frac{K_{VCO}\,\omega_{LPF}}{\omega_{LPF}K_{PD}K_{VCO}} = \frac{1}{K_{PD}}.$$

By the final-value theorem, a step $\Delta V$ in $V_{ex}$ (Laplace transform $\Delta V/s$) gives a final excess phase

$$\phi_{out}(\infty) = \lim_{s\to0} s\cdot\frac{\Delta V}{s}\cdot\frac{\Phi_{out}}{V_{ex}}(s) = \frac{\Delta V}{K_{PD}}.$$

**Physical check.** In lock, $\omega_{out}$ must return to $\omega_{in}$, so $V_{cont}$ must return to its original value. Since $V_{ex}$ rose by $\Delta V$, the filter output (and, at dc, the detector output) must fall by $\Delta V$. The detector output changes only through the phase error, so

$$K_{PD}\,\Delta(\Phi_{in} - \Phi_{out}) = -\Delta V \quad\Rightarrow\quad \Delta\Phi_{out} = \frac{\Delta V}{K_{PD}} .$$

A slow change in $V_{ex}$ thus leaves the frequency unchanged and only shifts the static phase.

**High frequencies ($s \to \infty$):** keep the highest powers of $s$:

$$\frac{\Phi_{out}}{V_{ex}}\bigg|_{s\to\infty} \approx \frac{K_{VCO}\,s}{s^2} = \frac{K_{VCO}}{s}.$$

Fast changes of $V_{ex}$ modulate the VCO as if the loop were open: the filter blocks the correction before it can react.

**In terms of frequency.** The output frequency is $\Omega_{out} = s\Phi_{out}$, so

$$\frac{\Omega_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}},$$

which is high-pass with a zero at dc: the loop rejects slow frequency changes caused by $V_{ex}$, but passes fast ones. This is why such an injection point is used, for example, to frequency-modulate a PLL above its loop bandwidth.

### Result

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\left(1 + s/\omega_{LPF}\right)}{s^2/\omega_{LPF} + s + K_{PD}K_{VCO}} = \frac{K_{VCO}\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}}$$

- Poles: those of the type I PLL, $\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}$, $2\zeta\omega_n = \omega_{LPF}$; zero at $s = -\omega_{LPF}$.
- Low-frequency limit $1/K_{PD}$ (a step $\Delta V$ shifts the output phase by $\Delta V/K_{PD}$); high-frequency limit $K_{VCO}/s$ (open-loop VCO modulation).

**Common mistake.** Treating $V_{ex}$ as if it entered *before* the filter. The filter then multiplies $V_{ex}$ as well and the numerator becomes just $K_{VCO}$, losing the zero at $-\omega_{LPF}$. In the figure the adder sits between the LPF and the VCO, so only the fed-back phase is filtered.

**Common mistake.** Modelling the VCO as a plain gain $K_{VCO}$ instead of $K_{VCO}/s$. The VCO controls frequency; its *phase* is the integral of frequency, so it is an integrator in the phase domain. Without the $1/s$ the denominator loses its $s^2$ term and the loop dynamics are wrong.

**Common mistake.** Dropping the minus sign of the phase detector ($V_{PD} = K_{PD}(\Phi_{in} - \Phi_{out})$), which turns the loop into positive feedback and gives the denominator $s^2 + \omega_{LPF}s - \omega_{LPF}K_{PD}K_{VCO}$, an unstable system. A quick check: at high frequency the answer must reduce to $+K_{VCO}/s$, the open-loop VCO response.
