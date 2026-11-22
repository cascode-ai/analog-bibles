# Detailed solution - G280

As in the MOS version, the output is wired straight back to the inverting input: series–shunt feedback with $f=1$ and no loading by the feedback network. The basic amplifier is the op amp followed by an emitter follower; with an ideal current-source load and $r_o=\infty$, the follower's gain is exactly 1, so only the output resistance depends on $\beta_0$.

### Step 1 — Emitter-follower parameters

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta_0}{g_m}.
$$

For $\beta_0=100$, $r_\pi=5.2\ \mathrm{k\Omega}$. The ideal current source holds the emitter current constant, so the small-signal emitter current, and with it $v_{be}$ and the base current, are zero: the emitter follows the base exactly, and no signal current flows in $R_o$.

### Step 2 — Basic amplifier and loop gain

The feedback network is a wire, so $f=h_{12f}=1$ and $h_{11f}=h_{22f}=0$. The op amp output $a_vv_x$ reaches the base without loss and the follower gain is 1:

$$
a=a_v=1000,\qquad T=af=1000,
$$

independent of $\beta_0$.

### Step 3 — Closed-loop gain

$$
\frac{v_o}{v_i}=\frac{a}{1+T}=\frac{1000}{1001}=0.9990 .
$$

### Step 4 — Input resistance

The input loop of the basic amplifier contains $R_i$; series mixing multiplies it by $1+T$:

$$
R_{in}=R_i(1+T)=(1\ \mathrm{M\Omega})(1001)\approx1.0\ \mathrm{G\Omega}.
$$

### Step 5 — Output resistance

Without feedback, the emitter is driven from the op amp through $R_o$, so the emitter-follower output resistance is the base-side resistance reflected through $\beta_0+1$:

$$
r_{oa}=\frac{R_o+r_\pi}{\beta_0+1}=\frac{R_o+\beta_0/g_m}{\beta_0+1}.
$$

Shunt sampling divides it by $1+T=1+a_v$:

$$
R_{out}=\frac{R_o+\beta_0/g_m}{(\beta_0+1)(1+a_v)} .
$$

For $\beta_0=100$: $r_{oa}=(10\ \mathrm{k\Omega}+5.2\ \mathrm{k\Omega})/101=150.5\ \Omega$ and

$$
R_{out}=\frac{150.5\ \Omega}{1001}=0.150\ \Omega .
$$

$R_{out}$ falls as $\beta_0$ rises, approaching $1/[g_m(1+a_v)]=0.052\ \Omega$ for very large $\beta_0$; the gain, loop gain and input resistance do not depend on $\beta_0$.
