# Detailed solution - grsim-09-27

Without $C_c$ the two-stage op amp has two widely spaced but uncompensated poles: one at the high-impedance first-stage output, and one at the output node, set by parasitic capacitances. The loop is closed by the divider 1 MΩ / $R_x$, a frequency-independent feedback factor $\beta=R_x/(1\ \mathrm{M\Omega}+R_x)$, so the loop gain is $T(j\omega)=a(j\omega)\beta$. For a phase margin $\phi_M$, find the frequency where the open-loop phase is $-180^\circ+\phi_M$ and choose $\beta=1/|a|$ there. Simulate the open-loop response, derive $R_x$ this way, then check the closed loops, including the effect of the input capacitance of $M_1$ that the open-loop run does not see.

### Step 1 — Simulation setup

The models are level 1 with the given $k'$, $V_t$, $t_{ox}$, overlap and junction data. Effective channel length is $L_{\text{eff}}=8-0.6-1=6.4\ \mu$m for all devices, giving $\lambda_n=0.2/6.4=0.031\ \mathrm{V^{-1}}$ and $\lambda_p=0.1/6.4=0.0156\ \mathrm{V^{-1}}$. Body effect uses $\gamma_n=0.21$, $\gamma_p=0.67\ \mathrm{V^{1/2}}$. Drain and source regions are 2 µm wide: $A_D=A_S=W\cdot2\ \mu$m and $P_D=P_S=2(W+2\ \mu\mathrm{m})$. With 20 µA of bias, the devices carry $I_{D1}=I_{D2}\approx10$ µA and $I_{D6}=I_{D7}\approx21$ µA. As in grsim-09-21, $M_1$'s gate is the inverting input with respect to $v_o$, which is why the feedback divider returns to it.

```spice
* grsim-09-27 uncompensated op amp (effective L = 6.4 um, 2-um diffusions)
.model nm nmos level=1 kp=60.4u vto=0.7 lambda=0.03125 gamma=0.21 phi=0.58 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.08m cjsw=0.5n mj=0.5 mjsw=0.5 pb=0.65
.model pm pmos level=1 kp=30.2u vto=-0.7 lambda=0.015625 gamma=0.67 phi=0.70 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.20m cjsw=1.5n mj=0.5 mjsw=0.5 pb=0.65
VDD vdd 0 5
VSS vss 0 -5
IB g8 vss 20u
M8 g8 g8 vdd vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M5 s g8 vdd vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M7 o g8 vdd vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M1 d1 inm s vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M2 d2 inp s vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M3 d1 d1 vss vss nm w=50u l=6.4u ad=100p as=100p pd=104u ps=104u
M4 d2 d1 vss vss nm w=50u l=6.4u ad=100p as=100p pd=104u ps=104u
M6 o d2 vss vss nm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
* open loop: RL o 0 1meg / Lf o inm 1e9 / Cf inm 0 1 / Vp inp 0 ac 1
* closed loop: RF o inm 1meg / RX inm 0 {Rx} / Vp inp 0 ac 1 pulse(0 {0.1/gain} 50n 1n 1n 10u 20u)
.ac dec 200 10 1g
.end
```

### Step 2 — Open-loop response

With the 1-MΩ load and $M_1$'s gate held at ac ground:

| Quantity | ngspice |
|---|---|
| DC gain | $2.55\times10^{4}$ (88.1 dB) |
| Dominant pole | 15.7 kHz |
| Phase −135° (second pole) | 6.9 MHz, where $\lvert a\rvert=46$ |
| Phase −180° | 29 MHz |

The first-stage output (gate of $M_6$, about 0.4 pF of $C_{gs6}$ plus junctions, at roughly 2 MΩ) sets the low pole. The output node (junction and overlap capacitances, about 0.2 pF, at roughly 0.5 MΩ, split further by $C_{gd6}$) sets the second pole in the megahertz range. Phase reaches −180° at 29 MHz with $|a|\approx3$, so a unity-gain follower would be unstable.

### Step 3 — $R_x$ from the open-loop data

At the crossover frequency $f_c$ the open-loop phase must be $-180^\circ+\phi_M$, and $|a(f_c)|\beta=1$:

$$
\beta=\frac{1}{|a(f_c)|},\qquad R_x=\frac{\beta}{1-\beta}\,(1\ \mathrm{M\Omega}),\qquad \frac{v_o}{v_i}\Big|_{\text{dc}}\approx\frac{1}{\beta}.
$$

| $\phi_M$ | $f_c$ | $\lvert a(f_c)\rvert=1/\beta$ | $R_x$ |
|---|---|---|---|
| 80° | 1.49 MHz | 265 | 3.79 kΩ |
| 60° | 4.36 MHz | 83.6 | 12.1 kΩ |
| 45° | 6.84 MHz | 46.7 | 21.9 kΩ |
| 20° | 13.2 MHz | 15.6 | 68.6 kΩ |

