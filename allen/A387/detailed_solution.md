# Detailed solution - A387

The specifications are loose on speed and power but ask for a gain above 2200 from a 3-V supply, so an uncompensated two-stage comparator is a natural choice: a differential stage with an active load followed by a common-source stage. The gain of each stage grows as the bias current falls ($g_m/g_{ds}\propto1/\sqrt{I}$), so the currents are kept small, and the generous delay limit is checked afterwards. The input common-mode range sizes the load and tail transistors, the gain sizes the input pair, and the output stage is sized so that its quiescent point is balanced against the mirror.

### Step 1 — Circuit and bias currents

<!-- diagram: diagram-01.cir -->

The input pair M1–M2 (NMOS) has tail transistor M5 and current-mirror load M3–M4 (PMOS); the first-stage output $v_{o1}$ (drain of M2 and M4) drives the PMOS common-source transistor M6, loaded by the NMOS current sink M7 and $C_{load}=3$ pF at $v_{out}$. M8 is a diode that converts a 20-µA reference into the gate bias of M5 and M7. All $L=1\ \mu$m.

Choose $I_{ref}=I_5=20\ \mu$A (10 µA per input device) and $I_6=I_7=100\ \mu$A. The total supply current is 140 µA, far below the $2\ \mathrm{mW}/3\ \mathrm V=667\ \mu$A allowed, and Step 6 shows these currents already give delays far below 1 µs.

### Step 2 — M3–M4 from the upper common-mode limit

At $V_{icm}=2.5$ V, M1 stays saturated only if its drain, at $V_{DD}-V_{SG3}$, is no lower than $V_{icm}-V_{TN}$:

$$
V_{SG3}\le V_{DD}-V_{icm}^++V_{TN}=3-2.5+0.7=1.2\ \mathrm V,
\qquad
\left(\frac WL\right)_3\ge\frac{2I_{D3}}{K'_P(V_{SG3}-|V_{TP}|)^2}=\frac{2(10\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=1.6 .
$$

Take $(W/L)_3=(W/L)_4=2$, giving $V_{SG3}=0.7+\sqrt{2(10)/(50\cdot2)}=1.147$ V.

### Step 3 — Input pair and tail from the gain and the lower limit

Take $(W/L)_1=(W/L)_2=4$. Then, with $g_m=\sqrt{2K'(W/L)I_D}$,

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(4)(10\ \mu\mathrm A)}=93.8\ \mu\mathrm S,\qquad
V_{GS1}=0.7+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(4)}}=0.913\ \mathrm V .
$$

At $V_{icm}=1.5$ V the tail node is at $1.5-0.913=0.587$ V, which must be at least $V_{DS5}(\mathrm{sat})$:

