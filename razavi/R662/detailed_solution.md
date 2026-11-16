# Detailed solution - R662

**Approach.** Replace the PD and LPF of the first figure by the averaged PFD/charge-pump/filter model, $(I_P/2\pi)(R_P + 1/C_Ps)$ acting on the phase error, keep $V_{ex}$ added after the filter, and model the VCO as $K_{VCO}/s$. Write one loop equation with $\Phi_{in} = 0$ and solve it for $\Phi_{out}/V_{ex}$. Then interpret the result and compare it with the type I loop.

### Step 1 — Linear model of each block

The loop is in lock, so we track only small changes ("excess" quantities).

- **PFD + charge pump.** A phase error $\Delta\phi = \Phi_{in} - \Phi_{out}$ makes the pump deliver pulses of width $\Delta\phi\,T_{in}/2\pi$ per period, so the average pump current is
$$I_{CP} = \frac{I_P}{2\pi}\,(\Phi_{in} - \Phi_{out}) = -\frac{I_P}{2\pi}\,\Phi_{out}\qquad(\Phi_{in} = 0).$$
- **Loop filter.** The pump current flows through $R_P$ in series with $C_P$, whose impedance is $R_P + 1/(C_Ps)$. The filter output voltage is
$$V_F = I_{CP}\left(R_P + \frac{1}{C_Ps}\right).$$
- **Adder.** $V_{cont} = V_F + V_{ex}$.
- **VCO.** Its excess frequency is $K_{VCO}V_{cont}$, and its phase is the integral of frequency:
$$\Phi_{out} = \frac{K_{VCO}}{s}\,V_{cont}.$$

### Step 2 — Loop equation

Combine the blocks, starting from the VCO:

$$
\begin{aligned}
\Phi_{out} &= \frac{K_{VCO}}{s}\left(V_F + V_{ex}\right)\\
\Phi_{out} &= \frac{K_{VCO}}{s}\left[V_{ex} - \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)\Phi_{out}\right].
\end{aligned}
$$

The minus sign is the negative feedback: an advance of the output phase reduces the pump current.

### Step 3 — Solve for $\Phi_{out}/V_{ex}$

Expand the bracket:

$$\Phi_{out} = \frac{K_{VCO}}{s}\,V_{ex} - \frac{I_PK_{VCO}}{2\pi s}\left(R_P + \frac{1}{C_Ps}\right)\Phi_{out}.$$

Collect the $\Phi_{out}$ terms on the left:

$$\Phi_{out}\left[1 + \frac{I_PK_{VCO}}{2\pi s}\left(R_P + \frac{1}{C_Ps}\right)\right] = \frac{K_{VCO}}{s}\,V_{ex}.$$

Multiply both sides by $s^2$ to clear the fractions:

$$
\begin{aligned}
\Phi_{out}\left[s^2 + \frac{I_PK_{VCO}}{2\pi}\,s\left(R_P + \frac{1}{C_Ps}\right)\right] &= K_{VCO}\,s\,V_{ex}\\
\Phi_{out}\left[s^2 + \frac{I_PK_{VCO}R_P}{2\pi}\,s + \frac{I_PK_{VCO}}{2\pi C_P}\right] &= K_{VCO}\,s\,V_{ex}.
\end{aligned}
$$

Divide:

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s}{s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}\,s + \dfrac{I_PK_{VCO}}{2\pi C_P}} .$$

Multiplying the numerator and denominator by $2\pi C_P$ gives an equivalent form without nested fractions:

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{2\pi C_PK_{VCO}\,s}{2\pi C_Ps^2 + I_PK_{VCO}R_PC_Ps + I_PK_{VCO}} .$$

**Units check.** $K_{VCO}$ is in rad/(s·V); $s/(s^2 + \dots)$ has units of s. The result is in rad/V, as it should be.

### Step 4 — Standard form

The denominator is the familiar characteristic polynomial of the type II charge-pump PLL, $s^2 + 2\zeta\omega_ns + \omega_n^2$, with

$$\omega_n = \sqrt{\frac{I_PK_{VCO}}{2\pi C_P}}, \qquad 2\zeta\omega_n = \frac{I_PK_{VCO}R_P}{2\pi}\;\Rightarrow\;\zeta = \frac{R_P}{2}\sqrt{\frac{I_PC_PK_{VCO}}{2\pi}} .$$

