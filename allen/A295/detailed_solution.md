# Detailed solution - A295

The input common-mode range is bounded by the two devices that leave saturation first: at the bottom the tail transistor M7, and at the top the input transistor M1, whose drain is held below $V_{DD}$ by the diode M5 and the cascode M3. Write each limit as a KVL path, use the square law for each saturation voltage, and choose the threshold extremes that make each limit worst. All devices are saturated with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$, so a device carrying $I$ has overdrive $\sqrt{2I/(K'S)}$.

### Step 1 — Device currents and overdrives

M7 carries the tail current $I_7$; M1, M3 and M5 each carry $I_7/2$:

$$
V_{DS7}(\mathrm{sat})=\sqrt{\frac{2I_7}{K'_NS_7}},\qquad V_{ov1}=\sqrt{\frac{I_7}{K'_NS_1}},\qquad
V_{SD3}(\mathrm{sat})=\sqrt{\frac{I_7}{K'_PS_3}},\qquad V_{SG5}=|V_{T5}|+\sqrt{\frac{I_7}{K'_PS_5}} .
$$

### Step 2 — Lower limit

As $V_{ic}$ falls, the common-source node falls with it until M7 reaches the edge of saturation. KVL from $V_{SS}$ through M7 and M1 to the gate:

$$
V_{ic}\ge V_{SS}+V_{DS7}(\mathrm{sat})+V_{GS1},\qquad V_{GS1}=V_{T1}+V_{ov1} .
$$

The worst case is the largest threshold:

$$
V_{ic}(\min)=V_{SS}+\sqrt{\frac{2I_7}{K'_NS_7}}+V_{T1}(\max)+\sqrt{\frac{I_7}{K'_NS_1}} .
$$

### Step 3 — Upper limit

As $V_{ic}$ rises, M1 stays saturated only while $V_{D1}\ge V_{ic}-V_{T1}$. M1's drain is also the drain of the p-channel cascode M3, whose source hangs from the diode M5 at $V_{DD}-V_{SG5}$; with M3 saturated at $I_7/2$, the highest the drain of M1 can be is $V_{DD}-V_{SG5}-V_{SD3}(\mathrm{sat})$. Hence

$$
V_{ic}\le V_{DD}-V_{SG5}-V_{SD3}(\mathrm{sat})+V_{T1} .
$$

The worst case takes the largest $|V_{T5}|$ (largest drop across M5) and the smallest $V_{T1}$:

$$
V_{ic}(\max)=V_{DD}-|V_{T5}|(\max)-\sqrt{\frac{I_7}{K'_PS_5}}-\sqrt{\frac{I_7}{K'_PS_3}}+V_{T1}(\min) .
$$

### Step 4 — Input common-mode range

$$
\mathrm{ICMR}=V_{ic}(\max)-V_{ic}(\min).
$$

The upper limit assumes that the gate bias of M3/M4 does not itself force M3 out of saturation earlier; the question states that M3 and M4 operate as saturated cascodes.
