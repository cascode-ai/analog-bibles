# Detailed solution - A217

Write the average load power and the average supply power for a sinusoidal output $v_{OUT}=V_p\sin\omega t$, choose the smallest quiescent current $I_Q$ that still allows the symmetrical swing, and then let the swing grow to its largest value.

### Step 1 — Power delivered to the load

The load current is $i_L=v_{OUT}/R_L=(V_p/R_L)\sin\omega t$, so the average load power is

$$
P_{R_L}=\frac{1}{T}\int_0^T\frac{v_{OUT}^2}{R_L}\,dt=\frac{V_p^2}{2R_L}.
$$

### Step 2 — Power drawn from the supplies

KCL at the output: M1's drain current feeds both the sink and the load, $i_{D1}=I_Q+i_L$. This current comes from $V_{DD}$, and the sink current $I_Q$ returns to $V_{SS}$. Because $i_L$ is a sinusoid, its average is zero, so the average current from each supply is $I_Q$:

$$
P_{supply}=V_{DD}\,\overline{i_{D1}}+|V_{SS}|\,I_Q=(V_{DD}-V_{SS})I_Q .
$$

The efficiency is therefore

$$
\eta=\frac{P_{R_L}}{P_{supply}}=\frac{V_p^2}{2R_L(V_{DD}-V_{SS})I_Q}.
$$

### Step 3 — Smallest quiescent current for a symmetrical swing

M1 can only source current, $i_{D1}=I_Q+i_L\ge0$. At the negative peak $i_L=-V_p/R_L$, M1 is just cut off and the sink M2 must absorb the entire load current. A symmetrical swing of peak $V_p$ therefore requires

$$
I_Q\ge\frac{V_p}{R_L}.
$$

Since $\eta\propto1/I_Q$, the best choice is $I_Q=V_p/R_L$, which gives

$$
\eta=\frac{V_p^2}{2R_L(V_{DD}-V_{SS})}\cdot\frac{R_L}{V_p}=\frac{V_p}{2(V_{DD}-V_{SS})}=\frac{V_p}{4V_{DD}}
$$

with $V_{SS}=-V_{DD}$. Equivalently, for a given $I_Q$ the maximum symmetrical swing is $V_p=I_QR_L$, and the same expression follows.

### Step 4 — Maximum possible efficiency

The efficiency grows linearly with $V_p$. The largest conceivable symmetrical swing reaches the rails, $V_p=(V_{DD}-V_{SS})/2=V_{DD}$, so

$$
\eta_{max}=\frac{V_{DD}}{4V_{DD}}=25\% ,
$$

the Class A limit, because the bias current flows all the time whether or not signal is delivered.

In practice the output cannot reach $V_{DD}$ if the gate of M1 is limited to $V_{DD}$: the top of the swing is $V_{DD}-V_{GS1}=V_{DD}-V_{T1}-V_{ON1}$ (the bottom limit, $V_{SS}+V_{DS2(sat)}$, is less restrictive). Then

$$
\eta_{max}\approx\frac{V_{DD}-V_{T1}-V_{ON1}}{4V_{DD}} ,
$$

which for $\pm5$ V supplies and $V_{T1}=0.7$ V is at most $(5-0.7)/20=21.5\%$, and about 20% once the overdrive of M1 is included. The body effect, neglected here, raises $V_{T1}$ near the top of the swing and lowers the practical value further.
