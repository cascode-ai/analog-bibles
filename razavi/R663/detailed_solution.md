# Detailed solution - R663

**Approach.** Count the integrators in the loop in each mode. In phase lock there are two: the loop-filter capacitor and the VCO (frequency → phase). During frequency acquisition the PFD responds to the frequency difference, so the fed-back variable is the VCO frequency, a static function of the control voltage; the VCO's integrator drops out of the loop and only the capacitor remains.

### Step 1 — Where the order comes from in phase-lock mode

In lock, the PFD/charge pump is a static gain from phase to current, $I_{CP} = \frac{I_P}{2\pi}(\Phi_{in} - \Phi_{out})$; the series $R_P$–$C_P$ filter contains one integrator ($C_P$); and the VCO, $\Phi_{out} = (K_{VCO}/s)V_{cont}$, is a second integrator, because it sets the *frequency* while the PFD compares *phase*. The loop gain

$$H_{open}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s^2}$$

has two poles at the origin, and the characteristic equation $s^2 + \frac{I_PK_{VCO}R_P}{2\pi}s + \frac{I_PK_{VCO}}{2\pi C_P} = 0$ is **second order**, with two state variables: the charge on $C_P$ and the output phase $\phi_{out}$.

### Step 2 — What the PFD does when the frequencies differ

Suppose $\omega_{in} > \omega_{out}$, far apart.

- Each input edge sets $Q_A$, and only the next VCO edge clears it (through the reset); extra input edges in between change nothing. So $Q_A$ is high for most of each VCO period, while $Q_B$ only produces reset glitches.
- The relative phase sweeps continuously (by $2\pi$ for every extra input cycle), so no particular phase is ever held.
- Averaged over many cycles, the pump current is set by the **sign and size of the frequency difference**: about $+I_P/2$ when the input is only slightly faster (the duty cycle of $Q_A$ sweeps from 0 to 1 as the phase slips, averaging 1/2), rising toward $+I_P$ when it is much faster. A slower input gives the mirror image, with $Q_B$ active and negative current.

The average current thus does not depend on the instantaneous phase; the PFD acts as a **frequency detector**:

$$\overline{I_{CP}} = f(\omega_{in} - \omega_{out}).$$

### Step 3 — The VCO becomes a static gain

What is compared now is the VCO *frequency*, related to the control voltage by

$$\omega_{out} = \omega_0 + K_{VCO}V_{cont},$$

with no integral: in this loop the VCO is a plain gain $K_{VCO}$ (V → rad/s), not an integrator $K_{VCO}/s$ (V → rad). The output phase still exists, but the detector no longer depends on it, so it is outside the feedback loop. **Removing a pole at the origin from the loop lowers the order by one**; only the capacitor's integration remains, with the zero from $R_P$.

### Step 4 — Linearized model of frequency acquisition

Linearize the frequency detector with a gain $K_{FD}$ (current per rad/s), $\overline{I_{CP}} = K_{FD}(\omega_{in} - \omega_{out})$:

$$\omega_{out} = \omega_0 + K_{VCO}K_{FD}\left(R_P + \frac{1}{C_Ps}\right)(\omega_{in} - \omega_{out}).$$

For small changes ($\omega_0$ drops out) and with $K = K_{FD}K_{VCO}$ (units A/V, i.e. siemens), the loop gain

$$L(s) = K\left(R_P + \frac{1}{C_Ps}\right) = K\,\frac{R_PC_Ps + 1}{C_Ps}$$

has a **single** pole at the origin, and

$$
\begin{aligned}
\frac{\omega_{out}}{\omega_{in}} &= \frac{L}{1 + L} = \frac{K(R_PC_Ps + 1)}{C_Ps + K(R_PC_Ps + 1)}\\
&= \frac{K(1 + R_PC_Ps)}{K + (1 + KR_P)\,C_Ps} .
\end{aligned}
$$

The denominator is first order, with one real pole at

$$s = -\frac{K}{(1 + KR_P)\,C_P},$$

so $\omega_{out}$ approaches $\omega_{in}$ monotonically, and the loop is unconditionally stable.

### Step 5 — Large-signal picture

For a large frequency error the pump current is nearly constant, $\overline{I_{CP}} \approx +I_P/2$ to $+I_P$ (for $\omega_{in} > \omega_{out}$), so the capacitor voltage ramps linearly,

$$\frac{dV_{C_P}}{dt} = \frac{\overline{I_{CP}}}{C_P},$$

and so does the VCO frequency, at the rate $K_{VCO}\overline{I_{CP}}/C_P$. The only stored quantity is the charge on $C_P$: **one state variable**, a first-order system ($R_P$ only adds the offset $\overline{I_{CP}}R_P$ to $V_{cont}$ and stores nothing). Once $\omega_{out}$ is close enough to $\omega_{in}$ that the phase stops slipping, the PFD responds to phase again, the VCO's integration re-enters the loop, and the loop is second order again.

### Result

During frequency acquisition the PFD/charge pump produces an average current set by the frequency difference $\omega_{in} - \omega_{out}$, not by phase. The quantity fed back is therefore the VCO *frequency*, which depends statically on the control voltage ($\omega_{out} = \omega_0 + K_{VCO}V_{cont}$): the VCO acts as a gain $K_{VCO}$ rather than the integrator $K_{VCO}/s$ it represents in phase lock. One of the two poles at the origin disappears from the loop, and only the loop-filter capacitor's integration remains, so the order drops from two to one. With a linearized detector gain $K_{FD}$, $\omega_{out}/\omega_{in} = K(1 + R_PC_Ps)/[K + (1 + KR_P)C_Ps]$, $K = K_{FD}K_{VCO}$, which has a single pole.

**Common mistake.** Attributing the lower order to the loop filter, e.g. claiming that $R_P$ or $C_P$ is effectively disconnected or the charge pump idle. The pump and filter are fully active; what disappears is the VCO's frequency-to-phase integration.

**Common mistake.** Saying only that "the loop is nonlinear during acquisition". That does not explain the lower order; the point is that the detector no longer senses phase, so the integral relating phase to frequency is outside the loop.
