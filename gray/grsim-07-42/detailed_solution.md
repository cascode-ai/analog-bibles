# Detailed solution - grsim-07-42

The folding node (drain of $M_1$, source of $M_{1A}$) is a low-resistance node loaded by several device capacitances, so its pole lies far above the unity-gain frequency, which is set by $g_{m1}$ and $C_L$. Short-circuit time constants give that pole: all other capacitors are shorted, and the one remaining node capacitance is multiplied by the resistance seen there. The phase contribution at the unity-gain frequency then follows from $\arctan(\omega_u/|p|)$, and ngspice checks both the pole and the phase.

### Step 1 — Small-signal parameters

All transistors are in saturation, with $\lambda=0$ and $\gamma=0$, so each is a pure transconductance $g_m=\sqrt{2\mu C_{ox}(W/L)|I_D|}$. The two values needed are those of the input pair (p-channel, 100 µA) and of the cascode $M_{1A}$ (n-channel, 100 µA):

$$
\begin{aligned}
g_{m1}&=\sqrt{2(30\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm{A})}=0.2449\ \mathrm{mA/V},\\
g_{m1A}&=\sqrt{2(60\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm{A})}=0.3464\ \mathrm{mA/V},\qquad \frac{1}{g_{m1A}}=2.887\ \mathrm{k\Omega}.
\end{aligned}
$$

$M_{11}$ carries 200 µA: 100 µA goes to $M_1$'s drain and 100 µA flows up through $M_{1A}$ into the mirror.

### Step 2 — Capacitance at the folding node

With every other capacitor shorted, the gates of $M_1$ (voltage drive), $M_{11}$ and $M_{1A}$ (low-impedance bias) and all bodies are ac grounds. Every capacitor touching the drain of $M_1$ therefore goes to ground:

| Capacitor | Value |
|---|---|
| $C_{gd1}$ | 3 fF |
| $C_{db1}$ | 10 fF |
| $C_{gd11}$ (doubled width) | 6 fF |
| $C_{db11}$ (doubled width) | 20 fF |
| $C_{gs1A}$ | 20 fF |
| $C_{sb1A}$ | 10 fF |
| Total $C_{X}$ | 69 fF |

### Step 3 — Resistance and pole

Three devices connect to the node. With $\lambda=0$, the drains of $M_1$ and $M_{11}$ have infinite resistance. Looking into the source of $M_{1A}$, with its gate at ac ground and its drain node shorted to ground by the shorted capacitors, a test voltage $v_x$ draws $g_{m1A}v_x$ (no body effect since $\gamma=0$). So

$$
R_X=\infty\parallel\infty\parallel\frac{1}{g_{m1A}}=2.887\ \mathrm{k\Omega}.
$$

The short-circuit time constant and the pole it gives are

$$
\tau_X=R_XC_X=(2.887\ \mathrm{k\Omega})(69\ \mathrm{fF})=0.1992\ \mathrm{ns},\qquad |p_{nd}|=\frac{1}{\tau_X}=5.02\times10^{9}\ \mathrm{rad/s}\ (799\ \mathrm{MHz}).
$$

The drain of $M_2$ is identical (same devices, same currents), so it gives the same pole.

### Step 4 — Unity-gain frequency and phase shift

The output node is high-impedance (infinite with $\lambda=0$), so the dominant pole is there and the gain falls as $G_m/(sC_{\text{out}})$. The full differential signal current reaches the output: $M_2$'s current enters $M_{2A}$ directly, and $M_1$'s current is mirrored by $M_3$–$M_4$. Hence $G_m=g_{m1}$ and

$$
\omega_u=\frac{g_{m1}}{C_L}=\frac{0.2449\ \mathrm{mA/V}}{1\ \mathrm{pF}}=2.45\times10^{8}\ \mathrm{rad/s}\ (39\ \mathrm{MHz}).
$$

