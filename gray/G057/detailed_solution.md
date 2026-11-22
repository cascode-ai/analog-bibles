# Detailed solution - G057

Replace the transistor by its hybrid-π model with $r_b$ and $r_o$ removed, ground the base (it is at ac ground), and read the three two-port parameters from the emitter and collector nodes.

### Step 1 — Small-signal parameters at the bias point

In the forward-active region the collector current depends exponentially on $V_{BE}$, so

$$
g_m=\frac{I_C}{V_T}=\frac{250\ \mu\mathrm A}{26\ \mathrm{mV}}=9.615\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{200}{9.615\ \mathrm{mA/V}}=20.8\ \mathrm{k\Omega},
$$

$$
\alpha_0=\frac{\beta_0}{\beta_0+1}=\frac{200}{201}=0.99502.
$$

With the base grounded, the base-emitter voltage is $v_{be}=-v_i$, where $v_i$ is the emitter voltage.

### Step 2 — Input resistance

Apply a test voltage $v_i$ at the emitter. Two currents enter the emitter node: the input current $i_i$ and the controlled-source current $g_mv_{be}$ (directed collector to emitter). The current $v_i/r_\pi$ leaves through $r_\pi$ to the grounded base. KCL gives

$$
i_i=\frac{v_i}{r_\pi}-g_mv_{be}=\frac{v_i}{r_\pi}+g_mv_i
\quad\Rightarrow\quad
R_i=\frac{v_i}{i_i}=r_\pi\,\Big\|\,\frac1{g_m}=\frac{1}{g_m}\cdot\frac{\beta_0}{\beta_0+1}=\frac{\alpha_0}{g_m}=r_e.
$$

Numerically,

$$
R_i=\frac{0.99502}{9.615\ \mathrm{mA/V}}=103.5\ \Omega .
$$

The input resistance is $r_e\approx1/g_m=104\ \Omega$, not $r_\pi$: the controlled source, driven by the full input voltage, supplies almost all of the input current.

### Step 3 — Transconductance

With the output shorted to ground ($v_o=0$, so $R_C$ carries no signal current), the short-circuit collector current flowing into the collector terminal is that of the controlled source, $-g_mv_{be}=g_mv_i$. Taking $i_o$ as the current drawn from the output node by the collector,

$$
G_m=\left.\frac{i_o}{v_i}\right|_{v_o=0}=g_m=9.62\ \mathrm{mA/V}.
$$

The common-base stage is non-inverting: a positive $v_i$ reduces $v_{be}$, the collector draws less current through $R_C$, and $v_o$ rises.

### Step 4 — Output resistance

Set $v_i=0$. Then $v_{be}=0$ and the controlled source carries no current, and with $r_o$ neglected nothing else connects the collector to ground. Looking into the output node only $R_C$ remains (the supply is ac ground):

$$
R_o=R_C=10\ \mathrm{k\Omega}.
$$

The results are $R_i=103.5\ \Omega$ (≈ 104 Ω), $G_m=9.62$ mA/V and $R_o=10\ \mathrm{k\Omega}$, giving an open-circuit voltage gain $G_mR_o=96.2$.
