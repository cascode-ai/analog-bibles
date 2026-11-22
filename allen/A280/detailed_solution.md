# Detailed solution - A280

Work from the specifications that fix single quantities: the pole/zero placement rules give $C_c$ and the ratio $g_{m6}/g_{m1}$, the slew rate gives $I$, GB gives $W_1$, $V_{ic}(\min)$ gives $W_5$, the output swing gives $W_6$ and $W_7$, and the p-channel mirror widths follow from $W_7$ by current scaling. Finally check every device's saturation; this shows that $V_{ic}(\max)=2$ V cannot be met together with the other specifications. All $L=1$ µm, $S=W/L$, $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$, $g_m=\sqrt{2K'SI_D}$, and the overdrive is $V_{ov}=\sqrt{2I_D/(K'S)}=2I_D/g_m$.

### Step 1 — Currents in the circuit

From the stated mirrors: M5 and M8 carry $I$, so M1 and M2 carry $I/2$ each. M11 and M12 each source $1.5I$; at the M2 drain, $1.5I-I/2=I$ flows into the diode-connected M3, and M4 copies it. At the first-stage output (M1, M4, M11 drains), $1.5I=I/2+I$, so the node is balanced. M6 and M7 carry $10I$.

### Step 2 — $C_c$ from the phase-margin rule

With $GB=g_{m1}/C_c$, $|p_2|=g_{m6}/C_L$ and $z=g_{m6}/C_c$:

$$
z=10\,GB\;\Rightarrow\;g_{m6}=10g_{m1},\qquad
|p_2|=2\,GB\;\Rightarrow\;\frac{10g_{m1}}{C_L}=\frac{2g_{m1}}{C_c}\;\Rightarrow\;C_c=0.2C_L=2\ \mathrm{pF}.
$$

### Step 3 — $I$ from the slew rate

The current into the first-stage output node is what M11 sources minus what M1 and M4 sink. M4 copies M3, which carries $1.5I-i_{d2}$, so

$$
i_X=1.5I-i_{d1}-(1.5I-i_{d2})=i_{d2}-i_{d1},\qquad i_{d1}+i_{d2}=I .
$$

With M1 cut off $i_X=+I$; with M2 cut off $i_X=-I$. The node therefore charges or discharges $C_c$ with $\pm I$, and

$$
SR=\frac{I}{C_c}\;\Rightarrow\;I=(10\ \mathrm{V/\mu s})(2\ \mathrm{pF})=20\ \mu\mathrm A .
$$

### Step 4 — Input pair from GB and tail device from $V_{ic}(\min)$

$$
g_{m1}=GB\cdot C_c=2\pi(10\ \mathrm{MHz})(2\ \mathrm{pF})=125.7\ \mu\mathrm S,\qquad
S_1=\frac{g_{m1}^2}{2K'_N(I/2)}=\frac{(125.7\ \mu\mathrm S)^2}{2(24\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}=32.9 .
$$

So $W_1=W_2=33$ µm, with $V_{ov1}=2(10\ \mu\mathrm A)/(125.7\ \mu\mathrm S)=0.159$ V and $V_{GS1}=0.909$ V. The lowest common-mode input keeps M5 saturated:

$$
V_{ic}(\min)=V_{DS5,\mathrm{sat}}+V_{GS1}=1\ \mathrm V\;\Rightarrow\;V_{DS5,\mathrm{sat}}=0.091\ \mathrm V,\qquad
S_5=\frac{2I}{K'_NV_{DS5,\mathrm{sat}}^2}=\frac{2(20\ \mu\mathrm A)}{(24\ \mu\mathrm{A/V^2})(0.091\ \mathrm V)^2}=202 .
$$

M8 carries the same current at the same $V_{GS}$, so $W_5=W_8=202$ µm.

### Step 5 — Mirror load M3, M4

M2's drain sits at $V_{GS3}$, and M2 stays saturated for $V_{ic}\le V_{GS3}+V_{TN}$. For 2 V this needs $V_{GS3}=1.25$ V, $V_{ov3}=0.5$ V:

$$
S_3=\frac{2I}{K'_NV_{ov3}^2}=\frac{2(20\ \mu\mathrm A)}{(24\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V^2})}=6.7\;\Rightarrow\;W_3=W_4=7\ \mu\mathrm m .
$$

Mirror-pole check: $g_{m3}=\sqrt{2(24\ \mu\mathrm{A/V^2})(7)(20\ \mu\mathrm A)}=82\ \mu\mathrm S$ and $C_{gs3}+C_{gs4}=2\cdot\frac23(0.5\ \mathrm{fF/\mu m^2})(7\ \mu\mathrm m^2)=4.7$ fF give $g_{m3}/(C_{gs3}+C_{gs4})\approx1.8\times10^{10}$ rad/s, far above $10\,GB=6.3\times10^8$ rad/s.

### Step 6 — Output stage and p-channel mirrors

M6 must provide $g_{m6}=10g_{m1}=1.257$ mS at $10I=200$ µA:

$$
S_6=\frac{g_{m6}^2}{2K'_N(10I)}=\frac{(1.257\ \mathrm{mS})^2}{2(24\ \mu\mathrm{A/V^2})(200\ \mu\mathrm A)}=164.5\;\Rightarrow\;W_6=165\ \mu\mathrm m,
$$

with $V_{ov6}=0.318$ V ($V_{GS6}=1.068$ V); $V_{out}(\min)=0.75$ V exceeds $V_{ov6}$, so M6 stays saturated. $V_{out}(\max)=1.25$ V sets $V_{SD7,\mathrm{sat}}=0.25$ V:

$$
S_7=\frac{2(10I)}{K'_P(0.25\ \mathrm V)^2}=\frac{400\ \mu\mathrm A}{(8\ \mu\mathrm{A/V^2})(0.0625\ \mathrm{V^2})}=800 .
$$

M9–M12 share $V_{SG}$ with M7, so their widths scale with current: $W_9=W_{10}=800\ \mu\mathrm m\cdot I/(10I)=80$ µm and $W_{11}=W_{12}=1.5\times80=120$ µm. They all have $|V_{ov}|=0.25$ V: M11 has $V_{SD}=1.5-1.068=0.43$ V and M12 has $V_{SD}=1.5-1.25=0.25$ V, both saturated (M12 at the edge).

### Step 7 — Why $V_{ic}(\max)=2$ V is not achievable

M1's drain is the first-stage output, held at $V_{GS6}$, so M1 leaves saturation once $V_{ic}>V_{GS6}+V_{TN}=1.068+0.75=1.82$ V, whatever M3 is. Reaching 2 V would need $V_{ov6}\ge0.5$ V, i.e. $g_{m6}=2(10I)/V_{ov6}\le40I$; with $g_{m6}=10g_{m1}$ this means $I\ge g_{m1}/4$. But $V_{ic}(\min)=1$ V requires $V_{ov1}+V_{DS5,\mathrm{sat}}\le0.25$ V with $V_{ov1}=I/g_{m1}$, i.e. $I<g_{m1}(0.25\ \mathrm V)=g_{m1}/4$. The two requirements contradict each other for any $C_c$, $I$ and sizes, so the best design meets every other specification and reaches $V_{ic}(\max)\approx1.82$ V.

### Step 8 — Design summary and power

$$
P_{diss}=V_{DD}(I+I+1.5I+1.5I+10I)=(1.5\ \mathrm V)(15)(20\ \mu\mathrm A)=450\ \mu\mathrm W .
$$

| $C_c$ | $I$ | $W_1=W_2$ | $W_3=W_4$ | $W_5=W_8$ | $W_6$ | $W_7$ | $W_9=W_{10}$ | $W_{11}=W_{12}$ | $P_{diss}$ |
|---|---|---|---|---|---|---|---|---|---|
| 2 pF | 20 µA | 33 µm | 7 µm | 202 µm | 165 µm | 800 µm | 80 µm | 120 µm | 450 µW |