The drain capacitances at the output ($C_{db4A}+C_{gd4A}+C_{db2A}+C_{gd2A}=26$ fF) lower this slightly to $2.39\times10^{8}$ rad/s. The phase added by the nondominant pole at $\omega_u$ is

$$
\Delta\phi=\arctan\frac{\omega_u}{|p_{nd}|}=\arctan\frac{2.45\times10^{8}}{5.02\times10^{9}}=\arctan(0.049)\approx2.8^\circ
$$

(2.7° with the 26 fF included). Because $\omega_u\ll|p_{nd}|$, the folding node costs only a few degrees of phase margin.

### Step 5 — SPICE check

The deck uses level-1 models ($\lambda=0$, $\gamma=0$) with every bias-point capacitance of every device added as a fixed capacitor ($M_{11}$, $M_{12}$ with $W=20\ \mu$m and doubled capacitances). The bias voltages are chosen so that each device carries its stated current and $V_{GD11}=V_{GD12}=0$. A 1-GΩ resistor from output to ground only defines the dc output level; its pole is near 1 krad/s. The input is a balanced ±0.5-V ac drive.

```spice
* grsim-07-42 folded cascode (capacitor list abbreviated)
.model nm nmos level=1 kp=60u vto=0.7 lambda=0 gamma=0
.model pm pmos level=1 kp=30u vto=-0.7 lambda=0 gamma=0
VDD vdd 0 3
VSS vss 0 -3
VB1 b1 0 1.1453
VB2 b2 0 -0.4453
VB3 b3 0 -1.7226
Vp inp 0 dc 0 ac 0.5
Vn inn 0 dc 0 ac -0.5
M5 t b1 vdd vdd pm w=10u l=1u
M1 d1 inp t vdd pm w=10u l=1u
M2 d2 inn t vdd pm w=10u l=1u
M11 d1 b3 vss vss nm w=20u l=1u
M12 d2 b3 vss vss nm w=20u l=1u
M1A x b2 d1 vss nm w=10u l=1u
M2A o b2 d2 vss nm w=10u l=1u
M3 y y vdd vdd pm w=10u l=1u
M3A x x y vdd pm w=10u l=1u
M4 z y vdd vdd pm w=10u l=1u
M4A o x z vdd pm w=10u l=1u
CL o 0 1p
Rdc o 0 1G
* folding node d1 (d2 alike)
Cgd1 inp d1 3f
Cdb1 d1 0 10f
Cgd11 b3 d1 6f
Cdb11 d1 0 20f
Cgs1A b2 d1 20f
Csb1A d1 0 10f
* ... Cgs, Cgd, Csb, Cdb of all other devices
.ac dec 200 1k 10G
.pz inp inn o 0 vol pz
.end
```

The operating point gives 100 µA in $M_1$, $M_{1A}$, $M_{2A}$ and $M_{4A}$, $V_{D1}=V_{D2}=-1.723$ V and $V_O\approx0$, with all devices saturated.

| Quantity | Hand | ngspice |
|---|---|---|
| Folding-node pole | $5.02\times10^{9}$ rad/s (799 MHz) | $5.02\times10^{9}$ rad/s |
| Unity-gain frequency | 39 MHz (38 MHz with output parasitics) | 37.6 MHz |
| Phase at $\omega_u$ | −90° − 2.7° from the folding nodes | −96.6° |
| Phase with folding-node capacitors removed | −90° | −93.8° |

Removing the capacitors at $d_1$ and $d_2$ changes the phase at the unity-gain frequency from −96.6° to −93.8°, so the folding nodes contribute 2.9°, in line with the 2.7°–2.8° estimate. The remaining ≈ 3.8° comes mainly from the mirror nodes of $M_3$–$M_{3A}$, which carry half the signal and have a pole of a few hundred megahertz. In total the excess phase is only a few degrees, confirming that the folding-node pole is far beyond the unity-gain frequency.
