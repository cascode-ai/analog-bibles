# Detailed solution - R657

**Approach.** Model the charge pump as a current source driving the series $R_P$–$C_P$ branch, and compute the transfer function from phase error to control voltage for both VCO connections: at the charge-pump output (as drawn) and at the top plate of $C_P$. Then compare the loop gains and closed-loop poles. The key fact is that a resistor in series with a current source does not change the current, and hence not the capacitor voltage.

### Step 1 — The charge pump as a current source

A phase error $\Delta\phi$ makes the PFD close $S_1$ (or $S_2$) for a fraction $\Delta\phi/(2\pi)$ of the input period $T_{in}$, so, averaged over a period (continuous-time approximation),

$$\overline{I_{CP}} = I_P\,\frac{\Delta\phi}{2\pi}.$$

**The charge pump is a current source:** it forces this current through whatever it drives. The VCO input draws no current, so the entire pump current flows through $R_P$ and then $C_P$ to ground.

### Step 2 — Control voltage at the charge-pump output node (as drawn)

Call the charge-pump output P and the node between $R_P$ and $C_P$ (the top plate of $C_P$) X. The same current $I_{CP}$ flows through both elements, so $V_X(t) = \frac{1}{C_P}\int I_{CP}\,dt$ and $V_P - V_X = I_{CP}R_P$:

$$V_{cont}(t) = V_P(t) = I_{CP}(t)\,R_P + \frac{1}{C_P}\int I_{CP}\,dt .$$

In the Laplace domain, with $I_{CP}(s) = (I_P/2\pi)\,\Delta\phi(s)$:

$$
\begin{aligned}
V_{cont}(s) &= I_{CP}(s)\left(R_P + \frac{1}{C_Ps}\right)\\
\frac{V_{cont}}{\Delta\phi}(s) &= \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}.
\end{aligned}
$$

The integral term (pole at the origin) remembers the accumulated phase error; the $R_P$ term is a **proportional** path that responds *immediately* to the present error. Together they give a **zero at $s = -1/(R_PC_P)$**.

### Step 3 — Loop gain and closed loop with the correct connection

With the VCO $\Phi_{out} = (K_{VCO}/s)\,V_{cont}$, the loop gain is

$$H_{open}(s) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}\cdot\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s^2}.$$

The characteristic equation $1 + H_{open} = 0$, multiplied by $s^2$:

$$
\begin{aligned}
s^2 + \frac{I_PK_{VCO}}{2\pi C_P}\,(R_PC_Ps + 1) &= 0\\
s^2 + \frac{I_PK_{VCO}R_P}{2\pi}\,s + \frac{I_PK_{VCO}}{2\pi C_P} &= 0 .
\end{aligned}
$$

Comparing with $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$
\begin{aligned}
\omega_n &= \sqrt{\frac{I_PK_{VCO}}{2\pi C_P}},\\
\zeta &= \frac{1}{2\omega_n}\cdot\frac{I_PK_{VCO}R_P}{2\pi} = \frac{R_P}{2}\sqrt{\frac{I_PC_PK_{VCO}}{2\pi}} .
\end{aligned}
$$

Since $R_P > 0$, $\zeta > 0$: the poles are in the left half plane and the loop settles. The damping comes *entirely* from $R_P$; on a Bode plot the zero lifts the phase above $-180^\circ$ near crossover and creates the phase margin.

### Step 4 — Control voltage at the top plate of $C_P$

With the VCO at node X, the current through $C_P$ is still exactly $I_{CP}$: $R_P$ is in series with the current source and changes only $V_P$, not the current. Therefore

$$V_{cont}(t) = V_X(t) = \frac{1}{C_P}\int I_{CP}\,dt \qquad\Rightarrow\qquad \frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi C_Ps}.$$

**$R_P$ has disappeared from the transfer function**: whatever its value, the VCO sees the same voltage as with $R_P = 0$, so the zero is gone.

### Step 5 — Loop gain and closed loop with the top-plate connection

$$H_{open}(s) = \frac{I_P}{2\pi C_Ps}\cdot\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P\,s^2}.$$

This is **two ideal integrators** (charge pump with $C_P$, then VCO), each contributing $-90^\circ$, so $\angle H_{open}(j\omega) = -180^\circ$ at *every* frequency and the phase margin is zero. The characteristic equation, multiplied by $s^2$:

$$s^2 + \frac{I_PK_{VCO}}{2\pi C_P} = 0 \quad\Rightarrow\quad s_{1,2} = \pm j\sqrt{\frac{I_PK_{VCO}}{2\pi C_P}} = \pm j\omega_n ,$$

and the closed-loop transfer function is

$$H(s) = \frac{I_PK_{VCO}/(2\pi C_P)}{s^2 + I_PK_{VCO}/(2\pi C_P)},$$

with **$\zeta = 0$**: both poles on the $j\omega$ axis. Any disturbance excites an oscillation of the phase and of the control voltage at $\omega_n$ that never decays. In practice any parasitic pole (VCO input, PFD delay, discrete-time sampling) adds further lag and pushes the poles into the right half plane, so the loop is unstable.

### Step 6 — Physical picture

With the top-plate connection, a phase lead ramps $V_X$ and hence the VCO frequency; by the time the phase error reaches zero the VCO frequency is too high, so the phase overshoots and the loop swings back and forth forever, like a mass on a spring with no friction. With the correct connection the $I_{CP}R_P$ term raises $V_{cont}$ immediately, in proportion to the error, and removes the frequency excess before the phase overshoots: it is the damper.

The price is a voltage jump $I_PR_P$ at node P on every pump pulse, which tempts one to use node X. The standard remedy is instead a small capacitor $C_2$ (typically $\lesssim C_P/5$) from node P to ground, which smooths the jumps while keeping the zero.

### Result

The VCO cannot be driven from the top plate of $C_P$ because the charge pump is a current source: $R_P$ in series with it does not change the current into $C_P$, so the capacitor voltage is just $\frac{1}{C_P}\int I_{CP}\,dt$ and $R_P$ disappears from the loop. The stabilizing zero at $-1/(R_PC_P)$ is lost, the loop gain becomes $I_PK_{VCO}/(2\pi C_Ps^2)$ (two integrators, $-180^\circ$ at all frequencies), and the closed-loop poles sit at $\pm j\sqrt{I_PK_{VCO}/(2\pi C_P)}$ with $\zeta = 0$: the loop oscillates instead of settling. Taken at the charge-pump output, $V_{cont} = I_{CP}R_P + \frac{1}{C_P}\int I_{CP}\,dt$; the proportional term $I_{CP}R_P$ provides the zero and the damping $\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi}$.

**Common mistake.** Saying the top-plate connection fails because the VCO would "load" or "discharge" $C_P$. The VCO input draws no current; the real problem is dynamic: the loop loses its zero and has no damping.

**Common mistake.** Stating that "the zero is lost" without the reason: a resistor in series with an ideal current source cannot influence the capacitor voltage, and only the node above it carries the proportional correction $I_{CP}R_P$.

**Common mistake.** Preferring the top-plate connection because the control voltage is smoother. A loop with $\zeta = 0$ never locks cleanly; ripple is reduced with a second, smaller capacitor across the $R_P$–$C_P$ branch, not by removing $R_P$ from the path.
