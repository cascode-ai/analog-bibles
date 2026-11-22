# Detailed solution - A296

Apply the input common-mode range limits of this cascode op amp (derived from the saturation of M7 at the bottom and of M1 at the top, with the drain of M1 held below $V_{DD}$ by the diode M5 and the cascode M3) to the given numbers. First find the tail current from the mirror ratio, then test each limit. All devices are saturated with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$; channel-length modulation and body effect are ignored.

### Step 1 — Tail current

M7 (30/10, $S_7=3$) mirrors the diode M12 (60/10, $S_{12}=6$) that carries $I_{Bias}$:

$$
I_7=I_{Bias}\frac{S_7}{S_{12}}=80\ \mu\mathrm A\cdot\frac36=40\ \mu\mathrm A,
$$

so each input device and each of M3, M5 carries 20 µA.

### Step 2 — Lower limit: not achievable

$$
V_{ic}(\min)=V_{SS}+V_{DS7}(\mathrm{sat})+V_{T1}(\max)+\sqrt{\frac{I_7}{K'_NS_1}},\qquad
V_{DS7}(\mathrm{sat})=\sqrt{\frac{2(40\ \mu\mathrm A)}{(25\ \mu\mathrm{A/V^2})(3)}}=1.03\ \mathrm V .
$$

$$
V_{ic}(\min)=-5+1.03+1.0+\sqrt{\frac{1.6\ \mathrm{V^2}}{S_1}}=-2.97\ \mathrm V+\sqrt{\frac{1.6\ \mathrm{V^2}}{S_1}} .
$$

The last term is positive for any $S_1$, so $V_{ic}(\min)>-2.97$ V (even with $V_T=0.8$ V the floor is −3.17 V). The −3.5 V specification cannot be met by any $W_1/L_1=W_2/L_2$: $V_{DS7}(\mathrm{sat})$ and $V_{T1}$ already use 2.03 V of the 1.5 V available above $V_{SS}$. It would require redesigning the tail device; for example $V_{DS7}(\mathrm{sat})=0.4$ V needs $S_7=2(40)/(25\cdot0.16)=20$ at 40 µA, after which $S_1\approx160$ reaches −3.5 V.

### Step 3 — Upper limit: condition on $W_3/L_3$

$$
V_{ic}(\max)=V_{DD}-|V_T|(\max)-\sqrt{\frac{I_7}{K'_PS_5}}-\sqrt{\frac{I_7}{K'_PS_3}}+V_T(\min)\ge3.5\ \mathrm V .
$$

With $I_7/K'_P=40/11=3.64\ \mathrm{V^2}$ and $5-1.0+0.8-3.5=1.3$ V:

$$
\sqrt{\frac{3.64\ \mathrm{V^2}}{S_5}}+\sqrt{\frac{3.64\ \mathrm{V^2}}{S_3}}\le1.3\ \mathrm V
\;\Rightarrow\;
\frac{W_3}{L_3}=\frac{W_4}{L_4}\ge\frac{3.64\ \mathrm{V^2}}{\left(1.3\ \mathrm V-\sqrt{3.64\ \mathrm{V^2}/S_5}\right)^2},
$$

which requires $S_5>2.15$. If M5 is sized like M3 ($S_5=S_3$), $2\sqrt{3.64/S_3}\le1.3$ gives $S_3=S_4=S_5\ge8.6$.

### Step 4 — Remarks

This upper limit assumes, as the question says, that M3 and M4 work as saturated cascodes whose gate bias does not limit the range. With their gates tied as drawn to the M11/M12 node at about $V_{SS}+V_{GS12}\approx-3$ V, M3 would need its drain below about −2 V to stay saturated, so the range would end near $V_{G3}+|V_{TP}|+V_{TN}\approx-1$ V and the upper specification could not be met either. In summary, $W_1/L_1=W_2/L_2$ cannot satisfy the lower limit with this tail device, and $W_3/L_3=W_4/L_4$ must satisfy the inequality of Step 3.
