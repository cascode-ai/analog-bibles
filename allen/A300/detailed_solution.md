# Detailed solution - A300

The circuit is a current-mirror op amp with mirror gain 1: the diode loads M3 and M4 are copied by M8 and M6, M8's current is turned around by M9–M10, and M7 and M11 cascode the output. Each specification fixes one quantity: the slew rate fixes $I_5$, the output limits fix the sizes of the series devices M6/M7 and M10/M11, GB fixes M1, $V_{ic}(\min)$ fixes M5, and $V_{ic}(\max)$ is a check. All $L=1$ µm, $S=W/L$, square law $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$ (channel-length modulation neglected for sizing).

### Step 1 — $I_5$ from the slew rate

When the input is overdriven, all of $I_5$ flows in one diode load and is mirrored 1:1 to the output, so the output current available to $C_L$ is $I_5$ in either direction:

$$
I_5=SR\cdot C_L=(10\ \mathrm{V/\mu s})(25\ \mathrm{pF})=250\ \mu\mathrm A .
$$

Every branch carries 125 µA at rest and up to 250 µA during slewing.

### Step 2 — Output devices from the output swing

Size the series devices at the largest current they must carry (250 µA), with the available headroom split equally. For $V_{out}(\max)=4$ V, M6 and M7 share 1 V:

$$
S_6=S_7=\frac{2(250\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=40 ,
$$

and $S_3=S_4=S_8=40$ for 1:1 mirrors. For $V_{out}(\min)=1$ V, M10 and M11 share 1 V:

$$
S_9=S_{10}=S_{11}=\frac{2(250\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=18.2\;\Rightarrow\;W=18\text{–}19\ \mu\mathrm m .
$$

### Step 3 — Input pair from GB

The output node is the only high-impedance node and the mirror gain is 1, so $GB=g_{m1}/C_L$:

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(25\ \mathrm{pF})=1.571\ \mathrm{mS},\qquad
S_1=\frac{g_{m1}^2}{2K'_N(125\ \mu\mathrm A)}=\frac{(1.571\ \mathrm{mS})^2}{2(110\ \mu\mathrm{A/V^2})(125\ \mu\mathrm A)}=89.7\;\Rightarrow\;W_1=W_2=90\ \mu\mathrm m .
$$

### Step 4 — Common-mode range

The upper limit keeps M1 saturated with its drain one $V_{SG3}$ below $V_{DD}$:

$$
V_{ic}(\max)=V_{DD}-V_{SG3}+V_{TN}=5-\left(0.7+\sqrt{\frac{2(125\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(40)}}\right)+0.7=4.65\ \mathrm V\ge4\ \mathrm V .
$$

The lower limit keeps M5 saturated, with $V_{GS1}=0.7+\sqrt{2(125)/(110\cdot90)}=0.859$ V:

$$
V_{ic}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=1.5\ \mathrm V\;\Rightarrow\;V_{DS5}(\mathrm{sat})=0.641\ \mathrm V,\qquad
S_5=\frac{2(250\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.641\ \mathrm V)^2}=11.1\;\Rightarrow\;W_5=11\ \mu\mathrm m .
$$

### Step 5 — Cascode bias voltages

Choose $V_{BP}$ and $V_{BN}$ so that M6 and M10 are just saturated at the maximum current, where $V_{SG7}=V_{GS11}=0.7+0.5=1.2$ V:

$$
V_{BP}=V_{DD}-V_{SD6}(\mathrm{sat})-V_{SG7}=5-0.5-1.2=3.3\ \mathrm V,\qquad
V_{BN}=V_{DS10}(\mathrm{sat})+V_{GS11}=0.5+1.2=1.7\ \mathrm V .
$$

At the quiescent 125 µA the devices then have extra margin.

### Step 6 — Power and gain

$$
P_{diss}=V_{DD}(I_5+I_9+I_{10})=(5\ \mathrm V)(250+125+125)\ \mu\mathrm A=2.5\ \mathrm{mW}.
$$

At 125 µA: $g_{m1}=1.573$ mS, $g_{m11}=\sqrt{2(110\ \mu)(18)(125\ \mu)}=704\ \mu$S, $g_{m7}=\sqrt{2(50\ \mu)(40)(125\ \mu)}=707\ \mu$S, $r_{dsN}=1/(0.04\cdot125\ \mu\mathrm A)=200$ kΩ, $r_{dsP}=160$ kΩ:

$$
R_{out}=(g_{m11}r_{ds11}r_{ds10})\parallel(g_{m7}r_{ds7}r_{ds6})=(28.1\ \mathrm{M\Omega})\parallel(18.1\ \mathrm{M\Omega})=11.0\ \mathrm{M\Omega},
$$
$$
A_{vd}=g_{m1}R_{out}=(1.573\ \mathrm{mS})(11.0\ \mathrm{M\Omega})=1.7\times10^4\ \mathrm{V/V}.
$$

| $W_1=W_2$ | $W_3=W_4=W_6=W_7=W_8$ | $W_9=W_{10}=W_{11}$ | $W_5$ | $I_5$ | $P_{diss}$ | $A_{vd}$ | $V_{BP}$ | $V_{BN}$ |
|---|---|---|---|---|---|---|---|---|
| 90 µm | 40 µm | 18 µm (19 for margin) | 11 µm | 250 µA | 2.5 mW | $1.7\times10^4$ | 3.3 V | 1.7 V |
