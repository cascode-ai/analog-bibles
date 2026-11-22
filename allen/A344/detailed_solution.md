# Detailed solution - A344

The circuit of [Fig. 2] compares the sum of the currents of two p-channel devices driven by the outputs with the sum of two identical devices driven by a reference, and delivers the difference to node X. To stabilize the output common mode at ground, the reference is 0 V and X must drive a current-setting device of the op amp so that the loop is negative and also defines the common mode of the first stage. Choose the connection, verify its polarity, then size the devices and check the dc levels. Devices of [Fig. 2] are called MS1–MS6 below to distinguish them from the op amp's M1–M9.

### Step 1 — Connection

Use [Fig. 2] with its inputs swapped:

- gates of MS1 and MS2 at ground ($V_{ocm}=0$, the reference);
- gates of MS3 and MS4 at $v_{o1}$ and $v_{o2}$;
- node X (common drain of MS3, MS4 and MS6) drives the gate of the op amp's tail M5;
- M8/M9 stay on $V_{BN}$ and the op amp's loads M3/M4 on $V_{BP}$.

<!-- diagram: diagram-01.cir -->

MS5 mirrors the fixed current $I_5=I_{S1}+I_{S2}$ into MS6, so node X receives $(I_{S3}+I_{S4})-I_{S6}$. With MS1–MS4 identical, the loop settles where

$$
I_{S3}+I_{S4}=I_{S1}+I_{S2},
$$

i.e. where the output common mode equals the 0 V reference (exactly so for zero differential output, see Step 5).

### Step 2 — Feedback polarity

Follow a rise of the output common mode around the loop:

1. $v_{o1},v_{o2}$ rise → $V_{SG}$ of MS3, MS4 falls → $I_{S3}+I_{S4}$ falls;
2. MS6 still sinks $I_5$, so X falls → $V_{GS5}$ falls → the tail current of the op amp falls;
3. the first-stage loads M3/M4 carry fixed currents set by $V_{BP}$, so the drains of M1/M2 rise;
4. the gates of M6/M7 rise → $V_{SG6},V_{SG7}$ fall → the drivers source less current into the outputs, which M8/M9 sink at fixed current → the outputs fall.

The initial rise is opposed: the feedback is **negative**. Because the loop sets the tail current equal to the sum of the two load currents, the first-stage common mode is defined too: it settles where M6/M7 carry exactly the currents of M8/M9.

### Step 3 — Sizing of the sensing circuit

With the square law $I_D=\tfrac{K'}2(W/L)(V_{GS}-V_T)^2$, MS1–MS4 are p-channel with $W/L=1\ \mu\mathrm m/4\ \mu\mathrm m$. With their gates at 0 V, $V_{SG}=2.5$ V and

$$
I_{S1}=\tfrac12(50\ \mu\mathrm{A/V^2})(0.25)(2.5\ \mathrm V-0.7\ \mathrm V)^2\approx20\ \mu\mathrm A,\qquad I_5=I_6\approx40\ \mu\mathrm A.
$$

MS5 = MS6 = 5/1 gives $V_{ON}=\sqrt{2(40\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(5)]}=0.38$ V, so the diode MS5 sits at $V_{SS}+0.7+0.38\approx-1.42$ V.

### Step 4 — Sizing of the op amp and dc levels

An example design with 0.5 V overdrives, a 200 µA tail and 100 µA per branch:

| Device | W/L | Current | $V_{GS}$ or $V_{SG}$ |
|---|---|---|---|
| M1, M2 | 7.3/1 | 100 µA | 1.2 V |
| M5 (tail) | 14.6/1 | 200 µA | 1.2 V → gate (X) at −1.3 V |
| M3, M4, M6, M7 | 16/1 | 100 µA | 1.2 V |
| M8, M9 | 7.3/1 | 100 µA | gate $V_{BN}$ at −1.3 V |

A bias $V_{BP}=1.2$ V, measured downward from $V_{DD}$, puts the load gates at +1.3 V; the first-stage outputs must also be at +1.3 V for M6/M7 to carry 100 µA, and X settles near −1.3 V. Checks:

- MS6 is saturated: $V_X-V_{SS}\approx1.2\ \mathrm V>0.38$ V.
- MS3, MS4 are saturated since $V_X\le v_o+|V_{TP}|=0.7$ V; MS1, MS2 likewise (drain at −1.42 V).
- The sensing devices MS3, MS4 conduct only while $v_o<V_{DD}-|V_{TP}|=1.8$ V, which bounds the usable output swing.

A level-1 simulation of this example gives an output common mode of −7 mV with X = −1.30 V and the first-stage outputs at +1.30 V; shifting $V_{BP}$ by ±0.1 V changes the output common mode by less than 15 mV.

### Step 5 — Stability and limitations

The common-mode loop passes through the first-stage node and the output, the same path as the differential signal, so the existing Miller $C_c$–$R_z$ compensation largely covers it. Node X adds a pole; if more phase margin is needed, a capacitor from X to $V_{SS}$ can make it dominant. Exact margins need parasitic data that are not given.

The square-law sum $I_{S3}+I_{S4}$ grows with the differential swing $x$ per side, so the loop shifts the common mode by

$$
\delta=V_{ON}-\sqrt{V_{ON}^2-x^2},\qquad V_{ON}=1.8\ \mathrm V,
$$

about 70 mV for $x=0.5$ V; 0 V is the target for zero differential output.

Other connections also work if the polarity is right. With [Fig. 2] as drawn (MS1, MS2 at the outputs), X rises with the output common mode, so one inversion is needed before a first-stage current is driven, for example X → n-channel mirror → diode-connected p-channel device setting $V_{BP}$. Driving the gates of M8/M9 directly from X of the drawn orientation is also negative feedback, but it controls only the second stage: the first-stage common mode is then set by the mismatch of the $V_{BP}$ loads and the $V_{BN}$ tail at high-impedance nodes and is undefined, unless it is fixed by some other means.
