# Detailed solution - alsim-03-6-06

The amplifier is a common-source stage M1 with the p-channel mirror M2–M3 as its load; M3 and R1 set the mirror current. One deck carries all three analyses: a dc sweep for the transfer curve, an ac analysis about the bias point where $v_{OUT}=2.5$ V, and a transient run with the PWL input. The level-1 models have no device capacitances, so the 5-pF load is the only capacitance.

### Step 1 — Simulation deck

```spice
* alsim-03-6-06 simple MOS amplifier
M1 2 1 0 0 NCH W=5U L=1U
M2 2 3 4 4 PCH W=5U L=1U
M3 3 3 4 4 PCH W=5U L=1U
R1 3 0 200K
VDD 4 0 DC 5
VIN 1 0 DC 0.962765 AC 1 PWL(0 0 1U 0 1.05U 3 3U 3 3.05U 0)
CL 2 0 5P
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.DC VIN 0 5 1M
.AC DEC 100 100 100MEG
.TRAN 1N 4U
.END
```

The dc value of VIN is used for the operating point of the ac analysis; it comes from part (a). The sweep, the ac source and the PWL waveform are each used only by their own analysis.

### Step 2 — Mirror bias

M3 is diode connected and saturated, with $K'_P(W/L)/2=125\ \mu\mathrm{A/V^2}$:

$$
\frac{5-V_{SG3}}{200\ \mathrm{k\Omega}}=(125\ \mu\mathrm{A/V^2})(V_{SG3}-0.7)^2(1+0.05V_{SG3})
\;\Rightarrow\;V_{SG3}=1.085\ \mathrm V,\quad I_{REF}=19.6\ \mu\mathrm A .
$$

So V(3) = 3.91 V. M2 has the same $V_{SG}$; at $v_{OUT}=2.5$ V ($V_{SD2}=2.5$ V) it supplies $I_{D2}=(125\ \mu\mathrm{A/V^2})(0.385)^2(1.125)=20.9\ \mu$A.

### Step 3 — Part (a): transfer curve

At $v_{OUT}=2.5$ V both transistors are saturated, and M1 must sink 20.9 µA with $K'_N(W/L)/2=275\ \mu\mathrm{A/V^2}$:

$$
(275\ \mu\mathrm{A/V^2})(v_{IN}-0.7)^2(1+0.04\cdot2.5)=20.9\ \mu\mathrm A
\;\Rightarrow\;v_{IN}-0.7=0.263\ \mathrm V,\quad v_{IN}=0.963\ \mathrm V .
$$

![Simulated vOUT versus vIN from 0 to 5 V for R1 = 200 kΩ, with the 2.5 V point at vIN = 0.963 V marked](/q/alsim-03-6-06/solution-transfer.svg)

| $v_{IN}$ | 0.8 V | 0.9 V | 0.963 V | 1.0 V | 2.0 V | 5.0 V |
|---|---|---|---|---|---|---|
| $v_{OUT}$ (ngspice) | 4.96 V | 4.83 V | 2.50 V | 0.22 V | 0.03 V | 0.01 V |

The curve is inverting: 5 V while M1 is off or barely on (M2 in nonsaturation), a very steep fall around 0.96 V, then M1 in nonsaturation pulls the output close to ground. ngspice puts $v_{OUT}=2.5$ V at $v_{IN}=0.9628$ V, as computed. The small mirror current makes the transition only about 0.1 V wide.

### Step 4 — Part (b): small-signal parameters at the bias point

At $v_{IN}=0.9628$ V, with $V_{ov1}=0.263$ V and $I_D=20.9$ µA:

$$
\begin{aligned}
g_{m1}&=K'_N\frac WL V_{ov1}(1+\lambda_Nv_{OUT})=(550\ \mu\mathrm{A/V^2})(0.263)(1.1)=159\ \mu\mathrm S,\\
g_{ds1}&=\lambda_N\frac{K'_N}{2}\frac WL V_{ov1}^2=0.76\ \mu\mathrm S,\qquad g_{ds2}=\lambda_P\frac{K'_P}{2}\frac WL(0.385)^2=0.93\ \mu\mathrm S .
\end{aligned}
$$

The output node has $g_{ds1}+g_{ds2}$ in parallel with $C_L$, so

$$
\frac{V_{out}}{V_{in}}=\frac{-g_{m1}}{g_{ds1}+g_{ds2}+sC_L},\qquad
A_0=-\frac{159}{0.76+0.93}=-94.2\ (39.5\ \mathrm{dB}),
$$

$$
f_{-3\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_L}=\frac{1.69\ \mu\mathrm S}{2\pi(5\ \mathrm{pF})}=53.7\ \mathrm{kHz},\qquad
f_u\approx\frac{g_{m1}}{2\pi C_L}=5.06\ \mathrm{MHz}.
$$

Because the gain is about 94, an input error of only 10 mV moves the output by about 1 V, so the dc value of VIN must be set to within a few millivolts. A .OP run should confirm V(2) ≈ 2.5 V before the ac results are trusted.

### Step 5 — Part (b): simulated frequency response

![Simulated gain magnitude in dB from 100 Hz to 100 MHz, with the −3 dB point at 53.6 kHz and unity gain at 5.06 MHz](/q/alsim-03-6-06/solution-magnitude.svg)

![Simulated phase from 100 Hz to 100 MHz, falling from 180 degrees to 90 degrees with 135 degrees at 53.6 kHz](/q/alsim-03-6-06/solution-phase.svg)

| Quantity | Hand | ngspice |
|---|---|---|
| Low-frequency gain | 39.5 dB, 180° | 39.48 dB, 179.9° |
| −3 dB frequency | 53.7 kHz | 53.6 kHz (phase 134.9°) |
| Unity-gain frequency | 5.06 MHz | 5.06 MHz |
| At 100 MHz | −25.9 dB, 90° | −25.9 dB, 90.0° |

The response is that of a single pole: flat, then −20 dB/decade, with the phase going from 180° (inversion) through 135° at the pole to 90°.

### Step 6 — Part (c): transient response

![Simulated transient response from 0 to 4 µs with the PWL input dashed, showing a fast fall near 1 µs and a slow linear recovery after 3.05 µs](/q/alsim-03-6-06/solution-transient.svg)

- Up to 1 µs, $v_{IN}=0$, M1 is off and $v_{OUT}=5$ V.
- When $v_{IN}$ rises to 3 V, M1 has $V_{ov}=2.3$ V and can sink about $(275\ \mu\mathrm{A/V^2})(2.3)^2(1.2)=1.75$ mA. That discharges 5 pF in a few nanoseconds per volt: $v_{OUT}$ crosses 2.5 V at 1.044 µs, is below 0.1 V by 1.06 µs, and settles at 0.02 V.
- At about 3.04 µs $v_{IN}$ falls below 0.7 V and M1 turns off. Only M2's mirror current, about 21 µA, charges the load, so the output rises as a nearly linear ramp:

$$
\frac{dv_{OUT}}{dt}\approx\frac{I_{D2}}{C_L}=\frac{20.9\ \mu\mathrm A}{5\ \mathrm{pF}}=4.2\ \mathrm{V/\mu s}.
$$

The simulated slope is 4.25 V/µs (it eases slightly as $V_{SD2}$ shrinks). $v_{OUT}$ crosses 2.5 V at 3.59 µs and reaches only 4.15 V at 4 µs. The response is strongly asymmetric: the fall is limited by M1's large current, the rise by the small bias current that R1 = 200 kΩ sets.
