# Detailed solution - alsim-06-6-11

Linear small-signal theory predicts identical overshoot for positive and negative steps. The asymmetry must therefore come from the 0.2-V steps being large enough to move the operating point of the class-A output stage. Estimate the current that the step demands, compare it with the output stage's bias, and follow how $g_{m6}$, and with it the output pole and the phase margin, change on each edge. A simulation with the given models confirms the mechanism.

### Step 1 — The output stage is class A

M6 (p-channel, 94/1) is the common-source driver. It can source almost any current its gate drive allows. M7 (n-channel, 14/1) is a current sink fixed at its bias, about 95 µA (98 µA in the simulation). The output pole and the RHP zero both scale with M6's transconductance:

$$
p_2\approx-\frac{g_{m6}}{C_L},\qquad z=\frac{g_{m6}}{C_c},\qquad g_{m6}=\sqrt{2K'_P\frac{W_6}{L_6}I_{D6}}\propto\sqrt{I_{D6}} .
$$

With 20 pF the phase margin at the bias point is only about 53° (simulated: open-loop phase −127° at $f_u=4.7$ MHz). Very small (±5 mV) steps overshoot by about 15% in both directions.

### Step 2 — Current demanded by a 0.2-V step

In the linear regime the follower's output starts to move at about $\omega_u\,\Delta V$:

$$
\frac{dv_{out}}{dt}\approx2\pi(4.7\ \mathrm{MHz})(0.2\ \mathrm V)\approx6\ \mathrm{V/\mu s},
\qquad
I\approx(C_L+C_c)\frac{dv_{out}}{dt}=(23\ \mathrm{pF})(6\ \mathrm{V/\mu s})\approx140\ \mu\mathrm A .
$$

This exceeds M7's 95–98 µA bias, so the step is not small for the output stage, even though it is small for the input stage.

### Step 3 — Rising edge: M6 turns on harder

To charge the load, M6 must supply this current on top of M7's bias. In the simulation its drain current rises from 98 µA to 202 µA. $g_{m6}$ increases by $\sqrt{202/98}=1.44$, so $|p_2|$ and the RHP zero move up in frequency during the transition. The loop has more phase margin while the output settles, and the positive overshoot is smaller than the small-signal value: 10.4% instead of 15%.

### Step 4 — Falling edge: M6 nearly cuts off

To discharge the load, the current must flow into M7, which cannot exceed its fixed bias; part of that bias also has to discharge $C_c$. M6 must therefore turn almost off: its current drops to 15 µA. $g_{m6}$ falls to $\sqrt{15/98}=0.39$ of its quiescent value, so $p_2$ moves down and the stage briefly slews (peak slope 3.7 V/µs against 4.5 V/µs on the rising edge). When the loop regains control it has much less phase margin, and the output overshoots below its final value: 22.9%, with slower recovery.

### Step 5 — Simulation

The follower of [Fig. 1] was simulated with $C_L=20$ pF, ±0.1-V steps with 10-ns edges, the given level-1 models, and AS = AD = W × 6 µm, PS = PD = 2W + 12 µm:

```spice
* alsim-06-6-11 follower, CL = 20 pF
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
IB vdd b DC 30U
M8 b b vss vss NCH W=4.5U L=1U AD=27P AS=27P PD=21U PS=21U
M5 t b vss vss NCH W=4.5U L=1U AD=27P AS=27P PD=21U PS=21U
M1 d1 out t vss NCH W=3U L=1U AD=18P AS=18P PD=18U PS=18U
M2 a inp t vss NCH W=3U L=1U AD=18P AS=18P PD=18U PS=18U
M3 d1 d1 vdd vdd PCH W=15U L=1U AD=90P AS=90P PD=42U PS=42U
M4 a d1 vdd vdd PCH W=15U L=1U AD=90P AS=90P PD=42U PS=42U
M6 out a vdd vdd PCH W=94U L=1U AD=564P AS=564P PD=200U PS=200U
M7 out b vss vss NCH W=14U L=1U AD=84P AS=84P PD=40U PS=40U
CC a out 3P
CL out 0 20P
VIN inp 0 DC -0.1 PULSE(-0.1 0.1 3U 10N 10N 1U 2U)
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38 LD=0.016U TOX=14N
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35 LD=0.014U TOX=14N
.TRAN 0.5N 4.5U
.PRINT TRAN V(OUT) I(VDD)
.END
```

![Simulated follower output for ±0.1 V steps with 20 pF and 10 pF loads, showing the larger overshoot on the falling edge](/q/alsim-06-6-11/solution-step.svg)

![Simulated drain current of M6 during the steps with 20 pF, rising to 202 µA on the rising edge and dropping to 15 µA on the falling edge](/q/alsim-06-6-11/solution-id6.svg)

| Step | $C_L$ = 20 pF overshoot | $C_L$ = 10 pF overshoot | $I_{D6}$ excursion (20 pF) |
|---|---|---|---|
| ±5 mV (linear) | 14.7% / 15.0% | — | negligible |
| −0.1 → +0.1 V | 10.4% | 2.3% | 98 → 202 µA |
| +0.1 → −0.1 V | 22.9% | 6.4% | 98 → 15 µA |

The 10-pF run, with more phase margin overall, gives the few-percent versus larger negative overshoot pattern of [Fig. 2]. The 20-pF run shows the same asymmetry more strongly.

The positive overshoot is smaller because the rising edge increases M6's current and $g_{m6}$, which raises the nondominant pole and the phase margin. The falling edge starves M6, because M7 can only sink its fixed bias, so $g_{m6}$ and the phase margin collapse. The same mechanism makes the large-signal negative slew rate smaller than the positive one. A larger output-stage bias current, enough for M7 to supply the $C_L$ and $C_c$ currents, or a push–pull output stage would make the two overshoots equal.
