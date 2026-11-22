# Detailed solution - A324

Express the two resistances in terms of the bias currents: the input resistance is set by the transconductance of the diode-connected M1, the output resistance by the channel-length modulation of M2 and M6. Each specification then bounds one current, and the W/L ratios follow from the mirror relations.

### Step 1 — Input resistance at the drain of M1

All transistors are in saturation with $i_D=\tfrac{K'}{2}(W/L)(v_{GS}-V_T)^2(1+\lambda v_{DS})$. Their small-signal parameters are

$$
g_m=\sqrt{2K'(W/L)I_D},\qquad g_{ds}=\lambda I_D .
$$

At the drain of M1 (gate tied to drain) a test voltage $v_x$ drives the current $g_{m1}v_x$ through M1, plus $g_{ds1}v_x$ and $g_{ds5}v_x$ through the two output conductances, so

$$
R_{in}=\frac1{g_{m1}+g_{ds1}+g_{ds5}}\approx\frac1{g_{m1}} .
$$

$R_{in}<1\ \mathrm{k\Omega}$ therefore requires $g_{m1}>1\ \mathrm{mS}$, that is

$$
\frac{W_1}{L_1}I_1>\frac{g_{m1}^2}{2K'_N}=\frac{(10^{-3}\ \mathrm{A/V})^2}{2(110\ \mu\mathrm{A/V^2})}=4.55\times10^{-3}\ \mathrm A .
$$

Choose $I_1=100\ \mu$A and $W_1/L_1=50$ ($5\times10^{-3}$ A):

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(50)(100\ \mu\mathrm A)}=1.049\ \mathrm{mS},
$$
$$
g_{ds1}+g_{ds5}=(\lambda_N+\lambda_P)I_1=(0.09\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=9\ \mu\mathrm S,\qquad
R_{in}=\frac1{1.049\ \mathrm{mS}+9\ \mu\mathrm S}=945\ \Omega .
$$

### Step 2 — Output resistance at the drains of M2 and M6

With the resistors excluded, a test source at the output node does not reach the gate of M2 (node X) or the gate of M6 (the gate of M4), so neither device produces a $g_m$ current. Only their output conductances remain:

$$
R_{out}=\frac1{g_{ds2}+g_{ds6}}=\frac1{(\lambda_N+\lambda_P)I_2}\ge1\ \mathrm{M\Omega}
\quad\Rightarrow\quad
I_2\le\frac1{(0.09\ \mathrm{V^{-1}})(10^6\ \Omega)}=11.1\ \mu\mathrm A .
$$

Choose $I_2=11\ \mu$A, which gives $R_{out}=1/[(0.09\ \mathrm{V^{-1}})(11\ \mu\mathrm A)]=1.01\ \mathrm{M\Omega}$.

The two specifications pull in opposite directions: a small $R_{in}$ needs a large current in M1, while a large $R_{out}$ needs a small current in M2. The mirror must therefore scale the current down by about 9:1.

### Step 3 — Mirror and current-source ratios

M1 and M2 share $V_{GS}$, so with equal lengths the currents scale with W/L:

$$
\frac{W_2}{L_2}=\frac{W_1}{L_1}\,\frac{I_2}{I_1}=50\times\frac{11\ \mu\mathrm A}{100\ \mu\mathrm A}=5.5 .
$$

M5 and M6 supply the dc drain currents of M1 and M2 ($I_5=I_1$, $I_6=I_2$), so that no dc current flows through $R_1$ and $R_2$. They share $V_{SG}$ with M4, hence $(W_5/L_5):(W_6/L_6):(W_4/L_4)=I_1:I_2:I_{BIAS}$. Choosing $I_{BIAS}=100\ \mu$A and $W_4/L_4=50$:

| Device | Current | W/L (L = 1 µm) |
|---|---|---|
| M1, M5 | 100 µA | 50 |
| M2, M6 | 11 µA | 5.5 |
| M4 | 100 µA | 50 |

### Step 4 — The voltage gain quoted in the parenthesis

Let $v_x$ be the drain of M1 and $v_y$ the drain of M2, with mirror ratio $K=I_2/I_1$, and neglect $g_{ds}$ at node X. KCL at the two nodes gives

$$
\begin{aligned}
\frac{v_{in}-v_x}{R_1}+\frac{v_y-v_x}{R_2}&=g_{m1}v_x,\\
\frac{v_x-v_y}{R_2}&=Kg_{m1}v_x+\frac{v_y}{R_{out}} .
\end{aligned}
$$

Solving,

$$
\frac{v_y}{v_{in}}=\frac{R_{out}(1-Kg_{m1}R_2)}{R_1+R_2+R_{out}+g_{m1}R_1[R_2+(1+K)R_{out}]}
\;\xrightarrow{\;R_{out}\to\infty,\ g_{m1}R_1\gg1\;}\;-\frac{K}{1+K}\frac{R_2}{R_1},
$$

which is about −10 for $K\approx1/9$. With the specification-limit values ($R_{out}=1.01\ \mathrm{M\Omega}\approx R_2$, $g_{m1}R_1=10.5$) the expression gives about −4.8, so the −10 is only the ideal limit. The design asked for — the two resistances — does not depend on this.
