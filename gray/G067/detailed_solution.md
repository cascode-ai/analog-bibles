# Detailed solution - G067

Treat the cascode as a common-emitter stage $Q_1$ whose collector current is passed by the common-base stage $Q_2$ to the output. The input resistance and transconductance are set by $Q_1$; the output resistance is that of $Q_2$ with emitter degeneration $r_{o1}$; the open-circuit gain is $-G_mR_o$.

### Step 1 — Small-signal parameters

Both transistors carry 250 µA, so they have identical parameters:

$$
g_m=\frac{I_C}{V_T}=\frac{250\ \mu\mathrm A}{26\ \mathrm{mV}}=9.615\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=20.8\ \mathrm{k\Omega},\qquad
r_o=\frac{V_A}{I_C}=\frac{130\ \mathrm V}{250\ \mu\mathrm A}=520\ \mathrm{k\Omega}.
$$

### Step 2 — Input resistance

The input is the base of $Q_1$, whose emitter is grounded; with $r_b$ and $r_\mu$ neglected nothing else connects the base to the rest of the circuit, so

$$
R_i=r_{\pi1}=20.8\ \mathrm{k\Omega}.
$$

### Step 3 — Transconductance

Short the output to ground. $Q_1$ produces a collector current $g_{m1}v_i$ (drawn out of the node at the emitter of $Q_2$). That node sees $r_{o1}$ to ground and the emitter of $Q_2$, whose resistance with base and collector at ac ground is $r_{e2}=\alpha_0/g_{m2}=103.5\ \Omega$. Since $r_{e2}\ll r_{o1}$ almost all of the current flows into $Q_2$, which passes the fraction $\alpha_0$ to its collector:

$$
G_m\approx g_{m1}\,\alpha_0\,\frac{r_{o1}}{r_{o1}+r_{e2}}
=(9.615\ \mathrm{mA/V})(0.9950)\frac{520\ \mathrm{k\Omega}}{520.1\ \mathrm{k\Omega}}=9.57\ \mathrm{mA/V}\approx g_{m1}.
$$

### Step 4 — Output resistance

With $v_i=0$, $Q_1$ is just the resistance $r_{o1}$ from the emitter of $Q_2$ to ground. The resistance looking into the collector of a bipolar transistor with emitter resistance $R_E$ (base at ac ground) is

$$
R_o=r_o\left[1+g_m(R_E\|r_\pi)\right]+R_E\|r_\pi ,
$$

which follows from KCL at the emitter and collector: the test current flows through $R_E\|r_\pi$, raising the emitter voltage and producing $v_{be}=-i_x(R_E\|r_\pi)$, which the controlled source multiplies across $r_o$. Here $R_E=r_{o1}$:

$$
r_{o1}\|r_{\pi2}=520\ \mathrm{k\Omega}\,\|\,20.8\ \mathrm{k\Omega}=20.0\ \mathrm{k\Omega},\qquad g_{m2}(20.0\ \mathrm{k\Omega})=192.3,
$$

$$
R_o=520\ \mathrm{k\Omega}\,(1+192.3)+20.0\ \mathrm{k\Omega}=100.5\ \mathrm{M\Omega}.
$$

Because $r_{o1}\gg r_{\pi2}$, the degeneration is limited by $r_{\pi2}$, and $R_o\approx r_{o2}(1+g_{m2}r_{\pi2})\approx\beta_0r_{o2}=104\ \mathrm{M\Omega}$. The MOS-cascode estimate $g_{m2}r_{o2}r_{o1}\approx2.6\ \mathrm{G\Omega}$ does not apply: the finite base current of $Q_2$ caps the output resistance at about $\beta_0r_o$.

### Step 5 — Maximum open-circuit voltage gain

With an infinite load resistance, the short-circuit output current $G_mv_i$ flows entirely into $R_o$, and the stage is inverting:

$$
A_v=-G_mR_o=-(9.57\ \mathrm{mA/V})(100.5\ \mathrm{M\Omega})=-9.6\times10^5 .
$$

(Using $G_m\approx g_{m1}=9.615$ mA/V gives $-9.7\times10^5$.) In the limit $R_o\approx\beta_0r_{o2}$, $A_v\approx-g_{m1}\beta_0r_{o2}=-\beta_0V_A/V_T=-1.0\times10^6$.

The results are $R_i=20.8\ \mathrm{k\Omega}$, $G_m\approx9.6$ mA/V, $R_o\approx100.5\ \mathrm{M\Omega}$ and $A_v\approx-9.7\times10^5$.
