# Detailed solution - A204

At $V_{OUT}=1$ V, M1 must supply both the 1-mA output current and the current that the diode-connected load M2 draws at that voltage. The most M1 can deliver is with $v_{IN}=V_{DD}$; its threshold is raised by the body effect because its bulk is at $V_{SS}$. Find the required current, the threshold and region of M1, and then its $W/L$.

### Step 1 — Current required from M1

M2 has its gate and drain at the output and its source and bulk at $V_{SS}$, so it is saturated with no body effect and $V_{GS2}=1-(-5)=6$ V:

$$
I_{D2}=\frac{K'_N}{2}\frac{W_2}{L_2}(V_{GS2}-V_{T0})^2=(55\ \mu\mathrm{A/V^2})(1)(6-0.7)^2=1.545\ \mathrm{mA}.
$$

KCL at the output: M1 supplies M2's current plus the output current,

$$
I_{D1}=I_{D2}+i_{OUT}=1.545+1=2.545\ \mathrm{mA}.
$$

### Step 2 — Threshold and region of M1

With $v_{IN}=V_{DD}=5$ V, $V_{GS1}=5-1=4$ V and $V_{SB1}=1-(-5)=6$ V. The body effect raises the threshold:

$$
V_{T1}=V_{T0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB1}}-\sqrt{2|\phi_F|}\right)=0.7+0.4\left(\sqrt{6.7}-\sqrt{0.7}\right)=1.40\ \mathrm V .
$$

$V_{DS1}=5-1=4$ V exceeds $V_{GS1}-V_{T1}=2.60$ V, so M1 is saturated.

### Step 3 — $W/L$ of M1

$$
I_{D1}=\frac{K'_N}{2}\frac{W_1}{L_1}(V_{GS1}-V_{T1})^2
\quad\Rightarrow\quad
\frac{W_1}{L_1}=\frac{2.545\ \mathrm{mA}}{(55\ \mu\mathrm{A/V^2})(4-1.40)^2}=6.85 .
$$

A device of about 7 µm/1 µm lets the follower source 1 mA at $V_{OUT}=1$ V. Both corrections matter: without the M2 current the ratio would be only about 2.7, and without the body effect about 4.3.
