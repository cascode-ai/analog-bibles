# Detailed solution - alsim-07-1-03

The crossover stage consists of two common-source inverters, M1–M3 and M2–M4, driven by the same input $v_{in}'$. Each has an n-channel driver and a p-channel current-source load mirrored from M7. The two inverters switch at slightly different input voltages because their drivers and load currents differ. The gap between the two switching points sets the window over which neither output transistor conducts. Find the switching points by hand, then sweep $v_{in}'$ in SPICE and plot the gate voltages of M5 and M6.

### Step 1 — Load currents

M7 (240/14) is diode connected with 100 µA:

$$
100\ \mu\mathrm A=\frac{K'_P}{2}\frac{240}{14}(V_{SG7}-0.9)^2(1+0.04V_{SG7})\;\Rightarrow\;V_{SG7}=1.70\ \mathrm V .
$$

M3 (144/14) and M4 (240/14) share this gate voltage. Without λ they would carry $(144/240)(100)=60\ \mu$A and 100 µA. With their outputs near mid-supply ($V_{SD}\approx6$ V), channel-length modulation raises these to about 70 µA and 116 µA. All sources sit at their bulk rails, so there is no body effect.

### Step 2 — Switching points

Each inverter's output swings through mid-supply when its driver, in saturation, carries the load current:

$$
V_A=V_{SS}+V_{TN}+\sqrt{\frac{2I_3}{K'_N(W/L)_1}}=V_{SS}+0.7+\sqrt{\frac{2(60\ \mu)}{(47\ \mu)(61.3)}}=V_{SS}+0.904\ \mathrm V,
$$

$$
V_B=V_{SS}+0.7+\sqrt{\frac{2(100\ \mu)}{(47\ \mu)(48)}}=V_{SS}+0.998\ \mathrm V,\qquad V_C=V_B-V_A\approx0.094\ \mathrm V .
$$

M1 (460/7.5) is wider and carries less load current than M2 (360/7.5), so the M1–M3 inverter switches first and $V_C$ is positive. Each inverter's gain at its switching point is $g_{m}/(g_{ds,n}+g_{ds,p})$, of order 100, so each transition spans less than 0.1 V of input.

### Step 3 — Simulation deck

The input stage is replaced by a dc source on $v_{in}'$, which is swept across the switching region. The output stage and $R_L$ are kept so that the gate nodes see their real loads.

```spice
* alsim-07-1-03 crossover and output stage
VDD vdd 0 DC 6
VSS vss 0 DC -6
IREF g7 0 DC 100U
M7 g7 g7 vdd vdd PCH W=240U L=14U
M3 g5 g7 vdd vdd PCH W=144U L=14U
M4 g6 g7 vdd vdd PCH W=240U L=14U
M1 g5 vin vss vss NCH W=460U L=7.5U
M2 g6 vin vss vss NCH W=360U L=7.5U
C1 vin g5 8P
C2 vin g6 5P
M5 out g5 vss vss NCH W=1400U L=14U
M6 out g6 vdd vdd PCH W=2400U L=7.5U
RL out 0 100
VIN vin 0 DC -5
.MODEL NCH NMOS LEVEL=1 KP=47U VTO=0.7 GAMMA=0.85 PHI=0.62 LAMBDA=0.05
.MODEL PCH PMOS LEVEL=1 KP=17U VTO=-0.9 GAMMA=0.25 PHI=0.62 LAMBDA=0.04
.DC VIN -5.2 -4.9 0.1M
.PRINT DC V(G5) V(G6) V(OUT)
.END
```

### Step 4 — Simulated transfer curves

![Simulated gate voltages of M5 and M6 versus the crossover-stage input, with the switching points VA and VB and the output voltage](/q/alsim-07-1-03/solution-vtc.svg)

| | M1–M3 (gate of M5) | M2–M4 (gate of M6) |
|---|---|---|
| Output crosses 0 V at $v_{in}'-V_{SS}=$ | 0.893 V ($V_A$) | 0.981 V ($V_B$) |
| Slope at that point | −147 V/V | −100 V/V |
| Swing from +5 V to −5 V between | 0.862 and 0.931 V | 0.936 and 1.037 V |

Both curves are inverting and rail to rail, with the M2–M4 curve to the right of the M1–M3 curve, as in the idealized [Fig. 2]. The crossover voltage is

$$
V_C=V_B-V_A=0.981-0.893=0.089\ \mathrm V,
$$

close to the λ-free hand estimate of 0.094 V. Both switching points are about 10 mV lower than the hand values, because λ raises the load currents.

The inverters have finite gain, so the window in which both output transistors are off is much narrower than $V_C$. M5 cuts off when its gate falls below $V_{SS}+0.7$ V, at $v_{in}'-V_{SS}=0.934$ V. M6 turns on when its gate falls below $V_{DD}-0.9$ V, at 0.935 V. The true dead band is therefore only about 1 mV, which the dotted output curve shows as a short flat step near 0 V.
