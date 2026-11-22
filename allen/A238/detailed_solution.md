# Detailed solution - A238

Both transistors are source followers whose sources share the output node, so their transconductances act in parallel. Compute $g_{m1}$ and $g_{m2}$ at 100 µA, combine them into the output conductance, and form the divider with $R_L$.

### Step 1 — Bias check

At $v_{IN}=0$ with $v_{OUT}=0$, $V_{GS1}=V_{SG2}=0.7$ V, and the square law gives

$$
I_{D1}=\frac{K'_N}{2}\frac{W_1}{L_1}(V_{GS1}-V_{TN})^2=\frac{(100\ \mu\mathrm{A/V^2})(50)}{2}(0.2\ \mathrm V)^2=100\ \mu\mathrm A,
$$

$$
I_{D2}=\frac{K'_P}{2}\frac{W_2}{L_2}(V_{SG2}-|V_{TP}|)^2=\frac{(50\ \mu\mathrm{A/V^2})(100)}{2}(0.2\ \mathrm V)^2=100\ \mu\mathrm A .
$$

The currents are equal, so no current flows in $R_L$ and $v_{OUT}=0$ is consistent. Both devices are saturated, since $|V_{DS}|=1.5$ V exceeds the 0.2-V overdrive.

### Step 2 — Transconductances

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}=\sqrt{2(100\ \mu\mathrm{A/V^2})(50)(100\ \mu\mathrm A)}=1\ \mathrm{mS},
$$

$$
g_{m2}=\sqrt{2K'_P\frac{W_2}{L_2}I_D}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm A)}=1\ \mathrm{mS}.
$$

### Step 3 — Output resistance

Both gates follow $v_{in}$ (the batteries are ac shorts), so with $v_{in}=0$ and a test voltage $v_x$ at the output, $v_{gs1}=-v_x$ and $v_{sg2}=v_x$. M1 then delivers $g_{m1}v_x$ less into the node and M2 removes $g_{m2}v_x$ more, so $i_x=(g_{m1}+g_{m2})v_x$. With $\lambda=0$ and no body effect,

$$
R_{out}=\frac{1}{g_{m1}+g_{m2}}=\frac{1}{2\ \mathrm{mS}}=500\ \Omega .
$$

### Step 4 — Voltage gain

KCL at the output: the two followers inject $(g_{m1}+g_{m2})(v_{in}-v_{out})$, which flows into $R_L$:

$$
(g_{m1}+g_{m2})(v_{in}-v_{out})=\frac{v_{out}}{R_L}
\;\Rightarrow\;
A_v=\frac{g_{m1}+g_{m2}}{g_{m1}+g_{m2}+1/R_L}=\frac{R_L}{R_L+R_{out}}=\frac{500}{500+500}=0.5\ \mathrm{V/V}.
$$

Unloaded the gain would be 1; the 500-Ω load equals the output resistance and halves it.
