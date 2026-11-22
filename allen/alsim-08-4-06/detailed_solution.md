# Detailed solution - alsim-08-4-06

The cross-coupled pair M6–M7 adds positive feedback to a diode-loaded differential pair. Whichever side currently conducts more also turns on its cross-coupled device, and that device feeds current into the other side's output. So the input must push the off side's current past this extra current before the circuit can switch. Write the switching condition for a rising input, solve for the input-pair currents, and convert them to a gate-voltage difference. Symmetry gives the falling trip point. A transient simulation with a slow triangular input confirms the hysteresis.

### Step 1 — State before the positive trip point

With $v_{in}$ well below zero, M2 is off and M1 carries the whole tail current through its diode load M3. M6 shares M3's gate and is five times wider ($W_6/W_3=10/2$), so it tries to source

$$
i_6=\frac{(W/L)_6}{(W/L)_3}\,i_3=5\,i_3
$$

into node $v_{o2}$. M7 shares M4's gate, and M4 carries no current, so M7 is off. With M2 unable to absorb $i_6$, $v_{o2}$ sits near $V_{DD}$.

### Step 2 — Switching condition and currents

As $v_{in}$ rises, M2 takes over part of the tail current. The output can only start to fall once M2 sinks everything M6 supplies, i.e. $i_2=i_6$. At that point M4 begins to conduct, M7 turns on, regeneration takes over and the circuit flips. With $i_3=i_1$ and $i_1+i_2=i_5$:

$$
i_2=5i_1,\qquad i_1+5i_1=i_5\;\Rightarrow\;i_1=\frac{i_5}{6}=8.33\ \mu\mathrm A,\qquad i_2=\frac{5i_5}{6}=41.67\ \mu\mathrm A .
$$

### Step 3 — Positive trip point

Both input devices are saturated and share the source node, so their thresholds, including any body effect, are equal and cancel in the difference. With $\beta=K'_N(W/L)=(110\ \mu\mathrm{A/V^2})(10)=1100\ \mu\mathrm{A/V^2}$:

$$
v_{GS1}=V_T+\sqrt{\frac{2i_1}{\beta}}=0.7+\sqrt{\frac{2(8.33\ \mu)}{1100\ \mu}}=0.823\ \mathrm V,\qquad
v_{GS2}=0.7+\sqrt{\frac{2(41.67\ \mu)}{1100\ \mu}}=0.975\ \mathrm V,
$$

$$
V_{TRP}^+=v_{in}-0=v_{GS2}-v_{GS1}=0.152\ \mathrm V .
$$

### Step 4 — Negative trip point

After switching, M2 carries the current, M4 and M7 are on, and M7 ($5\times$ M4) feeds $5i_4$ into $v_{o1}$. A falling input must make M1's current reach $5i_2$. The circuit is symmetric, so

$$
V_{TRP}^-=-0.152\ \mathrm V .
$$

The hysteresis width $V_{TRP}^+-V_{TRP}^-=0.30$ V scales as $\sqrt{i_5}$ for fixed sizes.

### Step 5 — Simulation

The input ramps from −0.5 V to +0.5 V and back over 200 µs, slowly enough to be quasi-static:

```spice
* alsim-08-4-06 comparator with internal hysteresis
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
IB vdd b DC 50U
M8 b b vss vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M5 t b vss vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M1 o1 0 t vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M2 o2 vin t vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M3 o1 o1 vdd vdd PCH W=2U L=1U AD=20P AS=20P PD=24U PS=24U
M4 o2 o2 vdd vdd PCH W=2U L=1U AD=20P AS=20P PD=24U PS=24U
M6 o2 o1 vdd vdd PCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M7 o1 o2 vdd vdd PCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
VIN vin 0 PWL(0 -0.5 100U 0.5 200U -0.5)
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.04 TOX=140E-10
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 PHI=0.8 LAMBDA=0.05 TOX=140E-10
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35
.TRAN 10N 200U 0 20N
.PRINT TRAN V(O2) V(VIN)
.END
```

M5 and M8 are identical (10/1 here), so $i_5=I_{BIAS}=50\ \mu$A. The drain areas are not specified, so W × 10 µm is assumed.

![Simulated hysteresis loop of vo2 versus vin for i5 = 50 µA, with the hand trip points of ±0.152 V dotted](/q/alsim-08-4-06/solution-hysteresis.svg)

| | Hand ($\lambda=0$) | ngspice (level 1) |
|---|---|---|
| $V_{TRP}^+$ | +0.152 V | +0.144 V |
| $V_{TRP}^-$ | −0.152 V | −0.143 V |
| $v_{o2}$ high / low | — | 2.50 V / 0.83 V |

The loop is symmetric, with $v_{o2}$ high for negative inputs and low for positive inputs. The simulated trip points are about 8 mV inside the hand values. Channel-length modulation changes the current ratio $i_6/i_3$ from exactly 5, because M6 and M3 operate at different $V_{SD}$, and regeneration begins slightly before $i_2$ fully equals $i_6$. Rerunning the deck with the LEVEL-3 parameters narrows the loop further, to +0.115 V / −0.114 V, because of mobility degradation and the smaller saturation voltage.
