# Detailed solution - A390

The open-loop gain is the product of the two-stage op amp gain and the small-signal gains of the two CMOS inverters, each of which uses both transistors as transconductors into their parallel output conductances. For the delay, the output inverter's driving transistor has its gate at a rail, so it delivers a very large current into $C_{II}$; the time to reach 0 V follows from that current.

### Step 1 — Inverter sizes

From the stated ratios, with $(W/L)_6=94$ and $K'_P/K'_N=50/110$:

| Device | Type | $W/L$ | Quiescent current |
|---|---|---|---|
| M8 | p | $10(94)=940$ | 100 µA |
| M9 | n | $(50/110)(940)=427$ | 100 µA |
| M10 | p | $100(94)=9400$ | 500 µA |
| M11 | n | $(50/110)(9400)=4273$ | 500 µA |

Each inverter has $K'_P(W/L)_p=K'_N(W/L)_n$, so its two devices have equal $\beta$ and equal transconductance at the same current.

### Step 2 — Small-signal gain of each inverter

With both devices saturated at the inverter's quiescent point, the input drives both gates, and their drain currents add at the shared output. With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$,

$$
A_{inv}=-\frac{g_{mp}+g_{mn}}{g_{dsp}+g_{dsn}}=-\frac{2g_m}{(\lambda_N+\lambda_P)I_D}.
$$

First inverter (100 µA):

$$
g_{m8}=g_{m9}=\sqrt{2(50\ \mu\mathrm{A/V^2})(940)(100\ \mu\mathrm A)}=3.07\ \mathrm{mS},\qquad
|A_{inv1}|=\frac{2(3.07\ \mathrm{mS})}{(0.09\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=681 .
$$

Second inverter (500 µA):

$$
g_{m10}=g_{m11}=\sqrt{2(50\ \mu\mathrm{A/V^2})(9400)(500\ \mu\mathrm A)}=21.7\ \mathrm{mS},\qquad
|A_{inv2}|=\frac{2(21.7\ \mathrm{mS})}{(0.09\ \mathrm{V^{-1}})(500\ \mu\mathrm A)}=963.5 .
$$

### Step 3 — Open-loop gain

The two inversions cancel, so the sign of the two-stage op amp gain is kept:

$$
A_v=(7696)(681.3)(963.5)=5.05\times10^9\ \mathrm{V/V}.
$$

### Step 4 — Slewing current of the output inverter

When the input of M10–M11 is at $V_{SS}=-2.5$ V, M11 is off and M10 has $V_{SG10}=5$ V, i.e. an overdrive of $5-0.7=4.3$ V. While saturated it delivers

$$
I_{10}=\frac{K'_P}{2}\left(\frac WL\right)_{10}(V_{SG10}-|V_{TP}|)^2=\frac{50\ \mu\mathrm{A/V^2}}2(9400)(4.3\ \mathrm V)^2=4.35\ \mathrm A .
$$

M11 delivers the same current on the opposite edge because its $\beta$ is equal.

### Step 5 — Output-inverter delay

With this peak current, $v_{out}$ moves from the rail to 0 V in

$$
t_p=\frac{C_{II}\,\Delta V}{I_{10}}=\frac{(100\ \mathrm{pF})(2.5\ \mathrm V)}{4.35\ \mathrm A}=57.5\ \mathrm{ps}.
$$

M10 stays saturated only while $V_{SD10}\ge4.3$ V, i.e. up to $v_{out}=-1.8$ V; beyond that it is in triode with $I_{10}=\beta_{10}[4.3V_{SD}-V_{SD}^2/2]$, which falls to 3.6 A at $v_{out}=0$. Integrating $dt=C_{II}\,dv_{out}/I_{10}(v_{out})$ over the whole interval gives 60.2 ps. The output-inverter delay is therefore about 58–60 ps, the same for both edges.

Such multi-ampere currents are unrealistic for a real circuit, and the comparator's total delay is dominated by the earlier stages, for example M6–M7 charging the large gate capacitance of M8–M9; the question asks only for the output inverter's contribution.