$$
\left(\frac WL\right)_5\ge\frac{2I_5}{K'_N(0.587\ \mathrm V)^2}=\frac{2(20\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.587\ \mathrm V)^2}=1.06 .
$$

Take $(W/L)_5=(W/L)_8=4$ for margin: $V_{DS5}(\mathrm{sat})=\sqrt{2(20)/(110\cdot4)}=0.30$ V.

### Step 4 — Output stage

In the balanced state $v_{o1}=V_{DD}-V_{SG4}$, so M6 has $V_{SG6}=V_{SG4}=1.147$ V. For M6 to carry exactly $I_7$ at this gate voltage, its aspect ratio must scale with its current relative to M4:

$$
\left(\frac WL\right)_6=\frac{I_6}{I_4}\left(\frac WL\right)_4=\frac{100\ \mu\mathrm A}{10\ \mu\mathrm A}(2)=20 .
$$

M7 mirrors M8 with a 5:1 ratio, $(W/L)_7=5(W/L)_8=20$, so $I_7=5(20\ \mu\mathrm A)=100\ \mu$A, and $V_{DS7}(\mathrm{sat})=0.30$ V. The output transconductance is $g_{m6}=\sqrt{2(50)(20)(100)}\ \mu\mathrm S=447\ \mu$S.

### Step 5 — Verify power, gain, input range and swing

**Power:** $P=V_{DD}(I_{ref}+I_5+I_7)=(3\ \mathrm V)(140\ \mu\mathrm A)=0.42\ \mathrm{mW}<2$ mW.

**Gain:** with $g_{ds}=\lambda I_D$,

$$
A_{v0}=\frac{g_{m1}}{(\lambda_N+\lambda_P)I_{D2}}\cdot\frac{g_{m6}}{(\lambda_N+\lambda_P)I_6}
=\frac{93.8\ \mu\mathrm S}{0.9\ \mu\mathrm S}\cdot\frac{447\ \mu\mathrm S}{9\ \mu\mathrm S}=104\times49.7=5180>2200 .
$$

**Input common-mode range:**

$$
V_{icm}(\max)=V_{DD}-V_{SG3}+V_{TN}=3-1.147+0.7=2.55\ \mathrm V\ge2.5\ \mathrm V,
$$
$$
V_{icm}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=0.30+0.913=1.21\ \mathrm V\le1.5\ \mathrm V .
$$

**Output swing.** When $v_{o1}$ is high, M6 is off and M7 pulls $v_{out}$ to $V_{OL}=0$ V. When $v_{o1}$ is low it settles near the tail node, $V_{icm}-V_{GS1}$, about 1.09 V at $V_{icm}=2$ V; M6 then has $V_{SG6}-|V_{TP}|=1.21$ V and supplies 100 µA in triode with $V_{SD6}=0.085$ V, so $V_{OH}=2.91$ V (2.84 V at $V_{icm}=2.5$ V). Both levels lie well beyond 1.5 V from the opposite rail.

### Step 6 — Propagation delay

The problem gives no input step, so the delay is estimated for a large step, and for a linear step of 10 times the resolution. Take the circuit driven by the comparator to trip at mid-supply, 1.5 V, and the second-stage trip point where M6 carries 100 µA: $V_{TRP2}=V_{DD}-V_{SG6}=1.853$ V.

$C_I$ is dominated by $C_{gs6}=\tfrac23C_{ox}W_6L+C_{GSO}W_6=\tfrac23(20)(2.47\ \mathrm{fF})+4.4\ \mathrm{fF}=37$ fF; adding overlap and junction capacitances (no junction data are given), take $C_I=0.1$ pF as a conservative value. The first stage slews at $I_5/C_I=200\ \mathrm{V/\mu s}$.

**Rising output.** $v_{o1}$ falls from about $V_{DD}$ to $V_{TRP2}$ in $(0.1\ \mathrm{pF})(1.147\ \mathrm V)/(20\ \mu\mathrm A)=5.7$ ns. It keeps falling to its floor of 1.09 V, so M6's overdrive grows from 0.447 V to 1.21 V and its current from 100 µA to $\tfrac12(1000\ \mu\mathrm{A/V^2})(1.21\ \mathrm V)^2=0.74$ mA. Integrating $I_6(t)-I_7$ until the delivered charge equals $C_{load}(1.5\ \mathrm V)=4.5$ pC gives 9.3 ns, so $t_{PLH}=5.7+9.3=15.0$ ns.

**Falling output.** $v_{o1}$ rises from 1.09 V to $V_{TRP2}$ in $(0.1\ \mathrm{pF})(0.766\ \mathrm V)/(20\ \mu\mathrm A)=3.8$ ns; then M6 is off and M7 discharges the load from 2.91 V to 1.5 V in $(3\ \mathrm{pF})(1.41\ \mathrm V)/(100\ \mu\mathrm A)=42.4$ ns, so $t_{PHL}=46.3$ ns.

The large-signal delay is $(15.0+46.3)/2=31$ ns.

**Linear response.** With poles $p_I=0.9\ \mu\mathrm S/0.1\ \mathrm{pF}=9\times10^6$ rad/s and $p_{II}=9\ \mu\mathrm S/3\ \mathrm{pF}=3\times10^6$ rad/s, a step of 10 times the resolution gives $t_p=1/\sqrt{10p_Ip_{II}}=61$ ns with the parabolic approximation and 70 ns from the exact two-pole response (output at $1/(2k)=5\,\%$ of its unclipped final change).

| Specification | Requirement | Design |
|---|---|---|
| Power | < 2 mW | 0.42 mW |
| Gain | > 2200 | 5180 |
| Input CM range | 1.5–2.5 V | 1.21–2.55 V |
| Output levels | ≥ 1.5 V, ≤ 1.5 V | 2.84–2.91 V, 0 V |
| Propagation delay | < 1 µs | 31 ns (large step), 70 ns (10× overdrive) |

A level-1 ngspice transient of the design at $V_{icm}=2$ V with a ±0.1-V input step (gate-overlap and intrinsic capacitances only) gives $t_{PLH}=14.1$ ns, $t_{PHL}=44.9$ ns, $V_{OH}=2.90$ V and a supply current of 141 µA, and its operating points at $V_{icm}=1.5$ V and 2.5 V keep every device saturated.

| Device | M1, M2 | M3, M4 | M5, M8 | M6 | M7 |
|---|---|---|---|---|---|
| $W/L$ (µm/µm) | 4/1 | 2/1 | 4/1 | 20/1 | 20/1 |
| Current | 10 µA each | 10 µA each | 20 µA each | 100 µA | 100 µA |
