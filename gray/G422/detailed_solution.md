# Detailed solution - G422

Remove the current-mirror path ($M_{25}\to M_5$) and let the sense devices feed current straight into the first-stage nodes (the drains of $M_1$/$M_3$ and $M_2$/$M_4$), as $M_{21A}$, $M_{21B}$ do in [Fig. 2]. The design is fixed by three requirements: KCL at the first-stage nodes with the given $I_{D3}=I_{D4}=150\ \mu$A, negative feedback around the CM loop, and equal (CM-only) injection into the two nodes.

### Step 1 — Tail current and the required injection

The gate of $M_5$ now goes to a fixed bias with $|I_{D5}|=200\ \mu$A, so $|I_{D1}|=|I_{D2}|=100\ \mu$A. KCL at the drain of $M_1$, where the PMOS $M_1$ and the injector source current and the NMOS $M_3$ sinks it:

$$
|I_{D1}|+I_{\mathrm{inj}}=I_{D3}
\;\Rightarrow\;
I_{\mathrm{inj}}=150\ \mu\mathrm A-100\ \mu\mathrm A=50\ \mu\mathrm A
$$

sourced into each node, and likewise at the drain of $M_2$. Since current must be sourced, the sense pairs are made of PMOS devices (the complement of the NMOS pairs in [Fig. 1]) with PMOS tail current sources $M_{26}$, $M_{27}$ from $V_{DD}$.

### Step 2 — The modified CM-sense circuit

- Pair 1: PMOS $M_{21}$ (gate $V_{o1}$) and $M_{22}$ (gate $V_{CM}$), tail $M_{26}$ = 100 μA.
- Pair 2: PMOS $M_{23}$ (gate $V_{CM}$) and $M_{24}$ (gate $V_{o2}$), tail $M_{27}$ = 100 μA.
- The drains of $M_{21}$ and $M_{24}$ go to $-V_{SS}$.
- The $V_{CM}$-gated devices are the injectors. Split each into two equal halves: $M_{22}\to M_{22A}$, $M_{22B}$ and $M_{23}\to M_{23A}$, $M_{23B}$. Connect the drains of $M_{22A}$ and $M_{23A}$ to the drain of $M_1$, and the drains of $M_{22B}$ and $M_{23B}$ to the drain of $M_2$.
- $M_{25}$ is removed.

### Step 3 — Bias currents

At balance ($V_{oc}=V_{CM}$) each pair splits its tail current equally.

| Device | Current |
|---|---|
| $M_5$ (fixed bias) | 200 μA |
| $M_1$, $M_2$ | 100 μA each |
| $M_{26}$, $M_{27}$ (PMOS tails) | 100 μA each |
| $M_{21}$, $M_{24}$ (to $-V_{SS}$) | 50 μA each |
| $M_{22A}$, $M_{22B}$, $M_{23A}$, $M_{23B}$ | 25 μA each |
| Injected into each first-stage node | $25+25=50$ μA |
| $M_3$, $M_4$ | $100+50=150$ μA each ✓ |
| $M_6$, $M_7$, $M_9$, $M_{10}$ | 400 μA each (unchanged) |

### Step 4 — Polarity of the CM loop

Suppose $V_{oc}$ rises. The output-gated PMOS devices $M_{21}$, $M_{24}$ have their gates raised and conduct less, so with fixed tails the $V_{CM}$-gated devices conduct more. More current is injected into both first-stage nodes against the fixed sinks $M_3$, $M_4$, so these nodes rise. They drive the gates of the NMOS common-source devices $M_6$, $M_9$, which then conduct more and pull both outputs down. The initial rise of $V_{oc}$ is opposed: the loop is negative feedback.

### Step 5 — No DM component in the injected currents

With fixed tails and small signals, a PMOS pair converts its gate difference into $\pm g_m/2$ times that difference:

$$
i_{22}=+\frac{g_m}2(v_{o1}-V_{CM}),\qquad i_{23}=+\frac{g_m}2(v_{o2}-V_{CM}).
$$

Each first-stage node receives half of each:

$$
i_{\mathrm{inj},1}=i_{\mathrm{inj},2}=\frac{i_{22}+i_{23}}2=\frac{g_m}2\left(\frac{v_{o1}+v_{o2}}2-V_{CM}\right)=\frac{g_m}2(v_{oc}-V_{CM}),
$$

so the DM parts $\pm v_{od}/2$ cancel and the two nodes receive identical CM-only currents. Sending all of $M_{22}$ to one node would add a DM feedback path; sending it to the wrong node could make that DM feedback positive.

### Step 6 — Comparison with the original scheme

The CMFB loop no longer passes through the $M_{25}$–$M_5$ mirror, so the pole at the mirror node is removed from the loop. The cost is the extra drain capacitance of the injecting devices at the high-impedance first-stage nodes, which lowers the frequency of the pole there.
