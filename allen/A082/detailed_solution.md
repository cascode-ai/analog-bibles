# Detailed solution - A082

Write the triode current of each transistor in terms of $v_{AB}$, paying attention to which terminal is the source, add the two currents, and compare the resulting $i$–$v$ relation with that of a single transistor whose gate–source voltage is held at $V_C$.

### Step 1 — Currents of M1 and M2

Take $v_{AB}=v_A-v_B>0$, so for both transistors A is the drain and B the source, $v_{DS}=v_{AB}$. Both are in the triode region, which requires $v_{AB}<V_{GS}-V_T$ for each.

- M1: its gate is at $v_A+V_C$, so $V_{GS1}=v_A+V_C-v_B=V_C+v_{AB}$, and

$$
i_1=\beta\Big[(V_C-V_T+v_{AB})v_{AB}-\frac{v_{AB}^2}{2}\Big]=\beta\Big[(V_C-V_T)v_{AB}+\frac{v_{AB}^2}{2}\Big].
$$

- M2: its gate is at $v_B+V_C$, so $V_{GS2}=V_C$, and

$$
i_2=\beta\Big[(V_C-V_T)v_{AB}-\frac{v_{AB}^2}{2}\Big].
$$

### Step 2 — Resistance of the parallel pair

The two transistors are in parallel, so

$$
i_{AB}=i_1+i_2=2\beta(V_C-V_T)\,v_{AB},
\qquad
R_{AB}=\frac{v_{AB}}{i_{AB}}=\frac{1}{2\beta(V_C-V_T)}=\frac{L}{2K'W(V_C-V_T)} .
$$

The $v_{AB}^2$ terms cancel: the gate drive of M1 rises with $v_{AB}$ exactly enough to compensate the square-law curvature of M2. For $v_{AB}<0$ the roles of A and B, and of M1 and M2, exchange, and the same result follows by symmetry. The expression holds as long as both devices stay in the triode region, $|v_{AB}|<V_C-V_T$.

### Step 3 — Single-transistor floating resistor

For one transistor with the same $\beta$ and $V_{GS}=V_C$:

$$
i_D=\beta\Big[(V_C-V_T)v_{DS}-\frac{v_{DS}^2}{2}\Big],
\qquad
R=\frac{v_{DS}}{i_D}=\frac{1}{\beta\big(V_C-V_T-v_{DS}/2\big)},
\qquad
r_{ds}=\Big(\frac{\partial i_D}{\partial v_{DS}}\Big)^{-1}=\frac{1}{\beta\big(V_C-V_T-v_{DS}\big)} .
$$

Both depend on $v_{DS}$; they reduce to $r_{ds}=L/[K'W(V_C-V_T)]$ only as $v_{DS}\to0$. The large-signal resistance changes by the fraction $v_{DS}/[2(V_C-V_T)]$; for example, 5% at $v_{DS}=0.1(V_C-V_T)$. In [Fig. 2] the gate is tied to the fixed $V_{BIAS}$, so in practice $V_{GS}$ also moves with the source voltage, adding further nonlinearity.

### Step 4 — Which is more linear

The parallel pair of [Fig. 1] is more linear: to the accuracy of the square-law model its resistance $1/[2\beta(V_C-V_T)]$ is independent of $v_{AB}$, whereas the single transistor's resistance contains the term $-\beta v_{DS}^2/2$ and varies with $v_{DS}$. The pair also gives half the resistance of one device of the same size. Effects outside this model (body effect, mobility degradation) leave a small residual nonlinearity.