For example, at 60° the phase is −120° at 4.36 MHz, where $|a|=83.6$; then $\beta=0.0120$ and $R_x=0.0120/(1-0.0120)\times1\ \mathrm{M\Omega}=12.1$ kΩ.

### Step 4 — Closed loops with these $R_x$: the missing input pole

Simulating the feedback circuits with these values (the 1-MΩ resistor now being the feedback resistor), and measuring the actual loop gain by double injection at $M_1$'s gate, gives:

| Target $\phi_M$ | Actual $\phi_M$ | Peaking | Overshoot (100-mV step) |
|---|---|---|---|
| 80° | 79.6° | none | 0 |
| 60° | 54.2° | 0.7 dB | 14 % |
| 45° | 24.3° | 8.1 dB | 46 % |
| 20° | −37° | — | oscillates (output swings to about 4 V) |

The margins are too small, increasingly so for large $R_x$. The open-loop run drove $M_1$'s gate from an ideal source, but in the feedback circuit the gate is driven from $R_x\parallel1\ \mathrm{M\Omega}$. $M_1$'s input capacitance (mainly $C_{gs1}\approx\tfrac23WL_{\text{eff}}C_{ox}=0.37$ pF plus overlap, about 0.4 pF in total) then forms a feedback-network pole at $1/[2\pi(R_x\parallel1\ \mathrm{M\Omega})C_{\text{in}}]$. For $R_x=21.9$ kΩ this pole is near 19 MHz and costs about $\arctan(7.3/19)\approx21^\circ$ at the 7.3-MHz crossover, which is exactly the observed loss from 45° to 24°. For $R_x=68.6$ kΩ the pole drops to about 6 MHz, below the crossover, and the loop becomes unstable.

### Step 5 — $R_x$ from the true loop gain

Including that loading (sweeping $R_x$ and measuring the loop gain at $M_1$'s gate) gives the values that actually produce the required margins:

| $\phi_M$ | $R_x$ | DC closed-loop gain | Crossover | −3-dB bandwidth | Peaking | Overshoot |
|---|---|---|---|---|---|---|
| 80° | 3.64 kΩ | 272 (48.7 dB) | 1.46 MHz | 1.81 MHz | none | 0 |
| 60° | 10.2 kΩ | 98.7 (39.9 dB) | 3.92 MHz | 7.0 MHz | 0.05 dB | 8 % |
| 45° | 15.1 kΩ | 67.1 (36.5 dB) | 5.50 MHz | 9.6 MHz | 2.4 dB | 24 % |
| 20° | 23.4 kΩ | 43.6 (32.8 dB) | 7.63 MHz | 11.7 MHz | 9.8 dB | 51 % |

The input steps are 100 mV divided by the closed-loop gain, so each output moves by 100 mV.

![Closed-loop gain magnitude in dB versus frequency for the four phase margins: flat at 48.7 dB with no peaking at 80°, then progressively lower gain and stronger peaking near 5–8 MHz down to 9.8 dB at 20°](/q/grsim-09-27/solution-closed-loop.svg)

![Output responses to a 100-mV output step: smooth rise at 80°, 8 % overshoot at 60°, 24 % at 45°, and 51 % with prolonged ringing at 20°](/q/grsim-09-27/solution-step.svg)

### Step 6 — Comments

- **Gain versus bandwidth.** A larger $R_x$ means more feedback ($\beta$ larger), so the closed-loop gain falls ($\approx1/\beta$) and the bandwidth rises, from 1.8 MHz at a gain of 272 to 11.7 MHz at 43.6. The crossover moves up toward the second pole, which is what erodes the phase margin.
- **Peaking and overshoot follow the phase margin,** as for a second-order system: about 0 at 80° (overdamped), slight at 60° (8 % overshoot, essentially no peaking), 2.4 dB and 24 % at 45°, and 9.8 dB and 51 % with long ringing at 20°. These values agree with the standard two-pole predictions (≈ 9 %, ≈ 23 % and ≈ 55 % overshoot for 60°, 45° and 20°).
- **The feedback network is part of the loop.** $R_x$ values taken from an open-loop simulation with the feedback node driven by an ideal source overestimate the achievable margin, because the feedback resistors and $M_1$'s input capacitance add a pole. With the 1-MΩ feedback resistor, the input capacitance of only 0.4 pF already matters at a few megahertz, and the 20° design based on the open-loop data alone oscillates. The loop gain must be measured with the feedback network in place, by injection at $M_1$'s gate.
