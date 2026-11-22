# Detailed solution - A157

The ICMR is the interval of $v_{IC}$ over which every transistor stays saturated. Establish the bias currents, then find the input level at which M1 (upper end) and the tail transistor M5 (lower end) reach the edge of saturation.

### Step 1 — Currents and gate–source voltages

With all $W/L=100$, the p-channel mirror M9–M6/M7/M8 and the n-channel mirror M10–M5 copy the 100-µA reference, so $I_5=I_6=I_7=I_8=I_{10}=100\ \mu$A. At balance $I_1=I_2=50\ \mu$A. KCL at M1's drain gives $I_3=I_6-I_1=50\ \mu$A, which M4 mirrors.

From $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$:

$$
\begin{aligned}
V_{GS1}=V_{GS3}&=V_{TN}+\sqrt{\frac{2I_1}{K'_N(W/L)}}=0.7+\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.795\ \mathrm V,\\
V_{DS5}(\mathrm{sat})&=\sqrt{\frac{2I_5}{K'_N(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.135\ \mathrm V.
\end{aligned}
$$

### Step 2 — Upper limit

The diode-connected M3 fixes M1's drain at $V_{D1}=V_{GS3}=0.795$ V regardless of $v_{IC}$. M1 is saturated while $V_{D1}\ge V_{G1}-V_{TN}=v_{IC}-V_{TN}$, so

$$
v_{IC}(\max)=V_{GS3}+V_{TN}=0.795+0.7=1.495\ \mathrm V .
$$

The p-channel source M6 is not the limit: $V_{SD6}=1.5-0.795=0.705$ V is well above its $|V_{ov6}|=\sqrt{2(100\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(100)]}=0.200$ V.

### Step 3 — Lower limit and range

The sources of M1 and M2 sit at $v_{IC}-V_{GS1}$, the drain of M5. M5 stays saturated while this is at least $V_{DS5}(\mathrm{sat})$:

$$
v_{IC}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=0.135+0.795=0.930\ \mathrm V .
$$

Therefore

$$
\mathrm{ICMR}=v_{IC}(\max)-v_{IC}(\min)=1.495-0.930=0.565\ \mathrm V\approx0.57\ \mathrm V ,
$$

spanning $0.93$ V to $1.50$ V.
