# Detailed solution - A351

This is a single-stage amplifier whose only high-impedance node is the cascoded output, so the gain is $G_mR_{out}$, GB is $G_m/C_c$ and the slew rate is the largest output current over $C_c$. In weak inversion $g_m=I_D/(nV_t)$. For the swing design, the gate voltages produced by M12–M15 must leave exactly $V_{DS}(\mathrm{sat})=0.1$ V across M6 and M7; in weak inversion a 0.1 V difference between two gate–source voltages at equal current corresponds to an exponential ratio of W/L.

### Step 1 — Currents and output transconductance

The tail gives $I_1=I_2=I_3=I_4=50$ nA. M6 mirrors M4 and M8 mirrors M3 with equal sizes, and M9:M7 = 1:1, so the mirror gain is $b=1$ and $I_6=I_7=I_8=50$ nA. The whole differential signal current reaches the output: the current of M4 goes to the output through M6, and that of M3 through M8 → M9 → M7 with inversion, so

$$
i_{out}=b\,g_{m1}v_{in},\qquad g_{m1}=\frac{I_1}{n_nV_t}=\frac{50\ \mathrm{nA}}{(2.5)(26\ \mathrm{mV})}=0.769\ \mu\mathrm S .
$$

### Step 2 — Output resistance and gain

The output sees the cascode M10 over M6 above and M11 over M7 below, with $R\approx g_mr_{ds}r_{ds}$:

$$
g_{m10}=\frac{50\ \mathrm{nA}}{(1.5)(26\ \mathrm{mV})}=1.28\ \mu\mathrm S,\quad r_{ds6}=r_{ds10}=\frac1{(0.05\ \mathrm{V^{-1}})(50\ \mathrm{nA})}=400\ \mathrm{M\Omega},
$$
$$
g_{m10}r_{ds10}r_{ds6}=(1.28\ \mu\mathrm S)(400\ \mathrm{M\Omega})^2=205\ \mathrm{G\Omega};
$$
$$
g_{m11}=0.769\ \mu\mathrm S,\quad r_{ds7}=r_{ds11}=500\ \mathrm{M\Omega},\quad g_{m11}r_{ds11}r_{ds7}=192\ \mathrm{G\Omega}.
$$

$$
R_{out}=205\ \mathrm{G\Omega}\parallel192\ \mathrm{G\Omega}=99.3\ \mathrm{G\Omega},\qquad
A_v=g_{m1}R_{out}=(0.769\ \mu\mathrm S)(99.3\ \mathrm{G\Omega})\approx7.6\times10^4\ \mathrm{V/V}\ (97.7\ \mathrm{dB}).
$$

Substituting the weak-inversion expressions gives the same result in closed form:

$$
A_v=\frac{I_5}{2I_7}\,\frac{b/n_n}{V_t^2(\lambda_P^2n_p+\lambda_N^2n_n)}=\frac{0.4}{(6.76\times10^{-4}\ \mathrm{V^2})(0.00775\ \mathrm{V^{-2}})}=7.6\times10^4 .
$$

### Step 3 — GB, SR and power dissipation

With $C_c$ at the output,

$$
GB=\frac{b\,g_{m1}}{C_c}=\frac{7.69\times10^{-7}\ \mathrm S}{C_c}\quad(7.69\times10^5\ \mathrm{rad/s}=122\ \mathrm{kHz\ for\ }C_c=1\ \mathrm{pF}).
$$

During slewing all of $I_5$ flows in one input device and the mirrors deliver $bI_5$ to the output:

$$
SR=\frac{bI_5}{C_c}=\frac{100\ \mathrm{nA}}{C_c}\quad(0.1\ \mathrm{V/\mu s\ for\ }C_c=1\ \mathrm{pF}).
$$

$V_{DD}$ supplies M3 and M4 (100 nA), M8 (50 nA), M6 (50 nA), M13 (50 nA) and M14 (50 nA), a total of 300 nA:

$$
P_{diss}=(3\ \mathrm V)(300\ \mathrm{nA})=0.9\ \mu\mathrm W .
$$

### Step 4 — Cascode bias for maximum swing

The maximum output is $V_{DD}-V_{SD6}(\mathrm{sat})-V_{SD10}(\mathrm{sat})=1.5-0.2=1.3$ V, which requires $V_{SD6}=0.1$ V. The gate of M10 is at $V_{DD}-V_{SG13}$ and its source at $V_{DD}-V_{SG13}+V_{SG10}$, so

$$
V_{SD6}=V_{SG13}-V_{SG10}=0.1\ \mathrm V .
$$

In weak inversion $V_{SG}=n_pV_t\ln\bigl[I/((W/L)I_{DO})\bigr]$. With equal currents $I_{13}=I_{10}=50$ nA, the difference depends only on the size ratio:

$$
V_{SG13}-V_{SG10}=n_pV_t\ln\frac{(W/L)_{10}}{(W/L)_{13}}=0.1\ \mathrm V
\;\Rightarrow\;
\Bigl(\frac WL\Bigr)_{13}=10\,e^{-0.1/(1.5\cdot0.026)}=10\,e^{-2.564}=0.77 .
$$

M14 shares the gate of M13 and must supply M15's 50 nA, so $(W/L)_{14}=0.77$ as well.

### Step 5 — Cascode bias for minimum swing, and M12

Similarly M15 sets the gate of M11, and $V_{DS7}=V_{GS15}-V_{GS11}=0.1$ V with equal 50 nA currents:

$$
\Bigl(\frac WL\Bigr)_{15}=10\,e^{-0.1/(2.5\cdot0.026)}=10\,e^{-1.538}=2.15,
$$

giving $v_{out}(\min)=V_{SS}+0.2\ \mathrm V=-1.3$ V. M12 has the gate voltage of M5, which carries 100 nA at W/L = 10; for 50 nA, $(W/L)_{12}=5$.

With $I_{DO}=2$ nA the absolute values are $V_{SG10}=36$ mV, $V_{SG13}=136$ mV, $V_{GS11}=60$ mV and $V_{GS15}=160$ mV, confirming the 0.1 V differences.

| Device | W/L |
|---|---|
| M12 | 5 |
| M13, M14 | 0.77 |
| M15 | 2.15 |