So

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s}{s^2 + 2\zeta\omega_ns + \omega_n^2}.$$

The poles are the same as for $\Phi_{out}/\Phi_{in}$ (they belong to the loop), but the numerator now has a **zero at the origin**.

### Step 5 — Behaviour at low and high frequencies

**Low frequencies ($s \to 0$).** The numerator vanishes, so $\Phi_{out}/V_{ex} \to 0$. By the final-value theorem, a step $\Delta V$ in $V_{ex}$ produces a final phase change

$$\phi_{out}(\infty) = \lim_{s\to0} s\cdot\frac{\Delta V}{s}\cdot\frac{K_{VCO}\,s}{s^2 + 2\zeta\omega_ns + \omega_n^2} = 0 .$$

**Physical reason.** In lock, $V_{cont}$ must return to its old value so that $\omega_{out} = \omega_{in}$. The capacitor stops charging only when the pump current is zero on average, i.e. when the phase error is zero. So the charge pump keeps integrating until the voltage on $C_P$ has moved by exactly $-\Delta V$, and the phase error then returns to zero. The capacitor absorbs the step completely. In the type I loop (filter without an integrator), the same step permanently shifts the phase by $\Delta V/K_{PD}$, because there a static phase error is needed to hold the filter output at $-\Delta V$.

**High frequencies ($s \to \infty$).** Keep the highest power of $s$:

$$\frac{\Phi_{out}}{V_{ex}} \approx \frac{K_{VCO}\,s}{s^2} = \frac{K_{VCO}}{s},$$

the open-loop VCO response: fast changes in $V_{ex}$ modulate the VCO before the loop can react.

**Peak.** The response is band-pass. At $s = j\omega_n$ the terms $s^2$ and $\omega_n^2$ cancel ($-\omega_n^2 + \omega_n^2 = 0$), leaving

$$\left|\frac{\Phi_{out}}{V_{ex}}(j\omega_n)\right| = \frac{K_{VCO}\,\omega_n}{2\zeta\omega_n\cdot\omega_n} = \frac{K_{VCO}}{2\zeta\omega_n} = \frac{K_{VCO}}{I_PK_{VCO}R_P/2\pi} = \frac{2\pi}{I_PR_P}.$$

**In terms of frequency.** With $\Omega_{out} = s\Phi_{out}$,

$$\frac{\Omega_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s^2}{s^2 + 2\zeta\omega_ns + \omega_n^2},$$

a second-order high-pass: slow changes of $V_{ex}$ cannot move the output frequency (or even its phase, in steady state), while changes much faster than $\omega_n$ pass with the full VCO gain.

### Result

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s}{s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}\,s + \dfrac{I_PK_{VCO}}{2\pi C_P}} = \frac{2\pi C_PK_{VCO}\,s}{2\pi C_Ps^2 + I_PK_{VCO}R_PC_Ps + I_PK_{VCO}}$$

i.e. $K_{VCO}s/(s^2 + 2\zeta\omega_ns + \omega_n^2)$ with $\omega_n^2 = I_PK_{VCO}/(2\pi C_P)$ and $\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi}$. It is band-pass: zero at dc (a step in $V_{ex}$ leaves no permanent phase change), a peak of $2\pi/(I_PR_P)$ at $\omega_n$, and $K_{VCO}/s$ at high frequencies.

**Common mistake.** Carrying over the type I result and expecting a nonzero dc value. The charge pump with $C_P$ is an integrator, so a type II loop has zero static phase error: any constant disturbance at the VCO input is removed completely, which is why the transfer function has a zero at $s = 0$.

**Common mistake.** Modelling the loop filter as $R_P \parallel C_P$, i.e. $R_P/(1 + R_PC_Ps)$. In the figure $R_P$ and $C_P$ are in series from the pump output to ground, so their impedances add: $R_P + 1/(C_Ps)$.

**Common mistake.** Forgetting the VCO's $1/s$ or injecting $V_{ex}$ before the filter. The VCO turns voltage into frequency, and phase is the integral of frequency; and $V_{ex}$ is added to the *filter output*, so it reaches the VCO directly, which is why the high-frequency limit is $K_{VCO}/s$.
