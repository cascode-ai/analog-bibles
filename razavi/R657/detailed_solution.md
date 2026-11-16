# Detailed solution - R657

**Approach.** Model the charge pump as a current source driving the series $R_P$–$C_P$ branch. Compute the transfer function from phase error to control voltage for both possible VCO connections: at the charge-pump output node (as drawn) and at the top plate of $C_P$. Then compare the resulting loop gains and closed-loop poles. The key fact is that a resistor in series with a current source does not change the current, and hence does not change the capacitor voltage.

### Step 1 — The charge pump as a current source

The phase/frequency detector (PFD) produces pulses on $Q_A$ (input leading) or $Q_B$ (feedback leading) whose width equals the time difference between the edges. During a $Q_A$ pulse, $S_1$ closes and $I_1 = I_P$ flows into the filter; during a $Q_B$ pulse, $S_2$ closes and $I_2 = I_P$ is drawn out of it.

For a phase error $\Delta\phi$ (in rad), the pulse lasts a fraction $\Delta\phi/(2\pi)$ of the input period $T_{in}$. Averaged over one period (the usual continuous-time approximation, valid when the loop is much slower than the reference), the charge pump delivers the current

$$\overline{I_{CP}} = I_P\,\frac{\Delta\phi}{2\pi}.$$

The essential property: **the charge pump is a current source.** Whatever impedance it drives, it forces this current through it. The VCO input is a high-impedance node (a MOS gate or similar) and draws no current, so the entire pump current flows through $R_P$ and then through $C_P$ to ground.

### Step 2 — Control voltage at the charge-pump output node (as drawn)

Let node P be the charge-pump output, X the node between $R_P$ and $C_P$ (the top plate of $C_P$). The same current $I_{CP}$ flows through both elements.

- Voltage across $C_P$ (charge divided by capacitance): $V_X(t) = \dfrac{1}{C_P}\displaystyle\int I_{CP}\,dt$.
- Voltage across $R_P$ (Ohm's law): $V_P - V_X = I_{CP}R_P$.

Adding them, the control voltage at node P is

$$V_{cont}(t) = V_P(t) = I_{CP}(t)\,R_P + \frac{1}{C_P}\int I_{CP}\,dt .$$

In the Laplace domain, with $I_{CP}(s) = (I_P/2\pi)\,\Delta\phi(s)$:

$$
\begin{aligned}
V_{cont}(s) &= I_{CP}(s)\left(R_P + \frac{1}{C_Ps}\right)\\
\frac{V_{cont}}{\Delta\phi}(s) &= \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}.
\end{aligned}
$$

There are two terms. The integral term (pole at the origin) remembers the accumulated phase error. The $R_P$ term is a **proportional** path: the control voltage responds *immediately* to the present phase error. Together they give a **zero at $s = -1/(R_PC_P)$**.

### Step 3 — Loop gain and closed loop with the correct connection

The VCO turns voltage into frequency, and its phase is the integral of frequency: $\Phi_{out} = (K_{VCO}/s)\,V_{cont}$. The loop gain is

$$H_{open}(s) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}\cdot\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s^2}.$$

The closed-loop characteristic equation is $1 + H_{open} = 0$. Multiply through by $s^2$:

$$
\begin{aligned}
s^2 + \frac{I_PK_{VCO}}{2\pi C_P}\,(R_PC_Ps + 1) &= 0\\
s^2 + \frac{I_PK_{VCO}R_P}{2\pi}\,s + \frac{I_PK_{VCO}}{2\pi C_P} &= 0 .
\end{aligned}
$$

Compare with $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$
\begin{aligned}
\omega_n &= \sqrt{\frac{I_PK_{VCO}}{2\pi C_P}},\\
\zeta &= \frac{1}{2\omega_n}\cdot\frac{I_PK_{VCO}R_P}{2\pi} = \frac{R_P}{2}\sqrt{\frac{I_PC_PK_{VCO}}{2\pi}} .
\end{aligned}
$$

Since $R_P > 0$, $\zeta > 0$: the poles are in the left half plane and the loop settles. The damping comes *entirely* from $R_P$. On a Bode plot, the zero lifts the phase above $-180^\circ$ near the crossover frequency and creates the phase margin.

### Step 4 — Control voltage at the top plate of $C_P$

Now suppose the VCO were connected to node X instead. Because the charge pump is a current source, the current through $C_P$ is still exactly $I_{CP}$; $R_P$ is merely in series with the source and changes only the voltage at node P, not the current. Therefore

