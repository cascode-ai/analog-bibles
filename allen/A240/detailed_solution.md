# Detailed solution - A240

M1's drain current flows through the diode M2 and is copied, multiplied by the mirror ratio $B$, into the output by M3. The output therefore receives $1+B$ times the follower's own current: local feedback that multiplies the effective transconductance by $1+B$. Derive the gain and output resistance with that factor, then find the bias of M1, which carries only $1/(1+B)$ of the sink current.

### Step 1 — Small-signal equations

The mirror ratio is

$$
B=\frac{(W/L)_3}{(W/L)_2}=\frac{100/1}{1/1}=100 .
$$

M1's small-signal current, from drain to source, is $i_1=g_{m1}(v_{in}-v_{out})$ (bulk effect and $r_{ds}$ ignored). It enters the output node from M1's source. The same current flows in M2, and M3 delivers $Bi_1$ into the output. The ideal sink carries no signal current. KCL at the output:

$$
(1+B)\,g_{m1}(v_{in}-v_{out})=\frac{v_{out}}{R_L}.
$$

### Step 2 — Gain and output resistance expressions

Solving,

$$
\frac{v_{out}}{v_{in}}=\frac{(1+B)g_{m1}R_L}{1+(1+B)g_{m1}R_L}.
$$

With $v_{in}=0$ and a test voltage $v_x$ at the output (without $R_L$), the current drawn is $(1+B)g_{m1}v_x$:

$$
R_{out}=\frac{1}{(1+B)g_{m1}}=\frac{1}{101\,g_{m1}} .
$$

### Step 3 — Bias current of M1

The dc output is 0 V, so $R_L$ carries no dc current, and the 1-mA sink takes the sum of M1's current and M3's copy:

$$
I_{D1}+BI_{D1}=1\ \mathrm{mA}\quad\Rightarrow\quad I_{D1}=\frac{1\ \mathrm{mA}}{101}=9.90\ \mu\mathrm A,\qquad I_{D3}=0.990\ \mathrm{mA}.
$$

All devices are saturated: M1's overdrive is only 0.042 V while its drain sits at $3-V_{SG2}=3-(0.7+0.629)=1.67$ V; M2 is diode-connected; M3 has $V_{SD3}=3$ V.

### Step 4 — Numerical values

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_{D1}}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(9.90\ \mu\mathrm A)}=467\ \mu\mathrm S,
$$

$$
(1+B)g_{m1}=101(467\ \mu\mathrm S)=47.1\ \mathrm{mS},\qquad (1+B)g_{m1}R_L=(47.1\ \mathrm{mS})(50\ \Omega)=2.357 .
$$

$$
\frac{v_{out}}{v_{in}}=\frac{2.357}{3.357}=0.70\ \mathrm{V/V},\qquad
R_{out}=\frac{1}{47.1\ \mathrm{mS}}=21\ \Omega .
$$

Including the 50-Ω load in parallel, the resistance at the output node is about 15 Ω. Without the mirror, $1/g_{m1}$ would be about 2.1 kΩ; the current feedback lowers it by the factor 101, which is why this follower can drive a 50-Ω load with a gain of 0.7.
