# Detailed solution - A245

Give each input transistor its own diode-connected load, mirror one drain current straight to the output and route the other through an extra mirror of the opposite type so that it sinks current at the output. The output current is then the difference of the two drain currents, and both output devices are signal-driven. Then find the gain and see what must be added to reach two-stage gain.

### Step 1 — The recombined circuit

M3 and M4 each become diode-connected PMOS loads, M3 carrying $i_{D1}$ and M4 carrying $i_{D2}$. Then:

- a PMOS M6, mirroring M4 with ratio $1:B$, has its drain at the output and sources $Bi_{D2}$ into it;
- a PMOS M8 mirrors M3 into a diode-connected NMOS M9, and an NMOS M7 mirrors M9 with drain at the output, sinking $Bi_{D1}$ from it (the factor $B$ can be put in either mirror).

The tail M5 and the input pair are unchanged.

<!-- diagram: diagram-01.cir -->

### Step 2 — Output current and push–pull action

With $v_-$ at M1 and $v_+$ at M2 as in the figure, and $v_{id}=v_+-v_-$, the pair splits the tail current as

$$
i_{D2}=\frac{I_5}{2}+\frac{g_{m1}v_{id}}{2},\qquad i_{D1}=\frac{I_5}{2}-\frac{g_{m1}v_{id}}{2}.
$$

KCL at the output gives the short-circuit output current

$$
i_{out}=Bi_{D2}-Bi_{D1}=Bg_{m1}v_{id}.
$$

Both the sourcing device M6 and the sinking device M7 follow the signal: for a large positive $v_{id}$, $i_{D2}\to I_5$ and the output sources up to $BI_5$; for a large negative one, $i_{D1}\to I_5$ and it sinks up to $BI_5$. The output is therefore push–pull, with a symmetric slew rate $BI_5/C_L$, unlike the original circuit whose sink M7 carries a fixed current.

### Step 3 — Voltage gain

Both output devices carry $BI_5/2$ at the quiescent point, and the output resistance is $r_{ds6}\parallel r_{ds7}$:

$$
A_v=Bg_{m1}\big(r_{ds6}\parallel r_{ds7}\big)=\frac{Bg_{m1}}{(\lambda_N+\lambda_P)BI_5/2}=\frac{2g_{m1}}{(\lambda_N+\lambda_P)I_5}.
$$

This is of order $g_mr_{ds}$, the gain of a single stage, far below the $\sim(g_mr_{ds})^2$ of a two-stage op amp. The mirror ratio $B$ cancels: it raises GB $=Bg_{m1}/C_L$ and the slew rate, but the output conductance grows with the output current $BI_5/2$ by the same factor (for fixed channel lengths).

### Step 4 — Raising the gain to the two-stage level

The output node must present a resistance of order $g_mr_{ds}^2$:

- Cascode the output devices, using cascode (or Wilson or regulated-cascode) output mirrors on both the PMOS and NMOS sides. Then $R_{out}\sim g_mr_{ds}^2$ and
$$
A_v\sim Bg_{m1}\,g_mr_{ds}^2\sim(g_mr_{ds})^2 .
$$
- Alternatively, follow the high-impedance output node with a further common-source gain stage, which makes the circuit a true two-stage amplifier (and then requires Miller compensation).

Cascoding both sides is essential: if only one side is cascoded, the other side's single $r_{ds}$ still sets $R_{out}$.
