# Detailed solution - R663

**Approach.** Count the integrators in the loop in each mode. In phase lock the loop variable is phase, and there are two integrators: the loop-filter capacitor and the VCO (frequency → phase). During frequency acquisition the PFD responds to the frequency difference, so the fed-back variable is the VCO frequency, which is a static function of the control voltage. The VCO's integrator then drops out of the loop, and only the capacitor remains.

### Step 1 — Where the order comes from in phase-lock mode

In the locked state, the averaged model of the charge-pump PLL has three blocks:

- **PFD + charge pump:** current $I_{CP} = \dfrac{I_P}{2\pi}(\Phi_{in} - \Phi_{out})$, a static gain from phase to current;
- **loop filter** ($R_P$ in series with $C_P$): $V_{cont} = I_{CP}\left(R_P + \dfrac{1}{C_Ps}\right)$, which contains one integrator ($C_P$ accumulates charge);
- **VCO:** $\Phi_{out} = \dfrac{K_{VCO}}{s}V_{cont}$, a second integrator, because the VCO sets the *frequency* and the PFD compares *phase*, which is the time integral of frequency.

The loop gain is

$$H_{open}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s^2},$$

with two poles at the origin. The characteristic equation $s^2 + \frac{I_PK_{VCO}R_P}{2\pi}s + \frac{I_PK_{VCO}}{2\pi C_P} = 0$ is **second order**. Physically there are two state variables: the charge (voltage) on $C_P$ and the output phase $\phi_{out}$.

### Step 2 — What the PFD does when the frequencies differ

Suppose the VCO starts far from the input frequency, say $\omega_{in} > \omega_{out}$.

- Input edges arrive more often than VCO edges. Each input edge sets $Q_A$; $Q_A$ is cleared only by the next VCO edge (through the reset). Extra input edges in between change nothing, because $Q_A$ is already high.
- So $Q_A$ is high for most of each VCO period, while $Q_B$ only produces short reset glitches. The relative phase between the two signals sweeps continuously (it advances by $2\pi$ for every extra input cycle), so no particular phase is ever held.
- Averaged over many cycles, the pump current is determined by the **sign and size of the frequency difference**: about $+I_P/2$ when the input is only slightly faster (the duty cycle of $Q_A$ sweeps from 0 to 1 as the phase slips, averaging 1/2), rising toward $+I_P$ when the input is much faster. A slower input gives the mirror image, with $Q_B$ active and negative current.

The important point is that this average current does not depend on the instantaneous phase at all: it is a function of $\omega_{in} - \omega_{out}$. In this mode the PFD acts as a **frequency detector**:

$$\overline{I_{CP}} = f(\omega_{in} - \omega_{out}).$$

### Step 3 — The VCO becomes a static gain

What is compared now is the VCO's *frequency*, and that is related to the control voltage by the static characteristic

$$\omega_{out} = \omega_0 + K_{VCO}V_{cont}.$$

There is no integral in this relation: a change in $V_{cont}$ changes $\omega_{out}$ immediately. From the point of view of this loop, the VCO is a plain gain $K_{VCO}$ (V → rad/s), not an integrator $K_{VCO}/s$ (V → rad). The output phase still exists, but the detector output no longer depends on it, so it is no longer part of the feedback loop.

**Removing a pole at the origin from the loop lowers the order by one.** Only the capacitor's integration remains, together with the zero from $R_P$.

### Step 4 — Linearized model of frequency acquisition

Linearize the frequency detector with a gain $K_{FD}$ (current per rad/s), so $\overline{I_{CP}} = K_{FD}(\omega_{in} - \omega_{out})$. The loop then reads

$$\omega_{out} = \omega_0 + K_{VCO}K_{FD}\left(R_P + \frac{1}{C_Ps}\right)(\omega_{in} - \omega_{out}).$$

Treat small changes around the operating point (the constant $\omega_0$ then drops out) and let $K = K_{FD}K_{VCO}$, which has units of A/V, i.e. siemens. The loop gain is

$$L(s) = K\left(R_P + \frac{1}{C_Ps}\right) = K\,\frac{R_PC_Ps + 1}{C_Ps},$$

which has a **single** pole at the origin. The closed-loop frequency response is

$$
\begin{aligned}
\frac{\omega_{out}}{\omega_{in}} &= \frac{L}{1 + L} = \frac{K(R_PC_Ps + 1)}{C_Ps + K(R_PC_Ps + 1)}\\
&= \frac{K(1 + R_PC_Ps)}{K + (1 + KR_P)\,C_Ps} .
\end{aligned}
$$

The denominator is first order in $s$, with one real pole at

$$s = -\frac{K}{(1 + KR_P)\,C_P}.$$

A first-order loop with a real negative pole approaches its final value monotonically and is unconditionally stable, so $\omega_{out}$ moves toward $\omega_{in}$ without ringing.

### Step 5 — Large-signal picture

When the frequency error is large, the pump current is nearly constant, $\overline{I_{CP}} \approx +I_P/2$ to $+I_P$ (for $\omega_{in} > \omega_{out}$). The capacitor voltage then ramps linearly,

$$\frac{dV_{C_P}}{dt} = \frac{\overline{I_{CP}}}{C_P},$$

and so does the VCO frequency, at the rate $K_{VCO}\overline{I_{CP}}/C_P$. Throughout this motion the only quantity that needs to be remembered is the charge on $C_P$: **one state variable**, i.e. a first-order system. (The resistor only adds the offset $\overline{I_{CP}}R_P$ to $V_{cont}$; it stores nothing.)

Once $\omega_{out}$ comes close enough to $\omega_{in}$ that the phase difference stops slipping, the PFD starts to respond to phase again. The VCO's frequency-to-phase integration re-enters the loop, the output phase becomes a second state variable, and the loop is second order again.

### Result

During frequency acquisition the PFD/charge pump produces an average current set by the frequency difference $\omega_{in} - \omega_{out}$, not by phase. The quantity fed back is therefore the VCO *frequency*, which depends statically on the control voltage ($\omega_{out} = \omega_0 + K_{VCO}V_{cont}$): the VCO acts as a gain $K_{VCO}$ rather than the integrator $K_{VCO}/s$ it represents in phase lock. One of the two poles at the origin disappears from the loop, and only the loop-filter capacitor's integration remains, so the order drops from two to one. With a linearized detector gain $K_{FD}$, $\omega_{out}/\omega_{in} = K(1 + R_PC_Ps)/[K + (1 + KR_P)C_Ps]$, $K = K_{FD}K_{VCO}$, which has a single pole.

**Common mistake.** Attributing the lower order to the loop filter, for example claiming that $R_P$ or $C_P$ is effectively disconnected or that the charge pump is idle. The filter and pump are fully active (the pump is on almost all the time); what disappears is the VCO's frequency-to-phase integration.

**Common mistake.** Saying only that "the loop is nonlinear during acquisition". It is nonlinear, but that does not explain why the order is lower. The essential point is which integrator is missing: the detector no longer senses phase, so the integral relating phase to frequency is not inside the loop.

**Common mistake.** Concluding that the order increases because the PFD adds its frequency-detection behaviour on top of phase detection. The PFD is a single block whose output depends either on phase (near lock) or on frequency (far from lock), never adding a new integrator.
