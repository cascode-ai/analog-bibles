# Detailed solution - G281

Treat the op-amp gain $a_v$ as the reference controlled source. Each quantity then needs three simple circuits: the circuit with $a_v=0$ (giving $d$ or the passive port resistance), the return ratio $\mathcal R$ obtained by breaking the source, and, for the port resistances, $\mathcal R$ with the port shorted and opened (Blackman's formula).

### Step 1 — Small-signal models and the emitter-node resistance

The op amp is modeled as $R_i$ between its inputs, producing $v_x=v_+-v_-$ across $R_i$, and a Thevenin output $a_vv_x$ in series with $R_o$. The $npn$ is an emitter follower biased by an ideal current source, so with $r_o=\infty$, $r_b=0$ the hybrid-$\pi$ parameters are
$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mS},\qquad
r_\pi=\frac{\beta_0}{g_m}=\beta_0\,(52\ \Omega)=5.2\ \mathrm{k\Omega}\ (\beta_0=100).
$$
Looking into the emitter with the base driven through a resistance $R_s$, the base current is $1/(\beta_0+1)$ of the emitter current, so the emitter sees $(R_s+r_\pi)/(\beta_0+1)$. With the base driven from the op-amp output resistance ($R_s=R_o$, source $a_vv_x$ set to zero):
$$
Z_e=\frac{R_o+r_\pi}{\beta_0+1}=\frac{10\ \mathrm{k\Omega}+5.2\ \mathrm{k\Omega}}{101}=150.5\ \Omega .
$$

### Step 2 — Return ratio $\mathcal R$

Set $v_i=0$, so the non-inverting input is grounded and $R_i$ connects the output node to ground. Replace $a_vv_x$ by a test source $v_t$. The emitter follower driven from $v_t$ through $R_o$ and loaded by $R_i$ (the bias source is an open circuit) obeys $v_t=i_b(R_o+r_\pi)+(\beta_0+1)i_bR_i$, so
$$
v_o=v_t\,\frac{(\beta_0+1)R_i}{(\beta_0+1)R_i+R_o+r_\pi}=0.99985\,v_t .
$$
Since $v_+=0$ and $v_-=v_o$, the controlling voltage is $v_x=-v_o$, and the returned signal is $v_r=a_vv_x$:
$$
\mathcal R=-\frac{v_r}{v_t}=a_v\frac{(\beta_0+1)R_i}{(\beta_0+1)R_i+R_o+r_\pi}=1000\times0.99985=999.85 .
$$
This is the loop transmission magnitude; it falls short of $a_v$ only by the small attenuation of the follower loaded by $R_i$.

### Step 3 — Closed-loop gain

$A_\infty$ is the gain when $a_v\to\infty$: the loop then forces $v_x\to0$, so $v_o=v_i$ and $A_\infty=1$.

The direct feedthrough $d$ is the gain with $a_v=0$. Then the op-amp output is just $R_o$ to ground, and $v_i$ reaches the output only through $R_i$ into the emitter node of resistance $Z_e$, a divider:
$$
d=\frac{Z_e}{R_i+Z_e}=\frac{150.5\ \Omega}{1\ \mathrm{M\Omega}+150.5\ \Omega}=1.50\times10^{-4}.
$$
Substituting into the return-ratio gain formula:
$$
\frac{v_o}{v_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}
=\frac{999.85}{1000.85}+\frac{1.50\times10^{-4}}{1000.85}=0.99900 .
$$
The feedthrough term is negligible ($1.5\times10^{-7}$).

### Step 4 — Input resistance

Blackman's formula is $R_{port}=R_{port}(a_v{=}0)\,\dfrac{1+\mathcal R_{sc}}{1+\mathcal R_{oc}}$, where $\mathcal R_{sc}$ and $\mathcal R_{oc}$ are the return ratios with the port shorted and opened.

- With $a_v=0$, the input sees $R_i$ in series with the emitter node: $R_{in}(a_v{=}0)=R_i+Z_e$.
- Port shorted ($v_+$ grounded): this is the circuit of Step 2, so $\mathcal R_{sc}=999.85$.
- Port open: no current can flow in $R_i$, so $v_x=0$ for any $v_t$, and $\mathcal R_{oc}=0$.

$$
R_{in}=(R_i+Z_e)(1+\mathcal R)=(1.00015\ \mathrm{M\Omega})(1000.85)=1001\ \mathrm{M\Omega}\approx1.0\ \mathrm{G\Omega}.
$$

### Step 5 — Output resistance

- With $a_v=0$ and $v_i=0$, the output node sees $Z_e$ in parallel with $R_i$ to ground: $R_{out}(a_v{=}0)=Z_e\|R_i=150.5\ \Omega$.
- Output shorted: $v_o=0$ forces $v_x=0$, so $\mathcal R_{sc}=0$.
- Output open: this is the normal circuit of Step 2, so $\mathcal R_{oc}=999.85$.

$$
R_{out}=\frac{Z_e\|R_i}{1+\mathcal R}=\frac{150.5\ \Omega}{1000.85}=0.150\ \Omega .
$$

In terms of $\beta_0$, all four results follow from $r_\pi=\beta_0(52\ \Omega)$, $Z_e=(R_o+r_\pi)/(\beta_0+1)$ and $\mathcal R$ of Step 2. For $\beta_0=100$: $\mathcal R=999.85$, $v_o/v_i=0.9990$, $R_{in}\approx1.0\ \mathrm{G\Omega}$, $R_{out}\approx0.150\ \Omega$.
