# Detailed solution - A161

Trace which devices drive $v_3$: M1 directly, and M3 through the cross-coupled mirror M6 → M5. Write KCL at the mirror node X (gates of M5, M6, with $C_2$) and at node 3 (with $C_1$), then eliminate $V_X$. Nodes 4 and Y (with $C_4$ and $C_3$) lie on the other half of the circuit and do not enter $V_3/V_{in}$.

### Step 1 — Connections, bias and small-signal parameters

From the figure, M1 and M2 have their gates at $v_1$, M3 and M4 at $v_2$, and all four sources share the tail node carrying $I=200\ \mu$A. M1 drains into node 3, loaded by M5. M3 drains into node X, the diode-connected M6, whose gate also drives M5. M2 and M4 feed the mirror M7 → M8 and node 4 in the same way.

All four input devices have the same size, so at balance each carries $I/4=50\ \mu$A, and so does each load. With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
\begin{aligned}
g_{m1}=g_{m3}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\\
g_{m5}=g_{m6}&=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,\\
g_{ds1}+g_{ds5}&=(0.04+0.05)(50\ \mu\mathrm A)=4.5\ \mu\mathrm S.
\end{aligned}
$$

For the purely differential drive $V_1=V_{in}/2$, $V_2=-V_{in}/2$, the circuit is symmetric, so the common source node is an ac ground.

### Step 2 — Mirror node X

M3's drain current (positive into the drain) is $g_{m3}V_2=-g_{m3}V_{in}/2$. Node X sees the diode M6, of conductance $g_{m6}$ (its $g_{ds}$ and $g_{ds3}$ are negligible beside $g_{m6}$), and $C_2$. KCL, with the current leaving X through M3 balanced by M6 and $C_2$:

$$
(g_{m6}+sC_2)V_X=-g_{m3}V_2=\frac{g_{m3}V_{in}}2
\quad\Rightarrow\quad
V_X=\frac{g_{m3}V_{in}/2}{g_{m6}+sC_2}.
$$

### Step 3 — Node 3 and the transfer function

M1 draws $g_{m1}V_{in}/2$ out of node 3. M5, a p-channel device with its source at ac ground, supplies $-g_{m5}V_X$ into node 3 (a rise of its gate reduces its current). The node conductance is $g_{ds1}+g_{ds5}$ plus $sC_1$:

$$
(sC_1+g_{ds1}+g_{ds5})V_3=-\frac{g_{m1}V_{in}}2-\frac{g_{m5}g_{m3}V_{in}/2}{g_{m6}+sC_2}.
$$

With $g_{m3}=g_{m1}$ the two terms combine:

$$
\frac{V_3(s)}{V_{in}(s)}=-\frac{g_{m1}}2\,\frac{sC_2+g_{m5}+g_{m6}}{(sC_1+g_{ds1}+g_{ds5})(sC_2+g_{m6})}.
$$

At $s\to0$, with $g_{m5}=g_{m6}$, the gain is $-g_{m1}/(g_{ds1}+g_{ds5})$: the mirror path delivers the second half of the differential current. At high frequency $C_2$ shorts node X, the mirror path disappears and only M1's half remains, which is why a left-half-plane zero appears at twice the mirror-pole frequency.

### Step 4 — Numerical values

$$
\begin{aligned}
A_0&=-\frac{g_{m1}}{g_{ds1}+g_{ds5}}=-\frac{331.7\ \mu\mathrm S}{4.5\ \mu\mathrm S}=-73.7\ \mathrm{V/V},\\
p_1&=-\frac{g_{ds1}+g_{ds5}}{C_1}=-\frac{4.5\ \mu\mathrm S}{1\ \mathrm{pF}}=-4.5\times10^6\ \mathrm{rad/s}\quad(716\ \mathrm{kHz}),\\
p_2&=-\frac{g_{m6}}{C_2}=-\frac{223.6\ \mu\mathrm S}{1\ \mathrm{pF}}=-2.24\times10^8\ \mathrm{rad/s}\quad(35.6\ \mathrm{MHz}),\\
z_1&=-\frac{g_{m5}+g_{m6}}{C_2}=-\frac{2(223.6\ \mu\mathrm S)}{1\ \mathrm{pF}}=-4.47\times10^8\ \mathrm{rad/s}\quad(71.2\ \mathrm{MHz}).
\end{aligned}
$$

$C_3$ and $C_4$ appear only in $V_4$ and do not affect $V_3/V_{in}$. Keeping $g_{ds3}+g_{ds6}$ at node X changes the values only slightly (gain −73.0, $p_2=-2.28\times10^8$ rad/s, $z_1=-4.52\times10^8$ rad/s). A level-1 ngspice ac analysis of the same circuit gives an inverting gain of 79 and a −3 dB frequency of 677 kHz; the small difference comes from the simulator's $g_{ds}=\lambda I_D/(1+\lambda V_{DS})$.
