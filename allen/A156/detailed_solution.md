# Detailed solution - A156

Find the dc current in every transistor from the 100-µA reference, then raise and lower the common-mode input until the first transistor reaches the edge of saturation. The upper limit is set by M1, whose drain is held by the diode-connected M3; the lower limit is set by the tail transistor M5.

### Step 1 — Bias currents and overdrive voltages

All devices have $W/L=100$, so every mirror copies its reference 1:1. M9 carries the 100-µA reference and M6, M7, M8 copy it; M8 drives the diode M10, which M5 mirrors, so the tail current is $I_5=100\ \mu$A. With $v_1=v_2$, M1 and M2 carry $50\ \mu$A each.

At M1's drain node, KCL gives $I_3=I_6-I_1=100-50=50\ \mu$A, and M4 mirrors it; at the output, $I_7=I_2+I_4=50+50=100\ \mu$A is consistent.

In saturation $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$, so the overdrive is $V_{ov}=\sqrt{2I_D/(K'W/L)}$:

$$
\begin{aligned}
V_{ov1}=V_{ov3}&=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.0953\ \mathrm V,\\
V_{ov5}&=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.135\ \mathrm V,\\
|V_{ov6}|&=\sqrt{\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(100)}}=0.200\ \mathrm V.
\end{aligned}
$$

Hence $V_{GS1}=V_{GS3}=0.7+0.0953=0.795$ V.

### Step 2 — Maximum input common-mode voltage

M1's drain is the gate–drain node of the diode-connected M3, so it sits at a fixed

$$
V_{D1}=V_{GS3}=0.795\ \mathrm V,
$$

independent of $v_{IC}$; M6, a current source, cannot pull this node higher. M1 stays saturated while $V_{DS1}\ge V_{GS1}-V_{TN}$, which with $V_{S1}=v_{IC}-V_{GS1}$ becomes $V_{D1}\ge v_{IC}-V_{TN}$:

$$
v_{IC}(\max)=V_{GS3}+V_{TN}=0.795+0.7=1.495\ \mathrm V\approx1.50\ \mathrm V .
$$

In balance the output node also rests near $V_{GS3}$ (M4 mirrors M3 with equal currents), so M2 gives the same limit. M6 remains saturated: $V_{SD6}=1.5-0.795=0.705$ V exceeds $|V_{ov6}|=0.200$ V. The limit is therefore essentially the supply $V_{DD}$.

### Step 3 — Minimum input common-mode voltage

Lowering $v_{IC}$ lowers the common source node $V_{S1}=v_{IC}-V_{GS1}$, which is the drain of M5. M5 leaves saturation when $V_{DS5}<V_{ov5}$, so

$$
v_{IC}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=0.135+0.795=0.930\ \mathrm V .
$$

The common-mode range is therefore $0.93\ \mathrm V\le v_{IC}\le1.50$ V.
