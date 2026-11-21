# Detailed solution - A191

M1 and M2 share one gate–source voltage, so their currents scale with $W/L$; that sets the design. The small-signal resistances follow from the diode connection at the input and from $r_{ds2}$ at the output. For the large-signal gain, keep the $(1+\lambda v_{DS})$ factor and notice that M1's drain voltage moves with the signal while M2's is held.

### Step 1 — Design of $W_2/L_2$

The signal current $i_{in}$ enters the M1 node, where the dc source $I_1$ is fixed, so it adds to $i_{D1}$; likewise $i_{out}$ is the change of $i_{D2}$ around $I_2$. With equal $v_{GS}$ and the square law (λ neglected),

$$
\frac{i_{D2}}{i_{D1}}=\frac{W_2/L_2}{W_1/L_1}=10
\quad\Rightarrow\quad
\frac{W_2}{L_2}=10\quad(\text{e.g. }10\ \mu\mathrm m/1\ \mu\mathrm m).
$$

### Step 2 — Input and output resistances

The input sees the diode-connected M1, whose small-signal resistance is $1/(g_{m1}+g_{ds1})\approx1/g_{m1}$, with $g_m=\sqrt{2K'(W/L)I_D}$ at $I_{D1}=I_1=100\ \mu$A:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(100\ \mu\mathrm A)}=148\ \mu\mathrm S,\qquad
R_{in}\approx\frac1{g_{m1}}=6.74\ \mathrm{k\Omega}
$$

($6.56$ kΩ with $g_{ds1}=4\ \mu$S included). The output looks into the drain of M2 at $I_{D2}=10I_1=1$ mA (the ideal source $I_2$ adds nothing):

$$
R_{out}=r_{ds2}=\frac1{\lambda I_{D2}}=\frac1{(0.04\ \mathrm{V^{-1}})(1\ \mathrm{mA})}=25\ \mathrm{k\Omega}.
$$

### Step 3 — Quiescent point with channel-length modulation

With $\beta_1/2=K'_N(W/L)_1/2=55\ \mu\mathrm{A/V^2}$ and $V_{DS1}=V_{GS1}$ for the diode, M1 at 100 µA satisfies

$$
(55\ \mu\mathrm{A/V^2})(V_{GS1}-0.7)^2(1+0.04V_{GS1})=100\ \mu\mathrm A
\quad\Rightarrow\quad V_{GS1}=2.00\ \mathrm V .
$$

The output is held at this voltage, so $V_{DS2}=V_{DS1}$, the two $(1+\lambda v_{DS})$ factors are equal, and M2 carries exactly $10\times100\ \mu\mathrm A=1$ mA.

### Step 4 — Actual gain for $i_{in}=50\ \mu$A

Now M1 carries 150 µA. Its diode voltage, and therefore its own $(1+\lambda V_{DS1})$ factor, rises: solving the same equation gives $V_{GS1}=2.28$ V. M2 sees this gate voltage but its drain stays at 2.00 V:

$$
i_{D2}=10(55\ \mu\mathrm{A/V^2})(2.28-0.7)^2\left[1+0.04(2.00)\right]=1.484\ \mathrm{mA}.
$$

$$
A_i=\frac{\Delta i_{D2}}{\Delta i_{D1}}=\frac{1.484\ \mathrm{mA}-1\ \mathrm{mA}}{50\ \mu\mathrm A}=9.69 .
$$

The gain falls below 10 because part of M1's current increase is absorbed by its growing $(1+\lambda V_{DS1})$ factor, which M2, with fixed $V_{DS2}$, does not share. The small-signal equivalent is $g_{m2}/(g_{m1}+g_{ds1})\approx9.77$, and for $i_{in}=-50\ \mu$A the large-signal value is 9.86. Without channel-length modulation the gain would be exactly 10. The actual gain at $i_{in}=50\ \mu$A is therefore about 9.7.