$$V_{cont}(t) = V_X(t) = \frac{1}{C_P}\int I_{CP}\,dt \qquad\Rightarrow\qquad \frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi C_Ps}.$$

**$R_P$ has disappeared from the transfer function.** Whatever its value, the VCO sees the same voltage as if $R_P = 0$, so the zero is gone.

### Step 5 — Loop gain and closed loop with the top-plate connection

$$H_{open}(s) = \frac{I_P}{2\pi C_Ps}\cdot\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P\,s^2}.$$

This is **two ideal integrators**: the charge pump with $C_P$ integrates the phase error into a voltage, and the VCO integrates that voltage into phase. Each contributes $-90^\circ$, so $\angle H_{open}(j\omega) = -180^\circ$ at *every* frequency, and the phase margin is zero.

The characteristic equation $1 + H_{open} = 0$, multiplied by $s^2$:

$$s^2 + \frac{I_PK_{VCO}}{2\pi C_P} = 0 \quad\Rightarrow\quad s_{1,2} = \pm j\sqrt{\frac{I_PK_{VCO}}{2\pi C_P}} = \pm j\omega_n .$$

The closed-loop transfer function is

$$H(s) = \frac{I_PK_{VCO}/(2\pi C_P)}{s^2 + I_PK_{VCO}/(2\pi C_P)},$$

with **$\zeta = 0$**: both poles sit on the $j\omega$ axis. Any disturbance (a phase step, a frequency step, noise) excites a sinusoidal oscillation of the phase and of the control voltage at $\omega_n$ that never decays. The loop never settles; in practice any additional parasitic pole (VCO input, PFD delay, the discrete-time sampling) adds further phase lag and pushes the poles into the right half plane, so the loop is unstable.

### Step 6 — Physical picture

Suppose the input phase leads by a small amount.

- **Top-plate connection.** The pump charges $C_P$, $V_X$ ramps up, and the VCO frequency ramps up. The output phase starts to catch up, but only *after* the frequency has risen. By the time the phase error reaches zero, the VCO frequency is above the input frequency, so the output phase overshoots. The process then reverses, and the system swings back and forth forever, like a mass on a spring with no friction.
- **Correct connection.** As soon as a phase error appears, the $I_{CP}R_P$ term raises $V_{cont}$ immediately, in proportion to the error. As the error shrinks, this extra push shrinks too, so the frequency excess is removed before the phase overshoots. This proportional term acts like the friction (damper) in the mechanical analogy.

The price of the proportional path is that every pump pulse produces a voltage jump $I_PR_P$ at node P, disturbing the VCO. Connecting to node X would remove these jumps, which is the tempting (but wrong) motivation for the change. The standard remedy is instead a small capacitor $C_2$ (typically $\lesssim C_P/5$) from node P to ground, which smooths the jumps while keeping the zero.

### Result

The VCO cannot be driven from the top plate of $C_P$ because the charge pump is a current source: $R_P$ in series with it does not change the current into $C_P$, so the capacitor voltage is just $\frac{1}{C_P}\int I_{CP}\,dt$ and $R_P$ disappears from the loop. The stabilizing zero at $-1/(R_PC_P)$ is lost, the loop gain becomes $I_PK_{VCO}/(2\pi C_Ps^2)$ (two integrators, $-180^\circ$ at all frequencies), and the closed-loop poles sit at $\pm j\sqrt{I_PK_{VCO}/(2\pi C_P)}$ with $\zeta = 0$: the loop oscillates instead of settling. Taken at the charge-pump output, $V_{cont} = I_{CP}R_P + \frac{1}{C_P}\int I_{CP}\,dt$; the proportional term $I_{CP}R_P$ provides the zero and the damping $\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi}$.

**Common mistake.** Saying that the top-plate connection fails because the VCO would "load" or "discharge" $C_P$, or because $C_P$ would be shorted. The VCO input draws no current and nothing shorts anything; the real problem is dynamic: the loop loses its zero and has no damping.

**Common mistake.** Stating that "the zero is lost" without explaining why. The zero disappears because a resistor in series with an ideal current source has no effect on the current, so it cannot influence the voltage across the capacitor. It only adds the voltage $I_{CP}R_P$ at the node *above* it, and only that node carries the proportional correction.

**Common mistake.** Thinking the top-plate connection is "better" because the control voltage is smoother. The ripple is indeed smaller, but a loop with $\zeta = 0$ never locks cleanly. Ripple is reduced with a second, smaller capacitor across the $R_P$–$C_P$ branch, not by removing $R_P$ from the path.
